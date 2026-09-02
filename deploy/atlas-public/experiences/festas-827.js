export function mountCuratorialExperience({ root, context = {}, onClose = () => {} }) {
    const experienceId = 'festas-827';
    const styleId = `${experienceId}-styles`;

    // Inject styles
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
        #${experienceId} {
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
            background-color: #f5f5dc;
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23f5f5dc"/><path d="M0,50 Q25,25 50,50 T100,50" stroke="%23d2b48c" stroke-width="0.5" fill="none" opacity="0.5"/></svg>');
            touch-action: manipulation;
        }

        #${experienceId} canvas {
            display: block;
            width: 100%;
            height: 100%;
        }

        #${experienceId} .invitation {
            position: absolute;
            font-family: 'Courier New', monospace;
            font-size: 16px;
            color: #5d4037;
            text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
            pointer-events: none;
            opacity: 0;
            transform: translate(-50%, -50%);
        }
    `;
    document.head.appendChild(style);

    // Create canvas
    const canvas = document.createElement('canvas');
    canvas.id = `${experienceId}-canvas`;
    root.appendChild(canvas);

    // Set canvas size
    const resizeCanvas = () => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create invitation element
    const invitation = document.createElement('div');
    invitation.className = 'invitation';
    root.appendChild(invitation);

    // Audio context
    let audioContext;
    let gainNode;
    let oscillator;
    let isAudioInitialized = false;

    // Animation variables
    let animationId;
    let startTime;
    let pulsePoint = { x: 0, y: 0, radius: 0, targetRadius: 0, color: '#ffd700' };
    let spiralPoints = [];
    let spiralAngle = 0;
    let spiralRadius = 0;
    let spiralExpanding = false;
    let spiralComplete = false;
    let currentStage = 'limiar';
    let invitationText = '';
    let invitationPosition = { x: 0, y: 0 };
    let invitationOpacity = 0;
    let gestureStarted = false;
    let gestureTime = 0;
    let gestureInterval;
    let gestureSpeed = 0;
    let gestureDirection = 1;
    let gesturePhase = 0;
    let gesturePhaseSpeed = 0.01;
    let gesturePhaseDirection = 1;
    let gesturePhaseAngle = 0;
    let gesturePhaseRadius = 0;
    let gesturePhaseColor = '#ffd700';
    let gesturePhaseOpacity = 0;
    let gesturePhaseScale = 1;
    let gesturePhaseRotation = 0;
    let gesturePhaseX = 0;
    let gesturePhaseY = 0;
    let gesturePhaseWidth = 0;
    let gesturePhaseHeight = 0;
    let gesturePhaseAspectRatio = 1;
    let gesturePhaseDistortion = 0;
    let gesturePhaseDistortionDirection = 1;
    let gesturePhaseDistortionSpeed = 0.01;
    let gesturePhaseDistortionAngle = 0;
    let gesturePhaseDistortionRadius = 0;
    let gesturePhaseDistortionColor = '#ffd700';
    let gesturePhaseDistortionOpacity = 0;
    let gesturePhaseDistortionScale = 1;
    let gesturePhaseDistortionRotation = 0;
    let gesturePhaseDistortionX = 0;
    let gesturePhaseDistortionY = 0;
    let gesturePhaseDistortionWidth = 0;
    let gesturePhaseDistortionHeight = 0;
    let gesturePhaseDistortionAspectRatio = 1;

    // Initialize audio
    const initAudio = () => {
        if (isAudioInitialized) return;

        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        gainNode = audioContext.createGain();
        oscillator = audioContext.createOscillator();

        oscillator.type = 'sine';
        oscillator.frequency.value = 440;
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        gainNode.gain.value = 0;

        oscillator.start();
        isAudioInitialized = true;
    };

    // Play sound
    const playSound = (frequency, duration) => {
        if (!isAudioInitialized) initAudio();

        oscillator.frequency.value = frequency;
        gainNode.gain.value = 0.5;

        setTimeout(() => {
            gainNode.gain.value = 0;
        }, duration);
    };

    // Vibrate
    const vibrate = (pattern) => {
        if (navigator.vibrate) {
            navigator.vibrate(pattern);
        }
    };

    // Handle gesture
    const handleGesture = (event) => {
        if (!gestureStarted) {
            gestureStarted = true;
            gestureTime = Date.now();
            gestureInterval = setInterval(() => {
                gestureSpeed = 1000 / (Date.now() - gestureTime);
                gestureTime = Date.now();
            }, 100);

            // Play sound on first gesture
            playSound(440, 200);
            vibrate(50);
        }

        // Update gesture phase
        gesturePhase += gesturePhaseSpeed * gesturePhaseDirection;
        if (gesturePhase >= 1 || gesturePhase <= 0) {
            gesturePhaseDirection *= -1;
        }

        // Update gesture distortion
        gesturePhaseDistortion += gesturePhaseDistortionSpeed * gesturePhaseDistortionDirection;
        if (gesturePhaseDistortion >= 1 || gesturePhaseDistortion <= 0) {
            gesturePhaseDistortionDirection *= -1;
        }
    };

    // Handle touch
    const handleTouch = (event) => {
        event.preventDefault();
        handleGesture(event);
    };

    // Handle key
    const handleKey = (event) => {
        if (event.key === ' ' || event.key === 'Enter') {
            event.preventDefault();
            handleGesture(event);
        }
    };

    // Add event listeners
    canvas.addEventListener('touchstart', handleTouch, { passive: false });
    canvas.addEventListener('mousedown', handleGesture);
    document.addEventListener('keydown', handleKey);

    // Animation loop
    const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;

        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update pulse point
        if (currentStage === 'limiar') {
            if (elapsed > 1000 && elapsed < 2000) {
                pulsePoint.x = canvas.width * 0.2;
                pulsePoint.y = canvas.height * 0.2;
                pulsePoint.targetRadius = 20;
                pulsePoint.color = '#ffd700';
            } else if (elapsed > 3000 && elapsed < 4000) {
                pulsePoint.x = canvas.width * 0.8;
                pulsePoint.y = canvas.height * 0.8;
                pulsePoint.targetRadius = 20;
                pulsePoint.color = '#ff6b6b';
            } else if (elapsed > 5000) {
                currentStage = 'chamada';
                pulsePoint.targetRadius = 0;
                invitationText = 'A festa está a começar na tua rua.';
                invitationPosition.x = canvas.width * 0.5;
                invitationPosition.y = canvas.height * 0.5;
                invitationOpacity = 1;
                playSound(330, 500);
                vibrate([50, 50, 50]);
            }
        } else if (currentStage === 'chamada') {
            if (elapsed > 7000) {
                currentStage = 'primeiro-gesto';
                invitationOpacity = 0;
                pulsePoint.targetRadius = 0;
            }
        } else if (currentStage === 'primeiro-gesto') {
            if (gestureStarted) {
                currentStage = 'resposta-viva';
                spiralExpanding = true;
                playSound(220, 1000);
                vibrate([100, 100, 100]);
            }
        } else if (currentStage === 'resposta-viva') {
            if (spiralExpanding) {
                spiralAngle += 0.1;
                spiralRadius += 0.5;
                spiralPoints.push({
                    x: canvas.width / 2 + Math.cos(spiralAngle) * spiralRadius,
                    y: canvas.height / 2 + Math.sin(spiralAngle) * spiralRadius,
                    radius: 5,
                    color: `hsl(${Math.sin(spiralAngle) * 60 + 60}, 100%, 50%)`
                });

                if (spiralRadius > 100) {
                    spiralExpanding = false;
                    spiralComplete = true;
                    currentStage = 'desvio';
                    playSound(110, 500);
                    vibrate([50, 50, 50]);
                }
            }
        } else if (currentStage === 'desvio') {
            if (elapsed > 15000) {
                currentStage = 'aprofundamento-sensorial';
                playSound(440, 500);
                vibrate([50, 50, 50]);
            }
        } else if (currentStage === 'aprofundamento-sensorial') {
            if (elapsed > 20000) {
                currentStage = 'escolha-acaso-silencio';
                playSound(330, 500);
                vibrate([50, 50, 50]);
            }
        } else if (currentStage === 'escolha-acaso-silencio') {
            if (elapsed > 25000) {
                currentStage = 'aparicao';
                playSound(220, 500);
                vibrate([50, 50, 50]);
            }
        } else if (currentStage === 'aparicao') {
            if (elapsed > 30000) {
                currentStage = 'devolucao';
                playSound(110, 500);
                vibrate([50, 50, 50]);
            }
        } else if (currentStage === 'devolucao') {
            if (elapsed > 35000) {
                currentStage = 'rasto-latencia';
                playSound(440, 500);
                vibrate([50, 50, 50]);
            }
        }

        // Draw pulse point
        if (pulsePoint.radius < pulsePoint.targetRadius) {
            pulsePoint.radius += 0.5;
        } else if (pulsePoint.radius > pulsePoint.targetRadius) {
            pulsePoint.radius -= 0.5;
        }

        if (pulsePoint.radius > 0) {
            ctx.beginPath();
            ctx.arc(pulsePoint.x, pulsePoint.y, pulsePoint.radius, 0, Math.PI * 2);
            ctx.fillStyle = pulsePoint.color;
            ctx.fill();
        }

        // Draw spiral
        if (spiralComplete) {
            spiralPoints.forEach(point => {
                ctx.beginPath();
                ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
                ctx.fillStyle = point.color;
                ctx.fill();
            });
        }

        // Draw invitation
        if (invitationOpacity > 0) {
            invitation.textContent = invitationText;
            invitation.style.left = `${invitationPosition.x}px`;
            invitation.style.top = `${invitationPosition.y}px`;
            invitation.style.opacity = invitationOpacity;
        }

        // Draw gesture phase
        if (gestureStarted) {
            ctx.beginPath();
            ctx.arc(
                canvas.width / 2 + Math.cos(gesturePhaseAngle) * gesturePhaseRadius,
                canvas.height / 2 + Math.sin(gesturePhaseAngle) * gesturePhaseRadius,
                10,
                0,
                Math.PI * 2
            );
            ctx.fillStyle = gesturePhaseColor;
            ctx.fill();

            // Update gesture phase properties
            gesturePhaseAngle += gesturePhaseSpeed * gesturePhaseDirection;
            gesturePhaseRadius = 50 + Math.sin(gesturePhase) * 30;
            gesturePhaseColor = `hsl(${Math.sin(gesturePhase) * 60 + 60}, 100%, 50%)`;

            // Draw gesture distortion
            ctx.beginPath();
            ctx.arc(
                canvas.width / 2 + Math.cos(gesturePhaseDistortionAngle) * gesturePhaseDistortionRadius,
                canvas.height / 2 + Math.sin(gesturePhaseDistortionAngle) * gesturePhaseDistortionRadius,
                10,
                0,
                Math.PI * 2
            );
            ctx.fillStyle = gesturePhaseDistortionColor;
            ctx.fill();

            // Update gesture distortion properties
            gesturePhaseDistortionAngle += gesturePhaseDistortionSpeed * gesturePhaseDistortionDirection;
            gesturePhaseDistortionRadius = 50 + Math.sin(gesturePhaseDistortion) * 30;
            gesturePhaseDistortionColor = `hsl(${Math.sin(gesturePhaseDistortion) * 60 + 180}, 100%, 50%)`;
        }

        animationId = requestAnimationFrame(animate);
    };

    // Start animation
    animationId = requestAnimationFrame(animate);

    // Cleanup function
    const destroy = () => {
        // Remove event listeners
        canvas.removeEventListener('touchstart', handleTouch);
        canvas.removeEventListener('mousedown', handleGesture);
        document.removeEventListener('keydown', handleKey);

        // Clear animation
        cancelAnimationFrame(animationId);

        // Clear gesture interval
        if (gestureInterval) {
            clearInterval(gestureInterval);
        }

        // Close audio context
        if (audioContext && audioContext.state !== 'closed') {
            oscillator.stop();
            audioContext.close();
        }

        // Remove elements
        root.removeChild(canvas);
        root.removeChild(invitation);
        document.head.removeChild(style);

        // Call onClose callback
        onClose();
    };

    return { destroy };
}
