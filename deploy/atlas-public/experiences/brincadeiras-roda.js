export function mountCuratorialExperience({ root, context = {}, onClose = () => {} }) {
    const experienceId = 'brincadeiras-roda';
    const styleId = `${experienceId}-styles`;
    const quadras = [
        "A roda da vida, roda sem par, quem não souber dançar, saia do lugar",
        "Quem tem boca vai a Roma, quem tem roda vai a brincar",
        "Roda de fogo, roda de luz, quem não dançar, não tem luz",
        "Roda de vento, roda de mar, quem não dançar, não tem mar",
        "Roda de sol, roda de lua, quem não dançar, não tem lua",
        "Roda de água, roda de terra, quem não dançar, não tem terra",
        "Roda de fogo, roda de vento, quem não dançar, não tem vento",
        "Roda de água, roda de fogo, quem não dançar, não tem fogo",
        "Roda de terra, roda de água, quem não dançar, não tem água",
        "Roda de lua, roda de sol, quem não dançar, não tem sol",
        "Roda de mar, roda de terra, quem não dançar, não tem terra",
        "Roda de vento, roda de mar, quem não dançar, não tem mar",
        "Roda de sol, roda de vento, quem não dançar, não tem vento",
        "Roda de lua, roda de água, quem não dançar, não tem água",
        "Roda de fogo, roda de terra, quem não dançar, não tem terra",
        "Roda de mar, roda de sol, quem não dançar, não tem sol",
        "Roda de vento, roda de lua, quem não dançar, não tem lua",
        "Roda de água, roda de mar, quem não dançar, não tem mar",
        "Roda de terra, roda de vento, quem não dançar, não tem vento",
        "Roda de sol, roda de terra, quem não dançar, não tem terra"
    ];
    const palavras = ["brincar", "roda", "vida", "fogo", "vento", "água", "terra", "lua", "sol", "mar", "luz", "dancar", "parar", "sair", "Roma", "festa", "jogo", "pular", "correr", "saltar", "cantar", "rir", "chorar", "beber", "comer", "dormir", "acordar", "caminhar", "andar", "sentar", "levantar", "trabalhar", "estudar", "aprender", "ensinar", "escrever", "ler", "ouvir", "ver", "tocar", "cheirar", "sabor", "terra", "pão", "bolacha", "fruta", "flor", "árvore", "rio", "montanha", "céu", "luz", "sombra", "fogo", "vento", "água", "terra", "lua", "sol", "mar", "luz", "dancar", "parar", "sair", "Roma", "festa", "jogo", "pular", "correr", "saltar", "cantar", "rir", "chorar", "beber", "comer", "dormir", "acordar", "caminhar", "andar", "sentar", "levantar", "trabalhar", "estudar", "aprender", "ensinar", "escrever", "ler", "ouvir", "ver", "tocar", "cheirar", "sabor"];

    let audioContext;
    let oscillator;
    let gainNode;
    let isPlaying = false;
    let animationFrameId;
    let resizeObserver;
    let currentQuadra = '';
    let currentPalavra = '';
    let circleColor = '#8B4513';
    let circleRadius = 0;
    let maxCircleRadius = 0;
    let particles = [];
    let silhuetas = [];
    let isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const styles = `
        #${experienceId} {
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
            background-color: #000;
            touch-action: manipulation;
        }

        #${experienceId}-canvas {
            display: block;
            width: 100%;
            height: 100%;
        }

        #${experienceId}-instructions {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #fff;
            font-family: Arial, sans-serif;
            text-align: center;
            pointer-events: none;
        }
    `;

    function initStyles() {
        const styleElement = document.createElement('style');
        styleElement.id = styleId;
        styleElement.textContent = styles;
        document.head.appendChild(styleElement);
    }

    function cleanupStyles() {
        const styleElement = document.getElementById(styleId);
        if (styleElement) {
            document.head.removeChild(styleElement);
        }
    }

    function createCanvas() {
        const canvas = document.createElement('canvas');
        canvas.id = `${experienceId}-canvas`;
        root.appendChild(canvas);
        return canvas;
    }

    function createInstructions() {
        const instructions = document.createElement('div');
        instructions.id = `${experienceId}-instructions`;
        instructions.textContent = 'Faz a palavra passar sem a prender.';
        root.appendChild(instructions);
        return instructions;
    }

    function setupAudio() {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        gainNode = audioContext.createGain();
        gainNode.gain.value = 0.1;
        gainNode.connect(audioContext.destination);
    }

    function playSound(frequency, type = 'sine') {
        if (isPlaying) return;

        oscillator = audioContext.createOscillator();
        oscillator.type = type;
        oscillator.frequency.value = frequency;
        oscillator.connect(gainNode);
        oscillator.start();
        isPlaying = true;
    }

    function stopSound() {
        if (oscillator) {
            oscillator.stop();
            oscillator.disconnect();
            oscillator = null;
        }
        isPlaying = false;
    }

    function vibrate(duration = 100) {
        if (navigator.vibrate) {
            navigator.vibrate(duration);
        }
    }

    function getRandomQuadra() {
        return quadras[Math.floor(Math.random() * quadras.length)];
    }

    function getRandomPalavra() {
        return palavras[Math.floor(Math.random() * palavras.length)];
    }

    function createParticles(text, x, y, color) {
        const letters = text.split('');
        const angleStep = (2 * Math.PI) / letters.length;
        particles = letters.map((letter, index) => {
            const angle = index * angleStep;
            return {
                x: x + Math.cos(angle) * 50,
                y: y + Math.sin(angle) * 50,
                letter,
                color,
                vx: Math.random() * 2 - 1,
                vy: Math.random() * 2 - 1,
                radius: 10,
                targetX: x + Math.cos(angle) * 50,
                targetY: y + Math.sin(angle) * 50
            };
        });
    }

    function createSilhuetas(x, y) {
        silhuetas = [];
        for (let i = 0; i < 5; i++) {
            silhuetas.push({
                x: x + Math.random() * 100 - 50,
                y: y + Math.random() * 100 - 50,
                radius: 20,
                color: `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.5})`,
                vx: Math.random() * 2 - 1,
                vy: Math.random() * 2 - 1
            });
        }
    }

    function drawCircle(ctx, x, y, radius, color) {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();
    }

    function drawText(ctx, text, x, y, color, fontSize = 20) {
        ctx.font = `${fontSize}px Arial`;
        ctx.fillStyle = color;
        ctx.textAlign = 'center';
        ctx.fillText(text, x, y);
    }

    function drawParticles(ctx, particles, x, y) {
        particles.forEach(particle => {
            ctx.font = '20px Arial';
            ctx.fillStyle = particle.color;
            ctx.textAlign = 'center';
            ctx.fillText(particle.letter, particle.x, particle.y);
        });
    }

    function drawSilhuetas(ctx, silhuetas, x, y) {
        silhuetas.forEach(silhueta => {
            ctx.beginPath();
            ctx.arc(silhueta.x, silhueta.y, silhueta.radius, 0, Math.PI * 2);
            ctx.fillStyle = silhueta.color;
            ctx.fill();
            ctx.closePath();
        });
    }

    function updateParticles(particles, mouseX, mouseY, isMouseMoving) {
        particles.forEach(particle => {
            if (isMouseMoving) {
                const dx = mouseX - particle.x;
                const dy = mouseY - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 100) {
                    particle.vx = dx * 0.1;
                    particle.vy = dy * 0.1;
                }
            } else {
                particle.vx += (particle.targetX - particle.x) * 0.01;
                particle.vy += (particle.targetY - particle.y) * 0.01;
            }
            particle.x += particle.vx;
            particle.y += particle.vy;
        });
    }

    function updateSilhuetas(silhuetas, mouseX, mouseY) {
        silhuetas.forEach(silhueta => {
            const dx = mouseX - silhueta.x;
            const dy = mouseY - silhueta.y;
            silhueta.vx = -dx * 0.01;
            silhueta.vy = -dy * 0.01;
            silhueta.x += silhueta.vx;
            silhueta.y += silhueta.vy;
        });
    }

    function handleResize(canvas) {
        const rect = root.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
        maxCircleRadius = Math.min(canvas.width, canvas.height) * 0.3;
    }

    function animate(canvas, ctx, mouseX, mouseY, isMouseMoving) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        if (circleRadius < maxCircleRadius) {
            circleRadius += 2;
        }

        drawCircle(ctx, centerX, centerY, circleRadius, circleColor);

        if (particles.length > 0) {
            updateParticles(particles, mouseX, mouseY, isMouseMoving);
            drawParticles(ctx, particles, centerX, centerY);
        }

        if (silhuetas.length > 0) {
            updateSilhuetas(silhuetas, mouseX, mouseY);
            drawSilhuetas(ctx, silhuetas, centerX, centerY);
        }

        animationFrameId = requestAnimationFrame(() => animate(canvas, ctx, mouseX, mouseY, isMouseMoving));
    }

    function handleMouseMove(e, canvas, instructions) {
        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const distance = Math.sqrt((mouseX - centerX) ** 2 + (mouseY - centerY) ** 2);

        if (distance < circleRadius) {
            if (instructions) {
                instructions.style.display = 'none';
            }
            if (!isPlaying) {
                playSound(440);
                vibrate();
            }
        } else {
            if (instructions) {
                instructions.style.display = 'block';
            }
            stopSound();
        }
    }

    function handleMouseDown(e, canvas, instructions) {
        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const distance = Math.sqrt((mouseX - centerX) ** 2 + (mouseY - centerY) ** 2);

        if (distance < circleRadius) {
            if (particles.length === 0) {
                currentQuadra = getRandomQuadra();
                createParticles(currentQuadra, centerX, centerY, '#FFD700');
                playSound(880, 'triangle');
                vibrate(200);
            } else {
                const dx = mouseX - centerX;
                const dy = mouseY - centerY;
                const angle = Math.atan2(dy, dx);
                const newRadius = circleRadius * 0.5;
                const newX = centerX + Math.cos(angle) * newRadius;
                const newY = centerY + Math.sin(angle) * newRadius;

                currentPalavra = getRandomPalavra();
                createParticles(currentPalavra, newX, newY, '#FF6347');
                playSound(660, 'square');
                vibrate(100);
            }
        }
    }

    function handleKeyDown(e, canvas, instructions) {
        if (e.key === 'Escape') {
            onClose();
        } else if (e.key === ' ') {
            handleMouseDown({ clientX: canvas.width / 2, clientY: canvas.height / 2 }, canvas, instructions);
        }
    }

    function mount() {
        initStyles();
        const canvas = createCanvas();
        const instructions = createInstructions();
        const ctx = canvas.getContext('2d');

        setupAudio();

        handleResize(canvas);
        resizeObserver = new ResizeObserver(() => handleResize(canvas));
        resizeObserver.observe(root);

        let mouseX = canvas.width / 2;
        let mouseY = canvas.height / 2;
        let isMouseMoving = false;

        canvas.addEventListener('mousemove', (e) => {
            isMouseMoving = true;
            handleMouseMove(e, canvas, instructions);
            const rect = canvas.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
        });

        canvas.addEventListener('mouseleave', () => {
            isMouseMoving = false;
            if (instructions) {
                instructions.style.display = 'block';
            }
            stopSound();
        });

        canvas.addEventListener('mousedown', (e) => handleMouseDown(e, canvas, instructions));

        document.addEventListener('keydown', (e) => handleKeyDown(e, canvas, instructions));

        animate(canvas, ctx, mouseX, mouseY, isMouseMoving);

        return {
            destroy: () => {
                if (animationFrameId) {
                    cancelAnimationFrame(animationFrameId);
                }
                if (resizeObserver) {
                    resizeObserver.disconnect();
                }
                if (audioContext) {
                    audioContext.close();
                }
                stopSound();
                root.innerHTML = '';
                cleanupStyles();
            }
        };
    }

    return mount();
}
