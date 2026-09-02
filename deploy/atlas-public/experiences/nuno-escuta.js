export function mountCuratorialExperience({ root, context = {}, onClose = () => {} }) {
    const experienceId = 'nuno-escuta';
    const styleId = `${experienceId}-styles`;

    // Inject styles
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
        #${experienceId} {
            position: relative;
            width: 100%;
            height: 100%;
            background: linear-gradient(to bottom, #1a1a1a, #333333);
            overflow: hidden;
            touch-action: manipulation;
        }

        #${experienceId} .heart {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 50px;
            height: 50px;
            background-color: #ff0000;
            border-radius: 50%;
            box-shadow: 0 0 20px #ff0000;
            cursor: pointer;
        }

        #${experienceId} .paper-texture {
            position: absolute;
            width: 100%;
            height: 100%;
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23333333"/><path d="M0 0 L100 100 M100 0 L0 100" stroke="%23555555" stroke-width="1" opacity="0.5"/></svg>');
            opacity: 0.3;
        }

        #${experienceId} .tint-spot {
            position: absolute;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.2);
            pointer-events: none;
        }
    `;
    document.head.appendChild(style);

    // Create DOM elements
    const container = document.createElement('div');
    container.id = experienceId;
    const heart = document.createElement('div');
    heart.className = 'heart';
    const paperTexture = document.createElement('div');
    paperTexture.className = 'paper-texture';

    container.appendChild(paperTexture);
    container.appendChild(heart);
    root.appendChild(container);

    // Audio context and nodes
    let audioContext;
    let heartbeatOscillator;
    let heartbeatGain;
    let heartbeatFilter;
    let vestigeGain;
    let vestigeBuffer;
    let vestigeSource;
    let userMediaStream;
    let userMediaSource;
    let userMediaGain;
    let vibrationActivated = false;

    // Animation and interaction variables
    let heartbeatInterval;
    let heartbeatRate = 60;
    let heartbeatTime = 0;
    let lastInteractionTime = 0;
    let animationFrameId;
    let isSilent = false;
    let isFrozen = false;
    let tintSpots = [];

    // Initialize audio context
    function initAudioContext() {
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
            heartbeatGain = audioContext.createGain();
            heartbeatGain.gain.value = 0.1;
            heartbeatFilter = audioContext.createBiquadFilter();
            heartbeatFilter.type = 'lowpass';
            heartbeatFilter.frequency.value = 100;
            vestigeGain = audioContext.createGain();
            vestigeGain.gain.value = 0.3;
            userMediaGain = audioContext.createGain();
            userMediaGain.gain.value = 0.5;

            heartbeatGain.connect(heartbeatFilter);
            heartbeatFilter.connect(audioContext.destination);
            vestigeGain.connect(audioContext.destination);
            userMediaGain.connect(audioContext.destination);
        }
    }

    // Create heartbeat sound
    function createHeartbeat() {
        if (heartbeatOscillator) {
            heartbeatOscillator.stop();
        }

        heartbeatOscillator = audioContext.createOscillator();
        heartbeatOscillator.type = 'sine';
        heartbeatOscillator.frequency.value = 1;

        heartbeatOscillator.connect(heartbeatGain);
        heartbeatOscillator.start();

        heartbeatInterval = setInterval(() => {
            if (!isSilent && !isFrozen) {
                heartbeatTime += 1000 / heartbeatRate;
                const gainValue = 0.1 + 0.05 * Math.sin(heartbeatTime * 0.002);
                heartbeatGain.gain.value = gainValue;

                // Visual feedback
                const scale = 1 + 0.2 * gainValue;
                heart.style.transform = `translate(-50%, -50%) scale(${scale})`;
                heart.style.boxShadow = `0 0 ${20 + 20 * gainValue}px #ff0000`;

                // Vibration feedback
                if (vibrationActivated && navigator.vibrate) {
                    navigator.vibrate(50);
                }
            }
        }, 1000 / heartbeatRate);
    }

    // Play a vestige sound
    function playVestige() {
        if (vestigeSource) {
            vestigeSource.stop();
        }

        // Create a simple vestige sound (murmur)
        const bufferSize = audioContext.sampleRate * 2;
        vestigeBuffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
        const data = vestigeBuffer.getChannelData(0);

        for (let i = 0; i < bufferSize; i++) {
            data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
        }

        vestigeSource = audioContext.createBufferSource();
        vestigeSource.buffer = vestigeBuffer;
        vestigeSource.connect(vestigeGain);
        vestigeSource.start();
    }

    // Handle user interaction
    function handleInteraction(type, value) {
        lastInteractionTime = Date.now();

        if (type === 'touch' || type === 'key') {
            // Create a tint spot
            const tintSpot = document.createElement('div');
            tintSpot.className = 'tint-spot';
            tintSpot.style.width = `${Math.random() * 100 + 50}px`;
            tintSpot.style.height = tintSpot.style.width;
            tintSpot.style.left = `${value.x}px`;
            tintSpot.style.top = `${value.y}px`;
            container.appendChild(tintSpot);
            tintSpots.push(tintSpot);

            // Animate the tint spot
            let opacity = 1;
            const animateTintSpot = () => {
                opacity -= 0.01;
                tintSpot.style.opacity = opacity;
                tintSpot.style.transform = `scale(${1 + (1 - opacity) * 2})`;

                if (opacity > 0) {
                    requestAnimationFrame(animateTintSpot);
                } else {
                    container.removeChild(tintSpot);
                    tintSpots = tintSpots.filter(spot => spot !== tintSpot);
                }
            };
            animateTintSpot();

            // Play a response sound
            if (vestigeSource) {
                vestigeSource.stop();
            }

            const responseBuffer = audioContext.createBuffer(1, audioContext.sampleRate * 0.5, audioContext.sampleRate);
            const responseData = responseBuffer.getChannelData(0);

            for (let i = 0; i < responseData.length; i++) {
                responseData[i] = (Math.random() * 2 - 1) * (1 - i / responseData.length);
            }

            vestigeSource = audioContext.createBufferSource();
            vestigeSource.buffer = responseBuffer;
            vestigeSource.connect(vestigeGain);
            vestigeSource.start();
        } else if (type === 'silence') {
            isSilent = true;
            setTimeout(() => {
                isSilent = false;
            }, 10000);
        }
    }

    // Handle touch events
    function handleTouch(event) {
        event.preventDefault();
        const rect = container.getBoundingClientRect();
        const x = event.touches[0].clientX - rect.left;
        const y = event.touches[0].clientY - rect.top;
        handleInteraction('touch', { x, y });
    }

    // Handle key events
    function handleKey(event) {
        if (event.key === ' ' || event.key === 'Enter') {
            event.preventDefault();
            const rect = container.getBoundingClientRect();
            const x = rect.width / 2;
            const y = rect.height / 2;
            handleInteraction('key', { x, y });
        }
    }

    // Handle heartbeat click
    function handleHeartbeatClick() {
        isFrozen = true;
        setTimeout(() => {
            isFrozen = false;
        }, 3000);
        handleInteraction('heartbeat', {});
    }

    // Animation loop
    function animate() {
        if (Date.now() - lastInteractionTime > 10000 && !isSilent) {
            handleInteraction('silence', {});
        }

        animationFrameId = requestAnimationFrame(animate);
    }

    // Start the experience
    function start() {
        initAudioContext();
        createHeartbeat();
        playVestige();

        // Check for vibration support
        if ('vibrate' in navigator) {
            vibrationActivated = true;
        }

        // Event listeners
        container.addEventListener('touchstart', handleTouch, { passive: false });
        document.addEventListener('keydown', handleKey);
        heart.addEventListener('click', handleHeartbeatClick);

        // Start animation loop
        animate();
    }

    // Cleanup function
    function destroy() {
        // Remove event listeners
        container.removeEventListener('touchstart', handleTouch);
        document.removeEventListener('keydown', handleKey);
        heart.removeEventListener('click', handleHeartbeatClick);

        // Stop audio
        if (heartbeatOscillator) {
            heartbeatOscillator.stop();
        }
        if (vestigeSource) {
            vestigeSource.stop();
        }
        if (userMediaStream) {
            userMediaStream.getTracks().forEach(track => track.stop());
        }
        if (audioContext) {
            audioContext.close();
        }

        // Clear intervals and animations
        clearInterval(heartbeatInterval);
        cancelAnimationFrame(animationFrameId);

        // Remove DOM elements
        root.removeChild(container);
        document.head.removeChild(style);

        // Call onClose callback
        onClose();
    }

    // Start the experience
    start();

    return { destroy };
}
