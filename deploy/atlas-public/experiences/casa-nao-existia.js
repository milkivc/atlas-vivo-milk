function mountCuratorialExperience({ root, context = {}, onClose = () => {} }) {
    const experienceId = 'casa-nao-existia';
    const styleId = `${experienceId}-styles`;

    // Inject styles scoped to the experience
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
        #${experienceId} .candle {
            position: absolute;
            width: 10px;
            height: 10px;
            background-color: #f5e6b3;
            border-radius: 50%;
            box-shadow: 0 0 10px #f5e6b3;
            animation: flicker 1.5s infinite alternate;
        }
        #${experienceId} .door-shadow {
            position: absolute;
            width: 200px;
            height: 300px;
            background: linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%);
            opacity: 0;
            transition: opacity 0.5s;
        }
        #${experienceId} .word-input {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #f5e6b3;
            font-family: 'Courier New', monospace;
            font-size: 24px;
            text-align: center;
            opacity: 0;
            transition: opacity 0.5s;
        }
        #${experienceId} .division {
            position: absolute;
            width: 300px;
            height: 300px;
            border: 1px solid #f5e6b3;
            opacity: 0;
            transition: opacity 0.5s;
        }
        @keyframes flicker {
            0% { opacity: 0.8; }
            100% { opacity: 1; }
        }
    `;
    document.head.appendChild(style);

    // Create the experience container
    const container = document.createElement('div');
    container.id = experienceId;
    root.appendChild(container);

    // Create the candle light
    const candle = document.createElement('div');
    candle.className = 'candle';
    candle.style.left = '50%';
    candle.style.top = '30%';
    container.appendChild(candle);

    // Create the door shadow
    const doorShadow = document.createElement('div');
    doorShadow.className = 'door-shadow';
    doorShadow.style.left = '50%';
    doorShadow.style.top = '50%';
    doorShadow.style.transform = 'translate(-50%, -50%)';
    container.appendChild(doorShadow);

    // Create the word input
    const wordInput = document.createElement('div');
    wordInput.className = 'word-input';
    wordInput.textContent = 'Constrói uma divisão com três palavras.';
    container.appendChild(wordInput);

    // Create divisions
    const divisions = [];
    for (let i = 0; i < 3; i++) {
        const division = document.createElement('div');
        division.className = 'division';
        division.style.left = `${20 + i * 35}%`;
        division.style.top = '50%';
        division.style.transform = 'translateY(-50%)';
        container.appendChild(division);
        divisions.push(division);
    }

    // Audio context and sounds
    let audioContext;
    let windSound;
    let wordSounds = {};
    let divisionSounds = {};

    // Initialize audio
    function initAudio() {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();

        // Create wind sound
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        oscillator.type = 'sine';
        oscillator.frequency.value = 100;
        gainNode.gain.value = 0.02;
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        oscillator.start();
        windSound = oscillator;

        // Create word sounds
        wordSounds = {
            cozinha: createSound('sine', 200, 0.1),
            quarto: createSound('triangle', 300, 0.1),
            sala: createSound('sawtooth', 400, 0.1)
        };

        // Create division sounds
        divisionSounds = {
            cozinha: createSound('square', 150, 0.2),
            quarto: createSound('sine', 250, 0.2),
            sala: createSound('triangle', 350, 0.2)
        };
    }

    function createSound(type, frequency, gain) {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        oscillator.type = type;
        oscillator.frequency.value = frequency;
        gainNode.gain.value = gain;
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        oscillator.start();
        return oscillator;
    }

    // State
    let words = [];
    let currentDivision = null;
    let isLookingAtDoor = false;
    let isEyesClosed = false;
    let animationFrameId;
    let wordInputTimeout;

    // Event listeners
    function handleMouseMove(e) {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Check if looking at door
        const doorX = rect.width / 2;
        const doorY = rect.height / 2;
        const distanceToDoor = Math.sqrt((x - doorX) ** 2 + (y - doorY) ** 2);
        isLookingAtDoor = distanceToDoor < 100;

        // Update door shadow
        doorShadow.style.opacity = isLookingAtDoor ? '0' : '1';

        // Update divisions based on attention
        divisions.forEach((division, index) => {
            const divisionX = rect.width * (0.2 + index * 0.35);
            const divisionY = rect.height / 2;
            const distanceToDivision = Math.sqrt((x - divisionX) ** 2 + (y - divisionY) ** 2);
            division.style.opacity = distanceToDivision < 150 ? '1' : '0';
        });
    }

    function handleKeyDown(e) {
        if (e.key === ' ') {
            isEyesClosed = !isEyesClosed;
            if (isEyesClosed) {
                // Show hidden division
                const hiddenDivision = divisions.find(div => div.style.opacity === '0');
                if (hiddenDivision) {
                    hiddenDivision.style.opacity = '1';
                    setTimeout(() => {
                        hiddenDivision.style.opacity = '0';
                    }, 3000);
                }
            }
        }
    }

    function handleWordInput() {
        if (words.length < 3) {
            const word = prompt('Digite uma palavra:');
            if (word) {
                words.push(word);
                wordInput.textContent = `Palavras: ${words.join(', ')}`;

                // Play word sound
                if (wordSounds[word]) {
                    wordSounds[word].gainNode.gain.value = 0.3;
                    setTimeout(() => {
                        wordSounds[word].gainNode.gain.value = 0;
                    }, 500);
                }

                // Show division
                if (words.length === 3) {
                    divisions.forEach((division, index) => {
                        division.style.backgroundColor = index % 2 === 0 ? 'rgba(245, 230, 179, 0.1)' : 'rgba(245, 230, 179, 0.2)';
                        division.style.opacity = '1';

                        // Play division sound
                        if (divisionSounds[words[index]]) {
                            divisionSounds[words[index]].gainNode.gain.value = 0.3;
                        }
                    });

                    // Start breathing animation
                    startBreathingAnimation();
                }
            }
        }
    }

    function startBreathingAnimation() {
        let scale = 1;
        let growing = true;

        function animate() {
            if (growing) {
                scale += 0.005;
                if (scale >= 1.05) growing = false;
            } else {
                scale -= 0.005;
                if (scale <= 0.95) growing = true;
            }

            divisions.forEach(division => {
                division.style.transform = `translateY(-50%) scale(${scale})`;
            });

            animationFrameId = requestAnimationFrame(animate);
        }

        animate();
    }

    // Initialize the experience
    function init() {
        // Show the word input after a delay
        setTimeout(() => {
            wordInput.style.opacity = '1';
            wordInputTimeout = setTimeout(() => {
                wordInput.style.opacity = '0';
                handleWordInput();
            }, 3000);
        }, 2000);

        // Add event listeners
        container.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('keydown', handleKeyDown);

        // Initialize audio on user gesture
        container.addEventListener('click', () => {
            if (!audioContext) {
                initAudio();
            }
        }, { once: true });
    }

    // Cleanup function
    function destroy() {
        // Remove event listeners
        container.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('keydown', handleKeyDown);

        // Cancel animations and timeouts
        cancelAnimationFrame(animationFrameId);
        clearTimeout(wordInputTimeout);

        // Close audio context
        if (audioContext) {
            audioContext.close();
        }

        // Remove the container and styles
        root.removeChild(container);
        document.head.removeChild(style);

        // Call the onClose callback
        onClose();
    }

    // Start the experience
    init();

    // Return the destroy function
    return { destroy };
}
