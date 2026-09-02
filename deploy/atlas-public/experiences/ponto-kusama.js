const mountCuratorialExperience = ({ root, context = {}, onClose = () => {} }) => {
  const experienceId = 'ponto-kusama';
  const styleId = `${experienceId}-styles`;
  const canvasId = `${experienceId}-canvas`;
  const points = [];
  const collectivePoints = [];
  const maxPoints = 50;
  let animationFrameId = null;
  let audioContext = null;
  let zumbidoBuffer = null;
  let plocBuffer = null;
  let chocalhoBuffers = [];
  let isCollectivePulsing = false;
  let lastInteractionTime = Date.now();
  let collectivePulseInterval = null;
  let isFrozen = false;
  let isInverted = false;
  let inkColor = ['#000000', '#FF0000', '#FFD700'][Math.floor(Math.random() * 3)];
  let isDestroyed = false;

  const styles = `
    #${experienceId} {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background-color: #f5f5f5;
      touch-action: none;
    }

    #${canvasId} {
      display: block;
      width: 100%;
      height: 100%;
    }

    .${experienceId}-text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-family: 'Courier New', monospace;
      font-size: 24px;
      color: #333;
      text-align: center;
      cursor: default;
      user-select: none;
      pointer-events: none;
    }

    .${experienceId}-text.trémulo {
      animation: tremulo 1.5s infinite;
    }

    @keyframes tremulo {
      0%, 100% { transform: translate(-50%, -50%) rotate(-1deg); }
      50% { transform: translate(-50%, -50%) rotate(1deg); }
    }

    .${experienceId}-ticket {
      position: absolute;
      top: 20px;
      right: 20px;
      width: 200px;
      padding: 15px;
      background-color: #fff;
      border: 1px solid #ddd;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      font-family: 'Courier New', monospace;
      font-size: 14px;
      color: #333;
      cursor: pointer;
      user-select: none;
    }

    .${experienceId}-ticket img {
      width: 100%;
      height: auto;
      margin-bottom: 10px;
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

  const createCanvas = () => {
    const canvas = document.createElement('canvas');
    canvas.id = canvasId;
    root.appendChild(canvas);
    return canvas;
  };

  const createTextElement = (text, className = '') => {
    const textElement = document.createElement('div');
    textElement.className = `${experienceId}-text ${className}`;
    textElement.textContent = text;
    root.appendChild(textElement);
    return textElement;
  };

  const createTicketElement = (imageData, text) => {
    const ticketElement = document.createElement('div');
    ticketElement.className = `${experienceId}-ticket`;

    const img = document.createElement('img');
    img.src = imageData;
    ticketElement.appendChild(img);

    const textElement = document.createElement('div');
    textElement.textContent = text;
    ticketElement.appendChild(textElement);

    ticketElement.addEventListener('click', () => {
      const link = document.createElement('a');
      link.href = imageData;
      link.download = 'ponto-kusama-ticket.png';
      link.click();
    });

    root.appendChild(ticketElement);
    return ticketElement;
  };

  const initAudio = () => {
    if (isDestroyed) return;
    audioContext = new (window.AudioContext || window.webkitAudioContext)();

    const createOscillatorBuffer = (frequency, duration) => {
      const sampleRate = audioContext.sampleRate;
      const buffer = audioContext.createBuffer(1, sampleRate * duration, sampleRate);
      const data = buffer.getChannelData(0);

      for (let i = 0; i < buffer.length; i++) {
        const time = i / sampleRate;
        data[i] = Math.sin(2 * Math.PI * frequency * time);
      }

      return buffer;
    };

    zumbidoBuffer = createOscillatorBuffer(25, 0.1);
    plocBuffer = createOscillatorBuffer(440, 0.1);

    const chocalhoFrequencies = [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88];
    chocalhoBuffers = chocalhoFrequencies.map(freq => createOscillatorBuffer(freq, 0.2));
  };

  const playSound = (buffer, volume = 1) => {
    if (isDestroyed || !audioContext) return;

    const source = audioContext.createBufferSource();
    source.buffer = buffer;

    const gainNode = audioContext.createGain();
    gainNode.gain.value = volume;

    source.connect(gainNode);
    gainNode.connect(audioContext.destination);

    source.start();
  };

  const playChocalho = (index) => {
    if (isDestroyed || !audioContext || index < 0 || index >= chocalhoBuffers.length) return;
    playSound(chocalhoBuffers[index]);
  };

  const createInkSpot = (x, y, ctx) => {
    const gradient = ctx.createRadialGradient(x, y, 5, x, y, 30);
    gradient.addColorStop(0, inkColor);
    gradient.addColorStop(1, 'transparent');

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, 30, 0, Math.PI * 2);
    ctx.fill();
  };

  const createPoint = (x, y, color, ctx) => {
    const point = {
      x,
      y,
      color,
      radius: 10,
      targetRadius: 10,
      opacity: 1,
      pulse: 0,
      pulseSpeed: 0.02 + Math.random() * 0.03,
      note: Math.floor(Math.random() * 12) + 48,
      lastPulseTime: Date.now()
    };

    points.push(point);
    playSound(plocBuffer, 0.5);

    if ('vibrate' in navigator) {
      navigator.vibrate(20);
    }

    if (points.length > maxPoints) {
      points.shift();
    }

    return point;
  };

  const createCollectivePoint = (x, y, color) => {
    const point = {
      x,
      y,
      color,
      radius: 10,
      targetRadius: 10,
      opacity: 0.5,
      pulse: 0,
      pulseSpeed: 0.02 + Math.random() * 0.03,
      note: Math.floor(Math.random() * 12) + 48,
      lastPulseTime: Date.now()
    };

    collectivePoints.push(point);

    if (collectivePoints.length > maxPoints) {
      collectivePoints.shift();
    }

    return point;
  };

  const drawPoints = (ctx, pointsArray, isCollective = false) => {
    pointsArray.forEach(point => {
      ctx.globalAlpha = point.opacity;
      ctx.fillStyle = point.color;

      if (isCollective) {
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.radius * (1 + point.pulse * 0.1), 0, Math.PI * 2);
        ctx.fill();
      } else {
        const gradient = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, point.radius * (1 + point.pulse * 0.1));
        gradient.addColorStop(0, point.color);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.radius * (1 + point.pulse * 0.1), 0, Math.PI * 2);
        ctx.fill();
      }
    });
  };

  const drawLines = (ctx, pointsArray) => {
    for (let i = 0; i < pointsArray.length; i++) {
      for (let j = i + 1; j < pointsArray.length; j++) {
        const pointA = pointsArray[i];
        const pointB = pointsArray[j];
        const distance = Math.sqrt(Math.pow(pointA.x - pointB.x, 2) + Math.pow(pointA.y - pointB.y, 2));

        if (distance < 50) {
          const alpha = 1 - distance / 50;
          ctx.globalAlpha = alpha * pointA.opacity * pointB.opacity;
          ctx.strokeStyle = pointA.color;
          ctx.lineWidth = 1;

          ctx.beginPath();
          ctx.moveTo(pointA.x, pointA.y);
          ctx.lineTo(pointB.x, pointB.y);
          ctx.stroke();

          if (Math.random() < 0.01) {
            playChocalho(Math.floor(Math.random() * chocalhoBuffers.length));
          }
        }
      }
    }
  };

  const updatePoints = (pointsArray, ctx) => {
    const currentTime = Date.now();

    pointsArray.forEach(point => {
      if (currentTime - point.lastPulseTime > 1000) {
        point.pulse += point.pulseSpeed;
        if (point.pulse > 1 || point.pulse < 0) {
          point.pulseSpeed *= -1;
          point.lastPulseTime = currentTime;
        }
      }

      if (point.targetRadius !== point.radius) {
        point.radius += (point.targetRadius - point.radius) * 0.1;
      }
    });
  };

  const collectivePulse = () => {
    if (isDestroyed || isFrozen) return;

    isCollectivePulsing = true;
    const pulseDuration = 2000;
    const startTime = Date.now();

    const pulse = () => {
      if (isDestroyed || isFrozen) return;

      const elapsed = Date.now() - startTime;
      const progress = Math.sin((elapsed / pulseDuration) * Math.PI);

      points.forEach(point => {
        point.pulse = progress;
      });

      collectivePoints.forEach(point => {
        point.pulse = progress;
      });

      if (elapsed < pulseDuration) {
        animationFrameId = requestAnimationFrame(pulse);
      } else {
        isCollectivePulsing = false;
        if (points.length > 0) {
          collectivePulseInterval = setTimeout(collectivePulse, 5000);
        }
      }
    };

    pulse();
  };

  const freezeField = () => {
    isFrozen = true;
    const textElement = createTextElement('Ou então…', 'trémulo');

    textElement.addEventListener('click', () => {
      isInverted = !isInverted;
      textElement.remove();
      isFrozen = false;
      lastInteractionTime = Date.now();
    });
  };

  const generateTicket = (ctx) => {
    const ticketCanvas = document.createElement('canvas');
    ticketCanvas.width = 200;
    ticketCanvas.height = 200;
    const ticketCtx = ticketCanvas.getContext('2d');

    ticketCtx.fillStyle = '#fff';
    ticketCtx.fillRect(0, 0, ticketCanvas.width, ticketCanvas.height);

    const ticketTexts = [
      'O campo lembra-se de ti.',
      'O ponto que faltava.',
      'Agora é infinito.'
    ];
    const ticketText = ticketTexts[Math.floor(Math.random() * ticketTexts.length)];

    drawPoints(ticketCtx, points);
    drawLines(ticketCtx, points);

    createTicketElement(ticketCanvas.toDataURL(), ticketText);
  };

  const handleInteraction = (x, y, ctx) => {
    if (isDestroyed) return;

    lastInteractionTime = Date.now();

    if (isFrozen) {
      isFrozen = false;
      const textElements = root.querySelectorAll(`.${experienceId}-text`);
      textElements.forEach(el => el.remove());
    }

    if (points.length === 0) {
      const textElements = root.querySelectorAll(`.${experienceId}-text`);
      textElements.forEach(el => el.remove());
      createTextElement('Pinta um ponto.', 'trémulo');
    }

    const point = createPoint(x, y, inkColor, ctx);

    if (points.length > 0) {
      point.targetRadius = 15;
      setTimeout(() => {
        if (isDestroyed) return;
        point.targetRadius = 10;
      }, 300);
    }

    if (points.length >= 3 && !isCollectivePulsing && !collectivePulseInterval) {
      collectivePulseInterval = setTimeout(collectivePulse, 5000);
    }

    if (points.length >= 5) {
      const collectivePoint = createCollectivePoint(
        Math.random() * ctx.canvas.width,
        Math.random() * ctx.canvas.height,
        ['#000000', '#FF0000', '#FFD700'][Math.floor(Math.random() * 3)]
      );
    }
  };

  const handleMouseMove = (e, ctx) => {
    if (isDestroyed) return;

    const rect = ctx.canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    createInkSpot(x, y, ctx);
  };

  const handleMouseDown = (e, ctx) => {
    if (isDestroyed) return;

    const rect = ctx.canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    handleInteraction(x, y, ctx);
  };

  const handleTouchMove = (e, ctx) => {
    if (isDestroyed) return;

    e.preventDefault();
    const rect = ctx.canvas.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    createInkSpot(x, y, ctx);
  };

  const handleTouchEnd = (e, ctx) => {
    if (isDestroyed) return;

    e.preventDefault();
    const rect = ctx.canvas.getBoundingClientRect();
    const touch = e.changedTouches[0];
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    handleInteraction(x, y, ctx);
  };

  const handleKeyDown = (e, ctx) => {
    if (isDestroyed) return;

    if (e.key === 'Enter') {
      const x = ctx.canvas.width / 2;
      const y = ctx.canvas.height / 2;
      handleInteraction(x, y, ctx);
    }
  };

  const animate = (ctx) => {
    if (isDestroyed) return;

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    if (isInverted) {
      ctx.fillStyle = '#FFD700';
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    } else {
      ctx.fillStyle = '#f5f5f5';
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }

    updatePoints(points, ctx);
    updatePoints(collectivePoints, ctx);

    if (isInverted) {
      ctx.globalCompositeOperation = 'destination-out';
      drawPoints(ctx, points);
      drawPoints(ctx, collectivePoints, true);
      ctx.globalCompositeOperation = 'source-over';
    } else {
      drawPoints(ctx, points);
      drawPoints(ctx, collectivePoints, true);
      drawLines(ctx, points);
      drawLines(ctx, collectivePoints);
    }

    if (Date.now() - lastInteractionTime > 10000 && points.length > 0 && !isFrozen) {
      freezeField();
    }

    animationFrameId = requestAnimationFrame(() => animate(ctx));
  };

  const init = () => {
    addStyles();
    const canvas = createCanvas();
    const ctx = canvas.getContext('2d');

    canvas.width = root.clientWidth;
    canvas.height = root.clientHeight;

    initAudio();

    createTextElement('Pinta um ponto.', 'trémulo');

    canvas.addEventListener('mousemove', (e) => handleMouseMove(e, ctx));
    canvas.addEventListener('mousedown', (e) => handleMouseDown(e, ctx));
    canvas.addEventListener('touchmove', (e) => handleTouchMove(e, ctx), { passive: false });
    canvas.addEventListener('touchend', (e) => handleTouchEnd(e, ctx), { passive: false });
    document.addEventListener('keydown', (e) => handleKeyDown(e, ctx));

    animate(ctx);

    setTimeout(() => {
      if (isDestroyed) return;
      generateTicket(ctx);
    }, 30000);
  };

  const destroy = () => {
    isDestroyed = true;

    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }

    if (collectivePulseInterval) {
      clearTimeout(collectivePulseInterval);
    }

    if (audioContext) {
      audioContext.close();
    }

    const canvas = document.getElementById(canvasId);
    if (canvas) {
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchend', handleTouchEnd);
      root.removeChild(canvas);
    }

    document.removeEventListener('keydown', handleKeyDown);

    const textElements = root.querySelectorAll(`.${experienceId}-text`);
    textElements.forEach(el => el.remove());

    const ticketElement = root.querySelector(`.${experienceId}-ticket`);
    if (ticketElement) {
      ticketElement.removeEventListener('click', () => {});
      root.removeChild(ticketElement);
    }

    removeStyles();

    onClose();
  };

  init();

  return {
    destroy
  };
};
