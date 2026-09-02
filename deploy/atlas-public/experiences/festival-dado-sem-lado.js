export function mountCuratorialExperience({ root, context = {}, onClose = () => {} }) {
    const experienceId = 'festival-dado-sem-lado';
    const styleId = `${experienceId}-styles`;

    // Inject styles
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
        #${experienceId} {
            position: relative;
            width: 100%;
            height: 100%;
            background-color: black;
            overflow: hidden;
            touch-action: manipulation;
        }

        #${experienceId} canvas {
            display: block;
        }

        #${experienceId} .ficha {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            text-align: center;
            font-family: Arial, sans-serif;
            max-width: 80%;
            max-height: 80%;
            overflow: auto;
        }

        #${experienceId} .ficha p {
            margin: 10px 0;
        }
    `;
    document.head.appendChild(style);

    // Create canvas
    const canvas = document.createElement('canvas');
    canvas.id = `${experienceId}-canvas`;
    root.appendChild(canvas);

    // Set canvas size
    const resizeCanvas = () => {
        canvas.width = root.clientWidth;
        canvas.height = root.clientHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Get 2D context
    const ctx = canvas.getContext('2d');

    // Audio context
    let audioCtx;
    let buzzOscillator;
    let buzzGain;
    let voiceGain;
    let voiceOscillator;

    // Dice properties
    let dice = {
        x: canvas.width / 2,
        y: canvas.height / 2,
        size: Math.min(canvas.width, canvas.height) * 0.2,
        rotation: 0,
        velocityX: 0,
        velocityY: 0,
        angularVelocity: 0,
        isSpinning: true,
        isFlying: false,
        isMosca: false,
        fragments: [],
        stage: 1
    };

    // Fragment properties
    const fragmentShapes = ['bolo', 'peixe', 'nuvem', 'mosca', 'aviao', 'prato'];
    const fragmentColors = ['#FFD700', '#1E90FF', '#FFFFFF', '#8B4513', '#FF6347', '#32CD32'];

    // Animation variables
    let animationId;
    let lastTime = 0;
    let voiceActive = false;

    // Initialize audio
    const initAudio = () => {
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();

            // Create buzz oscillator
            buzzOscillator = audioCtx.createOscillator();
            buzzGain = audioCtx.createGain();
            buzzOscillator.type = 'sine';
            buzzOscillator.frequency.value = 220;
            buzzOscillator.connect(buzzGain);
            buzzGain.connect(audioCtx.destination);
            buzzGain.gain.value = 0;
            buzzOscillator.start();

            // Create voice oscillator
            voiceOscillator = audioCtx.createOscillator();
            voiceGain = audioCtx.createGain();
            voiceOscillator.type = 'sine';
            voiceOscillator.frequency.value = 440;
            voiceOscillator.connect(voiceGain);
            voiceGain.connect(audioCtx.destination);
            voiceGain.gain.value = 0;
            voiceOscillator.start();
        }
    };

    // Start buzzing
    const startBuzzing = () => {
        if (buzzGain) {
            buzzGain.gain.value = 0.1;
        }
    };

    // Stop buzzing
    const stopBuzzing = () => {
        if (buzzGain) {
            buzzGain.gain.value = 0;
        }
    };

    // Speak text
    const speakText = (text) => {
        if (voiceGain) {
            voiceGain.gain.value = 0.3;
            setTimeout(() => {
                voiceGain.gain.value = 0;
            }, text.length * 100);
        }
    };

    // Create fragments
    const createFragments = () => {
        dice.fragments = [];
        const fragmentCount = 3 + Math.floor(Math.random() * 3);

        for (let i = 0; i < fragmentCount; i++) {
            const shapeIndex = Math.floor(Math.random() * fragmentShapes.length);
            const shape = fragmentShapes[shapeIndex];
            const color = fragmentColors[shapeIndex];

            dice.fragments.push({
                x: dice.x,
                y: dice.y,
                size: dice.size * 0.3,
                shape,
                color,
                velocityX: (Math.random() - 0.5) * 10,
                velocityY: (Math.random() - 0.5) * 10,
                angularVelocity: (Math.random() - 0.5) * 0.1,
                rotation: Math.random() * Math.PI * 2,
                isCaptured: false
            });
        }
    };

    // Draw dice
    const drawDice = (time) => {
        if (dice.isSpinning) {
            dice.rotation += 0.02;
        }

        ctx.save();
        ctx.translate(dice.x, dice.y);
        ctx.rotate(dice.rotation);

        // Draw dice body
        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        ctx.arc(0, 0, dice.size / 2, 0, Math.PI * 2);
        ctx.fill();

        // Draw dice faces (only if not spinning)
        if (!dice.isSpinning && dice.stage < 5) {
            ctx.fillStyle = 'black';
            ctx.font = `${dice.size * 0.2}px Arial`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            for (let i = 0; i < 6; i++) {
                const angle = (i * Math.PI / 3) - Math.PI / 6;
                ctx.save();
                ctx.rotate(angle);
                ctx.fillText((i + 1).toString(), 0, -dice.size * 0.4);
                ctx.restore();
            }
        }

        ctx.restore();
    };

    // Draw fragments
    const drawFragments = () => {
        dice.fragments.forEach(fragment => {
            ctx.save();
            ctx.translate(fragment.x, fragment.y);
            ctx.rotate(fragment.rotation);

            // Draw fragment
            ctx.fillStyle = fragment.color;
            ctx.beginPath();

            switch (fragment.shape) {
                case 'bolo':
                    ctx.arc(0, 0, fragment.size / 2, 0, Math.PI * 2);
                    break;
                case 'peixe':
                    ctx.moveTo(-fragment.size / 2, 0);
                    ctx.lineTo(fragment.size / 2, -fragment.size / 2);
                    ctx.lineTo(fragment.size / 2, fragment.size / 2);
                    ctx.closePath();
                    break;
                case 'nuvem':
                    ctx.arc(-fragment.size / 4, -fragment.size / 4, fragment.size / 3, 0, Math.PI * 2);
                    ctx.arc(fragment.size / 4, -fragment.size / 4, fragment.size / 3, 0, Math.PI * 2);
                    ctx.arc(0, fragment.size / 4, fragment.size / 2, 0, Math.PI * 2);
                    break;
                case 'mosca':
                    ctx.arc(0, 0, fragment.size / 2, 0, Math.PI * 2);
                    ctx.moveTo(-fragment.size / 2, 0);
                    ctx.lineTo(fragment.size / 2, 0);
                    ctx.moveTo(0, -fragment.size / 2);
                    ctx.lineTo(0, fragment.size / 2);
                    break;
                case 'aviao':
                    ctx.moveTo(-fragment.size / 2, 0);
                    ctx.lineTo(0, -fragment.size / 2);
                    ctx.lineTo(fragment.size / 2, 0);
                    ctx.lineTo(0, fragment.size / 2);
                    ctx.closePath();
                    break;
                case 'prato':
                    ctx.arc(0, 0, fragment.size / 2, 0, Math.PI * 2);
                    ctx.moveTo(-fragment.size / 2, 0);
                    ctx.lineTo(fragment.size / 2, 0);
                    break;
            }

            ctx.fill();

            ctx.restore();
        });
    };

    // Draw festival scene
    const drawFestivalScene = () => {
        // Draw background
        ctx.fillStyle = '#1E90FF';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw lights
        for (let i = 0; i < 20; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const size = 5 + Math.random() * 10;
            const color = `hsl(${Math.random() * 60 + 20}, 100%, 50%)`;

            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fill();
        }

        // Draw big dice
        const bigDiceSize = Math.min(canvas.width, canvas.height) * 0.5;
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate(dice.rotation);

        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        ctx.arc(0, 0, bigDiceSize / 2, 0, Math.PI * 2);
        ctx.fill();

        // Draw faces
        ctx.fillStyle = 'black';
        ctx.font = `${bigDiceSize * 0.2}px Arial`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        const capturedFragments = dice.fragments.filter(f => f.isCaptured);
        const faceTexts = capturedFragments.length > 0
            ? capturedFragments.map(f => f.shape)
            : ['?', '?', '?', '?', '?', '?'];

        for (let i = 0; i < 6; i++) {
            const angle = (i * Math.PI / 3) - Math.PI / 6;
            ctx.save();
            ctx.rotate(angle);
            ctx.fillText(faceTexts[i % faceTexts.length], 0, -bigDiceSize * 0.4);
            ctx.restore();
        }

        ctx.restore();
    };

    // Show ficha
    const showFicha = () => {
        const capturedFragments = dice.fragments.filter(f => f.isCaptured);
        let fichaText = '';

        if (capturedFragments.length > 0) {
            const fragment = capturedFragments[0];
            fichaText = `
                <p>Leva este lado contigo.</p>
                <p>Forma: ${fragment.shape}</p>
                <p>Frase: O ${fragment.shape} que voa não tem lado</p>
                <p>Código: DSL-${Math.floor(Math.random() * 10000)}</p>
            `;
        } else {
            fichaText = '<p>O lado certo é o que não procuras.</p>';
        }

        const fichaDiv = document.createElement('div');
        fichaDiv.className = 'ficha';
        fichaDiv.innerHTML = fichaText;
        root.appendChild(fichaDiv);

        // Add click event to close ficha
        const closeFicha = () => {
            root.removeChild(fichaDiv);
            onClose();
        };

        fichaDiv.addEventListener('click', closeFicha);

        // Add keyboard event to close ficha
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
                closeFicha();
                document.removeEventListener('keydown', handleKeyDown);
            }
        };

        document.addEventListener('keydown', handleKeyDown);
    };

    // Update dice position
    const updateDicePosition = (deltaTime) => {
        if (dice.isFlying) {
            dice.x += dice.velocityX * deltaTime;
            dice.y += dice.velocityY * deltaTime;
            dice.rotation += dice.angularVelocity * deltaTime;

            // Check boundaries
            if (dice.x < dice.size / 2) {
                dice.x = dice.size / 2;
                dice.velocityX *= -0.5;
                if ('vibrate' in navigator) {
                    navigator.vibrate(50);
                }
            } else if (dice.x > canvas.width - dice.size / 2) {
                dice.x = canvas.width - dice.size / 2;
                dice.velocityX *= -0.5;
                if ('vibrate' in navigator) {
                    navigator.vibrate(50);
                }
            }

            if (dice.y < dice.size / 2) {
                dice.y = dice.size / 2;
                dice.velocityY *= -0.5;
                if ('vibrate' in navigator) {
                    navigator.vibrate(50);
                }
            } else if (dice.y > canvas.height - dice.size / 2) {
                dice.y = canvas.height - dice.size / 2;
                dice.velocityY *= -0.5;
                if ('vibrate' in navigator) {
                    navigator.vibrate(50);
                }
            }
        }
    };

    // Update fragments
    const updateFragments = (deltaTime) => {
        dice.fragments.forEach(fragment => {
            if (!fragment.isCaptured) {
                fragment.x += fragment.velocityX * deltaTime;
                fragment.y += fragment.velocityY * deltaTime;
                fragment.rotation += fragment.angularVelocity * deltaTime;

                // Check boundaries
                if (fragment.x < fragment.size / 2 || fragment.x > canvas.width - fragment.size / 2) {
                    fragment.velocityX *= -1;
                }

                if (fragment.y < fragment.size / 2 || fragment.y > canvas.height - fragment.size / 2) {
                    fragment.velocityY *= -1;
                }
            }
        });
    };

    // Check fragment capture
    const checkFragmentCapture = (x, y) => {
        dice.fragments.forEach(fragment => {
            const distance = Math.sqrt((x - fragment.x) ** 2 + (y - fragment.y) ** 2);
            if (distance < fragment.size / 2 && !fragment.isCaptured) {
                fragment.isCaptured = true;
                fragment.x = x;
                fragment.y = y;
                fragment.velocityX = 0;
                fragment.velocityY = 0;
                fragment.angularVelocity = 0;
            }
        });
    };

    // Handle mouse/touch events
    const handlePointerDown = (e) => {
        e.preventDefault();
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Check if dice is clicked
        const distance = Math.sqrt((x - dice.x) ** 2 + (y - dice.y) ** 2);
        if (distance < dice.size / 2) {
            if (dice.stage === 1) {
                // Start stage 2
                dice.stage = 2;
                speakText('Lança sem procurar o lado certo');
                setTimeout(() => {
                    speakText('Lança sem procurar o lado certo');
                }, 2000);
            } else if (dice.stage === 2) {
                // Start stage 3
                dice.stage = 3;
                dice.isSpinning = false;
                dice.isFlying = true;
                dice.velocityX = (x - dice.x) * 0.1;
                dice.velocityY = (y - dice.y) * 0.1;
                dice.angularVelocity = 0.1;
            } else if (dice.stage === 3) {
                // Start stage 4
                dice.stage = 4;
                dice.isFlying = false;
                dice.isMosca = true;
                dice.velocityX = 0;
                dice.velocityY = 0;
                dice.angularVelocity = 0;
                createFragments();
            } else if (dice.stage === 5) {
                // Start stage 6
                dice.stage = 6;
                speakText('Escolhe o que não é lado');
            } else if (dice.stage === 6) {
                // Start stage 7
                dice.stage = 7;
                // Fragments will disappear automatically
            } else if (dice.stage === 8) {
                // Start stage 9
                dice.stage = 9;
                showFicha();
            }
        } else if (dice.stage >= 4 && dice.stage <= 7) {
            // Check fragment capture
            checkFragmentCapture(x, y);
        }
    };

    // Handle mouse/touch move
    const handlePointerMove = (e) => {
        e.preventDefault();
        if (dice.stage === 3 && dice.isFlying) {
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Update velocity based on mouse movement
            dice.velocityX = (x - dice.x) * 0.1;
            dice.velocityY = (y - dice.y) * 0.1;

            // Update buzz frequency based on velocity
            if (buzzOscillator) {
                const speed = Math.sqrt(dice.velocityX ** 2 + dice.velocityY ** 2);
                buzzOscillator.frequency.value = 220 + speed * 100;
            }
        }
    };

    // Handle key events
    const handleKeyDown = (e) => {
        if (dice.stage === 3 && dice.isFlying) {
            // Update velocity based on arrow keys
            switch (e.key) {
                case 'ArrowUp':
                    dice.velocityY = -5;
                    break;
                case 'ArrowDown':
                    dice.velocityY = 5;
                    break;
                case 'ArrowLeft':
                    dice.velocityX = -5;
                    break;
                case 'ArrowRight':
                    dice.velocityX = 5;
                    break;
            }

            // Update buzz frequency based on velocity
            if (buzzOscillator) {
                const speed = Math.sqrt(dice.velocityX ** 2 + dice.velocityY ** 2);
                buzzOscillator.frequency.value = 220 + speed * 100;
            }
        }
    };

    // Handle key up
    const handleKeyUp = (e) => {
        if (dice.stage === 3 && dice.isFlying) {
            // Stop movement when key is released
            switch (e.key) {
                case 'ArrowUp':
                case 'ArrowDown':
                    dice.velocityY = 0;
                    break;
                case 'ArrowLeft':
                case 'ArrowRight':
                    dice.velocityX = 0;
                    break;
            }

            // Reset buzz frequency
            if (buzzOscillator) {
                buzzOscillator.frequency.value = 220;
            }
        }
    };

    // Animation loop
    const animate = (time) => {
        const deltaTime = (time - lastTime) / 16; // Normalize to ~60fps
        lastTime = time;

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update dice position
        updateDicePosition(deltaTime);

        // Update fragments
        if (dice.stage >= 4) {
            updateFragments(deltaTime);
        }

        // Draw based on stage
        if (dice.stage <= 4) {
            drawDice(time);
        } else if (dice.stage >= 5) {
            drawFragments();
        }

        if (dice.stage === 8) {
            drawFestivalScene();
        }

        // Check if fragments should disappear
        if (dice.stage === 7 && dice.fragments.every(f => f.isCaptured)) {
            dice.stage = 8;
            // Wait for a moment before showing festival scene
            setTimeout(() => {
                // Nothing to do here, festival scene will be drawn in next frame
            }, 2000);
        }

        // Continue animation
        animationId = requestAnimationFrame(animate);
    };

    // Start experience
    const startExperience = () => {
        // Initialize audio
        initAudio();

        // Start buzzing
        startBuzzing();

        // Start animation
        animationId = requestAnimationFrame(animate);

        // Add event listeners
        canvas.addEventListener('pointerdown', handlePointerDown);
        canvas.addEventListener('pointermove', handlePointerMove);
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);
    };

    // Start experience after a short delay
    setTimeout(startExperience, 100);

    // Cleanup function
    const destroy = () => {
        // Stop animation
        if (animationId) {
            cancelAnimationFrame(animationId);
        }

        // Stop audio
        if (audioCtx) {
            if (buzzOscillator) {
                buzzOscillator.stop();
            }
            if (voiceOscillator) {
                voiceOscillator.stop();
            }
            audioCtx.close();
        }

        // Remove event listeners
        canvas.removeEventListener('pointerdown', handlePointerDown);
        canvas.removeEventListener('pointermove', handlePointerMove);
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('keyup', handleKeyUp);
        window.removeEventListener('resize', resizeCanvas);

        // Remove canvas and style
        root.removeChild(canvas);
        document.head.removeChild(style);
    };

    return { destroy };
}
