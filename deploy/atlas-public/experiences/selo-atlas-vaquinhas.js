export function mountCuratorialExperience({ root, context = {}, onClose = () => {} }) {
  const experienceId = 'selo-atlas-vaquinhas';
  const styleId = `${experienceId}-styles`;
  const canvasId = `${experienceId}-canvas`;
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  let animationFrameId;
  let audioContextStarted = false;
  let vaquinha;
  let fragment;
  let isDragging = false;
  let isSealed = false;
  let isBlown = false;
  let isWaiting = false;
  let waitTimeout;
  let constellations = [];
  let otherVaquinhas = [];
  let blowButton;
  let locationButton;
  let motionButton;
  let calmModeButton;
  let exitButton;
  let volumeControl;
  let motionPermissionGranted = false;
  let locationPermissionGranted = false;
  let currentTerritory = 'Alcântara';
  let territories = ['Alcântara', 'Graça', 'Marvila'];
  let territoryFragments = {
    'Alcântara': [
      { type: 'image', data: 'data:image/png;base64,...', description: 'Foto desbotada de uma rua de Alcântara' },
      { type: 'sound', data: 'data:audio/wav;base64,...', description: 'Som de mercado em Alcântara' },
      { type: 'word', data: 'Alcântara', description: 'Palavra escrita à mão' }
    ],
    'Graça': [
      { type: 'image', data: 'data:image/png;base64,...', description: 'Foto desbotada de uma rua de Graça' },
      { type: 'sound', data: 'data:audio/wav;base64,...', description: 'Som de rua em Graça' },
      { type: 'word', data: 'Graça', description: 'Palavra escrita à mão' }
    ],
    'Marvila': [
      { type: 'image', data: 'data:image/png;base64,...', description: 'Foto desbotada de uma rua de Marvila' },
      { type: 'sound', data: 'data:audio/wav;base64,...', description: 'Som de rua em Marvila' },
      { type: 'word', data: 'Marvila', description: 'Palavra escrita à mão' }
    ]
  };

  function createStyles() {
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      #${experienceId} {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background-color: #f5f5f5;
        cursor: pointer;
      }
      #${canvasId} {
        display: block;
        width: 100%;
        height: 100%;
      }
      .${experienceId}-button {
        position: absolute;
        padding: 8px 16px;
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 4px;
        cursor: pointer;
        z-index: 1000;
      }
      .${experienceId}-button:hover {
        background-color: #f0f0f0;
      }
      #${experienceId}-blow-button {
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
      }
      #${experienceId}-location-button {
        bottom: 60px;
        left: 50%;
        transform: translateX(-50%);
      }
      #${experienceId}-motion-button {
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
      }
      #${experienceId}-calm-mode-button {
        bottom: 140px;
        left: 50%;
        transform: translateX(-50%);
      }
      #${experienceId}-exit-button {
        top: 20px;
        right: 20px;
      }
      #${experienceId}-volume-control {
        position: absolute;
        top: 20px;
        left: 20px;
        width: 100px;
      }
    `;
    document.head.appendChild(style);
  }

  function createCanvas() {
    const canvas = document.createElement('canvas');
    canvas.id = canvasId;
    root.appendChild(canvas);
    return canvas;
  }

  function createButtons() {
    blowButton = document.createElement('button');
    blowButton.id = `${experienceId}-blow-button`;
    blowButton.className = `${experienceId}-button`;
    blowButton.textContent = 'Soprar';
    blowButton.style.display = 'none';
    root.appendChild(blowButton);

    locationButton = document.createElement('button');
    locationButton.id = `${experienceId}-location-button`;
    locationButton.className = `${experienceId}-button`;
    locationButton.textContent = 'Usar minha localização';
    root.appendChild(locationButton);

    motionButton = document.createElement('button');
    motionButton.id = `${experienceId}-motion-button`;
    motionButton.className = `${experienceId}-button`;
    motionButton.textContent = 'Usar movimento';
    root.appendChild(motionButton);

    calmModeButton = document.createElement('button');
    calmModeButton.id = `${experienceId}-calm-mode-button`;
    calmModeButton.className = `${experienceId}-button`;
    calmModeButton.textContent = 'Modo calmo';
    root.appendChild(calmModeButton);

    exitButton = document.createElement('button');
    exitButton.id = `${experienceId}-exit-button`;
    exitButton.className = `${experienceId}-button`;
    exitButton.textContent = 'Sair';
    root.appendChild(exitButton);

    volumeControl = document.createElement('input');
    volumeControl.id = `${experienceId}-volume-control`;
    volumeControl.type = 'range';
    volumeControl.min = '0';
    volumeControl.max = '100';
    volumeControl.value = '50';
    root.appendChild(volumeControl);
  }

  function setupEventListeners() {
    const canvas = document.getElementById(canvasId);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('touchmove', handleTouchMove);
    canvas.addEventListener('touchstart', handleTouchStart);
    canvas.addEventListener('touchend', handleTouchEnd);
    blowButton.addEventListener('click', handleBlow);
    locationButton.addEventListener('click', handleLocation);
    motionButton.addEventListener('click', handleMotion);
    calmModeButton.addEventListener('click', handleCalmMode);
    exitButton.addEventListener('click', handleExit);
    volumeControl.addEventListener('input', handleVolumeChange);
    window.addEventListener('keydown', handleKeyDown);
  }

  function handleMouseMove(e) {
    if (!audioContextStarted) {
      audioContext.resume().then(() => {
        audioContextStarted = true;
      });
    }
    const canvas = document.getElementById(canvasId);
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    if (isDragging && fragment) {
      fragment.x = x;
      fragment.y = y;
    }
  }

  function handleMouseDown(e) {
    const canvas = document.getElementById(canvasId);
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    if (vaquinha && isPointInVaquinha(x, y)) {
      isDragging = true;
      if (fragment) {
        fragment.revealed = true;
        playBellSound();
        vibrateDevice();
      }
    }
  }

  function handleMouseUp() {
    isDragging = false;
  }

  function handleTouchMove(e) {
    if (!audioContextStarted) {
      audioContext.resume().then(() => {
        audioContextStarted = true;
      });
    }
    const canvas = document.getElementById(canvasId);
    const rect = canvas.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const y = e.touches[0].clientY - rect.top;
    if (isDragging && fragment) {
      fragment.x = x;
      fragment.y = y;
    }
  }

  function handleTouchStart(e) {
    const canvas = document.getElementById(canvasId);
    const rect = canvas.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const y = e.touches[0].clientY - rect.top;
    if (vaquinha && isPointInVaquinha(x, y)) {
      isDragging = true;
      if (fragment) {
        fragment.revealed = true;
        playBellSound();
        vibrateDevice();
      }
    }
  }

  function handleTouchEnd() {
    isDragging = false;
  }

  function handleBlow() {
    if (fragment) {
      isBlown = true;
      fragment.blown = true;
      blowButton.style.display = 'none';
      createMultipleVaquinhas();
    }
  }

  function handleLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          locationPermissionGranted = true;
          const { latitude, longitude } = position.coords;
          currentTerritory = getTerritoryFromCoordinates(latitude, longitude);
          locationButton.style.display = 'none';
        },
        (error) => {
          console.error('Error getting location:', error);
          currentTerritory = territories[Math.floor(Math.random() * territories.length)];
          locationButton.style.display = 'none';
        }
      );
    } else {
      currentTerritory = territories[Math.floor(Math.random() * territories.length)];
      locationButton.style.display = 'none';
    }
  }

  function handleMotion() {
    if (window.DeviceMotionEvent) {
      window.addEventListener('devicemotion', handleDeviceMotion);
      motionPermissionGranted = true;
      motionButton.style.display = 'none';
    } else {
      motionPermissionGranted = false;
      motionButton.style.display = 'none';
    }
  }

  function handleDeviceMotion(e) {
    if (motionPermissionGranted && vaquinha) {
      const { acceleration } = e;
      if (acceleration) {
        vaquinha.x += acceleration.x * 2;
        vaquinha.y += acceleration.y * 2;
      }
    }
  }

  function handleCalmMode() {
    calmModeButton.style.display = 'none';
    blowButton.style.display = 'none';
    locationButton.style.display = 'none';
    motionButton.style.display = 'none';
    volumeControl.style.display = 'none';
    exitButton.style.display = 'none';
    // Additional calm mode logic
  }

  function handleExit() {
    onClose();
  }

  function handleVolumeChange(e) {
    const volume = parseInt(e.target.value) / 100;
    // Adjust volume of all sounds
  }

  function handleKeyDown(e) {
    if (e.key === 'Escape') {
      handleExit();
    }
  }

  function isPointInVaquinha(x, y) {
    if (!vaquinha) return false;
    const dx = x - vaquinha.x;
    const dy = y - vaquinha.y;
    return dx * dx + dy * dy <= vaquinha.radius * vaquinha.radius;
  }

  function playBellSound() {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
    gainNode.gain.setValueAtTime(0.5, audioContext.currentTime);
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.5);
  }

  function vibrateDevice() {
    if (window.navigator.vibrate) {
      window.navigator.vibrate(200);
    }
  }

  function createVaquinha() {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    vaquinha = {
      x: width / 2,
      y: height / 2,
      radius: 30,
      color: '#ffcc00',
      pulse: 0,
      pulseSpeed: 0.02,
      pulseMax: 1.2,
      pulseMin: 0.8
    };
    fragment = {
      x: width / 2,
      y: height / 2 + 50,
      width: 100,
      height: 100,
      revealed: false,
      blown: false,
      sealed: false,
      data: territoryFragments[currentTerritory][Math.floor(Math.random() * territoryFragments[currentTerritory].length)],
      scale: 1,
      scaleSpeed: 0.01,
      scaleMax: 1.2,
      scaleMin: 0.8
    };
  }

  function createMultipleVaquinhas() {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const count = 5;
    const angle = (2 * Math.PI) / count;
    for (let i = 0; i < count; i++) {
      const x = width / 2 + Math.cos(angle * i) * 100;
      const y = height / 2 + Math.sin(angle * i) * 100;
      otherVaquinhas.push({
        x,
        y,
        radius: 20,
        color: '#ffcc00',
        pulse: 0,
        pulseSpeed: 0.02,
        pulseMax: 1.2,
        pulseMin: 0.8
      });
    }
  }

  function drawVaquinha(ctx) {
    if (!vaquinha) return;
    ctx.save();
    ctx.translate(vaquinha.x, vaquinha.y);
    ctx.scale(vaquinha.pulse, vaquinha.pulse);
    ctx.beginPath();
    ctx.arc(0, 0, vaquinha.radius, 0, Math.PI * 2);
    ctx.fillStyle = vaquinha.color;
    ctx.fill();
    ctx.closePath();
    ctx.restore();
  }

  function drawFragment(ctx) {
    if (!fragment || !fragment.revealed) return;
    ctx.save();
    ctx.translate(fragment.x, fragment.y);
    ctx.scale(fragment.scale, fragment.scale);
    if (fragment.data.type === 'image') {
      const img = new Image();
      img.src = fragment.data.data;
      ctx.drawImage(img, -fragment.width / 2, -fragment.height / 2, fragment.width, fragment.height);
    } else if (fragment.data.type === 'word') {
      ctx.font = '20px Arial';
      ctx.fillStyle = '#000';
      ctx.textAlign = 'center';
      ctx.fillText(fragment.data.data, 0, 0);
    }
    ctx.restore();
  }

  function drawOtherVaquinhas(ctx) {
    otherVaquinhas.forEach(vaquinha => {
      ctx.save();
      ctx.translate(vaquinha.x, vaquinha.y);
      ctx.scale(vaquinha.pulse, vaquinha.pulse);
      ctx.beginPath();
      ctx.arc(0, 0, vaquinha.radius, 0, Math.PI * 2);
      ctx.fillStyle = vaquinha.color;
      ctx.fill();
      ctx.closePath();
      ctx.restore();
    });
  }

  function update() {
    if (vaquinha) {
      vaquinha.pulse += vaquinha.pulseSpeed;
      if (vaquinha.pulse > vaquinha.pulseMax || vaquinha.pulse < vaquinha.pulseMin) {
        vaquinha.pulseSpeed *= -1;
      }
    }
    if (fragment) {
      fragment.scale += fragment.scaleSpeed;
      if (fragment.scale > fragment.scaleMax || fragment.scale < fragment.scaleMin) {
        fragment.scaleSpeed *= -1;
      }
    }
    otherVaquinhas.forEach(vaquinha => {
      vaquinha.pulse += vaquinha.pulseSpeed;
      if (vaquinha.pulse > vaquinha.pulseMax || vaquinha.pulse < vaquinha.pulseMin) {
        vaquinha.pulseSpeed *= -1;
      }
    });
  }

  function render() {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawVaquinha(ctx);
    drawFragment(ctx);
    drawOtherVaquinhas(ctx);
  }

  function animate() {
    update();
    render();
    animationFrameId = requestAnimationFrame(animate);
  }

  function startExperience() {
    createStyles();
    createCanvas();
    createButtons();
    setupEventListeners();
    createVaquinha();
    animate();
  }

  function destroy() {
    const style = document.getElementById(styleId);
    if (style) {
      document.head.removeChild(style);
    }
    const canvas = document.getElementById(canvasId);
    if (canvas) {
      root.removeChild(canvas);
    }
    if (blowButton) {
      root.removeChild(blowButton);
    }
    if (locationButton) {
      root.removeChild(locationButton);
    }
    if (motionButton) {
      root.removeChild(motionButton);
    }
    if (calmModeButton) {
      root.removeChild(calmModeButton);
    }
    if (exitButton) {
      root.removeChild(exitButton);
    }
    if (volumeControl) {
      root.removeChild(volumeControl);
    }
    cancelAnimationFrame(animationFrameId);
    audioContext.close();
    if (waitTimeout) {
      clearTimeout(waitTimeout);
    }
    if (window.DeviceMotionEvent) {
      window.removeEventListener('devicemotion', handleDeviceMotion);
    }
  }

  startExperience();

  return {
    destroy
  };
}
