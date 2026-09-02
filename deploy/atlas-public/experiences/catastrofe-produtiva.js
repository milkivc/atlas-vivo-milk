export function mountCuratorialExperience({ root, context = {}, onClose = () => {} }) {
    const experienceId = 'catastrofe-produtiva';
    const styleId = `${experienceId}-styles`;
    const canvasId = `${experienceId}-canvas`;
    const audioContextId = `${experienceId}-audio-context`;

    // Inject styles
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
        #${canvasId} {
            display: block;
            width: 100%;
            height: 100%;
            background-color: black;
        }
    `;
    document.head.appendChild(style);

    // Create canvas
    const canvas = document.createElement('canvas');
    canvas.id = canvasId;
    root.appendChild(canvas);

    // Set canvas dimensions
    canvas.width = root.clientWidth;
    canvas.height = root.clientHeight;

    // Get canvas context
    const ctx = canvas.getContext('2d');

    // Audio context
    let audioContext;
    let oscillator;
    let gainNode;

    // Animation frame and timers
    let animationFrameId;
    let pulseTimer;
    let fragmentTimer;
    let blackHoleTimer;

    // State variables
    let stage = 'limiar';
    let pulseRadius = 0;
    let pulseGrowing = true;
    let inkCircleRadius = 0;
    let fragments = [];
    let blackHole = null;
    let constellations = [];
    let generatedArtwork = null;

    // Initialize experience
    function init() {
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw initial point
        drawPulsatingPoint();

        // Set up event listeners
        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('touchmove', handleTouchMove);
        canvas.addEventListener('keydown', handleKeyDown);

        // Start pulse animation
        pulseTimer = setInterval(() => {
            if (pulseGrowing) {
                pulseRadius += 0.5;
                if (pulseRadius >= 10) pulseGrowing = false;
            } else {
                pulseRadius -= 0.5;
                if (pulseRadius <= 5) pulseGrowing = true;
            }
            drawPulsatingPoint();
        }, 30);

        // Start animation loop
        animationFrameId = requestAnimationFrame(animate);
    }

    // Draw pulsating point
    function drawPulsatingPoint() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, pulseRadius, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
    }

    // Handle mouse move
    function handleMouseMove(e) {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);

        if (distance < 50 && stage === 'limiar') {
            triggerPulse();
        }

        if (stage === 'primeiro_gesto') {
            drawInk(x, y);
        }
    }

    // Handle touch move
    function handleTouchMove(e) {
        e.preventDefault();
        const rect = canvas.getBoundingClientRect();
        const x = e.touches[0].clientX - rect.left;
        const y = e.touches[0].clientY - rect.top;

        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);

        if (distance < 50 && stage === 'limiar') {
            triggerPulse();
        }

        if (stage === 'primeiro_gesto') {
            drawInk(x, y);
        }
    }

    // Handle key down
    function handleKeyDown(e) {
        if (e.key === 'Escape') {
            onClose();
        }
    }

    // Trigger pulse
    function triggerPulse() {
        if (stage !== 'limiar') return;

        // Vibrate if supported
        if (navigator.vibrate) {
            navigator.vibrate(50);
        }

        // Create audio context if not exists
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
            audioContext.id = audioContextId;
        }

        // Create oscillator and gain node
        oscillator = audioContext.createOscillator();
        gainNode = audioContext.createGain();

        // Connect nodes
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        // Set oscillator properties
        oscillator.type = 'sine';
        oscillator.frequency.value = 1000;

        // Set gain properties
        gainNode.gain.value = 0.1;

        // Start oscillator
        oscillator.start();

        // Stop oscillator after 100ms
        setTimeout(() => {
            oscillator.stop();
            oscillator.disconnect();
            gainNode.disconnect();
        }, 100);

        // Transition to chamada stage
        stage = 'chamada';
        clearInterval(pulseTimer);
        pulseTimer = null;

        // Start ink circle animation
        animateInkCircle();
    }

    // Animate ink circle
    function animateInkCircle() {
        inkCircleRadius += 0.5;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, inkCircleRadius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.fill();

        if (inkCircleRadius < 100) {
            fragmentTimer = requestAnimationFrame(animateInkCircle);
        } else {
            stage = 'primeiro_gesto';
            drawInkText();
        }
    }

    // Draw ink text
    function drawInkText() {
        ctx.font = '20px Arial';
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.fillText('Faz. Rasga. Continua.', canvas.width / 2, canvas.height / 2);
    }

    // Draw ink
    function drawInk(x, y) {
        if (stage !== 'primeiro_gesto') return;

        // Create audio context if not exists
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
            audioContext.id = audioContextId;
        }

        // Create oscillator and gain node
        oscillator = audioContext.createOscillator();
        gainNode = audioContext.createGain();

        // Connect nodes
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        // Set oscillator properties
        oscillator.type = 'sawtooth';
        oscillator.frequency.value = 200;

        // Set gain properties
        gainNode.gain.value = 0.1;

        // Start oscillator
        oscillator.start();

        // Stop oscillator after 100ms
        setTimeout(() => {
            oscillator.stop();
            oscillator.disconnect();
            gainNode.disconnect();
        }, 100);

        // Add fragment
        fragments.push({
            x,
            y,
            radius: 10,
            color: `hsl(${Math.random() * 360}, 100%, 50%)`,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2
        });

        // Draw fragments
        drawFragments();

        // Check if fragments have reached a certain size
        if (fragments.length > 20) {
            stage = 'resposta_viva';
            createBlackHole();
        }
    }

    // Draw fragments
    function drawFragments() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        fragments.forEach(fragment => {
            fragment.x += fragment.vx;
            fragment.y += fragment.vy;

            // Bounce off edges
            if (fragment.x <= 0 || fragment.x >= canvas.width) {
                fragment.vx *= -1;
            }
            if (fragment.y <= 0 || fragment.y >= canvas.height) {
                fragment.vy *= -1;
            }

            ctx.beginPath();
            ctx.arc(fragment.x, fragment.y, fragment.radius, 0, Math.PI * 2);
            ctx.fillStyle = fragment.color;
            ctx.fill();
        });
    }

    // Create black hole
    function createBlackHole() {
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        blackHole = {
            x: centerX,
            y: centerY,
            radius: 20,
            color: 'black',
            growing: true
        };

        // Start black hole animation
        animateBlackHole();
    }

    // Animate black hole
    function animateBlackHole() {
        if (!blackHole) return;

        if (blackHole.growing) {
            blackHole.radius += 0.5;
            if (blackHole.radius >= 100) blackHole.growing = false;
        } else {
            blackHole.radius -= 0.5;
            if (blackHole.radius <= 20) blackHole.growing = true;
        }

        // Check for collisions with fragments
        fragments = fragments.filter(fragment => {
            const distance = Math.sqrt((fragment.x - blackHole.x) ** 2 + (fragment.y - blackHole.y) ** 2);
            if (distance < blackHole.radius) {
                // Create audio context if not exists
                if (!audioContext) {
                    audioContext = new (window.AudioContext || window.webkitAudioContext)();
                    audioContext.id = audioContextId;
                }

                // Create oscillator and gain node
                oscillator = audioContext.createOscillator();
                gainNode = audioContext.createGain();

                // Connect nodes
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);

                // Set oscillator properties
                oscillator.type = 'sine';
                oscillator.frequency.value = 100;

                // Set gain properties
                gainNode.gain.value = 0.1;

                // Start oscillator
                oscillator.start();

                // Stop oscillator after 100ms
                setTimeout(() => {
                    oscillator.stop();
                    oscillator.disconnect();
                    gainNode.disconnect();
                }, 100);

                // Add to constellations
                constellations.push({
                    x: fragment.x,
                    y: fragment.y,
                    radius: fragment.radius,
                    color: fragment.color,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5
                });

                return false;
            }
            return true;
        });

        // Draw black hole and fragments
        drawBlackHoleAndFragments();

        // Continue animation
        blackHoleTimer = requestAnimationFrame(animateBlackHole);

        // Check if all fragments are absorbed
        if (fragments.length === 0) {
            stage = 'aprofundamento_sensorial';
            animateConstellations();
        }
    }

    // Draw black hole and fragments
    function drawBlackHoleAndFragments() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw black hole
        ctx.beginPath();
        ctx.arc(blackHole.x, blackHole.y, blackHole.radius, 0, Math.PI * 2);
        ctx.fillStyle = blackHole.color;
        ctx.fill();

        // Draw fragments
        fragments.forEach(fragment => {
            ctx.beginPath();
            ctx.arc(fragment.x, fragment.y, fragment.radius, 0, Math.PI * 2);
            ctx.fillStyle = fragment.color;
            ctx.fill();
        });
    }

    // Animate constellations
    function animateConstellations() {
        if (stage !== 'aprofundamento_sensorial') return;

        // Update constellations
        constellations.forEach(constellation => {
            constellation.x += constellation.vx;
            constellation.y += constellation.vy;

            // Bounce off edges
            if (constellation.x <= 0 || constellation.x >= canvas.width) {
                constellation.vx *= -1;
            }
            if (constellation.y <= 0 || constellation.y >= canvas.height) {
                constellation.vy *= -1;
            }
        });

        // Draw constellations
        drawConstellations();

        // Continue animation
        blackHoleTimer = requestAnimationFrame(animateConstellations);

        // Check if constellations have reached a certain size
        if (constellations.length > 10) {
            stage = 'escolha_acaso_silencio';
            generateArtwork();
        }
    }

    // Draw constellations
    function drawConstellations() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw constellations
        constellations.forEach(constellation => {
            ctx.beginPath();
            ctx.arc(constellation.x, constellation.y, constellation.radius, 0, Math.PI * 2);
            ctx.fillStyle = constellation.color;
            ctx.fill();
        });
    }

    // Generate artwork
    function generateArtwork() {
        // Create a new canvas for the artwork
        const artworkCanvas = document.createElement('canvas');
        artworkCanvas.width = canvas.width;
        artworkCanvas.height = canvas.height;
        const artworkCtx = artworkCanvas.getContext('2d');

        // Draw constellations on the artwork canvas
        constellations.forEach(constellation => {
            artworkCtx.beginPath();
            artworkCtx.arc(constellation.x, constellation.y, constellation.radius, 0, Math.PI * 2);
            artworkCtx.fillStyle = constellation.color;
            artworkCtx.fill();
        });

        // Convert the artwork canvas to an image
        generatedArtwork = artworkCanvas.toDataURL('image/png');

        // Display the artwork
        displayArtwork();
    }

    // Display artwork
    function displayArtwork() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw the generated artwork
        const img = new Image();
        img.onload = function() {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        };
        img.src = generatedArtwork;

        // Display a message
        ctx.font = '20px Arial';
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.fillText('Obra gerada. Aperte ESC para sair.', canvas.width / 2, canvas.height / 2 + 50);
    }

    // Animation loop
    function animate() {
        if (stage === 'limiar') {
            drawPulsatingPoint();
        } else if (stage === 'chamada') {
            animateInkCircle();
        } else if (stage === 'primeiro_gesto') {
            drawFragments();
        } else if (stage === 'resposta_viva') {
            animateBlackHole();
        } else if (stage === 'aprofundamento_sensorial') {
            animateConstellations();
        }

        animationFrameId = requestAnimationFrame(animate);
    }

    // Clean up function
    function destroy() {
        // Remove event listeners
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('touchmove', handleTouchMove);
        canvas.removeEventListener('keydown', handleKeyDown);

        // Clear timers and animation frames
        clearInterval(pulseTimer);
        clearTimeout(fragmentTimer);
        cancelAnimationFrame(animationFrameId);
        cancelAnimationFrame(blackHoleTimer);

        // Close audio context
        if (audioContext) {
            audioContext.close();
        }

        // Remove canvas and styles
        root.removeChild(canvas);
        document.head.removeChild(style);
    }

    // Initialize the experience
    init();

    // Return destroy function
    return { destroy };
}
