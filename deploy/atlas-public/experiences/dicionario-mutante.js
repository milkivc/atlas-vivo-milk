export function mountCuratorialExperience({ root, context = {}, onClose = () => {} }) {
    const experienceId = 'dicionario-mutante';
    const styleId = `${experienceId}-styles`;
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const giras = ['bairro', 'maralha', 'tropeço', 'murmúrio', 'chulo', 'alfama', 'marmelada', 'vinagre'];
    let currentWord = giras[Math.floor(Math.random() * giras.length)];
    let floatingLetters = [];
    let savedWords = [];
    let audioContext;
    let gainNode;
    let isSilenced = false;
    let isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const injectStyles = () => {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
            #${experienceId} {
                position: relative;
                width: 100%;
                height: 100%;
                background: linear-gradient(to bottom, #f5f5f5, #e0e0e0);
                overflow: hidden;
                font-family: 'Arial', sans-serif;
            }
            .central-word {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-size: 3rem;
                font-weight: bold;
                color: #333;
                cursor: pointer;
                transition: transform 0.3s ease;
            }
            .central-word.pulsing {
                animation: pulse 2s infinite;
            }
            .floating-letter {
                position: absolute;
                font-size: 2rem;
                font-weight: bold;
                cursor: pointer;
                transition: transform 0.3s ease;
            }
            .floating-letter:hover {
                transform: scale(1.2);
            }
            .saved-word {
                position: absolute;
                bottom: 10px;
                right: 10px;
                font-size: 1rem;
                color: #555;
                cursor: pointer;
            }
            .constellation {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 300px;
                height: 300px;
                border-radius: 50%;
                border: 2px solid #333;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .constellation-word {
                position: absolute;
                font-size: 1.2rem;
                font-weight: bold;
                cursor: pointer;
            }
            .constellation-line {
                position: absolute;
                background-color: #333;
                height: 2px;
                transform-origin: left center;
            }
            @keyframes pulse {
                0% { transform: translate(-50%, -50%) scale(1); }
                50% { transform: translate(-50%, -50%) scale(1.02); }
                100% { transform: translate(-50%, -50%) scale(1); }
            }
        `;
        document.head.appendChild(style);
    };

    const createCentralWord = () => {
        const wordElement = document.createElement('div');
        wordElement.className = 'central-word';
        wordElement.textContent = currentWord;
        if (!isReducedMotion) {
            wordElement.classList.add('pulsing');
        }
        wordElement.addEventListener('click', handleWordClick);
        root.appendChild(wordElement);
    };

    const handleWordClick = (e) => {
        if (isSilenced) return;
        const wordElement = e.target;
        wordElement.classList.remove('pulsing');
        wordElement.style.transform = 'translate(-50%, -50%) scale(0.9)';
        setTimeout(() => {
            wordElement.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 300);
        if (navigator.vibrate) {
            navigator.vibrate(50);
        }
        generateFloatingLetters();
    };

    const generateFloatingLetters = () => {
        const wordElement = root.querySelector('.central-word');
        if (wordElement) {
            wordElement.remove();
        }
        const wordLetters = currentWord.split('');
        floatingLetters = wordLetters.map((letter, index) => {
            const letterElement = document.createElement('div');
            letterElement.className = 'floating-letter';
            letterElement.textContent = letter;
            letterElement.style.left = `${Math.random() * 80 + 10}%`;
            letterElement.style.top = `${Math.random() * 80 + 10}%`;
            letterElement.style.color = `hsl(${Math.random() * 60 + 10}, 70%, 50%)`;
            letterElement.addEventListener('click', () => handleLetterClick(letterElement, index));
            root.appendChild(letterElement);
            return letterElement;
        });
    };

    const handleLetterClick = (letterElement, index) => {
        if (isSilenced) return;
        const newLetter = letters[Math.floor(Math.random() * letters.length)];
        letterElement.textContent = newLetter;
        const newWord = currentWord.split('');
        newWord[index] = newLetter;
        currentWord = newWord.join('');
        generateWordSound(currentWord);
        updateWordVisuals();
    };

    const generateWordSound = (word) => {
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
            gainNode = audioContext.createGain();
            gainNode.connect(audioContext.destination);
        }
        const oscillator = audioContext.createOscillator();
        oscillator.type = 'sine';
        const frequency = 200 + (word.charCodeAt(0) % 20) * 10;
        oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
        oscillator.connect(gainNode);
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.5);
    };

    const updateWordVisuals = () => {
        const wordLetters = currentWord.split('');
        floatingLetters.forEach((letterElement, index) => {
            letterElement.textContent = wordLetters[index];
            letterElement.style.color = `hsl(${Math.random() * 60 + 10}, 70%, 50%)`;
        });
    };

    const saveWord = () => {
        if (savedWords.length >= 3) return;
        savedWords.push(currentWord);
        const savedWordElement = document.createElement('div');
        savedWordElement.className = 'saved-word';
        savedWordElement.textContent = currentWord;
        savedWordElement.style.bottom = `${10 + savedWords.length * 20}px`;
        savedWordElement.addEventListener('click', () => {
            currentWord = savedWordElement.textContent;
            generateFloatingLetters();
        });
        root.appendChild(savedWordElement);
        if (savedWords.length === 3) {
            createConstellation();
        }
    };

    const createConstellation = () => {
        const constellation = document.createElement('div');
        constellation.className = 'constellation';
        savedWords.forEach((word, index) => {
            const angle = (index / savedWords.length) * Math.PI * 2;
            const x = Math.cos(angle) * 120;
            const y = Math.sin(angle) * 120;
            const wordElement = document.createElement('div');
            wordElement.className = 'constellation-word';
            wordElement.textContent = word;
            wordElement.style.left = `${x + 150}px`;
            wordElement.style.top = `${y + 150}px`;
            constellation.appendChild(wordElement);
        });
        for (let i = 0; i < savedWords.length; i++) {
            for (let j = i + 1; j < savedWords.length; j++) {
                const line = document.createElement('div');
                line.className = 'constellation-line';
                const angle1 = (i / savedWords.length) * Math.PI * 2;
                const angle2 = (j / savedWords.length) * Math.PI * 2;
                const x1 = Math.cos(angle1) * 120 + 150;
                const y1 = Math.sin(angle1) * 120 + 150;
                const x2 = Math.cos(angle2) * 120 + 150;
                const y2 = Math.sin(angle2) * 120 + 150;
                const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
                const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);
                line.style.left = `${x1}px`;
                line.style.top = `${y1}px`;
                line.style.width = `${length}px`;
                line.style.transform = `rotate(${angle}deg)`;
                line.addEventListener('click', () => {
                    generateConstellationSound();
                });
                constellation.appendChild(line);
            }
        }
        root.appendChild(constellation);
    };

    const generateConstellationSound = () => {
        if (!audioContext) return;
        const oscillator = audioContext.createOscillator();
        oscillator.type = 'sine';
        const frequency = 300 + Math.random() * 200;
        oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
        oscillator.connect(gainNode);
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.5);
    };

    const toggleSilence = () => {
        isSilenced = !isSilenced;
        if (isSilenced) {
            if (audioContext) {
                gainNode.gain.setValueAtTime(0, audioContext.currentTime);
            }
            floatingLetters.forEach(letter => {
                letter.style.animation = 'shake 0.5s infinite';
            });
        } else {
            if (audioContext) {
                gainNode.gain.setValueAtTime(1, audioContext.currentTime);
            }
            floatingLetters.forEach(letter => {
                letter.style.animation = 'none';
            });
        }
    };

    const cleanup = () => {
        const style = document.getElementById(styleId);
        if (style) {
            style.remove();
        }
        if (audioContext) {
            audioContext.close();
        }
        onClose();
    };

    injectStyles();
    createCentralWord();

    document.addEventListener('keydown', (e) => {
        if (e.key === 's') {
            toggleSilence();
        } else if (e.key === 'g') {
            saveWord();
        }
    });

    return {
        destroy: cleanup
    };
}
