export function mountCuratorialExperience({ root, context = {}, onClose = () => {} }) {
    const experienceId = 'arquitetura-sete-dinamicas';
    const styleId = `${experienceId}-styles`;
    const cubeFaces = ['porta', 'jaula', 'chão', 'céu', 'espelho', 'buraco'];
    const dynamics = ['Inventário do Meu Mundo', 'Catástrofe Produtiva', 'Ponto de Kusama', 'Corpo que Percebe', 'Escutar o Silêncio', 'Rizoma Interior', 'Cubo Interior'];
    let currentFace = null;
    let currentDynamic = null;
    let audioContext = null;
    let oscillator = null;
    let gainNode = null;
    let animationFrameId = null;
    let timeoutIds = [];
    let isVibrating = false;

    const styles = `
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

        #${experienceId} .cube {
            position: absolute;
            width: 200px;
            height: 200px;
            transform-style: preserve-3d;
            perspective: 1000px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        #${experienceId} .face {
            position: absolute;
            width: 200px;
            height: 200px;
            background-color: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.3);
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-family: Arial, sans-serif;
            font-size: 16px;
            backface-visibility: hidden;
        }

        #${experienceId} .face.porta {
            transform: rotateY(0deg) translateZ(100px);
        }

        #${experienceId} .face.jaula {
            transform: rotateY(90deg) translateZ(100px);
        }

        #${experienceId} .face.chão {
            transform: rotateX(90deg) translateZ(100px);
        }

        #${experienceId} .face.céu {
            transform: rotateX(-90deg) translateZ(100px);
        }

        #${experienceId} .face.espelho {
            transform: rotateY(180deg) translateZ(100px);
        }

        #${experienceId} .face.buraco {
            transform: rotateY(-90deg) translateZ(100px);
        }

        #${experienceId} .dynamic {
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-family: Arial, sans-serif;
            font-size: 16px;
            pointer-events: none;
        }

        #${experienceId} .particle {
            position: absolute;
            width: 10px;
            height: 10px;
            background-color: white;
            border-radius: 50%;
        }

        #${experienceId} .ticket {
            position: absolute;
            width: 200px;
            height: 100px;
            background-color: rgba(255, 255, 255, 0.2);
            border: 1px solid rgba(255, 255, 255, 0.5);
            color: white;
            font-family: Arial, sans-serif;
            font-size: 16px;
            padding: 20px;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
        }
    `;

    const styleElement = document.createElement('style');
    styleElement.id = styleId;
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);

    const container = document.createElement('div');
    container.id = experienceId;
    root.appendChild(container);

    const canvas = document.createElement('canvas');
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
    container.appendChild(canvas);

    const ctx = canvas.getContext('2d');

    const cube = document.createElement('div');
    cube.className = 'cube';
    container.appendChild(cube);

    cubeFaces.forEach(face => {
        const faceElement = document.createElement('div');
        faceElement.className = `face ${face}`;
        faceElement.textContent = face;
        cube.appendChild(faceElement);
    });

    const dynamicElement = document.createElement('div');
    dynamicElement.className = 'dynamic';
    container.appendChild(dynamicElement);

    const particles = [];
    const ticket = document.createElement('div');
    ticket.className = 'ticket';
    container.appendChild(ticket);

    function createParticle(x, y) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        container.appendChild(particle);
        particles.push(particle);
    }

    function updateParticles() {
        particles.forEach(particle => {
            const x = parseFloat(particle.style.left);
            const y = parseFloat(particle.style.top);
            particle.style.left = `${x + (Math.random() - 0.5) * 2}px`;
            particle.style.top = `${y + (Math.random() - 0.5) * 2}px`;
        });
    }

    function startAudio() {
        if (audioContext) return;

        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        gainNode = audioContext.createGain();
        gainNode.gain.value = 0.1;
        gainNode.connect(audioContext.destination);

        oscillator = audioContext.createOscillator();
        oscillator.type = 'sine';
        oscillator.frequency.value = 440;
        oscillator.connect(gainNode);
        oscillator.start();
    }

    function stopAudio() {
        if (oscillator) {
            oscillator.stop();
            oscillator.disconnect();
            oscillator = null;
        }

        if (gainNode) {
            gainNode.disconnect();
            gainNode = null;
        }

        if (audioContext) {
            audioContext.close();
            audioContext = null;
        }
    }

    function startVibration() {
        if (navigator.vibrate && !isVibrating) {
            navigator.vibrate([100, 50, 100]);
            isVibrating = true;
            setTimeout(() => {
                isVibrating = false;
            }, 250);
        }
    }

    function handleCubeInteraction(event) {
        event.preventDefault();
        startAudio();
        startVibration();

        const rect = cube.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const faceIndex = Math.floor(Math.random() * cubeFaces.length);
        currentFace = cubeFaces[faceIndex];

        cube.style.transform = `translate(-50%, -50%) rotateX(${Math.random() * 360}deg) rotateY(${Math.random() * 360}deg)`;

        const dynamicIndex = Math.floor(Math.random() * dynamics.length);
        currentDynamic = dynamics[dynamicIndex];

        dynamicElement.textContent = currentDynamic;

        createParticle(x, y);

        timeoutIds.push(setTimeout(() => {
            dynamicElement.textContent = '';
            ticket.textContent = `Levaste o ${currentFace} contigo. Ele agora é teu.`;
        }, 3000));
    }

    function handleKeyDown(event) {
        if (event.key === 'Escape') {
            onClose();
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const time = Date.now() * 0.001;
        const x = canvas.width / 2 + Math.sin(time) * 50;
        const y = canvas.height / 2 + Math.cos(time) * 50;

        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.fill();

        updateParticles();

        animationFrameId = requestAnimationFrame(animate);
    }

    cube.addEventListener('click', handleCubeInteraction);
    cube.addEventListener('touchstart', handleCubeInteraction);
    document.addEventListener('keydown', handleKeyDown);

    animate();

    return {
        destroy() {
            stopAudio();
            cancelAnimationFrame(animationFrameId);
            timeoutIds.forEach(id => clearTimeout(id));
            document.removeEventListener('keydown', handleKeyDown);
            cube.removeEventListener('click', handleCubeInteraction);
            cube.removeEventListener('touchstart', handleCubeInteraction);
            container.remove();
            document.head.removeChild(styleElement);
        }
    };
}
