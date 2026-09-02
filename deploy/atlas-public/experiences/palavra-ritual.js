export function mountCuratorialExperience({ root, context = {}, onClose = () => {} }) {
    const experienceId = 'palavra-ritual';
    const styleId = `${experienceId}-styles`;
    const word = context.word || 'ÁGUA';
    let animationFrameId;
    let audioContext;
    let oscillator;
    let gainNode;
    let analyser;
    let dataArray;
    let canvas;
    let ctx;
    let letters = [];
    let isRepeating = false;
    let repeatCount = 0;
    let lastTimestamp = 0;
    let wordElement;
    let backgroundElement;
    let wordWidth = 0;
    let wordHeight = 0;
    let wordX = 0;
    let wordY = 0;
    let wordVelocityX = 0;
    let wordVelocityY = 0;
    let wordRotation = 0;
    let wordScale = 1;
    let wordOpacity = 1;
    let wordColor = '#ffffff';
    let wordShadowColor = 'rgba(0, 0, 0, 0.5)';
    let wordShadowBlur = 10;
    let wordShadowOffsetX = 5;
    let wordShadowOffsetY = 5;
    let wordTextShadow = `${wordShadowOffsetX}px ${wordShadowOffsetY}px ${wordShadowBlur}px ${wordShadowColor}`;
    let wordTransform = `translate(${wordX}px, ${wordY}px) rotate(${wordRotation}deg) scale(${wordScale})`;
    let wordStyle = `color: ${wordColor}; text-shadow: ${wordTextShadow}; opacity: ${wordOpacity}; transform: ${wordTransform};`;
    let backgroundColor = '#000000';
    let backgroundStyle = `background-color: ${backgroundColor};`;
    let isVibrating = false;
    let vibrationIntensity = 0;
    let vibrationDuration = 0;
    let vibrationStartTime = 0;
    let isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const injectStyles = () => {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
            #${experienceId} {
                position: relative;
                width: 100%;
                height: 100%;
                overflow: hidden;
                ${backgroundStyle}
            }
            #${experienceId}-word {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-size: 4rem;
                font-family: Arial, sans-serif;
                font-weight: bold;
                ${wordStyle}
            }
            #${experienceId}-canvas {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
            }
        `;
        document.head.appendChild(style);
    };

    const createElements = () => {
        root.innerHTML = `
            <div id="${experienceId}">
                <div id="${experienceId}-word">${word}</div>
                <canvas id="${experienceId}-canvas"></canvas>
            </div>
        `;
        wordElement = document.getElementById(`${experienceId}-word`);
        backgroundElement = document.getElementById(experienceId);
        canvas = document.getElementById(`${experienceId}-canvas`);
        ctx = canvas.getContext('2d');
        canvas.width = root.clientWidth;
        canvas.height = root.clientHeight;
    };

    const setupAudio = () => {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        analyser = audioContext.createAnalyser();
        analyser.fftSize = 256;
        dataArray = new Uint8Array(analyser.frequencyBinCount);
        oscillator = audioContext.createOscillator();
        gainNode = audioContext.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(analyser);
        analyser.connect(audioContext.destination);
        oscillator.type = 'sine';
        oscillator.frequency.value = 440;
        gainNode.gain.value = 0;
    };

    const startAudio = () => {
        if (audioContext.state === 'suspended') {
            audioContext.resume();
        }
        oscillator.start();
    };

    const stopAudio = () => {
        gainNode.gain.value = 0;
        oscillator.stop();
        oscillator = audioContext.createOscillator();
        gainNode = audioContext.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(analyser);
        analyser.connect(audioContext.destination);
        oscillator.type = 'sine';
        oscillator.frequency.value = 440;
    };

    const updateWord = () => {
        wordElement.style.color = wordColor;
        wordElement.style.textShadow = wordTextShadow;
        wordElement.style.opacity = wordOpacity;
        wordElement.style.transform = wordTransform;
    };

    const updateBackground = () => {
        backgroundElement.style.backgroundColor = backgroundColor;
    };

    const handleKeyDown = (event) => {
        if (event.code === 'Space') {
            event.preventDefault();
            if (!isRepeating) {
                isRepeating = true;
                repeatCount = 0;
                startAudio();
                gainNode.gain.value = 0.5;
                if (navigator.vibrate && !isVibrating) {
                    isVibrating = true;
                    vibrationIntensity = 1;
                    vibrationDuration = 100;
                    vibrationStartTime = Date.now();
                    navigator.vibrate(vibrationDuration);
                }
            }
        }
    };

    const handleKeyUp = (event) => {
        if (event.code === 'Space') {
            event.preventDefault();
            isRepeating = false;
            gainNode.gain.value = 0;
            if (isVibrating) {
                isVibrating = false;
                vibrationIntensity = 0;
            }
        }
    };

    const handleMouseMove = (event) => {
        const rect = root.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        wordX = x - rect.width / 2;
        wordY = y - rect.height / 2;
        wordVelocityX = (x - rect.width / 2 - wordX) * 0.1;
        wordVelocityY = (y - rect.height / 2 - wordY) * 0.1;
        wordTransform = `translate(${wordX}px, ${wordY}px) rotate(${wordRotation}deg) scale(${wordScale})`;
        updateWord();
    };

    const handleTouchMove = (event) => {
        event.preventDefault();
        const touch = event.touches[0];
        const rect = root.getBoundingClientRect();
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;
        wordX = x - rect.width / 2;
        wordY = y - rect.height / 2;
        wordVelocityX = (x - rect.width / 2 - wordX) * 0.1;
        wordVelocityY = (y - rect.height / 2 - wordY) * 0.1;
        wordTransform = `translate(${wordX}px, ${wordY}px) rotate(${wordRotation}deg) scale(${wordScale})`;
        updateWord();
    };

    const handleMouseDown = () => {
        if (!isRepeating) {
            isRepeating = true;
            repeatCount = 0;
            startAudio();
            gainNode.gain.value = 0.5;
            if (navigator.vibrate && !isVibrating) {
                isVibrating = true;
                vibrationIntensity = 1;
                vibrationDuration = 100;
                vibrationStartTime = Date.now();
                navigator.vibrate(vibrationDuration);
            }
        }
    };

    const handleMouseUp = () => {
        isRepeating = false;
        gainNode.gain.value = 0;
        if (isVibrating) {
            isVibrating = false;
            vibrationIntensity = 0;
        }
    };

    const handleTouchStart = (event) => {
        event.preventDefault();
        if (!isRepeating) {
            isRepeating = true;
            repeatCount = 0;
            startAudio();
            gainNode.gain.value = 0.5;
            if (navigator.vibrate && !isVibrating) {
                isVibrating = true;
                vibrationIntensity = 1;
                vibrationDuration = 100;
                vibrationStartTime = Date.now();
                navigator.vibrate(vibrationDuration);
            }
        }
    };

    const handleTouchEnd = () => {
        isRepeating = false;
        gainNode.gain.value = 0;
        if (isVibrating) {
            isVibrating = false;
            vibrationIntensity = 0;
        }
    };

    const updateLetters = () => {
        letters = [];
        const text = wordElement.textContent;
        const textWidth = wordElement.offsetWidth;
        const textHeight = wordElement.offsetHeight;
        const letterSpacing = textWidth / text.length;
        for (let i = 0; i < text.length; i++) {
            const letter = text[i];
            const x = i * letterSpacing - textWidth / 2;
            const y = -textHeight / 2;
            letters.push({ letter, x, y, velocityX: 0, velocityY: 0, rotation: 0, scale: 1, opacity: 1 });
        }
    };

    const updateWordProperties = (timestamp) => {
        if (lastTimestamp === 0) {
            lastTimestamp = timestamp;
        }
        const deltaTime = timestamp - lastTimestamp;
        lastTimestamp = timestamp;

        if (isRepeating) {
            repeatCount += deltaTime * 0.001;
            wordRotation += deltaTime * 0.1;
            wordScale = 1 + Math.sin(repeatCount) * 0.1;
            wordOpacity = 0.5 + Math.sin(repeatCount) * 0.5;
            wordColor = `hsl(${Math.sin(repeatCount) * 60 + 180}, 100%, 50%)`;
            wordShadowColor = `rgba(${Math.sin(repeatCount) * 255}, ${Math.cos(repeatCount) * 255}, ${Math.sin(repeatCount + Math.PI) * 255}, 0.5)`;
            wordShadowBlur = 10 + Math.sin(repeatCount) * 5;
            wordShadowOffsetX = 5 + Math.sin(repeatCount) * 2;
            wordShadowOffsetY = 5 + Math.cos(repeatCount) * 2;
            wordTextShadow = `${wordShadowOffsetX}px ${wordShadowOffsetY}px ${wordShadowBlur}px ${wordShadowColor}`;
            wordTransform = `translate(${wordX}px, ${wordY}px) rotate(${wordRotation}deg) scale(${wordScale})`;
            updateWord();

            if (repeatCount > 5) {
                wordElement.textContent = word.split('').reverse().join('');
                updateLetters();
                repeatCount = 0;
            }

            if (isVibrating) {
                const currentTime = Date.now();
                if (currentTime - vibrationStartTime > vibrationDuration) {
                    vibrationStartTime = currentTime;
                    navigator.vibrate(vibrationDuration);
                }
            }
        } else {
            wordRotation += deltaTime * 0.05;
            wordScale = 1 + Math.sin(timestamp * 0.001) * 0.05;
            wordOpacity = 0.5 + Math.sin(timestamp * 0.001) * 0.5;
            wordColor = `hsl(${Math.sin(timestamp * 0.001) * 60 + 180}, 100%, 50%)`;
            wordShadowColor = `rgba(${Math.sin(timestamp * 0.001) * 255}, ${Math.cos(timestamp * 0.001) * 255}, ${Math.sin(timestamp * 0.001 + Math.PI) * 255}, 0.5)`;
            wordShadowBlur = 10 + Math.sin(timestamp * 0.001) * 5;
            wordShadowOffsetX = 5 + Math.sin(timestamp * 0.001) * 2;
            wordShadowOffsetY = 5 + Math.cos(timestamp * 0.001) * 2;
            wordTextShadow = `${wordShadowOffsetX}px ${wordShadowOffsetY}px ${wordShadowBlur}px ${wordShadowColor}`;
            wordTransform = `translate(${wordX}px, ${wordY}px) rotate(${wordRotation}deg) scale(${wordScale})`;
            updateWord();
        }

        if (isReducedMotion) {
            wordRotation = 0;
            wordScale = 1;
            wordTransform = `translate(${wordX}px, ${wordY}px)`;
            updateWord();
        }

        animationFrameId = requestAnimationFrame(updateWordProperties);
    };

    const drawCanvas = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        analyser.getByteFrequencyData(dataArray);
        const average = dataArray.reduce((a, b) => a + b) / dataArray.length;
        const radius = average * 2;

        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, Math.PI * 2);
        ctx.strokeStyle = wordColor;
        ctx.lineWidth = 2;
        ctx.stroke();

        letters.forEach((letter, index) => {
            const x = canvas.width / 2 + letter.x + wordX;
            const y = canvas.height / 2 + letter.y + wordY;
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(letter.rotation * Math.PI / 180);
            ctx.scale(letter.scale, letter.scale);
            ctx.globalAlpha = letter.opacity;
            ctx.fillStyle = wordColor;
            ctx.font = '4rem Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(letter.letter, 0, 0);
            ctx.restore();
        });

        requestAnimationFrame(drawCanvas);
    };

    const handleResize = () => {
        canvas.width = root.clientWidth;
        canvas.height = root.clientHeight;
    };

    const addEventListeners = () => {
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);
        root.addEventListener('mousemove', handleMouseMove);
        root.addEventListener('mousedown', handleMouseDown);
        root.addEventListener('mouseup', handleMouseUp);
        root.addEventListener('touchmove', handleTouchMove, { passive: false });
        root.addEventListener('touchstart', handleTouchStart, { passive: false });
        root.addEventListener('touchend', handleTouchEnd);
        window.addEventListener('resize', handleResize);
    };

    const removeEventListeners = () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('keyup', handleKeyUp);
        root.removeEventListener('mousemove', handleMouseMove);
        root.removeEventListener('mousedown', handleMouseDown);
        root.removeEventListener('mouseup', handleMouseUp);
        root.removeEventListener('touchmove', handleTouchMove);
        root.removeEventListener('touchstart', handleTouchStart);
        root.removeEventListener('touchend', handleTouchEnd);
        window.removeEventListener('resize', handleResize);
    };

    const destroy = () => {
        cancelAnimationFrame(animationFrameId);
        if (audioContext) {
            stopAudio();
            audioContext.close();
        }
        removeEventListeners();
        const style = document.getElementById(styleId);
        if (style) {
            document.head.removeChild(style);
        }
        root.innerHTML = '';
        onClose();
    };

    injectStyles();
    createElements();
    setupAudio();
    updateLetters();
    addEventListeners();
    animationFrameId = requestAnimationFrame(updateWordProperties);
    drawCanvas();

    return { destroy };
}
