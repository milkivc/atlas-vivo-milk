'use strict';
// SPDX-License-Identifier: EUPL-1.2

const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '../..');
const profilePath = process.argv[2]
  ? path.resolve(process.argv[2])
  : path.join(root, 'metadata/territorio-do-corpo/repository-profile.json');
const outputDir = process.argv[3]
  ? path.resolve(process.argv[3])
  : path.join(root, 'metadata/generated/territorio-do-corpo');

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function compact(values) {
  return values.filter((value) => value !== null && value !== undefined && value !== '');
}

function writeJson(file, value) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, JSON.stringify(value, null, 2) + '\n', 'utf8');
}

function creatorFromProfile(profile) {
  const author = profile.author;
  return {
    name: author.legalName,
    nameType: 'Personal',
    givenName: author.givenName,
    familyName: author.familyName,
    nameIdentifiers: [
      {
        nameIdentifier: `https://orcid.org/${author.orcid}`,
        nameIdentifierScheme: 'ORCID',
        schemeUri: 'https://orcid.org'
      }
    ],
    affiliation: [
      {
        name: profile.institution.name
      }
    ]
  };
}

function datacite(profile) {
  const ids = profile.identifiers || {};
  const relatedIdentifiers = compact([
    ids.swhid
      ? {
          relatedIdentifier: ids.swhid,
          relatedIdentifierType: 'SWHID',
          relationType: 'IsIdenticalTo'
        }
      : null,
    profile.repositories.codeberg
      ? {
          relatedIdentifier: profile.repositories.codeberg,
          relatedIdentifierType: 'URL',
          relationType: 'IsSourceOf'
        }
      : null,
    profile.repositories.github
      ? {
          relatedIdentifier: profile.repositories.github,
          relatedIdentifierType: 'URL',
          relationType: 'IsVersionOf'
        }
      : null
  ]);

  const attributes = {
    doi: ids.doi || undefined,
    creators: [creatorFromProfile(profile)],
    titles: [{ title: profile.title }],
    publisher: {
      name: profile.institution.name
    },
    publicationYear: Number(new Date().getUTCFullYear()),
    types: {
      resourceTypeGeneral: 'Software',
      resourceType: 'Research software'
    },
    version: profile.version,
    descriptions: [
      {
        description: profile.descriptionTechnical,
        descriptionType: 'Abstract'
      }
    ],
    subjects: [...new Set([...(profile.keywords || []), ...(profile.fundingDiscoveryTags || []), ...(profile.fiware?.tags || [])])]
      .map((subject) => ({ subject })),
    rightsList: [
      {
        rights: profile.license.spdx,
        rightsUri: profile.license.url,
        rightsIdentifier: profile.license.spdx,
        rightsIdentifierScheme: 'SPDX',
        schemeUri: 'https://spdx.org/licenses/'
      }
    ],
    relatedIdentifiers,
    url: profile.repositories.codeberg || profile.repositories.github,
    language: 'pt-PT'
  };

  if (!attributes.doi) delete attributes.doi;

  return {
    data: {
      type: 'dois',
      attributes
    },
    _meta: {
      generatedFrom: path.relative(root, profilePath),
      target: 'DataCite Metadata Schema 4.7 JSON/REST payload',
      submissionAutomatic: false,
      humanValidationRequired: true
    }
  };
}

function openaire(profile) {
  const ids = profile.identifiers || {};
  const author = profile.author;
  return {
    type: 'software',
    version: profile.version,
    titles: [
      {
        title: profile.title,
        language: 'pt'
      }
    ],
    descriptions: [profile.descriptionTechnical],
    creators: [
      {
        fullName: author.legalName,
        alternateName: author.artisticName,
        orcid: `https://orcid.org/${author.orcid}`,
        affiliation: profile.institution.name
      }
    ],
    publisher: profile.institution.name,
    codeRepositoryUrl: profile.repositories.codeberg,
    documentationUrls: compact([
      profile.repositories.codeberg,
      profile.repositories.github
    ]),
    pids: compact([
      ids.doi ? { scheme: 'doi', value: ids.doi } : null,
      ids.swhid ? { scheme: 'swhid', value: ids.swhid } : null
    ]),
    subjects: [...new Set([...(profile.keywords || []), ...(profile.fundingDiscoveryTags || []), ...(profile.fiware?.tags || [])])],
    license: {
      code: profile.license.spdx,
      url: profile.license.url
    },
    accessRight: 'open',
    resourceType: 'software',
    interoperability: {
      eifLayers: ['legal', 'organisational', 'semantic', 'technical'],
      fiware: {
        profile: profile.fiware?.profile || null,
        status: profile.fiware?.status || null,
        ngsiLdContexts: profile.fiware?.contexts || [],
        tags: profile.fiware?.tags || []
      }
    },
    preservation: {
      softwareHeritageOrigin: profile.preservation?.origin || null,
      swhid: ids.swhid || null
    },
    _meta: {
      generatedFrom: path.relative(root, profilePath),
      target: 'OpenAIRE Research Product / Software interoperability profile',
      graphVerificationApi: profile.metadataTargets?.openaire?.graphApi || null,
      directDepositClaimed: false,
      harvestingVerificationRequired: true,
      humanValidationRequired: true
    }
  };
}

function validateProfile(profile) {
  const required = [
    profile.title,
    profile.version,
    profile.author?.legalName,
    profile.author?.artisticName,
    profile.author?.orcid,
    profile.institution?.name,
    profile.license?.spdx,
    profile.repositories?.codeberg
  ];
  if (required.some((value) => !value)) throw new Error('PROFILE_REQUIRED_FIELD_MISSING');
  if (profile.author.orcid !== '0009-0007-6892-6570') throw new Error('ORCID_CANONICAL_MISMATCH');
  if (profile.author.legalName !== 'Eduardo Maurício Vieira Cabral e Araujo') throw new Error('AUTHOR_CANONICAL_MISMATCH');
  if (profile.author.artisticName !== 'Eduardo Mauer') throw new Error('ARTISTIC_NAME_CANONICAL_MISMATCH');
  if (profile.institution.name !== 'Associação MILK — Movimento de Intervenções e Linguagens Kulturais e Arte') {
    throw new Error('INSTITUTION_CANONICAL_MISMATCH');
  }
}

const profile = readJson(profilePath);
validateProfile(profile);

const datacitePayload = datacite(profile);
const openairePayload = openaire(profile);

writeJson(path.join(outputDir, 'datacite-4.7.json'), datacitePayload);
writeJson(path.join(outputDir, 'openaire-research-product-software.json'), openairePayload);

process.stdout.write(JSON.stringify({
  generated: [
    path.relative(root, path.join(outputDir, 'datacite-4.7.json')),
    path.relative(root, path.join(outputDir, 'openaire-research-product-software.json'))
  ],
  fiwareTags: profile.fiware?.tags || [],
  humanValidationRequired: true
}, null, 2) + '\n');
