export function mountCuratorialExperience({ root, context = {}, onClose = () => {} }) {
    const experienceId = 'escutar-silencio';
    const styleId = `${experienceId}-styles`;
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    let animationFrameId;
    let resizeObserver;
    let audioNodes = [];
    let isVibrating = false;

    // Inject styles
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
        #${experienceId} {
            position: relative;
            width: 100%;
            height: 100%;
            background-color: #000;
            overflow: hidden;
            cursor: none;
        }

        #${experienceId} .light-point {
            position: absolute;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.7);
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
            transform: translate(-50%, -50%);
            transition: all 0.3s ease;
        }

        #${experienceId} .wave {
            position: absolute;
            border-radius: 50%;
            border: 1px solid rgba(255, 255, 255, 0.3);
            pointer-events: none;
        }

        #${experienceId} .text-overlay {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: rgba(255, 255, 255, 0.7);
            font-family: Arial, sans-serif;
            font-size: 24px;
            text-align: center;
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
            opacity: 0;
            transition: opacity 0.5s ease;
        }

        #${experienceId} .fragment {
            position: absolute;
            opacity: 0;
            transition: opacity 0.5s ease;
        }

        #${experienceId} .fragment img {
            max-width: 200px;
            max-height: 200px;
        }

        #${experienceId} .fragment p {
            color: rgba(255, 255, 255, 0.7);
            font-family: Arial, sans-serif;
            font-size: 18px;
            text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
        }
    `;
    document.head.appendChild(style);

    // Create DOM elements
    const container = document.createElement('div');
    container.id = experienceId;
    root.appendChild(container);

    const lightPoint = document.createElement('div');
    lightPoint.className = 'light-point';
    container.appendChild(lightPoint);

    const textOverlay = document.createElement('div');
    textOverlay.className = 'text-overlay';
    textOverlay.textContent = 'Respira. O silêncio também é um lugar.';
    container.appendChild(textOverlay);

    // Initialize state
    let stage = 'limiar';
    let waves = [];
    let fragments = [];
    let lastMouseMoveTime = Date.now();
    let inactivityTimeout;
    let pulseInterval;
    let waveInterval;
    let fragmentInterval;
    let currentColor = '#ffffff';

    // Helper functions
    function createWave(x, y, size, color) {
        const wave = document.createElement('div');
        wave.className = 'wave';
        wave.style.left = `${x}px`;
        wave.style.top = `${y}px`;
        wave.style.width = `${size}px`;
        wave.style.height = `${size}px`;
        wave.style.borderColor = color;
        container.appendChild(wave);

        let currentSize = size;
        const maxSize = Math.max(container.clientWidth, container.clientHeight) * 2;
        const growInterval = setInterval(() => {
            currentSize += 2;
            wave.style.width = `${currentSize}px`;
            wave.style.height = `${currentSize}px`;
            wave.style.opacity = 1 - (currentSize / maxSize);

            if (currentSize >= maxSize) {
                clearInterval(growInterval);
                container.removeChild(wave);
                waves = waves.filter(w => w !== wave);
            }
        }, 16);

        waves.push({ element: wave, interval: growInterval });
    }

    function createFragment(type, x, y) {
        const fragment = document.createElement('div');
        fragment.className = 'fragment';

        if (type === 'image') {
            const img = document.createElement('img');
            img.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="100%" height="100%" fill="none" stroke="white" stroke-width="2"/></svg>';
            fragment.appendChild(img);
        } else if (type === 'text') {
            const p = document.createElement('p');
            p.textContent = 'Silêncio';
            fragment.appendChild(p);
        } else if (type === 'symbol') {
            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.setAttribute('width', '50');
            svg.setAttribute('height', '50');
            svg.setAttribute('viewBox', '0 0 50 50');
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', '25');
            circle.setAttribute('cy', '25');
            circle.setAttribute('r', '20');
            circle.setAttribute('fill', 'none');
            circle.setAttribute('stroke', 'white');
            circle.setAttribute('stroke-width', '2');
            svg.appendChild(circle);
            fragment.appendChild(svg);
        }

        fragment.style.left = `${x}px`;
        fragment.style.top = `${y}px`;
        container.appendChild(fragment);

        setTimeout(() => {
            fragment.style.opacity = '1';
        }, 10);

        setTimeout(() => {
            fragment.style.opacity = '0';
            setTimeout(() => {
                container.removeChild(fragment);
                fragments = fragments.filter(f => f !== fragment);
            }, 500);
        }, 3000);

        fragments.push(fragment);
    }

    function playSubtleSound(frequency) {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.type = 'sine';
        oscillator.frequency.value = frequency;

        gainNode.gain.value = 0.05;
        gainNode.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.5);

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.5);

        audioNodes.push({ oscillator, gainNode });

        // Check for vibration support
        if (navigator.vibrate && !isVibrating) {
            navigator.vibrate(50);
            isVibrating = true;
            setTimeout(() => {
                isVibrating = false;
            }, 100);
        }
    }

    function playEchoSound() {
        const buffer = audioContext.createBuffer(1, audioContext.sampleRate * 0.5, audioContext.sampleRate);
        const data = buffer.getChannelData(0);

        for (let i = 0; i < data.length; i++) {
            data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (audioContext.sampleRate * 0.1));
        }

        const source = audioContext.createBufferSource();
        source.buffer = buffer;

        const gainNode = audioContext.createGain();
        gainNode.gain.value = 0.3;

        source.connect(gainNode);
        gainNode.connect(audioContext.destination);

        source.start();

        audioNodes.push({ source, gainNode });
    }

    function playMurmuringVoices() {
        const voices = ['Alcântara', 'Monsanto', 'Tejo', 'Lisboa', 'Porto'];
        const voice = voices[Math.floor(Math.random() * voices.length)];

        const utterance = new SpeechSynthesisUtterance(voice);
        utterance.rate = 0.5;
        utterance.pitch = 0.8;
        utterance.volume = 0.3;

        window.speechSynthesis.speak(utterance);
    }

    function updateLightPoint(x, y, color) {
        lightPoint.style.left = `${x}px`;
        lightPoint.style.top = `${y}px`;
        lightPoint.style.backgroundColor = color;
        lightPoint.style.boxShadow = `0 0 20px ${color}`;
    }

    function advanceStage() {
        switch (stage) {
            case 'limiar':
                stage = 'chamada';
                textOverlay.style.opacity = '1';
                setTimeout(() => {
                    textOverlay.style.opacity = '0';
                }, 5000);
                break;
            case 'chamada':
                stage = 'primeiro_gesto';
                break;
            case 'primeiro_gesto':
                stage = 'resposta_viva';
                const x = parseFloat(lightPoint.style.left) || container.clientWidth / 2;
                const y = parseFloat(lightPoint.style.top) || container.clientHeight / 2;
                createWave(x, y, 20, currentColor);
                playSubtleSound(30);
                break;
            case 'resposta_viva':
                stage = 'desvio';
                waves.forEach(wave => {
                    clearInterval(wave.interval);
                    container.removeChild(wave.element);
                });
                waves = [];
                lightPoint.style.width = '10px';
                lightPoint.style.height = '10px';
                setTimeout(() => {
                    const x = parseFloat(lightPoint.style.left) || container.clientWidth / 2;
                    const y = parseFloat(lightPoint.style.top) || container.clientHeight / 2;
                    updateLightPoint(x, y, currentColor);
                    lightPoint.style.width = '20px';
                    lightPoint.style.height = '20px';
                    const newX = x + 100;
                    const newY = y;
                    updateLightPoint(newX, newY, currentColor);
                    playEchoSound();
                }, 1000);
                break;
            case 'desvio':
                stage = 'aprofundamento_sensorial';
                playMurmuringVoices();
                break;
            case 'aprofundamento_sensorial':
                stage = 'escolha_acaso_silencio';
                lightPoint.style.animation = 'pulse 1s infinite';
                break;
            case 'escolha_acaso_silencio':
                stage = 'aparição';
                lightPoint.style.animation = 'none';
                const types = ['image', 'text', 'symbol'];
                const type = types[Math.floor(Math.random() * types.length)];
                const x = Math.random() * container.clientWidth;
                const y = Math.random() * container.clientHeight;
                createFragment(type, x, y);
                break;
            case 'aparição':
                stage = 'devolução';
                break;
            case 'devolução':
                stage = 'rasto_latencia';
                container.style.backgroundColor = '#000';
                lightPoint.style.backgroundColor = currentColor;
                lightPoint.style.boxShadow = `0 0 20px ${currentColor}`;
                break;
        }
    }

    // Event handlers
    function handleMouseMove(e) {
        lastMouseMoveTime = Date.now();
        clearTimeout(inactivityTimeout);

        if (stage === 'primeiro_gesto' || stage === 'aprofundamento_sensorial') {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            updateLightPoint(x, y, currentColor);

            if (stage === 'aprofundamento_sensorial') {
                const hue = Math.floor((x / container.clientWidth) * 360);
                currentColor = `hsl(${hue}, 100%, 50%)`;
                updateLightPoint(x, y, currentColor);
            }
        }

        inactivityTimeout = setTimeout(() => {
            if (Date.now() - lastMouseMoveTime > 3000) {
                if (stage === 'limiar') {
                    advanceStage();
                } else if (stage === 'primeiro_gesto') {
                    advanceStage();
                }
            }
        }, 3000);
    }

    function handleClick() {
        if (stage === 'primeiro_gesto' || stage === 'escolha_acaso_silencio') {
            advanceStage();
        }
    }

    function handleKeyDown(e) {
        if (e.key === 'Escape') {
            onClose();
        } else if (e.key === ' ' || e.key === 'Enter') {
            handleClick();
        }
    }

    // Initialize experience
    function init() {
        // Position light point in center
        updateLightPoint(container.clientWidth / 2, container.clientHeight / 2, '#ffffff');

        // Start pulsing light point
        pulseInterval = setInterval(() => {
            const scale = 1 + Math.sin(Date.now() / 500) * 0.1;
            lightPoint.style.transform = `translate(-50%, -50%) scale(${scale})`;
        }, 16);

        // Set up event listeners
        container.addEventListener('mousemove', handleMouseMove);
        container.addEventListener('click', handleClick);
        document.addEventListener('keydown', handleKeyDown);

        // Set up resize observer
        resizeObserver = new ResizeObserver(() => {
            if (stage === 'limiar') {
                updateLightPoint(container.clientWidth / 2, container.clientHeight / 2, '#ffffff');
            }
        });
        resizeObserver.observe(container);

        // Start experience
        advanceStage();
    }

    // Cleanup function
    function destroy() {
        // Clear intervals and timeouts
        clearInterval(pulseInterval);
        clearInterval(waveInterval);
        clearInterval(fragmentInterval);
        clearTimeout(inactivityTimeout);

        // Cancel animation frames
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }

        // Stop all audio nodes
        audioNodes.forEach(node => {
            if (node.oscillator) {
                node.oscillator.stop();
            }
            if (node.source) {
                node.source.stop();
            }
            if (node.gainNode) {
                node.gainNode.disconnect();
            }
        });
        audioNodes = [];

        // Close audio context
        if (audioContext.state !== 'closed') {
            audioContext.close();
        }

        // Remove event listeners
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('click', handleClick);
        document.removeEventListener('keydown', handleKeyDown);

        // Disconnect resize observer
        if (resizeObserver) {
            resizeObserver.disconnect();
        }

        // Remove DOM elements
        root.removeChild(container);
        document.head.removeChild(style);
    }

    // Start the experience
    init();

    return { destroy };
}
