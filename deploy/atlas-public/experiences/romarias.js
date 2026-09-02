export function mountCuratorialExperience({ root, context = {}, onClose = () => {} }) {
    const experienceId = 'romarias';
    const styleId = `${experienceId}-styles`;
    const canvasId = `${experienceId}-canvas`;
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    let animationFrameId;
    let audioSources = [];
    let timers = [];
    let listeners = [];
    let isDestroyed = false;

    // Styles
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
        #${experienceId} {
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
            background-color: #000;
        }
        #${canvasId} {
            display: block;
            width: 100%;
            height: 100%;
        }
    `;
    document.head.appendChild(style);

    // Canvas setup
    const canvas = document.createElement('canvas');
    canvas.id = canvasId;
    root.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    // Resize handler
    const handleResize = () => {
        width = canvas.width = canvas.offsetWidth;
        height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);
    listeners.push({ element: window, type: 'resize', handler: handleResize });

    // Cursor light
    let cursorLight = { x: width / 2, y: height / 2, radius: 20, intensity: 0.5 };

    // Path
    let pathPoints = [];
    const generatePath = () => {
        pathPoints = [];
        const startX = width * 0.1;
        const startY = height / 2;
        const endX = width * 0.9;
        const endY = height / 2;
        const control1X = width * 0.3;
        const control1Y = height * 0.3;
        const control2X = width * 0.7;
        const control2Y = height * 0.7;

        for (let t = 0; t <= 1; t += 0.01) {
            const x = bezier(startX, control1X, control2X, endX, t);
            const y = bezier(startY, control1Y, control2Y, endY, t);
            pathPoints.push({ x, y });
        }
    };

    const bezier = (p0, p1, p2, p3, t) => {
        const mt = 1 - t;
        return mt * mt * mt * p0 + 3 * mt * mt * t * p1 + 3 * mt * t * t * p2 + t * t * t * p3;
    };

    generatePath();

    // Stops
    const stops = [
        { x: width * 0.3, y: height * 0.5, type: 'symbolic', name: 'Cruz do Senhor dos Aflitos', revealed: false },
        { x: width * 0.5, y: height * 0.5, type: 'ritual', name: 'Vela', revealed: false },
        { x: width * 0.7, y: height * 0.5, type: 'sanctuary', name: 'Fé', revealed: false }
    ];

    // Audio setup
    const createOscillator = (frequency, type = 'sine') => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        oscillator.type = type;
        oscillator.frequency.value = frequency;
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        oscillator.start();
        audioSources.push({ oscillator, gainNode });
        return { oscillator, gainNode };
    };

    const playSound = (frequency, duration, type = 'sine') => {
        const { oscillator, gainNode } = createOscillator(frequency, type);
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
        oscillator.stop(audioContext.currentTime + duration);
    };

    const playAmbientSound = () => {
        const { oscillator, gainNode } = createOscillator(220, 'sine');
        gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
        oscillator.frequency.setValueAtTime(220, audioContext.currentTime);
        oscillator.frequency.linearRampToValueAtTime(440, audioContext.currentTime + 2);
        oscillator.frequency.linearRampToValueAtTime(220, audioContext.currentTime + 4);
    };

    // Animation loop
    const animate = () => {
        if (isDestroyed) return;

        ctx.clearRect(0, 0, width, height);

        // Draw fog
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, width, height);

        // Draw cursor light
        const gradient = ctx.createRadialGradient(cursorLight.x, cursorLight.y, 10, cursorLight.x, cursorLight.y, cursorLight.radius);
        gradient.addColorStop(0, `rgba(255, 255, 200, ${cursorLight.intensity})`);
        gradient.addColorStop(1, 'rgba(255, 255, 200, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(cursorLight.x, cursorLight.y, cursorLight.radius, 0, Math.PI * 2);
        ctx.fill();

        // Draw path
        ctx.strokeStyle = 'rgba(100, 100, 100, 0.5)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        pathPoints.forEach((point, index) => {
            if (index === 0) {
                ctx.moveTo(point.x, point.y);
            } else {
                ctx.lineTo(point.x, point.y);
            }
        });
        ctx.stroke();

        // Draw stops
        stops.forEach(stop => {
            if (stop.revealed) {
                ctx.fillStyle = 'rgba(150, 150, 150, 0.7)';
                ctx.beginPath();
                ctx.arc(stop.x, stop.y, 15, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = '#000';
                ctx.font = '12px Arial';
                ctx.fillText(stop.name, stop.x - 30, stop.y - 20);
            }
        });

        animationFrameId = requestAnimationFrame(animate);
    };

    // Event handlers
    const handleMouseMove = (e) => {
        cursorLight.x = e.clientX - root.getBoundingClientRect().left;
        cursorLight.y = e.clientY - root.getBoundingClientRect().top;
        cursorLight.intensity = 0.5 + Math.sin(Date.now() / 200) * 0.2;
    };

    const handleClick = (e) => {
        const x = e.clientX - root.getBoundingClientRect().left;
        const y = e.clientY - root.getBoundingClientRect().top;

        stops.forEach(stop => {
            const distance = Math.sqrt((x - stop.x) ** 2 + (y - stop.y) ** 2);
            if (distance < 20 && !stop.revealed) {
                stop.revealed = true;
                playSound(440, 0.5, 'triangle');
                if ('vibrate' in navigator) {
                    navigator.vibrate(100);
                }
            }
        });
    };

    // Add event listeners
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('click', handleClick);
    listeners.push({ element: canvas, type: 'mousemove', handler: handleMouseMove });
    listeners.push({ element: canvas, type: 'click', handler: handleClick });

    // Start animation and sound
    animate();
    playAmbientSound();

    // Cleanup function
    const destroy = () => {
        isDestroyed = true;
        cancelAnimationFrame(animationFrameId);
        audioSources.forEach(({ oscillator, gainNode }) => {
            gainNode.gain.setValueAtTime(0, audioContext.currentTime);
            oscillator.stop(audioContext.currentTime);
        });
        audioContext.close();
        timers.forEach(timer => clearTimeout(timer));
        listeners.forEach(({ element, type, handler }) => {
            element.removeEventListener(type, handler);
        });
        document.head.removeChild(style);
        root.innerHTML = '';
        onClose();
    };

    return { destroy };
}
