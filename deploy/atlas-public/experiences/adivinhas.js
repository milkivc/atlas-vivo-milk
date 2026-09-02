export function mountCuratorialExperience({ root, context = {}, onClose = () => {} }) {
    const experienceId = 'adivinhas';
    const styleId = `${experienceId}-styles`;
    const particlesContainerId = `${experienceId}-particles`;
    const adivinhaContainerId = `${experienceId}-adivinha`;
    const responseContainerId = `${experienceId}-response`;
    const particlesCount = 100;
    const particles = [];
    let animationFrameId;
    let audioContext;
    let oscillator;
    let gainNode;
    let isPlaying = false;
    let currentAdivinha = '';
    let currentResponse = '';
    let currentWordIndex = 0;
    let wordInterval;
    let responseTimeout;
    let touchStartX = 0;
    let touchStartY = 0;
    let isTouching = false;

    const adivinhas = [
        { text: 'O que é que tem dentes e não come?', response: 'O garfo.' },
        { text: 'O que é que tem olhos e não vê?', response: 'A agulha.' },
        { text: 'O que é que tem chaves e não abre portas?', response: 'O piano.' },
        { text: 'O que é que tem cabeça e não tem corpo?', response: 'A moeda.' },
        { text: 'O que é que tem pernas e não anda?', response: 'A mesa.' },
        { text: 'O que é que tem folhas e não é árvore?', response: 'O livro.' },
        { text: 'O que é que tem asas e não é pássaro?', response: 'O avião.' },
        { text: 'O que é que tem boca e não fala?', response: 'O relógio.' },
        { text: 'O que é que tem chaves e não abre portas?', response: 'O piano.' },
        { text: 'O que é que tem pernas e não anda?', response: 'A cadeira.' },
        { text: 'O que é que tem folhas e não é árvore?', response: 'O livro.' },
        { text: 'O que é que tem asas e não é pássaro?', response: 'O avião.' },
        { text: 'O que é que tem boca e não fala?', response: 'O relógio.' },
        { text: 'O que é que tem chaves e não abre portas?', response: 'O piano.' },
        { text: 'O que é que tem pernas e não anda?', response: 'A mesa.' },
        { text: 'O que é que tem folhas e não é árvore?', response: 'O livro.' }
    ];

    const styles = `
        #${root.id} {
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
            background-color: rgba(0, 0, 0, 0.8);
            color: white;
            font-family: Arial, sans-serif;
            touch-action: manipulation;
        }

        #${particlesContainerId} {
            position: absolute;
            width: 100%;
            height: 100%;
            pointer-events: none;
        }

        #${adivinhaContainerId} {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            font-size: 1.5rem;
            max-width: 80%;
            pointer-events: none;
        }

        #${responseContainerId} {
            position: absolute;
            top: 70%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            font-size: 1.5rem;
            max-width: 80%;
            pointer-events: none;
        }

        .particle {
            position: absolute;
            width: 2px;
            height: 2px;
            background-color: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
        }

        .word {
            display: inline-block;
            margin: 0 5px;
            cursor: pointer;
            transition: transform 0.2s, color 0.2s;
        }

        .word:hover {
            transform: scale(1.2);
            color: #ffcc00;
        }

        .word.active {
            color: #ffcc00;
            font-weight: bold;
        }

        .response {
            opacity: 0;
            transition: opacity 0.5s;
        }

        .response.visible {
            opacity: 1;
        }
    `;

    function createStyleElement() {
        const styleElement = document.createElement('style');
        styleElement.id = styleId;
        styleElement.textContent = styles;
        return styleElement;
    }

    function createParticles() {
        const particlesContainer = document.createElement('div');
        particlesContainer.id = particlesContainerId;

        for (let i = 0; i < particlesCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particlesContainer.appendChild(particle);
            particles.push({
                element: particle,
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5
            });
        }

        return particlesContainer;
    }

    function createAdivinhaContainer() {
        const adivinhaContainer = document.createElement('div');
        adivinhaContainer.id = adivinhaContainerId;
        return adivinhaContainer;
    }

    function createResponseContainer() {
        const responseContainer = document.createElement('div');
        responseContainer.id = responseContainerId;
        return responseContainer;
    }

    function initAudioContext() {
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
            gainNode = audioContext.createGain();
            gainNode.gain.value = 0.1;
            gainNode.connect(audioContext.destination);
        }
    }

    function playSound(frequency, duration) {
        if (!isPlaying) return;

        initAudioContext();

        oscillator = audioContext.createOscillator();
        oscillator.type = 'sine';
        oscillator.frequency.value = frequency;
        oscillator.connect(gainNode);
        oscillator.start();

        setTimeout(() => {
            oscillator.stop();
        }, duration);
    }

    function vibrate(duration) {
        if (navigator.vibrate) {
            navigator.vibrate(duration);
        }
    }

    function updateParticles() {
        particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;

            if (particle.x < 0 || particle.x > window.innerWidth) {
                particle.vx *= -1;
            }

            if (particle.y < 0 || particle.y > window.innerHeight) {
                particle.vy *= -1;
            }

            particle.element.style.left = `${particle.x}px`;
            particle.element.style.top = `${particle.y}px`;
        });

        animationFrameId = requestAnimationFrame(updateParticles);
    }

    function showNextWord() {
        const words = currentAdivinha.split(' ');
        if (currentWordIndex < words.length) {
            const wordElement = document.createElement('span');
            wordElement.className = 'word';
            wordElement.textContent = words[currentWordIndex];
            wordElement.addEventListener('click', () => {
                wordElement.classList.add('active');
                playSound(440 + currentWordIndex * 100, 200);
                vibrate(100);
            });
            document.getElementById(adivinhaContainerId).appendChild(wordElement);
            currentWordIndex++;
            playSound(220 + currentWordIndex * 50, 100);
        } else {
            clearInterval(wordInterval);
            setTimeout(() => {
                showResponse();
            }, 2000);
        }
    }

    function showResponse() {
        const responseElement = document.createElement('div');
        responseElement.className = 'response';
        responseElement.textContent = currentResponse;
        document.getElementById(responseContainerId).appendChild(responseElement);

        setTimeout(() => {
            responseElement.classList.add('visible');
            playSound(330, 500);
            vibrate(200);
        }, 100);

        responseTimeout = setTimeout(() => {
            resetExperience();
        }, 5000);
    }

    function resetExperience() {
        document.getElementById(adivinhaContainerId).innerHTML = '';
        document.getElementById(responseContainerId).innerHTML = '';
        currentWordIndex = 0;
        startExperience();
    }

    function startExperience() {
        const randomAdivinha = adivinhas[Math.floor(Math.random() * adivinhas.length)];
        currentAdivinha = randomAdivinha.text;
        currentResponse = randomAdivinha.response;

        wordInterval = setInterval(showNextWord, 1000);
    }

    function handleTouchStart(event) {
        isTouching = true;
        touchStartX = event.touches[0].clientX;
        touchStartY = event.touches[0].clientY;
    }

    function handleTouchMove(event) {
        if (!isTouching) return;

        const touchX = event.touches[0].clientX;
        const touchY = event.touches[0].clientY;
        const deltaX = touchX - touchStartX;
        const deltaY = touchY - touchStartY;

        particles.forEach(particle => {
            particle.vx += deltaX * 0.001;
            particle.vy += deltaY * 0.001;
        });

        touchStartX = touchX;
        touchStartY = touchY;
    }

    function handleTouchEnd() {
        isTouching = false;
    }

    function handleKeyDown(event) {
        if (event.key === ' ') {
            playSound(440, 200);
            vibrate(100);
        }
    }

    function mount() {
        const styleElement = createStyleElement();
        const particlesContainer = createParticles();
        const adivinhaContainer = createAdivinhaContainer();
        const responseContainer = createResponseContainer();

        root.appendChild(styleElement);
        root.appendChild(particlesContainer);
        root.appendChild(adivinhaContainer);
        root.appendChild(responseContainer);

        root.addEventListener('touchstart', handleTouchStart, { passive: true });
        root.addEventListener('touchmove', handleTouchMove, { passive: true });
        root.addEventListener('touchend', handleTouchEnd, { passive: true });
        root.addEventListener('keydown', handleKeyDown);

        updateParticles();
        startExperience();

        isPlaying = true;
    }

    function destroy() {
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }

        if (audioContext) {
            audioContext.close();
        }

        if (wordInterval) {
            clearInterval(wordInterval);
        }

        if (responseTimeout) {
            clearTimeout(responseTimeout);
        }

        root.removeEventListener('touchstart', handleTouchStart);
        root.removeEventListener('touchmove', handleTouchMove);
        root.removeEventListener('touchend', handleTouchEnd);
        root.removeEventListener('keydown', handleKeyDown);

        const styleElement = document.getElementById(styleId);
        if (styleElement) {
            styleElement.remove();
        }

        while (root.firstChild) {
            root.removeChild(root.firstChild);
        }

        onClose();
    }

    mount();

    return { destroy };
}
