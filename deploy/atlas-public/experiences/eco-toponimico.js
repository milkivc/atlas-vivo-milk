export function mountCuratorialExperience({ root, context = {}, onClose = () => {} }) {
    const experienceId = 'eco-toponimico';
    const styleId = `${experienceId}-styles`;
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    let animationFrameId;
    let audioNodes = [];
    let eventListeners = [];
    let timers = [];
    let hasVibration = 'vibrate' in navigator;
    let prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const createStyleElement = () => {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
            #${experienceId} {
                position: relative;
                width: 100%;
                height: 100%;
                background-color: #f5f5dc;
                overflow: hidden;
                touch-action: manipulation;
            }
            .organic-texture {
                position: absolute;
                width: 100%;
                height: 100%;
                background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23f5f5dc"/><path d="M0,50 Q25,25 50,50 T100,50" stroke="%23d2b48c" fill="none" stroke-width="1"/><path d="M50,0 Q75,25 50,50 T50,100" stroke="%23d2b48c" fill="none" stroke-width="1"/></svg>');
                opacity: 0.5;
            }
            .ink-blot {
                position: absolute;
                top: 50%;
                left: 50%;
                width: 100px;
                height: 100px;
                background-color: #000;
                border-radius: 50%;
                transform: translate(-50%, -50%);
                opacity: 0.7;
            }
            .instruction-text {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-family: 'Courier New', monospace;
                font-size: 24px;
                color: #000;
                opacity: 0;
                pointer-events: none;
            }
            .letter {
                position: absolute;
                font-family: 'Courier New', monospace;
                font-size: 36px;
                color: #000;
                pointer-events: none;
            }
            .shadow {
                position: absolute;
                top: 50%;
                left: 50%;
                width: 100px;
                height: 100px;
                background-color: rgba(0, 0, 0, 0.3);
                border-radius: 50%;
                transform: translate(-50%, -50%);
                opacity: 0;
            }
            .hidden-layer {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-family: 'Courier New', monospace;
                font-size: 20px;
                color: #000;
                opacity: 0;
                pointer-events: none;
            }
            .devolution-text {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-family: 'Courier New', monospace;
                font-size: 20px;
                color: #000;
                opacity: 0;
                pointer-events: none;
            }
        `;
        document.head.appendChild(style);
    };

    const createElements = () => {
        const container = document.createElement('div');
        container.id = experienceId;

        const organicTexture = document.createElement('div');
        organicTexture.className = 'organic-texture';

        const inkBlot = document.createElement('div');
        inkBlot.className = 'ink-blot';

        const instructionText = document.createElement('div');
        instructionText.className = 'instruction-text';
        instructionText.textContent = 'Diz o lugar.';

        const shadow = document.createElement('div');
        shadow.className = 'shadow';

        const hiddenLayer = document.createElement('div');
        hiddenLayer.className = 'hidden-layer';

        const devolutionText = document.createElement('div');
        devolutionText.className = 'devolution-text';

        container.appendChild(organicTexture);
        container.appendChild(inkBlot);
        container.appendChild(instructionText);
        container.appendChild(shadow);
        container.appendChild(hiddenLayer);
        container.appendChild(devolutionText);

        root.appendChild(container);

        return { container, organicTexture, inkBlot, instructionText, shadow, hiddenLayer, devolutionText };
    };

    const setupEventListeners = (elements) => {
        const { container, inkBlot, shadow } = elements;

        const handleFirstInteraction = (e) => {
            e.preventDefault();
            e.stopPropagation();

            if (e.type === 'click' || e.type === 'touchstart') {
                if (hasVibration) navigator.vibrate(50);
                explodeInkBlot(inkBlot);
                showInstructionText(elements.instructionText);
                container.removeEventListener('click', handleFirstInteraction);
                container.removeEventListener('touchstart', handleFirstInteraction);
            }
        };

        const handleInput = (e) => {
            e.preventDefault();
            e.stopPropagation();

            let inputText = '';
            if (e.type === 'keydown') {
                if (e.key.length === 1) {
                    inputText = e.key;
                }
            } else if (e.type === 'touchmove' || e.type === 'mousemove') {
                inputText = 'touch';
            }

            if (inputText) {
                if (hasVibration) navigator.vibrate(30);
                createEcho(inputText, e.clientX || e.touches[0].clientX, e.clientY || e.touches[0].clientY);
                revealShadow(elements.shadow);
            }
        };

        const handleShadowInteraction = (e) => {
            e.preventDefault();
            e.stopPropagation();

            if (hasVibration) navigator.vibrate(50);
            revealHiddenLayer(elements.hiddenLayer);
        };

        container.addEventListener('click', handleFirstInteraction);
        container.addEventListener('touchstart', handleFirstInteraction);
        eventListeners.push(() => {
            container.removeEventListener('click', handleFirstInteraction);
            container.removeEventListener('touchstart', handleFirstInteraction);
        });

        container.addEventListener('keydown', handleInput);
        container.addEventListener('touchmove', handleInput);
        container.addEventListener('mousemove', handleInput);
        eventListeners.push(() => {
            container.removeEventListener('keydown', handleInput);
            container.removeEventListener('touchmove', handleInput);
            container.removeEventListener('mousemove', handleInput);
        });

        shadow.addEventListener('click', handleShadowInteraction);
        shadow.addEventListener('touchstart', handleShadowInteraction);
        eventListeners.push(() => {
            shadow.removeEventListener('click', handleShadowInteraction);
            shadow.removeEventListener('touchstart', handleShadowInteraction);
        });
    };

    const explodeInkBlot = (inkBlot) => {
        inkBlot.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
        inkBlot.style.transform = 'translate(-50%, -50%) scale(1.5)';
        inkBlot.style.opacity = '0';

        setTimeout(() => {
            inkBlot.style.display = 'none';
        }, 500);
    };

    const showInstructionText = (instructionText) => {
        instructionText.style.transition = 'opacity 1s ease';
        instructionText.style.opacity = '1';

        setTimeout(() => {
            instructionText.style.transition = 'opacity 0.5s ease';
            instructionText.style.opacity = '0';
        }, 2000);
    };

    const createEcho = (inputText, x, y) => {
        const letters = inputText.split('');
        const container = document.getElementById(experienceId);

        letters.forEach((letter, index) => {
            const letterElement = document.createElement('div');
            letterElement.className = 'letter';
            letterElement.textContent = letter;
            letterElement.style.left = `${x}px`;
            letterElement.style.top = `${y}px`;
            container.appendChild(letterElement);

            const delay = index * 100;
            setTimeout(() => {
                animateLetter(letterElement, x, y);
                playTerritorialSound(letter);
            }, delay);
        });
    };

    const animateLetter = (letterElement, x, y) => {
        const duration = prefersReducedMotion ? 3000 : 1000;
        const startTime = performance.now();

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            const offsetX = (Math.random() - 0.5) * 200;
            const offsetY = (Math.random() - 0.5) * 200;
            const rotation = (Math.random() - 0.5) * 360;

            letterElement.style.transform = `translate(${x + offsetX * progress}px, ${y + offsetY * progress}px) rotate(${rotation * progress}deg)`;
            letterElement.style.opacity = 1 - progress;

            if (progress < 1) {
                animationFrameId = requestAnimationFrame(animate);
            } else {
                letterElement.remove();
            }
        };

        animationFrameId = requestAnimationFrame(animate);
    };

    const playTerritorialSound = (letter) => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.type = 'sine';
        oscillator.frequency.value = 440 + (letter.charCodeAt(0) - 97) * 10;

        gainNode.gain.value = 0.1;
        gainNode.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.5);

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.5);

        audioNodes.push(oscillator, gainNode);
    };

    const revealShadow = (shadow) => {
        shadow.style.transition = 'opacity 1s ease';
        shadow.style.opacity = '1';

        setTimeout(() => {
            shadow.style.transition = 'opacity 0.5s ease';
            shadow.style.opacity = '0';
        }, 3000);
    };

    const revealHiddenLayer = (hiddenLayer) => {
        hiddenLayer.style.transition = 'opacity 1s ease';
        hiddenLayer.style.opacity = '1';

        setTimeout(() => {
            hiddenLayer.style.transition = 'opacity 0.5s ease';
            hiddenLayer.style.opacity = '0';
        }, 3000);
    };

    const destroy = () => {
        cancelAnimationFrame(animationFrameId);
        audioNodes.forEach(node => {
            if (node instanceof OscillatorNode) {
                node.stop();
            }
            if (node instanceof AudioBufferSourceNode) {
                node.stop();
            }
        });
        audioContext.close();
        eventListeners.forEach(removeListener => removeListener());
        timers.forEach(timer => clearTimeout(timer));
        const styleElement = document.getElementById(styleId);
        if (styleElement) {
            document.head.removeChild(styleElement);
        }
        root.innerHTML = '';
        onClose();
    };

    createStyleElement();
    const elements = createElements();
    setupEventListeners(elements);

    return { destroy };
}
