export function mountCuratorialExperience({ root, context = {}, onClose = () => {} }) {
  const experienceId = 'reizinho-sainha';
  const styleId = `${experienceId}-styles`;
  const canvasId = `${experienceId}-canvas`;
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  let animationFrameId;
  let audioBuffer;
  let audioSource;
  let gainNode;
  let analyser;
  let isVibrating = false;
  let currentRule = '';
  let isRuleBroken = false;
  let crownName = '';
  let sharedCrowns = [];
  let ruleBreakCount = 0;
  let lastGestureTime = Date.now();
  let silenceTimeout;
  let isSilent = false;

  // Create and inject styles
  const styleElement = document.createElement('style');
  styleElement.id = styleId;
  styleElement.textContent = `
    #${experienceId} {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background-color: #f0f0f0;
      touch-action: manipulation;
    }

    #${canvasId} {
      display: block;
      width: 100%;
      height: 100%;
    }

    .reizinho-title {
      position: absolute;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      font-family: 'Comic Sans MS', cursive, sans-serif;
      font-size: 2rem;
      color: #333;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
      z-index: 10;
    }

    .reizinho-title .h-char {
      display: inline-block;
      animation: sardineJump 0.5s infinite alternate;
    }

    @keyframes sardineJump {
      0% { transform: translateY(0); }
      100% { transform: translateY(-5px); }
    }

    .rule-text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-family: 'Comic Sans MS', cursive, sans-serif;
      font-size: 1.5rem;
      color: #333;
      text-align: center;
      z-index: 10;
      opacity: 0;
      transition: opacity 0.5s;
    }

    .reizinho-icon {
      position: absolute;
      width: 50px;
      height: 50px;
      background-color: #ffcc00;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Comic Sans MS', cursive, sans-serif;
      font-size: 1.5rem;
      color: #333;
      z-index: 10;
      opacity: 0;
      transition: opacity 0.5s;
    }

    .crown {
      position: absolute;
      width: 30px;
      height: 30px;
      background-color: #ffcc00;
      border-radius: 50%;
      z-index: 10;
      opacity: 0;
      transition: opacity 0.5s;
    }

    .shared-crown {
      position: absolute;
      width: 20px;
      height: 20px;
      background-color: #ff9900;
      border-radius: 50%;
      z-index: 5;
    }
  `;
  document.head.appendChild(styleElement);

  // Create and append canvas
  const canvas = document.createElement('canvas');
  canvas.id = canvasId;
  root.appendChild(canvas);

  // Create title element
  const titleElement = document.createElement('div');
  titleElement.className = 'reizinho-title';
  titleElement.innerHTML = 'Reizinho <span class="h-char">S</span>ainha';
  root.appendChild(titleElement);

  // Create rule text element
  const ruleTextElement = document.createElement('div');
  ruleTextElement.className = 'rule-text';
  root.appendChild(ruleTextElement);

  // Create Reizinho icon
  const reizinhoIcon = document.createElement('div');
  reizinhoIcon.className = 'reizinho-icon';
  reizinhoIcon.textContent = '👑';
  root.appendChild(reizinhoIcon);

  // Create crown element
  const crownElement = document.createElement('div');
  crownElement.className = 'crown';
  root.appendChild(crownElement);

  // Initialize canvas context
  const ctx = canvas.getContext('2d');
  let width = canvas.width = canvas.offsetWidth;
  let height = canvas.height = canvas.offsetHeight;

  // Initialize shared crowns
  function initializeSharedCrowns() {
    sharedCrowns = [];
    const crownCount = Math.floor(Math.random() * 5) + 3;
    for (let i = 0; i < crownCount; i++) {
      sharedCrowns.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        element: document.createElement('div')
      });
      sharedCrowns[i].element.className = 'shared-crown';
      root.appendChild(sharedCrowns[i].element);
    }
  }

  // Generate crown name
  function generateCrownName() {
    const adjectives = ['Feliz', 'Travesso', 'Brincalhão', 'Poético', 'Absurdo', 'Desatino'];
    const nouns = ['Rei', 'Príncipe', 'Sardinha', 'Coroa', 'Fantasma', 'Anjo'];
    return `${adjectives[Math.floor(Math.random() * adjectives.length)]} ${nouns[Math.floor(Math.random() * nouns.length)]}`;
  }

  // Create audio buffer from base64 data
  function createAudioBufferFromBase64(base64Data) {
    const binaryString = atob(base64Data.split(',')[1]);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
  }

  // Load audio buffer
  async function loadAudioBuffer() {
    try {
      // Base64 encoded audio data (example, replace with actual data)
      const base64Data = 'data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU...';
      const arrayBuffer = createAudioBufferFromBase64(base64Data);
      audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    } catch (error) {
      console.error('Error loading audio buffer:', error);
    }
  }

  // Play sound
  function playSound(buffer, loop = false) {
    if (audioContext.state === 'suspended') {
      audioContext.resume();
    }

    audioSource = audioContext.createBufferSource();
    audioSource.buffer = buffer;
    audioSource.loop = loop;

    gainNode = audioContext.createGain();
    gainNode.gain.value = 0.5;

    analyser = audioContext.createAnalyser();
    analyser.fftSize = 256;

    audioSource.connect(gainNode);
    gainNode.connect(analyser);
    analyser.connect(audioContext.destination);

    audioSource.start(0);
  }

  // Stop sound
  function stopSound() {
    if (audioSource) {
      audioSource.stop();
      audioSource.disconnect();
    }
  }

  // Trigger vibration
  function triggerVibration(duration = 200) {
    if (navigator.vibrate && !isVibrating) {
      isVibrating = true;
      navigator.vibrate(duration);
      setTimeout(() => {
        isVibrating = false;
      }, duration);
    }
  }

  // Handle cursor movement
  function handleCursorMovement(e) {
    const x = e.clientX || e.touches[0].clientX;
    const y = e.clientY || e.touches[0].clientY;

    // Update last gesture time
    lastGestureTime = Date.now();

    // Clear silence timeout if active
    if (silenceTimeout) {
      clearTimeout(silenceTimeout);
      silenceTimeout = null;
    }

    // Reset silence state
    if (isSilent) {
      isSilent = false;
      // Resume animation
      animationFrameId = requestAnimationFrame(animate);
    }

    // Check if rule is broken
    if (currentRule && !isRuleBroken) {
      if (currentRule.includes('círculos') && !isCircularTrajectory(x, y)) {
        breakRule();
      } else if (currentRule.includes('linhas retas') && isCircularTrajectory(x, y)) {
        breakRule();
      }
    }

    // Update cursor position
    updateCursorPosition(x, y);
  }

  // Check if trajectory is circular
  function isCircularTrajectory(x, y) {
    // Simple check for circular trajectory
    // In a real implementation, you would track the trajectory over time
    return Math.abs(x - width / 2) < 100 && Math.abs(y - height / 2) < 100;
  }

  // Update cursor position
  function updateCursorPosition(x, y) {
    // In a real implementation, you would track the cursor position
    // and apply the current rule's constraints
  }

  // Break the rule
  function breakRule() {
    isRuleBroken = true;
    ruleBreakCount++;

    // Show rule text
    ruleTextElement.textContent = 'Regra quebrada!';
    ruleTextElement.style.opacity = '1';

    // Play sound
    if (audioBuffer) {
      playSound(audioBuffer);
    }

    // Trigger vibration
    triggerVibration();

    // Show Reizinho icon
    reizinhoIcon.style.left = `${Math.random() * (width - 50)}px`;
    reizinhoIcon.style.top = `${Math.random() * (height - 50)}px`;
    reizinhoIcon.style.opacity = '1';

    // Show crown
    crownElement.style.left = `${Math.random() * (width - 30)}px`;
    crownElement.style.top = `${Math.random() * (height - 30)}px`;
    crownElement.style.opacity = '1';

    // Generate crown name
    crownName = generateCrownName();

    // Schedule next step
    setTimeout(() => {
      ruleTextElement.style.opacity = '0';
      reizinhoIcon.style.opacity = '0';
      showCrownOptions();
    }, 3000);
  }

  // Show crown options
  function showCrownOptions() {
    const options = [
      'Quebrar outra vez',
      'Inventar uma regra impossível',
      'Ficar em silêncio'
    ];

    ruleTextElement.textContent = 'O que queres fazer?';
    ruleTextElement.style.opacity = '1';

    // Create option elements
    options.forEach((option, index) => {
      const optionElement = document.createElement('div');
      optionElement.className = 'rule-option';
      optionElement.textContent = option;
      optionElement.style.position = 'absolute';
      optionElement.style.left = '50%';
      optionElement.style.top = `${50 + index * 30}%`;
      optionElement.style.transform = 'translate(-50%, -50%)';
      optionElement.style.fontFamily = 'Comic Sans MS, cursive, sans-serif';
      optionElement.style.fontSize = '1.2rem';
      optionElement.style.color = '#333';
      optionElement.style.cursor = 'pointer';
      optionElement.style.zIndex = '10';
      optionElement.addEventListener('click', () => handleOptionClick(option));
      root.appendChild(optionElement);
    });
  }

  // Handle option click
  function handleOptionClick(option) {
    // Remove option elements
    const optionElements = document.querySelectorAll('.rule-option');
    optionElements.forEach(element => element.remove());

    if (option === 'Quebrar outra vez') {
      // Reset rule state
      isRuleBroken = false;
      currentRule = '';
      ruleTextElement.style.opacity = '0';
      crownElement.style.opacity = '0';
    } else if (option === 'Inventar uma regra impossível') {
      // Generate a random impossible rule
      const impossibleRules = [
        'Só podes clicar com a mão não dominante',
        'Tens de rir antes de clicar',
        'Só podes mover o cursor de manhã',
        'Tens de fazer um gesto com a outra mão',
        'Só podes clicar se estiveres a olhar para o ecrã'
      ];
      currentRule = impossibleRules[Math.floor(Math.random() * impossibleRules.length)];
      isRuleBroken = false;
      ruleTextElement.textContent = currentRule;
      ruleTextElement.style.opacity = '1';
      crownElement.style.opacity = '0';
    } else if (option === 'Ficar em silêncio') {
      // Handle silence
      isSilent = true;
      ruleTextElement.textContent = 'O silêncio também é uma regra.';
      ruleTextElement.style.opacity = '1';
      crownElement.style.opacity = '0';

      // Play bell sound
      if (audioBuffer) {
        playSound(audioBuffer);
      }

      // Stop animation
      cancelAnimationFrame(animationFrameId);

      // Schedule next step
      setTimeout(() => {
        ruleTextElement.style.opacity = '0';
        showCrownOptions();
      }, 3000);
    }
  }

  // Handle silence
  function handleSilence() {
    if (!isSilent && Date.now() - lastGestureTime > 15000) {
      isSilent = true;
      ruleTextElement.textContent = 'O silêncio também é uma regra.';
      ruleTextElement.style.opacity = '1';

      // Play bell sound
      if (audioBuffer) {
        playSound(audioBuffer);
      }

      // Stop animation
      cancelAnimationFrame(animationFrameId);
    }
  }

  // Animate shared crowns
  function animateSharedCrowns() {
    sharedCrowns.forEach(crown => {
      crown.x += crown.vx;
      crown.y += crown.vy;

      // Bounce off edges
      if (crown.x < 0 || crown.x > width) {
        crown.vx *= -1;
      }
      if (crown.y < 0 || crown.y > height) {
        crown.vy *= -1;
      }

      // Update position
      crown.element.style.left = `${crown.x}px`;
      crown.element.style.top = `${crown.y}px`;
    });
  }

  // Main animation loop
  function animate() {
    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Animate shared crowns
    animateSharedCrowns();

    // Handle silence
    handleSilence();

    // Continue animation
    animationFrameId = requestAnimationFrame(animate);
  }

  // Handle resize
  function handleResize() {
    width = canvas.width = canvas.offsetWidth;
    height = canvas.height = canvas.offsetHeight;
  }

  // Initialize experience
  async function init() {
    // Load audio buffer
    await loadAudioBuffer();

    // Initialize shared crowns
    initializeSharedCrowns();

    // Start animation
    animationFrameId = requestAnimationFrame(animate);

    // Add event listeners
    canvas.addEventListener('mousemove', handleCursorMovement);
    canvas.addEventListener('touchmove', handleCursorMovement);
    window.addEventListener('resize', handleResize);

    // Show initial title animation
    setTimeout(() => {
      titleElement.style.opacity = '0';
      setTimeout(() => {
        titleElement.style.display = 'none';
        // Show initial rule suggestion
        ruleTextElement.textContent = 'Inventa uma regra. Qualquer uma.';
        ruleTextElement.style.opacity = '1';
      }, 1000);
    }, 2000);
  }

  // Start experience
  init();

  // Return destroy function
  return {
    destroy() {
      // Remove event listeners
      canvas.removeEventListener('mousemove', handleCursorMovement);
      canvas.removeEventListener('touchmove', handleCursorMovement);
      window.removeEventListener('resize', handleResize);

      // Stop animation
      cancelAnimationFrame(animationFrameId);

      // Stop sound
      stopSound();

      // Close audio context
      if (audioContext.state !== 'closed') {
        audioContext.close();
      }

      // Remove elements
      root.removeChild(canvas);
      root.removeChild(titleElement);
      root.removeChild(ruleTextElement);
      root.removeChild(reizinhoIcon);
      root.removeChild(crownElement);
      sharedCrowns.forEach(crown => root.removeChild(crown.element));

      // Remove style
      document.head.removeChild(styleElement);

      // Call onClose callback
      onClose();
    }
  };
}
