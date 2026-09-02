export function mountCuratorialExperience({ root, context = {}, onClose = () => {} }) {
    let audioContext;
    let oscillator;
    let gainNode;
    let analyser;
    let animationFrameId;
    let isVibrating = false;
    let isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const experienceId = 'lengalengas';
    const styleId = `${experienceId}-styles`;
    const initialPhrase = 'Três pratos de trigo para três tigres tristes';
    const phrases = [
        'Três pratos de trigo para três tigres tristes',
        'O que é que o papagaio gritou para o papagaio?',
        'O que é que o pato disse para a pata?',
        'O que é que o peixe disse para o peixe?',
        'O que é que o porco disse para o porco?'
    ];

    const createStyleElement = () => {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
            #${experienceId} {
                position: relative;
                width: 100%;
                height: 100%;
                background: linear-gradient(to bottom, #1a1a1a, #333333);
                overflow: hidden;
                font-family: 'Courier New', monospace;
                color: #e0e0e0;
                display: flex;
                justify-content: center;
                align-items: center;
                touch-action: manipulation;
            }

            #${experienceId} .paper-texture {
                position: absolute;
                width: 100%;
                height: 100%;
                background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%231a1a1a"/><path d="M0,0 L100,100 M100,0 L0,100" stroke="%23333333" stroke-width="1" opacity="0.5"/></svg>');
                z-index: 0;
            }

            #${experienceId} .phrase-container {
                position: relative;
                z-index: 1;
                text-align: center;
                padding: 20px;
                max-width: 80%;
            }

            #${experienceId} .phrase {
                font-size: 24px;
                line-height: 1.5;
                margin: 0;
                display: inline-block;
            }

            #${experienceId} .letter {
                display: inline-block;
                transition: transform 0.1s ease;
            }

            #${experienceId} .instruction {
                font-size: 20px;
                margin-top: 20px;
                opacity: 0;
                transition: opacity 0.5s ease;
            }

            #${experienceId} .instruction.visible {
                opacity: 1;
            }

            #${experienceId} .circle {
                position: absolute;
                width: 100px;
                height: 100px;
                border: 2px solid #e0e0e0;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                opacity: 0;
                transition: opacity 0.5s ease;
            }

            #${experienceId} .circle.visible {
                opacity: 1;
            }

            #${experienceId} .circle-text {
                font-size: 18px;
                text-align: center;
            }
        `;
        document.head.appendChild(style);
    };

    const createExperienceElement = () => {
        const experienceElement = document.createElement('div');
        experienceElement.id = experienceId;

        const paperTexture = document.createElement('div');
        paperTexture.className = 'paper-texture';

        const phraseContainer = document.createElement('div');
        phraseContainer.className = 'phrase-container';

        const phraseElement = document.createElement('p');
        phraseElement.className = 'phrase';

        const instructionElement = document.createElement('p');
        instructionElement.className = 'instruction';
        instructionElement.textContent = 'Diz.';

        const circleElement = document.createElement('div');
        circleElement.className = 'circle';

        const circleTextElement = document.createElement('div');
        circleTextElement.className = 'circle-text';
        circleTextElement.textContent = 'Diz.';

        circleElement.appendChild(circleTextElement);

        phraseContainer.appendChild(phraseElement);
        phraseContainer.appendChild(instructionElement);
        experienceElement.appendChild(paperTexture);
        experienceElement.appendChild(phraseContainer);
        experienceElement.appendChild(circleElement);

        root.appendChild(experienceElement);

        return {
            experienceElement,
            phraseElement,
            instructionElement,
            circleElement,
            circleTextElement
        };
    };

    const setupAudioContext = () => {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        oscillator = audioContext.createOscillator();
        gainNode = audioContext.createGain();
        analyser = audioContext.createAnalyser();

        oscillator.type = 'sine';
        oscillator.frequency.value = 220;
        gainNode.gain.value = 0.1;

        oscillator.connect(gainNode);
        gainNode.connect(analyser);
        analyser.connect(audioContext.destination);

        oscillator.start();
    };

    const startBreathingSound = () => {
        if (!audioContext) setupAudioContext();
        oscillator.frequency.value = 0.5;
        gainNode.gain.value = 0.05;
    };

    const stopBreathingSound = () => {
        if (gainNode) gainNode.gain.value = 0;
    };

    const startVibration = () => {
        if (navigator.vibrate && !isReducedMotion) {
            navigator.vibrate([100, 50, 100]);
            isVibrating = true;
        }
    };

    const stopVibration = () => {
        if (navigator.vibrate && isVibrating) {
            navigator.vibrate(0);
            isVibrating = false;
        }
    };

    const animateLetters = (phraseElement) => {
        const letters = phraseElement.querySelectorAll('.letter');
        let index = 0;

        const animate = () => {
            if (index < letters.length) {
                letters[index].style.transform = 'scale(1.1)';
                setTimeout(() => {
                    letters[index].style.transform = 'scale(1)';
                    index++;
                    animate();
                }, 100);
            } else {
                index = 0;
                animate();
            }
        };

        animate();
    };

    const createLetterElements = (phrase, phraseElement) => {
        phraseElement.innerHTML = '';
        phrase.split('').forEach(char => {
            const span = document.createElement('span');
            span.className = 'letter';
            span.textContent = char;
            phraseElement.appendChild(span);
        });
    };

    const showInitialPhrase = (phraseElement, instructionElement, circleElement) => {
        const selectedPhrase = phrases[Math.floor(Math.random() * phrases.length)];
        createLetterElements(selectedPhrase, phraseElement);

        setTimeout(() => {
            animateLetters(phraseElement);
            startBreathingSound();
            startVibration();
        }, 1000);

        setTimeout(() => {
            phraseElement.style.opacity = '0';
            setTimeout(() => {
                instructionElement.classList.add('visible');
                circleElement.classList.add('visible');
                stopBreathingSound();
                stopVibration();
            }, 1000);
        }, 5000);
    };

    const handleUserInput = (phraseElement, circleElement) => {
        const handleInput = (text) => {
            createLetterElements(text, phraseElement);
            phraseElement.style.opacity = '1';
            circleElement.style.opacity = '0';

            setTimeout(() => {
                mutatePhrase(phraseElement);
            }, 2000);
        };

        const handleSpeech = () => {
            if (!('webkitSpeechRecognition' in window)) {
                alert('Speech recognition not supported in your browser.');
                return;
            }

            const recognition = new webkitSpeechRecognition();
            recognition.lang = 'pt-PT';
            recognition.interimResults = false;
            recognition.maxAlternatives = 1;

            recognition.start();

            recognition.onresult = (event) => {
                const speechResult = event.results[0][0].transcript;
                handleInput(speechResult);
            };

            recognition.onerror = (event) => {
                console.error('Speech recognition error', event.error);
            };
        };

        const handleTextInput = () => {
            const userText = prompt('Digite uma palavra ou frase:');
            if (userText) {
                handleInput(userText);
            }
        };

        circleElement.addEventListener('click', handleTextInput);
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                handleTextInput();
            }
        });

        if ('webkitSpeechRecognition' in window) {
            circleElement.addEventListener('touchstart', handleSpeech);
        }
    };

    const mutatePhrase = (phraseElement) => {
        const letters = phraseElement.querySelectorAll('.letter');
        const words = phraseElement.textContent.split(' ');
        const mutationTypes = ['homophone', 'repetition', 'elongation'];

        const applyMutation = () => {
            const mutationType = mutationTypes[Math.floor(Math.random() * mutationTypes.length)];

            if (mutationType === 'homophone') {
                const wordIndex = Math.floor(Math.random() * words.length);
                const word = words[wordIndex];
                const homophones = {
                    'trigo': 'tigre',
                    'tigres': 'trigres',
                    'tristes': 'tristes',
                    'papagaio': 'papagaio',
                    'papagaio': 'papagaio',
                    'pato': 'pato',
                    'pata': 'pata',
                    'peixe': 'peixe',
                    'porco': 'porco'
                };

                if (homophones[word]) {
                    words[wordIndex] = homophones[word];
                    phraseElement.textContent = words.join(' ');
                    createLetterElements(phraseElement.textContent, phraseElement);
                }
            } else if (mutationType === 'repetition') {
                const wordIndex = Math.floor(Math.random() * words.length);
                const word = words[wordIndex];
                words.splice(wordIndex, 0, word);
                phraseElement.textContent = words.join(' ');
                createLetterElements(phraseElement.textContent, phraseElement);
            } else if (mutationType === 'elongation') {
                const letterIndex = Math.floor(Math.random() * letters.length);
                letters[letterIndex].style.transform = 'scaleY(1.5)';
            }

            if (!isReducedMotion) {
                setTimeout(applyMutation, 2000);
            }
        };

        applyMutation();
    };

    const init = () => {
        createStyleElement();
        const { phraseElement, instructionElement, circleElement } = createExperienceElement();

        showInitialPhrase(phraseElement, instructionElement, circleElement);
        handleUserInput(phraseElement, circleElement);
    };

    const destroy = () => {
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }

        if (audioContext) {
            if (oscillator) oscillator.stop();
            audioContext.close();
        }

        stopVibration();

        const styleElement = document.getElementById(styleId);
        if (styleElement) {
            document.head.removeChild(styleElement);
        }

        const experienceElement = document.getElementById(experienceId);
        if (experienceElement) {
            root.removeChild(experienceElement);
        }

        onClose();
    };

    init();

    return { destroy };
}
