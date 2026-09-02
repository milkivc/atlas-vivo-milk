export function mountCuratorialExperience({ root, context = {}, onClose = () => {} }) {
    const experienceId = 'bilhete-assimetrico';
    const styleId = `${experienceId}-styles`;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Inject styles
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
        #${experienceId} {
            position: relative;
            width: 100%;
            height: 100%;
            background-color: #f5f5dc;
            overflow: hidden;
            font-family: 'Courier New', monospace;
        }

        .paper {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 80%;
            height: 80%;
            background-color: #fff8e1;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-radius: 5px;
            border: 1px solid #d3d3d3;
            box-sizing: border-box;
            padding: 20px;
            cursor: text;
            overflow: hidden;
        }

        .paper::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="none" stroke="%23d3d3d3" stroke-width="0.5" stroke-dasharray="1,1"/></svg>');
            opacity: 0.5;
            pointer-events: none;
        }

        .initial-line {
            position: absolute;
            top: 50%;
            left: 10%;
            width: 80%;
            height: 1px;
            background-color: #000;
            transform-origin: center;
        }

        .initial-line.trembling {
            animation: tremble 2s infinite;
        }

        @keyframes tremble {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            25% { transform: translateY(-1px) rotate(0.5deg); }
            50% { transform: translateY(1px) rotate(-0.5deg); }
            75% { transform: translateY(-1px) rotate(-0.5deg); }
        }

        .cursor-shadow {
            position: absolute;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: rgba(0, 0, 0, 0.1);
            pointer-events: none;
            z-index: 10;
        }

        .half-paper {
            position: absolute;
            top: 0;
            width: 50%;
            height: 100%;
            box-sizing: border-box;
            padding: 20px;
            overflow: hidden;
        }

        .left-half {
            left: 0;
            border-right: 1px dashed #d3d3d3;
        }

        .right-half {
            right: 0;
            border-left: 1px dashed #d3d3d3;
        }

        .right-shadow {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.1);
            pointer-events: none;
            z-index: 5;
        }

        .text-container {
            position: relative;
            width: 100%;
            height: 100%;
            outline: none;
        }

        .text-content {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            white-space: pre-wrap;
            word-wrap: break-word;
            line-height: 1.5;
        }

        .ink-blot {
            position: absolute;
            border-radius: 50%;
            background-color: rgba(0, 0, 0, 0.2);
            pointer-events: none;
            z-index: 1;
        }

        .folded {
            transform: scale(0.9);
            transition: transform 0.5s ease;
        }
    `;
    document.head.appendChild(style);

    // Create DOM elements
    const container = document.createElement('div');
    container.id = experienceId;
    root.appendChild(container);

    const paper = document.createElement('div');
    paper.className = 'paper';
    container.appendChild(paper);

    const initialLine = document.createElement('div');
    initialLine.className = 'initial-line trembling';
    paper.appendChild(initialLine);

    const cursorShadow = document.createElement('div');
    cursorShadow.className = 'cursor-shadow';
    paper.appendChild(cursorShadow);

    let leftHalf, rightHalf, textContainer, textContent, rightShadow;
    let audioContext, gainNode, oscillator;
    let animationFrameId, inactivityTimer;
    let isWriting = false;
    let lastCharTime = 0;
    let charDelay = 100; // Initial delay in milliseconds

    // Initialize audio context
    function initAudioContext() {
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
            gainNode = audioContext.createGain();
            gainNode.gain.value = 0.1;
            gainNode.connect(audioContext.destination);
        }
    }

    // Play sound
    function playSound(frequency, duration, type = 'sine') {
        if (prefersReducedMotion) return;

        initAudioContext();

        oscillator = audioContext.createOscillator();
        oscillator.type = type;
        oscillator.frequency.value = frequency;
        oscillator.connect(gainNode);
        oscillator.start();

        setTimeout(() => {
            oscillator.stop();
        }, duration);
    }

    // Vibrate
    function vibrate(pattern) {
        if (navigator.vibrate) {
            navigator.vibrate(pattern);
        }
    }

    // Handle initial line click
    function handleInitialLineClick() {
        if (leftHalf) return;

        // Play paper tear sound
        playSound(200, 300, 'triangle');
        vibrate(50);

        // Split the paper into two halves
        leftHalf = document.createElement('div');
        leftHalf.className = 'half-paper left-half';
        paper.appendChild(leftHalf);

        rightHalf = document.createElement('div');
        rightHalf.className = 'half-paper right-half';
        paper.appendChild(rightHalf);

        rightShadow = document.createElement('div');
        rightShadow.className = 'right-shadow';
        rightHalf.appendChild(rightShadow);

        textContainer = document.createElement('div');
        textContainer.className = 'text-container';
        textContainer.contentEditable = 'true';
        textContainer.spellcheck = false;
        leftHalf.appendChild(textContainer);

        textContent = document.createElement('div');
        textContent.className = 'text-content';
        textContainer.appendChild(textContent);

        // Remove initial line
        paper.removeChild(initialLine);

        // Start cursor shadow animation
        animateCursorShadow();

        // Set up event listeners for writing
        textContainer.addEventListener('input', handleTextInput);
        textContainer.addEventListener('keydown', handleKeyDown);

        // Start inactivity timer
        resetInactivityTimer();
    }

    // Animate cursor shadow
    function animateCursorShadow() {
        if (prefersReducedMotion) {
            cursorShadow.style.display = 'none';
            return;
        }

        let angle = 0;
        let radius = 20;
        let speed = 0.02;

        function updateShadow() {
            angle += speed;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            cursorShadow.style.transform = `translate(${x}px, ${y}px)`;
            animationFrameId = requestAnimationFrame(updateShadow);
        }

        updateShadow();
    }

    // Handle text input
    function handleTextInput(e) {
        const now = Date.now();
        const timeSinceLastChar = now - lastCharTime;

        if (timeSinceLastChar > 500) {
            // Reset delay if there's a significant pause
            charDelay = 100;
        } else {
            // Adjust delay based on typing speed
            charDelay = Math.max(50, 150 - timeSinceLastChar / 2);
        }

        lastCharTime = now;

        if (!isWriting) {
            isWriting = true;
            // Play writing sound
            playSound(440, 1000, 'sine');
        }

        // Reset inactivity timer
        resetInactivityTimer();
    }

    // Handle key down
    function handleKeyDown(e) {
        if (e.key === 'Backspace') {
            // Play erasing sound
            playSound(300, 100, 'sine');
        }
    }

    // Reset inactivity timer
    function resetInactivityTimer() {
        clearTimeout(inactivityTimer);

        inactivityTimer = setTimeout(() => {
            // Fade out text
            textContent.style.transition = 'opacity 2s ease-out';
            textContent.style.opacity = '0';

            // Play reverse writing sound
            playSound(440, 2000, 'sine');

            // Animate right shadow
            animateRightShadow();

            // Check for user inactivity after 5 seconds
            setTimeout(() => {
                if (textContent.style.opacity === '0') {
                    // User is inactive, fold the paper
                    foldPaper();
                }
            }, 5000);
        }, 5000);
    }

    // Animate right shadow
    function animateRightShadow() {
        if (prefersReducedMotion) return;

        let angle = 0;
        let speed = 0.05;

        function updateShadow() {
            angle += speed;
            const x = Math.sin(angle) * 5;
            const y = Math.cos(angle) * 5;
            rightShadow.style.transform = `translate(${x}px, ${y}px)`;
            animationFrameId = requestAnimationFrame(updateShadow);
        }

        updateShadow();
    }

    // Fold the paper
    function foldPaper() {
        paper.classList.add('folded');

        // Play paper fold sound
        playSound(150, 500, 'sine');

        // After folding, reveal the right half
        setTimeout(() => {
            rightHalf.style.borderLeft = 'none';
            rightShadow.style.display = 'none';

            // Add ink blot
            const inkBlot = document.createElement('div');
            inkBlot.className = 'ink-blot';
            const size = Math.random() * 30 + 10;
            inkBlot.style.width = `${size}px`;
            inkBlot.style.height = `${size}px`;
            inkBlot.style.left = `${Math.random() * 80 + 10}%`;
            inkBlot.style.top = `${Math.random() * 80 + 10}%`;
            rightHalf.appendChild(inkBlot);

            // Allow user to write in the right half
            const rightTextContainer = document.createElement('div');
            rightTextContainer.className = 'text-container';
            rightTextContainer.contentEditable = 'true';
            rightTextContainer.spellcheck = false;
            rightHalf.appendChild(rightTextContainer);

            const rightTextContent = document.createElement('div');
            rightTextContent.className = 'text-content';
            rightTextContainer.appendChild(rightTextContent);
        }, 1000);
    }

    // Event listeners
    initialLine.addEventListener('click', handleInitialLineClick);

    // Mouse move for cursor shadow
    paper.addEventListener('mousemove', (e) => {
        if (!leftHalf) {
            const rect = paper.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            cursorShadow.style.left = `${x - 10}px`;
            cursorShadow.style.top = `${y - 10}px`;
        }
    });

    // Cleanup function
    function destroy() {
        // Remove event listeners
        initialLine.removeEventListener('click', handleInitialLineClick);
        paper.removeEventListener('mousemove', () => {});

        if (textContainer) {
            textContainer.removeEventListener('input', handleTextInput);
            textContainer.removeEventListener('keydown', handleKeyDown);
        }

        // Clear timers and animations
        clearTimeout(inactivityTimer);
        cancelAnimationFrame(animationFrameId);

        // Close audio context
        if (audioContext && audioContext.state !== 'closed') {
            audioContext.close();
        }

        // Remove elements
        root.removeChild(container);
        document.head.removeChild(style);

        // Call onClose callback
        onClose();
    }

    return { destroy };
}
