export function mountCuratorialExperience({ root, context = {}, onClose = () => {} }) {
    const experienceId = 'palavra-da-freguesia';
    const styleId = `${experienceId}-styles`;
    const words = ['chulo', 'tacho', 'bairrista'];
    let currentWord = words[Math.floor(Math.random() * words.length)];
    let animationFrameId;
    let audioContext;
    let oscillator;
    let gainNode;
    let isVibrating = false;

    const styles = `
        #${experienceId} {
            position: relative;
            width: 100%;
            height: 100%;
            background: linear-gradient(to bottom, #1a1a1a, #000000);
            overflow: hidden;
            touch-action: manipulation;
        }

        .word {
            position: absolute;
            font-size: 2rem;
            color: rgba(255, 255, 255, 0.7);
            cursor: grab;
            user-select: none;
            transition: color 0.3s;
        }

        .word.active {
            color: rgba(255, 255, 255, 1);
        }

        .shadow {
            position: absolute;
            width: 100px;
            height: 100px;
            background: radial-gradient(circle, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0) 70%);
            border-radius: 50%;
            pointer-events: none;
        }
    `;

    const styleElement = document.createElement('style');
    styleElement.id = styleId;
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);

    const container = document.createElement('div');
    container.id = experienceId;
    root.appendChild(container);

    const wordElement = document.createElement('div');
    wordElement.className = 'word';
    wordElement.textContent = currentWord;
    container.appendChild(wordElement);

    const shadowElement = document.createElement('div');
    shadowElement.className = 'shadow';
    container.appendChild(shadowElement);

    let isDragging = false;
    let startX, startY;
    let offsetX, offsetY;

    const updateWordPosition = (x, y) => {
        wordElement.style.left = `${x}px`;
        wordElement.style.top = `${y}px`;
    };

    const handleMouseDown = (e) => {
        isDragging = true;
        startX = e.clientX || e.touches[0].clientX;
        startY = e.clientY || e.touches[0].clientY;
        offsetX = wordElement.offsetLeft;
        offsetY = wordElement.offsetTop;
        wordElement.classList.add('active');

        if (navigator.vibrate) {
            navigator.vibrate(50);
            isVibrating = true;
        }

        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
            oscillator = audioContext.createOscillator();
            gainNode = audioContext.createGain();
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            oscillator.type = 'sine';
            oscillator.frequency.value = 440;
            gainNode.gain.value = 0.1;
            oscillator.start();
        }
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const clientX = e.clientX || e.touches[0].clientX;
        const clientY = e.clientY || e.touches[0].clientY;
        const x = clientX - startX + offsetX;
        const y = clientY - startY + offsetY;
        updateWordPosition(x, y);

        const distance = Math.sqrt(Math.pow(x - container.clientWidth / 2, 2) + Math.pow(y - container.clientHeight / 2, 2));
        const maxDistance = Math.sqrt(Math.pow(container.clientWidth / 2, 2) + Math.pow(container.clientHeight / 2, 2));
        const normalizedDistance = distance / maxDistance;
        const frequency = 220 + (normalizedDistance * 440);
        oscillator.frequency.value = frequency;

        shadowElement.style.left = `${x + 10}px`;
        shadowElement.style.top = `${y + 10}px`;
    };

    const handleMouseUp = () => {
        if (!isDragging) return;
        isDragging = false;
        wordElement.classList.remove('active');

        if (isVibrating) {
            navigator.vibrate(0);
            isVibrating = false;
        }

        if (audioContext) {
            gainNode.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.5);
            setTimeout(() => {
                oscillator.stop();
                oscillator.disconnect();
                gainNode.disconnect();
                audioContext.close();
                audioContext = null;
            }, 500);
        }

        const x = parseInt(wordElement.style.left, 10);
        const y = parseInt(wordElement.style.top, 10);
        const centerX = container.clientWidth / 2;
        const centerY = container.clientHeight / 2;

        if (Math.abs(x - centerX) < 50 && Math.abs(y - centerY) < 50) {
            currentWord = words[Math.floor(Math.random() * words.length)];
            wordElement.textContent = currentWord;
            updateWordPosition(centerX, centerY);
        }
    };

    wordElement.addEventListener('mousedown', handleMouseDown);
    wordElement.addEventListener('touchstart', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('touchmove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchend', handleMouseUp);

    const animate = () => {
        const centerX = container.clientWidth / 2;
        const centerY = container.clientHeight / 2;
        const x = parseInt(wordElement.style.left, 10) || centerX;
        const y = parseInt(wordElement.style.top, 10) || centerY;

        if (!isDragging) {
            const dx = centerX - x;
            const dy = centerY - y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance > 1) {
                const speed = 0.05;
                const newX = x + dx * speed;
                const newY = y + dy * speed;
                updateWordPosition(newX, newY);
            }
        }

        animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const destroy = () => {
        cancelAnimationFrame(animationFrameId);
        wordElement.removeEventListener('mousedown', handleMouseDown);
        wordElement.removeEventListener('touchstart', handleMouseDown);
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('touchmove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('touchend', handleMouseUp);

        if (audioContext) {
            if (gainNode) {
                gainNode.gain.cancelScheduledValues(audioContext.currentTime);
                gainNode.gain.value = 0;
            }
            if (oscillator) {
                oscillator.stop();
                oscillator.disconnect();
            }
            if (gainNode) {
                gainNode.disconnect();
            }
            audioContext.close();
            audioContext = null;
        }

        if (isVibrating) {
            navigator.vibrate(0);
            isVibrating = false;
        }

        container.remove();
        document.head.removeChild(styleElement);
        onClose();
    };

    return { destroy };
}
