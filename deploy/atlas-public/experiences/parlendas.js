export function mountCuratorialExperience({ root, context = {}, onClose = () => {} }) {
    // Create a unique ID for the experience
    const experienceId = 'parlendas';
    const styleId = `${experienceId}-styles`;

    // Create a container for the experience
    const container = document.createElement('div');
    container.id = experienceId;
    container.style.position = 'relative';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.backgroundColor = 'black';
    container.style.overflow = 'hidden';
    root.appendChild(container);

    // Inject styles
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
        #${experienceId} {
            font-family: Arial, sans-serif;
            color: white;
        }
        #${experienceId} .invitation {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            font-size: 24px;
            cursor: pointer;
        }
        #${experienceId} .invitation:hover {
            text-shadow: 0 0 10px white;
        }
        #${experienceId} .pulse {
            position: absolute;
            width: 10px;
            height: 10px;
            background-color: white;
            border-radius: 50%;
            animation: pulse 1s infinite;
        }
        @keyframes pulse {
            0% {
                transform: scale(0.5);
                opacity: 1;
            }
            100% {
                transform: scale(1.5);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Create the invitation element
    const invitation = document.createElement('div');
    invitation.className = 'invitation';
    invitation.textContent = 'Bate o ritmo. Troca a última palavra.';
    container.appendChild(invitation);

    // Create the pulse element
    const pulse = document.createElement('div');
    pulse.className = 'pulse';
    container.appendChild(pulse);

    // Audio context and nodes
    let audioContext;
    let oscillator;
    let gainNode;
    let isPlaying = false;

    // Initialize audio context
    function initAudio() {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        oscillator = audioContext.createOscillator();
        gainNode = audioContext.createGain();

        oscillator.type = 'sine';
        oscillator.frequency.value = 440;
        gainNode.gain.value = 0.1;

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
    }

    // Start audio
    function startAudio() {
        if (!audioContext) {
            initAudio();
        }
        if (!isPlaying) {
            oscillator.start();
            isPlaying = true;
        }
    }

    // Stop audio
    function stopAudio() {
        if (isPlaying) {
            oscillator.stop();
            oscillator = null;
            gainNode = null;
            audioContext.close();
            audioContext = null;
            isPlaying = false;
        }
    }

    // Handle click/tap event
    function handleInteraction(event) {
        event.preventDefault();
        startAudio();

        // Vibrate if supported
        if (navigator.vibrate) {
            navigator.vibrate(50);
        }

        // Update pulse position
        pulse.style.left = `${event.clientX}px`;
        pulse.style.top = `${event.clientY}px`;

        // Play a sound
        if (audioContext && gainNode) {
            gainNode.gain.value = 0.5;
            setTimeout(() => {
                gainNode.gain.value = 0.1;
            }, 100);
        }
    }

    // Add event listeners
    container.addEventListener('click', handleInteraction);
    container.addEventListener('touchstart', handleInteraction);

    // Cleanup function
    function destroy() {
        // Remove event listeners
        container.removeEventListener('click', handleInteraction);
        container.removeEventListener('touchstart', handleInteraction);

        // Stop audio
        stopAudio();

        // Remove elements
        root.removeChild(container);
        document.head.removeChild(style);

        // Call onClose callback
        onClose();
    }

    // Return destroy function
    return { destroy };
}
