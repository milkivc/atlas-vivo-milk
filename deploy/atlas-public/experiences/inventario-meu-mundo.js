const inventoryExperience = (() => {
  let rootElement;
  let context;
  let onCloseCallback;
  let animationFrameId;
  let audioContext;
  let oscillator;
  let gainNode;
  let isVibrating = false;
  let objects = [];
  let selectedObjects = [];
  let currentStage = 0;
  let stages = [
    { action: "limiar" },
    { action: "chamada" },
    { action: "primeiro gesto" },
    { action: "resposta viva" },
    { action: "desvio" },
    { action: "aprofundamento sensorial" },
    { action: "escolha/acaso/silêncio" },
    { action: "aparição" },
    { action: "devolução" },
    { action: "rasto/latência" }
  ];

  const createStyleElement = () => {
    const style = document.createElement('style');
    style.textContent = `
      .inventory-experience {
        position: relative;
        width: 100%;
        height: 100%;
        background-color: #000;
        overflow: hidden;
        touch-action: manipulation;
      }
      .inventory-object {
        position: absolute;
        width: 100px;
        height: 100px;
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: all 0.3s ease;
      }
      .inventory-object.selected {
        background-color: rgba(255, 255, 255, 0.3);
        transform: scale(1.2);
      }
      .inventory-object.revealed {
        background-color: rgba(255, 255, 255, 0.5);
      }
      .inventory-shadow {
        position: absolute;
        width: 100px;
        height: 20px;
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 50%;
        bottom: -10px;
        left: 0;
      }
      .inventory-light {
        position: absolute;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0.9) 70%);
        pointer-events: none;
      }
      .inventory-instruction {
        position: absolute;
        color: white;
        font-family: Arial, sans-serif;
        text-align: center;
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
        pointer-events: none;
      }
    `;
    return style;
  };

  const createObjectElement = (id, x, y) => {
    const object = document.createElement('div');
    object.className = 'inventory-object';
    object.id = `inventory-object-${id}`;
    object.style.left = `${x}px`;
    object.style.top = `${y}px`;

    const shadow = document.createElement('div');
    shadow.className = 'inventory-shadow';
    object.appendChild(shadow);

    object.addEventListener('click', () => handleObjectClick(id));
    object.addEventListener('touchstart', (e) => {
      e.preventDefault();
      handleObjectClick(id);
    });

    return object;
  };

  const createLightElement = () => {
    const light = document.createElement('div');
    light.className = 'inventory-light';
    return light;
  };

  const createInstructionElement = () => {
    const instruction = document.createElement('div');
    instruction.className = 'inventory-instruction';
    instruction.textContent = 'O que levarias contigo?';
    return instruction;
  };

  const setupAudio = () => {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    gainNode = audioContext.createGain();
    gainNode.gain.value = 0.1;
    gainNode.connect(audioContext.destination);
  };

  const playSound = (frequency, duration) => {
    if (!audioContext) setupAudio();

    oscillator = audioContext.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.value = frequency;
    oscillator.connect(gainNode);
    oscillator.start();

    setTimeout(() => {
      oscillator.stop();
    }, duration);
  };

  const vibrate = (duration) => {
    if (navigator.vibrate) {
      navigator.vibrate(duration);
      isVibrating = true;
      setTimeout(() => {
        isVibrating = false;
      }, duration);
    }
  };

  const handleObjectClick = (id) => {
    if (currentStage < 2) return;

    const object = objects.find(obj => obj.id === id);
    if (!object || object.selected) return;

    object.selected = true;
    selectedObjects.push(object);

    const objectElement = document.getElementById(`inventory-object-${id}`);
    objectElement.classList.add('selected');

    playSound(440 + (id * 100), 500);
    vibrate(200);

    if (currentStage === 2) {
      currentStage = 3;
      revealObject(id);
    } else if (currentStage === 6 && selectedObjects.length === 3) {
      currentStage = 7;
      showAppearance();
    }
  };

  const revealObject = (id) => {
    const objectElement = document.getElementById(`inventory-object-${id}`);
    objectElement.classList.add('revealed');

    const instructionElement = document.querySelector('.inventory-instruction');
    instructionElement.textContent = 'Escolha um gesto para cada objecto';

    currentStage = 4;
  };

  const showAppearance = () => {
    const instructionElement = document.querySelector('.inventory-instruction');
    instructionElement.textContent = 'Os objectos reagem aos gestos';

    currentStage = 8;
    setTimeout(() => {
      showDevolution();
    }, 2000);
  };

  const showDevolution = () => {
    const instructionElement = document.querySelector('.inventory-instruction');
    instructionElement.textContent = 'Inventário concluído';

    currentStage = 9;
    setTimeout(() => {
      showTrace();
    }, 2000);
  };

  const showTrace = () => {
    const instructionElement = document.querySelector('.inventory-instruction');
    instructionElement.textContent = 'Inventário guardado no cosmos';

    currentStage = 10;
    setTimeout(() => {
      if (onCloseCallback) onCloseCallback();
    }, 2000);
  };

  const animateObjects = () => {
    objects.forEach((obj, index) => {
      const objectElement = document.getElementById(`inventory-object-${obj.id}`);
      if (!objectElement) return;

      const angle = (Date.now() / 1000) * (index + 1);
      const x = obj.x + Math.sin(angle) * 20;
      const y = obj.y + Math.cos(angle) * 20;

      objectElement.style.left = `${x}px`;
      objectElement.style.top = `${y}px`;

      const shadow = objectElement.querySelector('.inventory-shadow');
      shadow.style.width = `${100 + Math.sin(angle) * 20}px`;
    });

    animationFrameId = requestAnimationFrame(animateObjects);
  };

  const mountCuratorialExperience = ({ root, context = {}, onClose = () => {} }) => {
    rootElement = root;
    context = context;
    onCloseCallback = onClose;

    rootElement.classList.add('inventory-experience');
    rootElement.appendChild(createStyleElement());

    const light = createLightElement();
    rootElement.appendChild(light);

    const instruction = createInstructionElement();
    rootElement.appendChild(instruction);

    const centerX = rootElement.clientWidth / 2;
    const centerY = rootElement.clientHeight / 2;

    objects = [
      { id: 1, x: centerX - 150, y: centerY, selected: false },
      { id: 2, x: centerX, y: centerY, selected: false },
      { id: 3, x: centerX + 150, y: centerY, selected: false }
    ];

    objects.forEach(obj => {
      const objectElement = createObjectElement(obj.id, obj.x, obj.y);
      rootElement.appendChild(objectElement);
    });

    animateObjects();

    currentStage = 1;
    setTimeout(() => {
      currentStage = 2;
    }, 2000);

    return {
      destroy: () => {
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
        if (audioContext) audioContext.close();
        if (isVibrating) navigator.vibrate(0);
        rootElement.innerHTML = '';
        rootElement.classList.remove('inventory-experience');
      }
    };
  };

  return { mountCuratorialExperience };
})();
