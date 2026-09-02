const mountCuratorialExperience = ({ root, context = {}, onClose = () => {} }) => {
  let animationFrameId;
  let audioContext;
  let oscillator;
  let gainNode;
  let isVibrating = false;
  let isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const experienceId = 'curadoria-inesperado';
  const styleId = `${experienceId}-styles`;

  const styles = `
    #${experienceId} {
      position: relative;
      width: 100%;
      height: 100%;
      background-color: #f5f5dc;
      overflow: hidden;
      font-family: 'Courier New', monospace;
    }

    .letter-box {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 200px;
      height: 200px;
      background-color: #fff;
      border: 2px solid #000;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: transform 0.3s ease;
    }

    .letter-box:hover {
      transform: translate(-50%, -50%) scale(1.05);
    }

    .letter-box-content {
      font-size: 24px;
      color: #000;
      text-align: center;
    }

    .fragment {
      position: absolute;
      width: 50px;
      height: 50px;
      background-color: #f00;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: transform 0.3s ease;
    }

    .fragment:hover {
      transform: scale(1.2);
    }

    .fragment-content {
      font-size: 12px;
      color: #fff;
    }
  `;

  const addStyles = () => {
    const styleElement = document.createElement('style');
    styleElement.id = styleId;
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);
  };

  const removeStyles = () => {
    const styleElement = document.getElementById(styleId);
    if (styleElement) {
      document.head.removeChild(styleElement);
    }
  };

  const createLetterBox = () => {
    const letterBox = document.createElement('div');
    letterBox.className = 'letter-box';
    letterBox.id = 'letter-box';

    const letterBoxContent = document.createElement('div');
    letterBoxContent.className = 'letter-box-content';
    letterBoxContent.textContent = 'Escolhe o que não estavas a procurar';

    letterBox.appendChild(letterBoxContent);
    root.appendChild(letterBox);

    return letterBox;
  };

  const createFragment = (x, y, content) => {
    const fragment = document.createElement('div');
    fragment.className = 'fragment';
    fragment.style.left = `${x}px`;
    fragment.style.top = `${y}px`;

    const fragmentContent = document.createElement('div');
    fragmentContent.className = 'fragment-content';
    fragmentContent.textContent = content;

    fragment.appendChild(fragmentContent);
    root.appendChild(fragment);

    return fragment;
  };

  const setupAudioContext = () => {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    gainNode = audioContext.createGain();
    gainNode.gain.value = 0.1;
    gainNode.connect(audioContext.destination);
  };

  const playSound = (frequency, duration) => {
    if (!audioContext) setupAudioContext();

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
    }
  };

  const handleLetterBoxClick = (letterBox) => {
    if (isReducedMotion) {
      letterBox.style.transform = 'translate(-50%, -50%) scale(1.05)';
    } else {
      letterBox.style.transform = 'translate(-50%, -50%) scale(1.2)';
    }

    playSound(440, 500);
    vibrate(200);

    setTimeout(() => {
      letterBox.style.transform = 'translate(-50%, -50%) scale(1)';
      const fragment = createFragment(100, 100, 'Fragmento');
      handleFragmentInteraction(fragment);
    }, 1000);
  };

  const handleFragmentInteraction = (fragment) => {
    fragment.addEventListener('click', () => {
      playSound(660, 300);
      vibrate(100);

      if (isReducedMotion) {
        fragment.style.transform = 'scale(1.1)';
      } else {
        fragment.style.transform = 'scale(1.5)';
      }

      setTimeout(() => {
        fragment.style.transform = 'scale(1)';
        const newFragment = createFragment(200, 200, 'Novo Fragmento');
        handleFragmentInteraction(newFragment);
      }, 500);
    });
  };

  const animate = () => {
    const letterBox = document.getElementById('letter-box');
    if (letterBox) {
      const scale = 1 + Math.sin(Date.now() / 1000) * 0.05;
      letterBox.style.transform = `translate(-50%, -50%) scale(${scale})`;
    }
    animationFrameId = requestAnimationFrame(animate);
  };

  const init = () => {
    addStyles();
    const letterBox = createLetterBox();
    letterBox.addEventListener('click', () => handleLetterBoxClick(letterBox));

    if (!isReducedMotion) {
      animate();
    }
  };

  const destroy = () => {
    cancelAnimationFrame(animationFrameId);
    if (audioContext) {
      audioContext.close();
    }
    if (isVibrating && navigator.vibrate) {
      navigator.vibrate(0);
    }
    removeStyles();
    root.innerHTML = '';
  };

  init();

  return { destroy };
};
