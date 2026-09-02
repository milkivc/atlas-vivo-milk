function el(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

const STATES = ['encosta', 'desvia', 'reabre'];

function deterministicPosition(index) {
  return {
    x: 8 + ((index * 37) % 78),
    y: 10 + ((index * 53) % 72),
    angle: ((index * 29) % 25) - 12
  };
}

function preserveOriginalWord(token) {
  const original = token.dataset.originalWord || '';
  if (token.textContent !== original) token.textContent = original;
  return original;
}

function renderTokens(field, text, reduced) {
  field.replaceChildren();
  const words = text.trim().split(/\s+/).filter(Boolean).slice(0, 48);
  if (!words.length) {
    field.append(el('p', 'ritual-empty', 'o silêncio também pode ficar aqui'));
    return [];
  }

  return words.map((word, index) => {
    const token = el('button', 'ritual-token', word);
    token.type = 'button';
    token.dataset.originalWord = word;
    token.dataset.state = STATES[index % STATES.length];
    const pos = deterministicPosition(index);
    token.style.setProperty('--x', `${pos.x}%`);
    token.style.setProperty('--y', `${pos.y}%`);
    token.style.setProperty('--r', `${reduced ? 0 : pos.angle}deg`);
    token.setAttribute('aria-label', `${word}. Palavra móvel. Use as setas para deslocar.`);

    let dx = 0;
    let dy = 0;
    const applyOffset = () => {
      preserveOriginalWord(token);
      token.style.setProperty('--dx', `${dx}px`);
      token.style.setProperty('--dy', `${dy}px`);
    };

    token.addEventListener('click', () => {
      preserveOriginalWord(token);
      const current = STATES.indexOf(token.dataset.state);
      token.dataset.state = STATES[(current + 1) % STATES.length];
      preserveOriginalWord(token);
    });

    token.addEventListener('keydown', event => {
      const step = event.shiftKey ? 16 : 8;
      if (event.key === 'ArrowLeft') dx -= step;
      else if (event.key === 'ArrowRight') dx += step;
      else if (event.key === 'ArrowUp') dy -= step;
      else if (event.key === 'ArrowDown') dy += step;
      else return;
      event.preventDefault();
      applyOffset();
    });

    field.append(token);
    return token;
  });
}

export function openPalavraRitual({ container, reducedMotion = false } = {}) {
  if (!(container instanceof HTMLElement)) throw new TypeError('PALAVRA_RITUAL_CONTAINER_REQUIRED');
  const reduced = Boolean(reducedMotion || matchMedia('(prefers-reduced-motion: reduce)').matches);
  container.replaceChildren();

  const shell = el('section', 'ritual-runtime');
  shell.setAttribute('aria-labelledby', 'ritual-title');
  shell.append(el('p', 'tag', 'NÓS · palavra como corpo'));
  const title = el('h2', 'ritual-title', 'A Palavra Ritual');
  title.id = 'ritual-title';
  shell.append(title);
  shell.append(el('p', 'ritual-intro', 'A palavra ritual não entra na linha. Ela encosta primeiro. Aqui a frase deixa de ser corredor e passa a ser campo. Cada palavra permanece literalmente a mesma; só muda a sua relação com o espaço.'));

  const inputLabel = el('label', 'ritual-input-label');
  inputLabel.append(el('span', 'ritual-label', 'Escreve uma palavra, uma frase ou um fragmento'));
  const input = document.createElement('textarea');
  input.rows = 4;
  input.maxLength = 560;
  input.placeholder = 'não precisas explicar antes de tocar';
  inputLabel.append(input);
  shell.append(inputLabel);

  const toolbar = el('div', 'toolbar ritual-toolbar');
  const touch = el('button', 'action', 'encostar no campo');
  touch.type = 'button';
  const divert = el('button', 'action', 'desviar');
  divert.type = 'button';
  const silence = el('button', 'action', 'silêncio');
  silence.type = 'button';
  silence.setAttribute('aria-pressed', 'false');
  const speak = el('button', 'action', 'dar voz');
  speak.type = 'button';
  toolbar.append(touch, divert, silence, speak);
  shell.append(toolbar);

  const status = el('p', 'ritual-status', 'nada escrito aqui é guardado ou enviado');
  status.setAttribute('role', 'status');
  status.setAttribute('aria-live', 'polite');
  status.setAttribute('aria-atomic', 'true');
  shell.append(status);

  const field = el('div', 'ritual-field');
  field.setAttribute('role', 'group');
  field.setAttribute('aria-label', 'Campo sensível da Palavra Ritual');
  shell.append(field);
  let tokens = [];

  const verifyWords = () => {
    tokens.forEach(token => preserveOriginalWord(token));
  };

  const build = () => {
    tokens = renderTokens(field, input.value, reduced);
    verifyWords();
    status.textContent = tokens.length
      ? `${tokens.length} fragmentos em campo · as palavras permanecem intactas · usa setas para mover uma palavra focada`
      : 'silêncio em campo · nada foi guardado';
    silence.setAttribute('aria-pressed', 'false');
    field.dataset.silence = 'false';
  };

  touch.addEventListener('click', build);

  divert.addEventListener('click', () => {
    if (!tokens.length) build();
    tokens.forEach((token, index) => {
      preserveOriginalWord(token);
      token.dataset.state = STATES[(STATES.indexOf(token.dataset.state) + 1 + (index % 2)) % STATES.length];
      preserveOriginalWord(token);
    });
    status.textContent = 'o fragmento desviou no espaço sem perder ou reescrever nenhuma palavra';
  });

  silence.addEventListener('click', () => {
    const active = silence.getAttribute('aria-pressed') !== 'true';
    silence.setAttribute('aria-pressed', String(active));
    field.dataset.silence = String(active);
    verifyWords();
    status.textContent = active ? 'silêncio: as palavras continuam presentes e intactas, mas recuam' : 'as palavras reabrem intactas';
  });

  speak.addEventListener('click', () => {
    const text = input.value.trim();
    if (!text) {
      status.textContent = 'escreve primeiro alguma coisa para lhe dar voz';
      return;
    }
    if (!('speechSynthesis' in window)) {
      status.textContent = 'voz do navegador indisponível neste aparelho';
      return;
    }
    verifyWords();
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text.slice(0, 560));
    utterance.lang = 'pt-PT';
    utterance.rate = reduced ? 0.9 : 0.82;
    utterance.addEventListener('start', () => status.textContent = 'a palavra ganhou voz neste aparelho');
    utterance.addEventListener('end', () => status.textContent = 'a voz terminou · nada foi enviado');
    speechSynthesis.speak(utterance);
  });

  container.append(shell);
  input.focus({ preventScroll: true });

  return {
    destroy() {
      if ('speechSynthesis' in window) speechSynthesis.cancel();
      container.replaceChildren();
    }
  };
}
