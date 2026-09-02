export function mountCuratorialExperience({ root, context = {}, onClose = () => {} }) {
    const experienceId = 'giria-do-avesso';
    const styleId = `${experienceId}-styles`;
    const words = ['trambolho', 'trambolhão', 'pão', 'café', 'fugir', 'mercado', 'cave', 'rua', 'suspiro', 'vento'];
    let audioContext;
    let oscillator;
    let gainNode;
    let isPlaying = false;
    let animationFrameId;
    let wordsElements = [];
    let savedWords = [];
    let wordInterval;
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;

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
                touch-action: manipulation;
            }

            .word {
                position: absolute;
                font-family: 'Arial', sans-serif;
                font-size: 24px;
                color: #333;
                user-select: none;
                cursor: pointer;
                transition: transform 0.3s ease;
            }

            .word:hover {
                transform: scale(1.1);
            }

            .saved-word {
                border: 1px solid #333;
                padding: 5px;
                margin: 5px;
                display: inline-block;
            }
        `;
        document.head.appendChild(style);
    }

    function removeStyles() {
        const style = document.getElementById(styleId);
        if (style) {
            document.head.removeChild(style);
        }
    }

    function createWordElement(word) {
        const wordElement = document.createElement('div');
        wordElement.className = 'word';
        wordElement.textContent = word;
        wordElement.style.left = `${Math.random() * 80 + 10}%`;
        wordElement.style.top = `${Math.random() * 80 + 10}%`;
        wordElement.style.transform = `rotate(${Math.random() * 20 - 10}deg)`;
        wordElement.dataset.word = word;

        wordElement.addEventListener('click', handleWordClick);
        wordElement.addEventListener('touchstart', handleTouchStart, { passive: true });
        wordElement.addEventListener('touchend', handleTouchEnd, { passive: true });

        root.appendChild(wordElement);
        wordsElements.push(wordElement);

        return wordElement;
    }

    function handleWordClick(event) {
        const wordElement = event.target;
        const word = wordElement.dataset.word;

        if (savedWords.includes(word)) {
            savedWords = savedWords.filter(w => w !== word);
            wordElement.classList.remove('saved-word');
        } else {
            savedWords.push(word);
            wordElement.classList.add('saved-word');
        }

        playSoundForWord(word);
        vibrate();
    }

    function handleTouchStart(event) {
        touchStartX = event.touches[0].clientX;
        touchStartY = event.touches[0].clientY;
    }

    function handleTouchEnd(event) {
        touchEndX = event.changedTouches[0].clientX;
        touchEndY = event.changedTouches[0].clientY;

        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;

        if (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5) {
            const wordElement = event.target;
            const word = wordElement.dataset.word;
            playSoundForWord(word);
            vibrate();
        }
    }

    function playSoundForWord(word) {
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }

        if (isPlaying) {
            oscillator.stop();
        }

        oscillator = audioContext.createOscillator();
        gainNode = audioContext.createGain();

        oscillator.type = 'sine';
        oscillator.frequency.value = 440 + (Math.random() * 200 - 100);

        gainNode.gain.value = 0.1;

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.start();
        isPlaying = true;

        setTimeout(() => {
            oscillator.stop();
            isPlaying = false;
        }, 500);
    }

    function vibrate() {
        if ('vibrate' in navigator) {
            navigator.vibrate(100);
        }
    }

    function animateWords() {
        wordsElements.forEach(wordElement => {
            const speed = 0.5 + Math.random() * 0.5;
            const angle = Math.random() * Math.PI * 2;
            const dx = Math.cos(angle) * speed;
            const dy = Math.sin(angle) * speed;

            const currentLeft = parseFloat(wordElement.style.left);
            const currentTop = parseFloat(wordElement.style.top);

            wordElement.style.left = `${currentLeft + dx}%`;
            wordElement.style.top = `${currentTop + dy}%`;

            if (currentLeft < 0 || currentLeft > 90 || currentTop < 0 || currentTop > 90) {
                wordElement.style.left = `${Math.random() * 80 + 10}%`;
                wordElement.style.top = `${Math.random() * 80 + 10}%`;
            }
        });

        animationFrameId = requestAnimationFrame(animateWords);
    }

    function addRandomWord() {
        const randomWord = words[Math.floor(Math.random() * words.length)];
        createWordElement(randomWord);
    }

    function startWordInterval() {
        wordInterval = setInterval(addRandomWord, 3000);
    }

    function stopWordInterval() {
        clearInterval(wordInterval);
    }

    function init() {
        createStyles();
        root.id = experienceId;

        words.forEach(word => {
            createWordElement(word);
        });

        animateWords();
        startWordInterval();

        document.addEventListener('keydown', handleKeyDown);
    }

    function handleKeyDown(event) {
        if (event.key === 'Escape') {
            onClose();
        }
    }

    function destroy() {
        stopWordInterval();
        cancelAnimationFrame(animationFrameId);

        if (isPlaying && oscillator) {
            oscillator.stop();
        }

        if (audioContext) {
            audioContext.close();
        }

        wordsElements.forEach(wordElement => {
            wordElement.removeEventListener('click', handleWordClick);
            wordElement.removeEventListener('touchstart', handleTouchStart);
            wordElement.removeEventListener('touchend', handleTouchEnd);
            root.removeChild(wordElement);
        });

        document.removeEventListener('keydown', handleKeyDown);

        removeStyles();
    }

    init();

    return {
        destroy
    };
}
