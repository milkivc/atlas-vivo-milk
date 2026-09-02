function mountCuratorialExperience({ root, context = {}, onClose = () => {} }) {
    const experienceId = 'palavra-intrusa';
    const styleId = `${experienceId}-styles`;
    const initialPhrase = 'Vou à feira';
    const initialWord = 'feira';
    const words = [
        { word: 'souk', origin: 'Norte de África', color: '#8B4513', texture: 'arabic' },
        { word: 'bazar', origin: 'Turquia', color: '#FFD700', texture: 'turkish' },
        { word: 'mercado', origin: 'Portugal', color: '#4682B4', texture: 'portuguese' },
        { word: 'market', origin: 'Inglaterra', color: '#2E8B57', texture: 'english' }
    ];

    let currentWord = words[Math.floor(Math.random() * words.length)];
    let audioContext;
    let oscillator;
    let gainNode;
    let animationFrameId;
    let timeoutIds = [];
    let isDestroyed = false;

    const createStyleElement = () => {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
            #${experienceId} {
                position: relative;
                width: 100%;
                height: 100%;
                background-color: #f5f5dc;
                background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23f5f5dc" /><path d="M0,50 Q25,25 50,50 T100,50" stroke="%23d2b48c" stroke-width="0.5" fill="none" /></svg>');
                font-family: 'Arial', sans-serif;
                overflow: hidden;
            }
            .phrase-container {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-size: 2rem;
                text-align: center;
                cursor: pointer;
                user-select: none;
            }
            .word {
                display: inline-block;
                transition: transform 0.3s, color 0.3s;
            }
            .word:hover {
                transform: scale(1.1);
            }
            .word.pulsing {
                animation: pulse 1.5s infinite;
            }
            .input-container {
                position: absolute;
                top: 60%;
                left: 50%;
                transform: translate(-50%, -50%);
                display: none;
            }
            .input-container input {
                padding: 0.5rem;
                font-size: 1rem;
                border: 1px solid #ccc;
                border-radius: 4px;
            }
            .floating-word {
                position: absolute;
                font-size: 2rem;
                cursor: pointer;
                user-select: none;
                transition: all 0.3s;
            }
            .memory-card {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 80%;
                padding: 1rem;
                background-color: #fff;
                border: 1px solid #ccc;
                border-radius: 8px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                display: none;
            }
            @keyframes pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.1); }
                100% { transform: scale(1); }
            }
            @media (prefers-reduced-motion: reduce) {
                .word, .floating-word {
                    animation: none !important;
                    transition: none !important;
                }
            }
        `;
        document.head.appendChild(style);
    };

    const createDOMElements = () => {
        const container = document.createElement('div');
        container.id = experienceId;

        const phraseContainer = document.createElement('div');
        phraseContainer.className = 'phrase-container';

        const phrase = initialPhrase.split(' ').map((word, index) => {
            const wordElement = document.createElement('span');
            wordElement.className = 'word';
            wordElement.textContent = word + ' ';
            if (word === initialWord) {
                wordElement.classList.add('pulsing');
                wordElement.addEventListener('click', handleWordClick);
            }
            return wordElement;
        });

        phrase.forEach(wordElement => phraseContainer.appendChild(wordElement));
        container.appendChild(phraseContainer);

        const inputContainer = document.createElement('div');
        inputContainer.className = 'input-container';
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Escreve ou diz uma palavra que não é desta terra.';
        input.addEventListener('keypress', handleInputKeyPress);
        inputContainer.appendChild(input);
        container.appendChild(inputContainer);

        const memoryCard = document.createElement('div');
        memoryCard.className = 'memory-card';
        memoryCard.innerHTML = `
            <h3>Ficha de Memória</h3>
            <p><strong>Frase Original:</strong> ${initialPhrase}</p>
            <p><strong>Frase Transformada:</strong> <span id="transformed-phrase"></span></p>
            <p><strong>Palavra Intrusa:</strong> <span id="intruding-word"></span></p>
            <p><strong>Origem:</strong> <span id="word-origin"></span></p>
            <button id="keep-card">Guardar</button>
            <button id="discard-card">Deixar</button>
        `;
        container.appendChild(memoryCard);

        root.appendChild(container);

        document.getElementById('keep-card').addEventListener('click', handleKeepCard);
        document.getElementById('discard-card').addEventListener('click', handleDiscardCard);
    };

    const handleWordClick = (event) => {
        if (isDestroyed) return;

        const wordElement = event.target;
        wordElement.classList.remove('pulsing');
        wordElement.style.color = '#8B0000';

        const inputContainer = document.querySelector('.input-container');
        inputContainer.style.display = 'block';

        const input = inputContainer.querySelector('input');
        input.focus();

        if ('vibrate' in navigator) {
            navigator.vibrate(50);
        }

        playSound('rasgo');
    };

    const handleInputKeyPress = (event) => {
        if (isDestroyed) return;

        if (event.key === 'Enter') {
            const input = event.target;
            const intrudingWord = input.value.trim();
            if (intrudingWord) {
                transformPhrase(intrudingWord);
                input.value = '';
                document.querySelector('.input-container').style.display = 'none';
            }
        }
    };

    const transformPhrase = (intrudingWord) => {
        if (isDestroyed) return;

        const phraseContainer = document.querySelector('.phrase-container');
        const words = phraseContainer.querySelectorAll('.word');
        let transformedPhrase = '';

        words.forEach(wordElement => {
            if (wordElement.textContent.trim() === initialWord) {
                wordElement.textContent = intrudingWord + ' ';
                wordElement.style.color = currentWord.color;
                wordElement.style.textShadow = `0 0 5px ${currentWord.color}`;
                transformedPhrase += intrudingWord + ' ';
            } else {
                transformedPhrase += wordElement.textContent;
            }
        });

        const floatingWord = document.createElement('div');
        floatingWord.className = 'floating-word';
        floatingWord.textContent = intrudingWord;
        floatingWord.style.color = currentWord.color;
        floatingWord.style.textShadow = `0 0 5px ${currentWord.color}`;
        floatingWord.style.left = `${Math.random() * 80}%`;
        floatingWord.style.top = `${Math.random() * 80}%`;
        floatingWord.addEventListener('click', () => {
            playWordSound(intrudingWord);
        });
        document.getElementById(experienceId).appendChild(floatingWord);

        animateFloatingWord(floatingWord);

        playSound('murmur');

        timeoutIds.push(setTimeout(() => {
            showMemoryCard(transformedPhrase, intrudingWord);
        }, 5000));
    };

    const animateFloatingWord = (wordElement) => {
        if (isDestroyed) return;

        let angle = 0;
        const animate = () => {
            if (isDestroyed) return;

            angle += 0.01;
            const x = Math.sin(angle) * 20;
            const y = Math.cos(angle) * 20;
            wordElement.style.transform = `translate(${x}px, ${y}px)`;
            animationFrameId = requestAnimationFrame(animate);
        };
        animate();
    };

    const playSound = (type) => {
        if (isDestroyed) return;

        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }

        if (type === 'rasgo') {
            oscillator = audioContext.createOscillator();
            gainNode = audioContext.createGain();
            oscillator.type = 'sawtooth';
            oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            gainNode.gain.setValueAtTime(0.5, audioContext.currentTime);
            oscillator.start();
            gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.5);
            oscillator.stop(audioContext.currentTime + 0.5);
        } else if (type === 'murmur') {
            const buffer = audioContext.createBuffer(1, audioContext.sampleRate * 2, audioContext.sampleRate);
            const data = buffer.getChannelData(0);
            for (let i = 0; i < buffer.length; i++) {
                data[i] = (Math.random() * 2 - 1) * 0.2;
            }
            const source = audioContext.createBufferSource();
            source.buffer = buffer;
            source.connect(audioContext.destination);
            source.start();
        }
    };

    const playWordSound = (word) => {
        if (isDestroyed) return;

        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }

        const frequencies = {
            'souk': 220,
            'bazar': 240,
            'mercado': 260,
            'market': 280
        };

        const frequency = frequencies[word] || 300;
        oscillator = audioContext.createOscillator();
        gainNode = audioContext.createGain();
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        gainNode.gain.setValueAtTime(0.5, audioContext.currentTime);
        oscillator.start();
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 2);
        oscillator.stop(audioContext.currentTime + 2);
    };

    const showMemoryCard = (transformedPhrase, intrudingWord) => {
        if (isDestroyed) return;

        const memoryCard = document.querySelector('.memory-card');
        document.getElementById('transformed-phrase').textContent = transformedPhrase;
        document.getElementById('intruding-word').textContent = intrudingWord;
        document.getElementById('word-origin').textContent = currentWord.origin;
        memoryCard.style.display = 'block';
    };

    const handleKeepCard = () => {
        if (isDestroyed) return;

        alert('A palavra intrusa foi guardada no seu dicionário vivo!');
        document.querySelector('.memory-card').style.display = 'none';
        resetExperience();
    };

    const handleDiscardCard = () => {
        if (isDestroyed) return;

        alert('A palavra intrusa foi devolvida ao cosmos.');
        document.querySelector('.memory-card').style.display = 'none';
        resetExperience();
    };

    const resetExperience = () => {
        if (isDestroyed) return;

        const phraseContainer = document.querySelector('.phrase-container');
        phraseContainer.innerHTML = '';
        const phrase = initialPhrase.split(' ').map((word, index) => {
            const wordElement = document.createElement('span');
            wordElement.className = 'word';
            wordElement.textContent = word + ' ';
            if (word === initialWord) {
                wordElement.classList.add('pulsing');
                wordElement.addEventListener('click', handleWordClick);
            }
            return wordElement;
        });

        phrase.forEach(wordElement => phraseContainer.appendChild(wordElement));

        const floatingWords = document.querySelectorAll('.floating-word');
        floatingWords.forEach(word => word.remove());

        currentWord = words[Math.floor(Math.random() * words.length)];
    };

    const destroy = () => {
        if (isDestroyed) return;

        isDestroyed = true;

        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }

        timeoutIds.forEach(id => clearTimeout(id));

        if (audioContext) {
            if (oscillator) {
                oscillator.stop();
            }
            audioContext.close();
        }

        const styleElement = document.getElementById(styleId);
        if (styleElement) {
            document.head.removeChild(styleElement);
        }

        const container = document.getElementById(experienceId);
        if (container) {
            root.removeChild(container);
        }

        onClose();
    };

    createStyleElement();
    createDOMElements();

    return { destroy };
}
