export function mountCuratorialExperience({ root, context = {}, onClose = () => {} }) {
    const experienceId = 'campo-ourique-olho-orelha';
    const styleId = `${experienceId}-styles`;

    // Inject styles scoped to the experience
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
        #${experienceId} .panel {
            position: absolute;
            width: 50%;
            height: 100%;
            transition: opacity 0.5s ease;
        }
        #${experienceId} #eye-panel {
            left: 0;
            background-color: #fff;
        }
        #${experienceId} #ear-panel {
            right: 0;
            background-color: #000;
        }
        #${experienceId} .invitation {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #000;
            font-family: 'Courier New', monospace;
            font-size: 24px;
            text-align: center;
            opacity: 0;
            transition: opacity 0.5s ease;
        }
        #${experienceId} .invitation.visible {
            opacity: 1;
        }
        #${experienceId} .invitation.fade-out {
            opacity: 0;
        }
        #${experienceId} .invitation .arrow {
            display: block;
            margin-top: 20px;
            font-size: 30px;
        }
        #${experienceId} .image-container {
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
        }
        #${experienceId} .image-container img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
            filter: blur(5px);
            transition: filter 0.3s ease, transform 0.3s ease;
        }
        #${experienceId} .sound-point {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 20px;
            height: 20px;
            background-color: #fff;
            border-radius: 50%;
            opacity: 0.7;
            animation: pulse 2s infinite;
        }
        @keyframes pulse {
            0% { transform: translate(-50%, -50%) scale(1); }
            50% { transform: translate(-50%, -50%) scale(1.2); }
            100% { transform: translate(-50%, -50%) scale(1); }
        }
        #${experienceId} .trace {
            position: absolute;
            pointer-events: none;
        }
    `;
    document.head.appendChild(style);

    // Create the experience container
    const container = document.createElement('div');
    container.id = experienceId;
    root.appendChild(container);

    // Create panels
    const eyePanel = document.createElement('div');
    eyePanel.id = 'eye-panel';
    eyePanel.className = 'panel';
    container.appendChild(eyePanel);

    const earPanel = document.createElement('div');
    earPanel.id = 'ear-panel';
    earPanel.className = 'panel';
    container.appendChild(earPanel);

    // Create invitation
    const invitation = document.createElement('div');
    invitation.className = 'invitation';
    invitation.innerHTML = 'Olha sem ouvir. Ouve sem olhar.<span class="arrow">↑</span><span class="arrow">↓</span>';
    container.appendChild(invitation);

    // Create image container for eye panel
    const imageContainer = document.createElement('div');
    imageContainer.className = 'image-container';
    eyePanel.appendChild(imageContainer);

    // Create sound point for ear panel
    const soundPoint = document.createElement('div');
    soundPoint.className = 'sound-point';
    earPanel.appendChild(soundPoint);

    // Audio context and nodes
    let audioContext;
    let soundSource;
    let gainNode;
    let analyser;
    let animationFrameId;
    let timeoutId;
    let inversionTimeoutId;
    let traceTimeoutId;
    let traces = [];
    let currentImageIndex = 0;
    let isEyePanelActive = false;
    let isEarPanelActive = false;
    let isFusionActive = false;
    let isTraceMode = false;
    let traceType = '';
    let traceData = null;

    // Sample images (base64 encoded for demonstration)
    const images = [
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3+iiigD//2Q==',
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3+iiigD//2Q==',
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3+iiigD//2Q=='
    ];

    // Initialize the experience
    function init() {
        // Show invitation
        setTimeout(() => {
            invitation.classList.add('visible');
        }, 1000);

        // Hide invitation after 3 seconds
        setTimeout(() => {
            invitation.classList.remove('visible');
            invitation.classList.add('fade-out');
        }, 4000);

        // Set up event listeners
        container.addEventListener('mousemove', handleMouseMove);
        container.addEventListener('touchmove', handleTouchMove);
        container.addEventListener('click', handleClick);
        container.addEventListener('keydown', handleKeyDown);

        // Initialize audio context on user gesture
        container.addEventListener('click', initAudioContext, { once: true });
        container.addEventListener('touchstart', initAudioContext, { once: true });

        // Start the experience
        startExperience();
    }

    function initAudioContext() {
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
            createAmbientSound();
        }
    }

    function createAmbientSound() {
        if (!audioContext) return;

        // Create a simple ambient sound using oscillator
        soundSource = audioContext.createOscillator();
        soundSource.type = 'sine';
        soundSource.frequency.value = 220; // A3 note

        gainNode = audioContext.createGain();
        gainNode.gain.value = 0.1; // Start with very low volume

        analyser = audioContext.createAnalyser();
        analyser.fftSize = 256;

        soundSource.connect(gainNode);
        gainNode.connect(analyser);
        analyser.connect(audioContext.destination);

        soundSource.start();
    }

    function handleMouseMove(event) {
        const rect = container.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        if (isEyePanelActive && !isFusionActive) {
            updateImageParallax(x, y);
        } else if (isEarPanelActive && !isFusionActive) {
            updateSoundSpatialization(x, rect.width);
        } else if (isFusionActive) {
            updateFusion(x, y, rect.width, rect.height);
        }

        if (isTraceMode && traceType === 'visual') {
            drawTrace(x, y);
        }
    }

    function handleTouchMove(event) {
        event.preventDefault();
        const touch = event.touches[0];
        const rect = container.getBoundingClientRect();
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;

        if (isEyePanelActive && !isFusionActive) {
            updateImageParallax(x, y);
        } else if (isEarPanelActive && !isFusionActive) {
            updateSoundSpatialization(x, rect.width);
        } else if (isFusionActive) {
            updateFusion(x, y, rect.width, rect.height);
        }

        if (isTraceMode && traceType === 'visual') {
            drawTrace(x, y);
        }
    }

    function handleClick(event) {
        const rect = container.getBoundingClientRect();
        const x = event.clientX - rect.left;

        if (x < rect.width / 2) {
            activateEyePanel();
        } else {
            activateEarPanel();
        }

        if (isTraceMode) {
            if (traceType === 'audio') {
                // In a real implementation, we would record audio here
                // For this demo, we'll just finish the trace mode
                finishTraceMode();
            } else if (traceType === 'visual') {
                finishVisualTrace();
            }
        }
    }

    function handleKeyDown(event) {
        if (event.key === 'ArrowLeft') {
            activateEyePanel();
        } else if (event.key === 'ArrowRight') {
            activateEarPanel();
        } else if (event.key === 'Escape') {
            onClose();
        }
    }

    function activateEyePanel() {
        if (isEyePanelActive) return;

        isEyePanelActive = true;
        isEarPanelActive = false;
        isFusionActive = false;

        eyePanel.style.opacity = '1';
        earPanel.style.opacity = '0.1';

        if (gainNode) {
            gainNode.gain.value = 0; // Mute sound
        }

        loadImage();
        scheduleInversion();

        // Vibrate if supported
        if (window.navigator.vibrate) {
            window.navigator.vibrate(50);
        }
    }

    function activateEarPanel() {
        if (isEarPanelActive) return;

        isEarPanelActive = true;
        isEyePanelActive = false;
        isFusionActive = false;

        earPanel.style.opacity = '1';
        eyePanel.style.opacity = '0.1';

        if (gainNode) {
            gainNode.gain.value = 0.7; // Increase sound volume
        }

        scheduleInversion();

        // Vibrate if supported
        if (window.navigator.vibrate) {
            window.navigator.vibrate(50);
        }
    }

    function loadImage() {
        const img = new Image();
        img.src = images[currentImageIndex];
        img.onload = () => {
            imageContainer.innerHTML = '';
            imageContainer.appendChild(img);
            currentImageIndex = (currentImageIndex + 1) % images.length;
        };
    }

    function updateImageParallax(x, y) {
        const img = imageContainer.querySelector('img');
        if (!img) return;

        const rect = imageContainer.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const moveX = (x - centerX) / 20;
        const moveY = (y - centerY) / 20;

        img.style.transform = `translate(${moveX}px, ${moveY}px)`;

        // Adjust blur based on distance from center
        const distance = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
        const maxDistance = Math.sqrt(Math.pow(centerX, 2) + Math.pow(centerY, 2));
        const blurValue = 5 + (distance / maxDistance) * 10;
        img.style.filter = `blur(${blurValue}px)`;
    }

    function updateSoundSpatialization(x, width) {
        if (!analyser) return;

        const pan = (x / width) * 2 - 1; // Convert to -1 to 1 range

        // Simple panning effect
        const leftGain = 0.5 * (1 - pan);
        const rightGain = 0.5 * (1 + pan);

        if (gainNode) {
            gainNode.gain.value = 0.7 * (leftGain + rightGain);
        }

        // Visual feedback for sound point
        soundPoint.style.left = `${x}px`;
    }

    function scheduleInversion() {
        clearTimeout(inversionTimeoutId);
        inversionTimeoutId = setTimeout(() => {
            if (isEyePanelActive) {
                activateEarPanel();
            } else if (isEarPanelActive) {
                activateEyePanel();
            }
        }, 10000);
    }

    function startFusion() {
        isFusionActive = true;
        isEyePanelActive = false;
        isEarPanelActive = false;

        eyePanel.style.opacity = '1';
        earPanel.style.opacity = '1';

        if (gainNode) {
            gainNode.gain.value = 0.5; // Medium volume for fusion
        }

        loadImage();

        // Vibrate if supported
        if (window.navigator.vibrate) {
            window.navigator.vibrate(100);
        }
    }

    function updateFusion(x, y, width, height) {
        if (!analyser) return;

        const pan = (x / width) * 2 - 1;
        const tilt = (y / height) * 2 - 1;

        // Adjust sound based on position
        const leftGain = 0.5 * (1 - pan);
        const rightGain = 0.5 * (1 + pan);

        if (gainNode) {
            gainNode.gain.value = 0.5 * (leftGain + rightGain);
        }

        // Adjust image based on tilt
        const img = imageContainer.querySelector('img');
        if (img) {
            const moveX = pan * 20;
            const moveY = tilt * 20;
            img.style.transform = `translate(${moveX}px, ${moveY}px)`;

            const blurValue = 5 + Math.abs(tilt) * 10;
            img.style.filter = `blur(${blurValue}px)`;
        }

        // Visual feedback for sound point
        soundPoint.style.left = `${x}px`;
        soundPoint.style.top = `${y}px`;
    }

    function startTraceMode() {
        isTraceMode = true;

        // Randomly choose between audio and visual trace
        traceType = Math.random() > 0.5 ? 'audio' : 'visual';

        if (traceType === 'audio') {
            // Show instruction to record audio
            const instruction = document.createElement('div');
            instruction.className = 'instruction';
            instruction.textContent = 'Grave um som curto (opcional)';
            container.appendChild(instruction);

            // Set timeout to finish trace mode
            traceTimeoutId = setTimeout(() => {
                finishTraceMode();
            }, 10000);
        } else {
            // Show instruction to draw
            const instruction = document.createElement('div');
            instruction.className = 'instruction';
            instruction.textContent = 'Desenhe com o cursor';
            container.appendChild(instruction);

            // Set timeout to finish trace mode
            traceTimeoutId = setTimeout(() => {
                finishTraceMode();
            }, 10000);
        }
    }

    function drawTrace(x, y) {
        const trace = document.createElement('div');
        trace.className = 'trace';
        trace.style.left = `${x}px`;
        trace.style.top = `${y}px`;
        trace.style.width = '10px';
        trace.style.height = '10px';
        trace.style.backgroundColor = '#fff';
        trace.style.borderRadius = '50%';
        trace.style.position = 'absolute';
        trace.style.pointerEvents = 'none';
        container.appendChild(trace);

        traces.push(trace);

        // Remove old traces
        if (traces.length > 50) {
            const oldTrace = traces.shift();
            oldTrace.remove();
        }
    }

    function finishVisualTrace() {
        // Convert traces to a data URL
        const canvas = document.createElement('canvas');
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
        const ctx = canvas.getContext('2d');

        traces.forEach(trace => {
            const x = parseFloat(trace.style.left);
            const y = parseFloat(trace.style.top);
            ctx.fillStyle = '#fff';
            ctx.beginPath();
            ctx.arc(x, y, 5, 0, Math.PI * 2);
            ctx.fill();
        });

        traceData = canvas.toDataURL('image/png');
        finishTraceMode();
    }

    function finishTraceMode() {
        isTraceMode = false;
        clearTimeout(traceTimeoutId);

        // Remove instruction
        const instruction = container.querySelector('.instruction');
        if (instruction) {
            instruction.remove();
        }

        // Show memory message
        const memoryMessage = document.createElement('div');
        memoryMessage.className = 'memory-message';
        memoryMessage.textContent = 'Campo de Ourique lembra-se de ti.';
        memoryMessage.style.position = 'absolute';
        memoryMessage.style.top = '50%';
        memoryMessage.style.left = '50%';
        memoryMessage.style.transform = 'translate(-50%, -50%)';
        memoryMessage.style.color = '#fff';
        memoryMessage.style.fontFamily = 'Courier New, monospace';
        memoryMessage.style.fontSize = '24px';
        memoryMessage.style.textAlign = 'center';
        container.appendChild(memoryMessage);

        // Set timeout to remove memory message
        setTimeout(() => {
            memoryMessage.remove();
            startExperience();
        }, 3000);
    }

    function startExperience() {
        // Reset state
        isEyePanelActive = false;
        isEarPanelActive = false;
        isFusionActive = false;
        isTraceMode = false;

        // Reset panels
        eyePanel.style.opacity = '1';
        earPanel.style.opacity = '1';

        // Show invitation again
        invitation.classList.remove('fade-out');
        invitation.classList.add('visible');

        // Hide invitation after 3 seconds
        setTimeout(() => {
            invitation.classList.remove('visible');
            invitation.classList.add('fade-out');
        }, 3000);

        // Start the experience cycle
        timeoutId = setTimeout(() => {
            if (Math.random() > 0.5) {
                activateEyePanel();
            } else {
                activateEarPanel();
            }
        }, 5000);
    }

    function destroy() {
        // Clean up event listeners
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('touchmove', handleTouchMove);
        container.removeEventListener('click', handleClick);
        container.removeEventListener('keydown', handleKeyDown);

        // Stop audio
        if (soundSource) {
            soundSource.stop();
        }

        if (audioContext) {
            audioContext.close();
        }

        // Clear timeouts and animation frames
        clearTimeout(timeoutId);
        clearTimeout(inversionTimeoutId);
        clearTimeout(traceTimeoutId);
        cancelAnimationFrame(animationFrameId);

        // Remove injected styles
        const styleElement = document.getElementById(styleId);
        if (styleElement) {
            styleElement.remove();
        }

        // Remove container
        root.removeChild(container);
    }

    // Start the experience
    init();

    return { destroy };
}
