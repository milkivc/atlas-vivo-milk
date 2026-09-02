export function mountCuratorialExperience({ root, context = {}, onClose = () => {} }) {
    const experienceId = 'cinco-portas';
    const styleId = `${experienceId}-styles`;
    const containerId = `${experienceId}-container`;
    const canvasId = `${experienceId}-canvas`;
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    let animationFrameId;
    let timeoutIds = [];
    let audioNodes = [];
    let isDestroyed = false;

    const styles = `
        #${containerId} {
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
            background-color: #000;
        }

        #${canvasId} {
            display: block;
            width: 100%;
            height: 100%;
        }

        .${experienceId}-text {
            position: absolute;
            color: rgba(255, 255, 255, 0.8);
            font-family: Arial, sans-serif;
            font-size: 1.5rem;
            text-align: center;
            width: 100%;
            top: 50%;
            transform: translateY(-50%);
            pointer-events: none;
            animation: ${experienceId}-pulse 2s infinite;
        }

        @keyframes ${experienceId}-pulse {
            0% { opacity: 0.7; }
            50% { opacity: 1; }
            100% { opacity: 0.7; }
        }

        @media (prefers-reduced-motion: reduce) {
            .${experienceId}-text {
                animation: none;
                opacity: 1;
            }
        }
    `;

    function addStyles() {
        const styleElement = document.createElement('style');
        styleElement.id = styleId;
        styleElement.textContent = styles;
        document.head.appendChild(styleElement);
    }

    function removeStyles() {
        const styleElement = document.getElementById(styleId);
        if (styleElement) {
            document.head.removeChild(styleElement);
        }
    }

    function createCanvas() {
        const canvas = document.createElement('canvas');
        canvas.id = canvasId;
        return canvas;
    }

    function createTextElement(text) {
        const textElement = document.createElement('div');
        textElement.className = `${experienceId}-text`;
        textElement.textContent = text;
        return textElement;
    }

    function createContainer() {
        const container = document.createElement('div');
        container.id = containerId;
        return container;
    }

    function setupDOM() {
        const container = createContainer();
        const canvas = createCanvas();
        const textElement = createTextElement('Abre uma porta. Não perguntes para onde.');
        container.appendChild(canvas);
        container.appendChild(textElement);
        root.appendChild(container);
        return { container, canvas, textElement };
    }

    function createAudioBuffer(frequency, duration) {
        const sampleRate = audioContext.sampleRate;
        const buffer = audioContext.createBuffer(1, sampleRate * duration, sampleRate);
        const data = buffer.getChannelData(0);

        for (let i = 0; i < sampleRate * duration; i++) {
            data[i] = Math.sin(2 * Math.PI * frequency * i / sampleRate);
        }

        return buffer;
    }

    function playSound(frequency, duration) {
        if (isDestroyed) return;

        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.type = 'sine';
        oscillator.frequency.value = frequency;
        gainNode.gain.value = 0.5;

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.start();
        oscillator.stop(audioContext.currentTime + duration);

        audioNodes.push(oscillator, gainNode);
    }

    function createMurmurSound() {
        const buffer = createAudioBuffer(100, 5);
        const source = audioContext.createBufferSource();
        source.buffer = buffer;
        source.loop = true;

        const gainNode = audioContext.createGain();
        gainNode.gain.value = 0.3;

        source.connect(gainNode);
        gainNode.connect(audioContext.destination);

        source.start();
        audioNodes.push(source, gainNode);

        return gainNode;
    }

    function createDoorSound(doorType) {
        let frequency;
        switch (doorType) {
            case 'wood':
                frequency = 200;
                break;
            case 'metal':
                frequency = 300;
                break;
            case 'fabric':
                frequency = 150;
                break;
            case 'glass':
                frequency = 400;
                break;
            case 'shadow':
                frequency = 50;
                break;
            default:
                frequency = 100;
        }

        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.type = 'sine';
        oscillator.frequency.value = frequency;
        gainNode.gain.value = 0.5;

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.5);

        audioNodes.push(oscillator, gainNode);
    }

    function createEcoSound() {
        const buffer = createAudioBuffer(50, 2);
        const source = audioContext.createBufferSource();
        source.buffer = buffer;
        source.loop = true;

        const gainNode = audioContext.createGain();
        gainNode.gain.value = 0.2;

        source.connect(gainNode);
        gainNode.connect(audioContext.destination);

        source.start();
        audioNodes.push(source, gainNode);

        return gainNode;
    }

    function createFragmentSound(fragmentType) {
        let frequency;
        switch (fragmentType) {
            case 'memory':
                frequency = 120;
                break;
            case 'sound':
                frequency = 180;
                break;
            case 'word':
                frequency = 150;
                break;
            case 'image':
                frequency = 200;
                break;
            case 'silence':
                frequency = 80;
                break;
            default:
                frequency = 100;
        }

        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.type = 'sine';
        oscillator.frequency.value = frequency;
        gainNode.gain.value = 0.4;

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.start();
        oscillator.stop(audioContext.currentTime + 1);

        audioNodes.push(oscillator, gainNode);
    }

    function drawInitialScene(ctx, canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = Math.min(canvas.width, canvas.height) * 0.1;

        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(centerX - radius * 0.5, centerY - radius * 1.5);
        ctx.lineTo(centerX - radius * 0.5, centerY + radius * 1.5);
        ctx.lineTo(centerX + radius * 0.5, centerY + radius * 1.5);
        ctx.lineTo(centerX + radius * 0.5, centerY - radius * 1.5);
        ctx.closePath();
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fill();
    }

    function drawCorridor(ctx, canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const centerX = canvas.width / 2;
        const corridorWidth = canvas.width * 0.8;
        const corridorHeight = canvas.height * 0.6;
        const doorWidth = corridorWidth / 5;
        const doorHeight = corridorHeight * 0.8;

        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        ctx.fillRect(centerX - corridorWidth / 2, canvas.height / 2 - corridorHeight / 2, corridorWidth, corridorHeight);

        const doorTypes = ['wood', 'metal', 'fabric', 'glass', 'shadow'];
        const doorColors = {
            wood: 'rgba(139, 69, 19, 0.8)',
            metal: 'rgba(169, 169, 169, 0.8)',
            fabric: 'rgba(255, 192, 203, 0.8)',
            glass: 'rgba(173, 216, 230, 0.8)',
            shadow: 'rgba(0, 0, 0, 0.5)'
        };

        for (let i = 0; i < 5; i++) {
            const doorX = centerX - corridorWidth / 2 + i * doorWidth;
            ctx.fillStyle = doorColors[doorTypes[i]];
            ctx.fillRect(doorX, canvas.height / 2 - doorHeight / 2, doorWidth, doorHeight);
        }
    }

    function drawFragment(ctx, canvas, fragmentType) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const fragmentWidth = canvas.width * 0.6;
        const fragmentHeight = canvas.height * 0.6;

        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        ctx.fillRect(centerX - fragmentWidth / 2, centerY - fragmentHeight / 2, fragmentWidth, fragmentHeight);

        const fragmentColors = {
            memory: 'rgba(139, 69, 19, 0.5)',
            sound: 'rgba(169, 169, 169, 0.5)',
            word: 'rgba(255, 192, 203, 0.5)',
            image: 'rgba(173, 216, 230, 0.5)',
            silence: 'rgba(0, 0, 0, 0.3)'
        };

        ctx.fillStyle = fragmentColors[fragmentType];
        ctx.fillRect(centerX - fragmentWidth / 2, centerY - fragmentHeight / 2, fragmentWidth, fragmentHeight);
    }

    function handleInitialClick(canvas, ctx, textElement) {
        if (isDestroyed) return;

        textElement.style.display = 'none';
        drawCorridor(ctx, canvas);

        const murmurGain = createMurmurSound();
        const ecoGain = createEcoSound();

        canvas.addEventListener('mousemove', (e) => {
            if (isDestroyed) return;

            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = canvas.width / 2;
            const corridorWidth = canvas.width * 0.8;
            const doorWidth = corridorWidth / 5;

            for (let i = 0; i < 5; i++) {
                const doorX = centerX - corridorWidth / 2 + i * doorWidth;
                if (x >= doorX && x <= doorX + doorWidth && y >= canvas.height / 2 - (canvas.height * 0.6 * 0.8) / 2 && y <= canvas.height / 2 + (canvas.height * 0.6 * 0.8) / 2) {
                    const doorTypes = ['wood', 'metal', 'fabric', 'glass', 'shadow'];
                    createDoorSound(doorTypes[i]);

                    if ('vibrate' in navigator) {
                        navigator.vibrate(50);
                    }

                    const timeoutId = setTimeout(() => {
                        if (isDestroyed) return;

                        const fragmentTypes = ['memory', 'sound', 'word', 'image', 'silence'];
                        drawFragment(ctx, canvas, fragmentTypes[i]);
                        createFragmentSound(fragmentTypes[i]);

                        const fragmentTimeoutId = setTimeout(() => {
                            if (isDestroyed) return;

                            drawCorridor(ctx, canvas);
                        }, 3000);

                        timeoutIds.push(fragmentTimeoutId);
                    }, 3000);

                    timeoutIds.push(timeoutId);
                }
            }
        });
    }

    function init() {
        addStyles();
        const { canvas, textElement } = setupDOM();
        const ctx = canvas.getContext('2d');

        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        drawInitialScene(ctx, canvas);

        const murmurGain = createMurmurSound();

        canvas.addEventListener('click', () => {
            if (isDestroyed) return;

            handleInitialClick(canvas, ctx, textElement);
        });

        const handleResize = () => {
            if (isDestroyed) return;

            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            drawInitialScene(ctx, canvas);
        };

        window.addEventListener('resize', handleResize);

        return {
            destroy: () => {
                if (isDestroyed) return;

                isDestroyed = true;

                window.removeEventListener('resize', handleResize);

                const container = document.getElementById(containerId);
                if (container) {
                    root.removeChild(container);
                }

                removeStyles();

                if (animationFrameId) {
                    cancelAnimationFrame(animationFrameId);
                }

                timeoutIds.forEach(id => clearTimeout(id));

                audioNodes.forEach(node => {
                    if (node instanceof AudioBufferSourceNode) {
                        node.stop();
                    } else if (node instanceof OscillatorNode) {
                        node.stop();
                    }
                });

                audioContext.close();
            }
        };
    }

    return init();
}
