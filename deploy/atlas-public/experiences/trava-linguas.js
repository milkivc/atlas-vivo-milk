const travaLinguas = (() => {
  let audioContext;
  let oscillator;
  let gainNode;
  let analyser;
  let animationFrameId;
  let isRecording = false;
  let recordedChunks = [];
  let mediaRecorder;
  let currentTropeço = null;
  let tropeços = [];
  let currentStage = 'limiar';
  let rootElement;
  let context;
  let onCloseCallback;
  let isDestroyed = false;

  const travaLinguasStyles = `
    .trava-linguas-container {
      position: relative;
      width: 100%;
      height: 100%;
      background-color: black;
      overflow: hidden;
      touch-action: manipulation;
    }

    .light-pulse {
      position: absolute;
      width: 50px;
      height: 50px;
      background-color: white;
      border-radius: 50%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
      50% { transform: translate(-50%, -50%) scale(1.5); opacity: 0.7; }
      100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
    }

    .invitation-text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-size: 24px;
      font-family: Arial, sans-serif;
      text-align: center;
      cursor: pointer;
      user-select: none;
    }

    .waveform {
      position: absolute;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }

    .tropeço-text {
      position: absolute;
      color: white;
      font-size: 20px;
      font-family: Arial, sans-serif;
      text-align: center;
      user-select: none;
    }

    .falling-letter {
      position: absolute;
      color: white;
      font-size: 20px;
      font-family: Arial, sans-serif;
      animation: fall 2s forwards;
    }

    @keyframes fall {
      to { transform: translateY(100px); opacity: 0; }
    }

    .pulsing-letter {
      animation: pulseLetter 1s infinite;
    }

    @keyframes pulseLetter {
      0% { transform: scale(1); }
      50% { transform: scale(1.2); }
      100% { transform: scale(1); }
    }

    .constellation {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .tropeço-point {
      position: absolute;
      width: 10px;
      height: 10px;
      background-color: white;
      border-radius: 50%;
      cursor: pointer;
    }

    .devolution-text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-size: 24px;
      font-family: Arial, sans-serif;
      text-align: center;
      animation: tremble 0.5s infinite;
    }

    @keyframes tremble {
      0%, 100% { transform: translate(-50%, -50%) rotate(0deg); }
      25% { transform: translate(-50%, -50%) rotate(1deg); }
      75% { transform: translate(-50%, -50%) rotate(-1deg); }
    }
  `;

  const travaLinguasTravaLinguas = [
    "Três pratos de trigo para três tigres tristes",
    "O rato roeu a roupa do rei de Roma",
    "O que é que o papagaio disse ao avestruz?",
    "O que é que o elefante disse ao camelo?",
    "O que é que o cão disse ao gato?"
  ];

  const setupAudioContext = () => {
    if (!audioContext) {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
      analyser = audioContext.createAnalyser();
      analyser.fftSize = 256;
    }
  };

  const createOscillator = () => {
    if (!audioContext) return;

    oscillator = audioContext.createOscillator();
    gainNode = audioContext.createGain();

    oscillator.type = 'sine';
    oscillator.frequency.value = 440;
    oscillator.connect(gainNode);
    gainNode.connect(analyser);
    analyser.connect(audioContext.destination);

    oscillator.start();
    gainNode.gain.value = 0;
  };

  const startRecording = () => {
    if (isRecording || isDestroyed) return;

    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        mediaRecorder = new MediaRecorder(stream);
        recordedChunks = [];

        mediaRecorder.ondataavailable = event => {
          if (event.data.size > 0) {
            recordedChunks.push(event.data);
          }
        };

        mediaRecorder.onstop = () => {
          const audioBlob = new Blob(recordedChunks, { type: 'audio/wav' });
          const audioUrl = URL.createObjectURL(audioBlob);
          currentTropeço = audioUrl;
          stream.getTracks().forEach(track => track.stop());
          handleTropeço();
        };

        mediaRecorder.start();
        isRecording = true;
      })
      .catch(error => {
        console.error('Error accessing microphone:', error);
        simulateTropeço();
      });
  };

  const stopRecording = () => {
    if (!isRecording || isDestroyed) return;

    mediaRecorder.stop();
    isRecording = false;
  };

  const simulateTropeço = () => {
    const randomTropeço = Math.floor(Math.random() * travaLinguasTravaLinguas.length);
    currentTropeço = randomTropeço;
    handleTropeço();
  };

  const handleTropeço = () => {
    if (isDestroyed) return;

    const tropeçoText = typeof currentTropeço === 'number' ?
      travaLinguasTravaLinguas[currentTropeço] :
      "Três pratos de trigo para três tigres tristes";

    const tropeçoElement = document.createElement('div');
    tropeçoElement.className = 'tropeço-text';
    tropeçoElement.textContent = tropeçoText;
    rootElement.appendChild(tropeçoElement);

    const tropeçoPosition = Math.floor(Math.random() * tropeçoText.length);
    const tropeçoLetter = tropeçoText[tropeçoPosition];

    setTimeout(() => {
      if (isDestroyed) return;

      const fallingLetter = document.createElement('div');
      fallingLetter.className = 'falling-letter';
      fallingLetter.textContent = tropeçoLetter;
      fallingLetter.style.left = `${Math.random() * 100}%`;
      fallingLetter.style.top = `${Math.random() * 50}%`;
      rootElement.appendChild(fallingLetter);

      if (navigator.vibrate) {
        navigator.vibrate(100);
      }

      setTimeout(() => {
        if (isDestroyed) return;

        const pulsingLetter = document.createElement('div');
        pulsingLetter.className = 'pulsing-letter';
        pulsingLetter.textContent = tropeçoLetter;
        pulsingLetter.style.left = `${Math.random() * 100}%`;
        pulsingLetter.style.top = `${Math.random() * 50}%`;
        rootElement.appendChild(pulsingLetter);

        setTimeout(() => {
          if (isDestroyed) return;

          const constellation = document.createElement('div');
          constellation.className = 'constellation';
          rootElement.appendChild(constellation);

          for (let i = 0; i < 10; i++) {
            const tropeçoPoint = document.createElement('div');
            tropeçoPoint.className = 'tropeço-point';
            tropeçoPoint.style.left = `${Math.random() * 100}%`;
            tropeçoPoint.style.top = `${Math.random() * 100}%`;
            tropeçoPoint.addEventListener('click', () => {
              if (isDestroyed) return;

              const audio = new Audio(currentTropeço);
              audio.play();
            });
            constellation.appendChild(tropeçoPoint);
          }

          setTimeout(() => {
            if (isDestroyed) return;

            const devolutionText = document.createElement('div');
            devolutionText.className = 'devolution-text';
            devolutionText.textContent = 'O tropeço é a porta.';
            rootElement.appendChild(devolutionText);

            setTimeout(() => {
              if (isDestroyed) return;

              onCloseCallback();
            }, 3000);
          }, 5000);
        }, 5000);
      }, 2000);
    }, 2000);
  };

  const handleClick = () => {
    if (isDestroyed) return;

    switch (currentStage) {
      case 'limiar':
        currentStage = 'chamada';
        const invitationText = document.querySelector('.invitation-text');
        if (invitationText) {
          invitationText.textContent = 'Diz depressa.';
        }
        break;
      case 'chamada':
        currentStage = 'primeiro-gesto';
        startRecording();
        break;
      case 'primeiro-gesto':
        currentStage = 'resposta-viva';
        stopRecording();
        break;
      default:
        break;
    }
  };

  const handleKeyDown = (event) => {
    if (isDestroyed) return;

    if (event.key === ' ' || event.key === 'Enter') {
      handleClick();
    }
  };

  const mountCuratorialExperience = ({ root, context = {}, onClose = () => {} }) => {
    if (isDestroyed) return { destroy: () => {} };

    rootElement = root;
    context = context;
    onCloseCallback = onClose;

    const styleElement = document.createElement('style');
    styleElement.textContent = travaLinguasStyles;
    rootElement.appendChild(styleElement);

    const container = document.createElement('div');
    container.className = 'trava-linguas-container';
    rootElement.appendChild(container);

    const lightPulse = document.createElement('div');
    lightPulse.className = 'light-pulse';
    container.appendChild(lightPulse);

    const invitationText = document.createElement('div');
    invitationText.className = 'invitation-text';
    invitationText.textContent = 'Diz depressa. Guarda o tropeção.';
    container.appendChild(invitationText);

    container.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleKeyDown);

    setupAudioContext();
    createOscillator();

    return {
      destroy: () => {
        if (isDestroyed) return;

        isDestroyed = true;

        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }

        if (audioContext) {
          if (oscillator) {
            oscillator.stop();
          }
          audioContext.close();
        }

        if (mediaRecorder && isRecording) {
          mediaRecorder.stop();
        }

        container.removeEventListener('click', handleClick);
        document.removeEventListener('keydown', handleKeyDown);

        while (rootElement.firstChild) {
          rootElement.removeChild(rootElement.firstChild);
        }
      }
    };
  };

  return {
    mountCuratorialExperience
  };
})();
