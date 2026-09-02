export function mountCuratorialExperience({ root, context = {}, onClose = () => {} }) {
    const experienceId = 'cronicas-fuco';
    const styleId = `${experienceId}-styles`;
    const canvasId = `${experienceId}-canvas`;
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    let animationFrameId;
    let audioSources = [];
    let timers = [];
    let notebook = [];
    let currentPhase = 'limiar';
    let interactionCount = 0;
    let canVibrate = 'vibrate' in navigator;

    // Inject styles
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
        #${experienceId} {
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
            background-color: #f5f5f5;
        }
        #${canvasId} {
            display: block;
            width: 100%;
            height: 100%;
        }
        .${experienceId}-text {
            position: absolute;
            font-family: 'Courier New', monospace;
            font-size: 1.5rem;
            color: #333;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
            pointer-events: none;
        }
        .${experienceId}-notebook {
            position: absolute;
            bottom: 20px;
            right: 20px;
            width: 200px;
            height: 300px;
            background-color: rgba(255, 255, 255, 0.7);
            border: 2px solid #333;
            padding: 10px;
            overflow-y: auto;
        }
    `;
    document.head.appendChild(style);

    // Create DOM elements
    const container = document.createElement('div');
    container.id = experienceId;
    const canvas = document.createElement('canvas');
    canvas.id = canvasId;
    const ctx = canvas.getContext('2d');
    const notebookElement = document.createElement('div');
    notebookElement.className = `${experienceId}-notebook`;
    container.appendChild(canvas);
    container.appendChild(notebookElement);
    root.appendChild(container);

    // Resize canvas
    function resizeCanvas() {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create ink blob
    let inkBlob = {
        x: canvas.width / 2,
        y: canvas.height / 2,
        radius: 50,
        color: '#333',
        segments: 12,
        speed: 0.5,
        angle: 0,
        targetX: canvas.width / 2,
        targetY: canvas.height / 2
    };

    // Draw ink blob
    function drawInkBlob() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.beginPath();
        for (let i = 0; i < inkBlob.segments; i++) {
            const angle = inkBlob.angle + (i * Math.PI * 2 / inkBlob.segments);
            const radius = inkBlob.radius + (Math.sin(angle * 3 + Date.now() * 0.001) * 10);
            const x = inkBlob.x + Math.cos(angle) * radius;
            const y = inkBlob.y + Math.sin(angle) * radius;
            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
        ctx.closePath();
        ctx.fillStyle = inkBlob.color;
        ctx.fill();

        // Draw notebook
        notebook.forEach((note, index) => {
            const textElement = document.createElement('div');
            textElement.className = `${experienceId}-text`;
            textElement.textContent = note;
            textElement.style.left = `${canvas.width - 250}px`;
            textElement.style.top = `${20 + index * 30}px`;
            notebookElement.appendChild(textElement);
        });
    }

    // Update ink blob position
    function updateInkBlob() {
        const dx = inkBlob.targetX - inkBlob.x;
        const dy = inkBlob.targetY - inkBlob.y;
        inkBlob.x += dx * inkBlob.speed;
        inkBlob.y += dy * inkBlob.speed;
        inkBlob.angle += 0.01;
    }

    // Play sound
    function playSound(type) {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        switch (type) {
            case 'murmur':
                oscillator.type = 'sine';
                oscillator.frequency.setValueAtTime(100, audioContext.currentTime);
                gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
                oscillator.start();
                oscillator.stop(audioContext.currentTime + 2);
                break;
            case 'sniff':
                oscillator.type = 'sawtooth';
                oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
                gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
                oscillator.start();
                oscillator.stop(audioContext.currentTime + 0.5);
                break;
            case 'bark':
                oscillator.type = 'triangle';
                oscillator.frequency.setValueAtTime(500, audioContext.currentTime);
                gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
                oscillator.start();
                oscillator.stop(audioContext.currentTime + 0.2);
                break;
            case 'sigh':
                oscillator.type = 'sine';
                oscillator.frequency.setValueAtTime(150, audioContext.currentTime);
                gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
                oscillator.start();
                oscillator.stop(audioContext.currentTime + 1.5);
                break;
            case 'paws':
                oscillator.type = 'square';
                oscillator.frequency.setValueAtTime(300, audioContext.currentTime);
                gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
                oscillator.start();
                oscillator.stop(audioContext.currentTime + 0.3);
                break;
            case 'breath':
                oscillator.type = 'sine';
                oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
                gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
                oscillator.start();
                oscillator.stop(audioContext.currentTime + 2);
                break;
        }

        audioSources.push(oscillator);
    }

    // Handle interaction
    function handleInteraction(event) {
        interactionCount++;
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        switch (currentPhase) {
            case 'limiar':
                currentPhase = 'chamada';
                playSound('murmur');
                break;
            case 'chamada':
                currentPhase = 'primeiro_gesto';
                playSound('sniff');
                break;
            case 'primeiro_gesto':
                currentPhase = 'resposta_viva';
                if (event.type === 'click' || event.type === 'touchstart') {
                    playSound('bark');
                } else if (event.type === 'keydown') {
                    playSound('sniff');
                } else if (event.type === 'mousemove' || event.type === 'touchmove') {
                    playSound('paws');
                } else {
                    playSound('sigh');
                }
                break;
            case 'resposta_viva':
                currentPhase = 'desvio';
                playSound('paws');
                break;
            case 'desvio':
                currentPhase = 'aprofundamento_sensorial';
                if (event.type === 'click' || event.type === 'touchstart') {
                    playSound('bark');
                } else if (event.type === 'keydown') {
                    playSound('sniff');
                } else if (event.type === 'mousemove' || event.type === 'touchmove') {
                    playSound('paws');
                } else {
                    playSound('sigh');
                }
                break;
            case 'aprofundamento_sensorial':
                currentPhase = 'escolha_acaso_silencio';
                playSound('breath');
                break;
            case 'escolha_acaso_silencio':
                currentPhase = 'rasto_latencia';
                if (event.type === 'keydown') {
                    const text = event.key;
                    notebook.push(text);
                    if (canVibrate) navigator.vibrate(100);
                }
                playSound('murmur');
                break;
            case 'rasto_latencia':
                currentPhase = 'devolução';
                playSound('sigh');
                break;
            case 'devolução':
                currentPhase = 'limiar';
                playSound('murmur');
                break;
        }

        inkBlob.targetX = x;
        inkBlob.targetY = y;
    }

    // Add event listeners
    canvas.addEventListener('click', handleInteraction);
    canvas.addEventListener('touchstart', handleInteraction);
    document.addEventListener('keydown', handleInteraction);
    canvas.addEventListener('mousemove', (event) => {
        if (currentPhase === 'limiar' || currentPhase === 'chamada') {
            handleInteraction(event);
        }
    });

    // Animation loop
    function animate() {
        updateInkBlob();
        drawInkBlob();
        animationFrameId = requestAnimationFrame(animate);
    }
    animate();

    // Start murmuring
    function startMurmuring() {
        playSound('murmur');
        timers.push(setTimeout(startMurmuring, Math.random() * 3000 + 2000));
    }
    startMurmuring();

    // Cleanup function
    function destroy() {
        cancelAnimationFrame(animationFrameId);
        audioSources.forEach(source => {
            if (source.stop) source.stop();
        });
        audioContext.close();
        timers.forEach(timer => clearTimeout(timer));
        document.head.removeChild(style);
        root.removeChild(container);
        window.removeEventListener('resize', resizeCanvas);
        canvas.removeEventListener('click', handleInteraction);
        canvas.removeEventListener('touchstart', handleInteraction);
        document.removeEventListener('keydown', handleInteraction);
        canvas.removeEventListener('mousemove', handleInteraction);
        onClose();
    }

    return { destroy };
}
