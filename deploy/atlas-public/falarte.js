const STORAGE_PREFIX = 'atlas-milk-falarte-v1:';

const mechanics = [
  {
    id: 'lugar-escondido',
    title: 'O lugar escondido',
    subtitle: 'Mecânica 01 · Topografia do segredo',
    instruction: 'Escolhe um ponto exacto — um lugar que só tu conheces. Pode ser uma parede, uma fenda, uma árvore, um canto de quintal. Fotografa ou desenha. O lugar fala por si.',
    fields: [
      { id: 'zona', label: 'Zona / freguesia', type: 'text', placeholder: 'Onde é este lugar?' },
      { id: 'imagem', label: 'Foto ou desenho do lugar', type: 'file', accept: 'image/*' },
      { id: 'linha', label: 'Uma linha, só se quiseres', type: 'text', placeholder: 'O que este lugar sabe que mais ninguém sabe' }
    ]
  },
  {
    id: 'trinta-dias',
    title: '30 dias, o mesmo lugar',
    subtitle: 'Mecânica 02 · Tempo como matéria',
    instruction: 'Escolhe um lugar com sentido para ti. Fotografa-o durante 30 dias, no mesmo sítio e, se possível, à mesma hora. O ciclo transforma repetição em leitura do território.',
    dayGrid: true,
    fields: [
      { id: 'zona', label: 'Zona / freguesia', type: 'text' },
      { id: 'imagem', label: 'Foto de hoje', type: 'file', accept: 'image/*', capture: 'environment' },
      { id: 'observacao', label: 'Observação do dia', type: 'textarea', placeholder: 'O que mudou? O que é igual? O que reparaste hoje?' }
    ]
  },
  {
    id: 'antigo-novo',
    title: 'O mais antigo e o mais novo',
    subtitle: 'Mecânica 03 · Arqueologia doméstica',
    instruction: 'Procura em casa o objecto mais antigo que tens e o mais novo. Fotografa-os lado a lado, num só enquadramento. Não precisam de ser importantes.',
    fields: [
      { id: 'zona', label: 'Zona / freguesia', type: 'text' },
      { id: 'imagem', label: 'Os dois objectos juntos', type: 'file', accept: 'image/*' },
      { id: 'idade', label: 'O antigo — idade aproximada', type: 'text', placeholder: 'mais de 60 anos, da minha avó, não sei…' },
      { id: 'historias', label: 'Uma linha sobre cada objecto', type: 'textarea', placeholder: 'O mais antigo…\nO mais novo…' }
    ]
  },
  {
    id: 'embalagem-conta',
    title: 'A embalagem conta',
    subtitle: 'Mecânica 04 · Poesia do quotidiano',
    instruction: 'Pega numa embalagem — caixa, lata, papel de rebuçado, pote ou frasco. Escreve uma história nela ou a partir dela. A embalagem é o palco.',
    fields: [
      { id: 'zona', label: 'Zona / freguesia', type: 'text' },
      { id: 'imagem', label: 'Foto da embalagem com a história', type: 'file', accept: 'image/*' },
      { id: 'historia', label: 'Ou escreve a história aqui', type: 'textarea', placeholder: 'Cabia tudo aqui dentro. Menos o que importava.' }
    ]
  },
  {
    id: 'som-local',
    title: 'O som que só existe aqui',
    subtitle: 'Mecânica 05 · Fonografia do lugar',
    instruction: 'Qual é o som que só se ouve na tua zona? Grava ou descreve. Faz o Atlas ouvir o que os mapas não têm.',
    fields: [
      { id: 'zona', label: 'Zona / freguesia', type: 'text' },
      { id: 'audio', label: 'Gravação de áudio', type: 'file', accept: 'audio/*' },
      { id: 'descricao', label: 'Descreve o som', type: 'textarea', placeholder: 'O som das folhas, um sino, um comboio, uma corrente…' },
      { id: 'hora', label: 'Quando se ouve?', type: 'text', placeholder: 'de manhã cedo, ao anoitecer, só quando chove…' }
    ]
  },
  {
    id: 'ainda-resiste',
    title: 'O que ainda resiste',
    subtitle: 'Mecânica 06 · Etnografia da persistência',
    instruction: 'Um sapateiro, um amolador, uma mercearia, um gesto de ofício. Regista aquilo que ainda existe e continua a teimar no território.',
    fields: [
      { id: 'zona', label: 'Zona / freguesia', type: 'text' },
      { id: 'imagem', label: 'Foto sem rostos identificáveis', type: 'file', accept: 'image/*' },
      { id: 'nome', label: 'Nome ou descrição do que resiste', type: 'text' },
      { id: 'tempo', label: 'Há quanto tempo existe?', type: 'textarea', placeholder: 'Desde quando, quem mantém, o que poderá acontecer…' }
    ]
  },
  {
    id: 'palavras-desapareceram',
    title: 'Palavras que desapareceram',
    subtitle: 'Mecânica 07 · Arquivo da língua viva',
    instruction: 'Quais as palavras que já não se ouvem dizer na tua zona? Gírias, alcunhas de lugares e modos de dizer. Escreve-as e deixa o significado respirar.',
    fields: [
      { id: 'zona', label: 'Zona / freguesia', type: 'text' },
      { id: 'palavras', label: 'Palavras — uma por linha', type: 'textarea', placeholder: 'palavra — sentido\npalavra — sentido' },
      { id: 'memoria', label: 'Quem ainda as usava?', type: 'text', placeholder: 'a minha avó, gente do café, quem trabalhava…' }
    ]
  },
  {
    id: 'nao-apagado',
    title: 'O que ainda não foi apagado',
    subtitle: 'Mecânica 08 · Arqueologia do visível',
    instruction: 'Um azulejo partido, uma data numa pedra, uma marca antiga. Fotografa aquilo que a história ainda não conseguiu apagar.',
    fields: [
      { id: 'zona', label: 'Zona / freguesia', type: 'text' },
      { id: 'imagem', label: 'Foto', type: 'file', accept: 'image/*' },
      { id: 'descricao', label: 'O que sabes sobre o que aparece?', type: 'textarea', placeholder: 'De que época será? O que acontecia ali? Quem se lembra?' }
    ]
  },
  {
    id: 'so-memoria',
    title: 'Só existe na tua memória',
    subtitle: 'Mecânica 09 · Cartografia do invisível',
    instruction: 'Desenha algo que só existe dentro de ti. Não precisa de ser bonito. Pode ser caderno, guardanapo, fotografia de um vazio ou desenho de um lugar que já não está.',
    fields: [
      { id: 'zona', label: 'Zona / freguesia que este desenho habita', type: 'text' },
      { id: 'imagem', label: 'Desenho ou imagem interior', type: 'file', accept: 'image/*' },
      { id: 'frase', label: 'Uma frase, se quiseres', type: 'text', placeholder: 'Aquilo que a câmara não consegue fotografar' }
    ]
  },
  {
    id: 'remetente-ausente',
    title: 'Remetente Ausente',
    subtitle: 'Mecânica 10 · Postal para o cosmos',
    instruction: 'Escreve a carta que nunca foi entregue: para quem já não está, para quem nunca vai ler, para o tempo. Nesta versão digital, a carta pode dissolver-se visualmente em partículas — sem sair deste aparelho.',
    cosmic: true,
    fields: [
      { id: 'zona', label: 'Território desta carta, se houver', type: 'text' },
      { id: 'carta', label: 'A carta', type: 'textarea', placeholder: 'Escreve sem destinatário obrigatório…', maxlength: 4000 }
    ]
  }
];

function node(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function loadDraft(id) {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_PREFIX + id) || '{}');
  } catch {
    return {};
  }
}

function saveDraft(id, data) {
  localStorage.setItem(STORAGE_PREFIX + id, JSON.stringify(data));
}

function buildInput(field, draft, status) {
  const wrapper = node('label', 'falarte-field');
  wrapper.append(node('span', 'falarte-label', field.label));
  let input;
  if (field.type === 'textarea') {
    input = document.createElement('textarea');
    input.rows = 5;
  } else {
    input = document.createElement('input');
    input.type = field.type;
  }
  input.name = field.id;
  if (field.placeholder) input.placeholder = field.placeholder;
  if (field.accept) input.accept = field.accept;
  if (field.capture) input.setAttribute('capture', field.capture);
  if (field.maxlength) input.maxLength = field.maxlength;
  if (field.type !== 'file') input.value = draft[field.id] || '';
  if (field.type === 'file') {
    input.addEventListener('change', () => {
      const chosen = input.files?.[0];
      status.textContent = chosen
        ? `ficheiro escolhido neste navegador: ${chosen.name} · não foi enviado`
        : 'nenhum ficheiro escolhido';
    });
  }
  wrapper.append(input);
  return wrapper;
}

function buildDayGrid(draft) {
  const region = node('fieldset', 'falarte-days');
  const legend = node('legend', '', 'Dias já observados neste aparelho');
  region.append(legend);
  const days = new Set(Array.isArray(draft.days) ? draft.days : []);
  for (let day = 1; day <= 30; day += 1) {
    const button = node('button', 'falarte-day', String(day));
    button.type = 'button';
    button.dataset.day = String(day);
    button.setAttribute('aria-pressed', String(days.has(day)));
    button.addEventListener('click', () => {
      if (days.has(day)) days.delete(day); else days.add(day);
      button.setAttribute('aria-pressed', String(days.has(day)));
      region.dataset.days = JSON.stringify([...days].sort((a, b) => a - b));
    });
    region.append(button);
  }
  region.dataset.days = JSON.stringify([...days]);
  return region;
}

function buildPreferences(draft) {
  const section = node('fieldset', 'falarte-preferences');
  section.append(node('legend', '', 'Preferências para um eventual envio curatorial futuro'));
  const age = node('label', 'falarte-check');
  const ageInput = document.createElement('input');
  ageInput.type = 'checkbox';
  ageInput.name = 'age13';
  ageInput.checked = draft.age13 === true;
  age.append(ageInput, document.createTextNode(' Tenho 13 anos ou mais'));
  section.append(age);

  const signatures = node('div', 'falarte-choice');
  signatures.append(node('span', 'falarte-label', 'Como gostaria de assinar?'));
  [['nome','nome'],['inventado','nome inventado'],['anonimo','anónimo/a']].forEach(([value, label]) => {
    const item = node('label', 'falarte-radio');
    const radio = document.createElement('input');
    radio.type = 'radio'; radio.name = 'authorMode'; radio.value = value;
    radio.checked = (draft.authorMode || 'anonimo') === value;
    item.append(radio, document.createTextNode(` ${label}`));
    signatures.append(item);
  });
  section.append(signatures);

  const publication = node('div', 'falarte-choice');
  publication.append(node('span', 'falarte-label', 'Preferência de publicação'));
  [['integral','integral'],['trechos','apenas trechos'],['nao','não publicar']].forEach(([value, label]) => {
    const item = node('label', 'falarte-radio');
    const radio = document.createElement('input');
    radio.type = 'radio'; radio.name = 'publication'; radio.value = value;
    radio.checked = (draft.publication || 'nao') === value;
    item.append(radio, document.createTextNode(` ${label}`));
    publication.append(item);
  });
  section.append(publication);
  section.append(node('p', 'falarte-privacy', 'Estas escolhas ficam apenas neste aparelho. Não existe envio externo activo nesta versão.'));
  return section;
}

function collectDraft(form, dayGrid) {
  const data = {};
  form.querySelectorAll('input:not([type="file"]), textarea').forEach(input => {
    if (input.type === 'radio') {
      if (input.checked) data[input.name] = input.value;
    } else if (input.type === 'checkbox') {
      data[input.name] = input.checked;
    } else {
      data[input.name] = input.value;
    }
  });
  if (dayGrid) data.days = JSON.parse(dayGrid.dataset.days || '[]');
  return data;
}

function cosmicDissolve(text, reduced) {
  const field = node('div', 'falarte-cosmos');
  field.setAttribute('aria-label', 'Transmutação visual local da carta em partículas');
  if (reduced) {
    field.append(node('p', 'falarte-cosmic-text', 'a carta permanece inteira · o movimento foi reduzido'));
    return field;
  }
  const chars = [...text.replace(/\s+/g, ' ').slice(0, 240)];
  if (!chars.length) chars.push('·');
  chars.forEach((char, index) => {
    const particle = node('span', 'falarte-particle', char === ' ' ? '·' : char);
    particle.style.setProperty('--i', String(index));
    particle.style.setProperty('--x', `${(index * 47) % 101}%`);
    particle.style.setProperty('--y', `${(index * 71) % 97}%`);
    field.append(particle);
  });
  return field;
}

function renderMechanic(container, mechanic, reduced) {
  const draft = loadDraft(mechanic.id);
  container.replaceChildren();
  const form = node('form', 'falarte-form');
  form.noValidate = true;
  form.append(node('p', 'tag', 'NÓS / falARTE'));
  form.append(node('h2', 'falarte-title', mechanic.title));
  form.append(node('p', 'falarte-subtitle', mechanic.subtitle));
  form.append(node('p', 'falarte-instruction', mechanic.instruction));

  const status = node('p', 'falarte-status', 'rascunho local · nenhum envio externo');
  status.setAttribute('role', 'status');
  status.setAttribute('aria-live', 'polite');
  status.setAttribute('aria-atomic', 'true');
  form.append(status);

  let dayGrid = null;
  if (mechanic.dayGrid) {
    dayGrid = buildDayGrid(draft);
    form.append(dayGrid);
  }

  mechanic.fields.forEach(field => form.append(buildInput(field, draft, status)));
  form.append(buildPreferences(draft));

  const toolbar = node('div', 'toolbar falarte-toolbar');
  const keep = node('button', 'action', 'guardar rascunho aqui');
  keep.type = 'submit';
  const clear = node('button', 'action', 'retirar deste aparelho');
  clear.type = 'button';
  toolbar.append(keep, clear);

  if (mechanic.cosmic) {
    const transform = node('button', 'action falarte-cosmic-button', 'dissolver em partículas');
    transform.type = 'button';
    transform.addEventListener('click', () => {
      const text = form.elements.carta?.value || '';
      form.querySelector('.falarte-cosmos')?.remove();
      form.append(cosmicDissolve(text, reduced));
      status.textContent = 'transmutação visual local · nada foi enviado';
    });
    toolbar.append(transform);
  }

  form.append(toolbar);
  form.addEventListener('submit', event => {
    event.preventDefault();
    saveDraft(mechanic.id, collectDraft(form, dayGrid));
    status.textContent = 'rascunho guardado neste aparelho';
  });
  clear.addEventListener('click', () => {
    localStorage.removeItem(STORAGE_PREFIX + mechanic.id);
    renderMechanic(container, mechanic, reduced);
  });
  container.append(form);
}

export function openFalarte({ container, reducedMotion = false } = {}) {
  if (!(container instanceof HTMLElement)) throw new TypeError('FALARTE_CONTAINER_REQUIRED');
  const reduced = Boolean(reducedMotion || matchMedia('(prefers-reduced-motion: reduce)').matches);
  container.replaceChildren();
  const shell = node('section', 'falarte-runtime');
  shell.setAttribute('aria-labelledby', 'falarte-runtime-title');
  const header = node('header', 'falarte-header');
  header.append(node('p', 'tag', 'arquivo vivo do território'));
  const title = node('h2', '', 'falARTE');
  title.id = 'falarte-runtime-title';
  header.append(title);
  header.append(node('p', '', 'Dez mecânicas territoriais documentadas. Escolhe uma entrada e experimenta-a sem transformar o gesto em vigilância.'));
  shell.append(header);

  const nav = node('nav', 'falarte-nav');
  nav.setAttribute('aria-label', 'Escolher mecânica falARTE');
  const stage = node('div', 'falarte-stage');
  mechanics.forEach((mechanic, index) => {
    const button = node('button', 'falarte-nav-button', `${String(index + 1).padStart(2, '0')} · ${mechanic.title}`);
    button.type = 'button';
    button.dataset.mechanic = mechanic.id;
    button.setAttribute('aria-pressed', String(index === 0));
    button.addEventListener('click', () => {
      nav.querySelectorAll('button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
      renderMechanic(stage, mechanic, reduced);
      stage.focus({ preventScroll: true });
    });
    nav.append(button);
  });
  shell.append(nav, stage);
  container.append(shell);
  stage.tabIndex = -1;
  renderMechanic(stage, mechanics[0], reduced);

  return {
    mechanics: mechanics.map(({ id, title, subtitle }) => ({ id, title, subtitle })),
    destroy() { container.replaceChildren(); }
  };
}
