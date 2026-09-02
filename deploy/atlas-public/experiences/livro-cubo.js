export function mountCuratorialExperience({ root, context = {}, onClose = () => {} }) {
    const experienceId = 'livro-cubo';
    const styleId = `${experienceId}-styles`;
    const rootElement = typeof root === 'string' ? document.querySelector(root) : root;

    if (!rootElement) {
        console.error('Root element not found');
        return { destroy: () => {} };
    }

    // Clean up existing styles and elements
    const existingStyle = document.getElementById(styleId);
    if (existingStyle) {
        existingStyle.remove();
    }

    // Inject styles
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
        #${experienceId} {
            position: relative;
            width: 100%;
            height: 100%;
            background-color: #000;
            overflow: hidden;
            touch-action: manipulation;
        }

        #${experienceId} .central-point {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 20px;
            height: 20px;
            background-color: #fff;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            box-shadow: 0 0 10px 5px rgba(255, 255, 255, 0.5);
            animation: pulse 2s infinite;
        }

        #${experienceId} .cube-face {
            position: absolute;
            width: 100px;
            height: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-family: Arial, sans-serif;
            font-size: 16px;
            cursor: pointer;
            user-select: none;
            transition: transform 0.3s, opacity 0.3s;
        }

        #${experienceId} .cube-face.hidden {
            opacity: 0;
            pointer-events: none;
        }

        #${experienceId} .cube-face.active {
            transform: scale(1.2);
        }

        #${experienceId} .void {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            color: black;
            font-family: Arial, sans-serif;
            font-size: 24px;
            text-align: center;
            padding: 20px;
            box-sizing: border-box;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.5s;
        }

        #${experienceId} .void.active {
            opacity: 1;
        }

        #${experienceId} .trace {
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background-color: rgba(255, 255, 255, 0.2);
            padding: 10px;
            border-radius: 5px;
            color: white;
            font-family: Arial, sans-serif;
            font-size: 14px;
            text-align: center;
            opacity: 0;
            transition: opacity 0.3s;
        }

        #${experienceId} .trace.active {
            opacity: 1;
        }

        @keyframes pulse {
            0% { transform: translate(-50%, -50%) scale(1); box-shadow: 0 0 10px 5px rgba(255, 255, 255, 0.5); }
            50% { transform: translate(-50%, -50%) scale(1.2); box-shadow: 0 0 20px 10px rgba(255, 255, 255, 0.7); }
            100% { transform: translate(-50%, -50%) scale(1); box-shadow: 0 0 10px 5px rgba(255, 255, 255, 0.5); }
        }
    `;
    document.head.appendChild(style);

    // Create experience container
    const container = document.createElement('div');
    container.id = experienceId;
    rootElement.appendChild(container);

    // Create central point
    const centralPoint = document.createElement('div');
    centralPoint.className = 'central-point';
    container.appendChild(centralPoint);

    // Create cube faces
    const faces = [
        { name: 'a porta', texture: 'metal oxidado', sound: 'porta a ranger', color: '#555' },
        { name: 'o chão', texture: 'papel rasgado', sound: 'vento a entrar', color: '#8B4513' },
        { name: 'o céu', texture: 'tecido vivo', sound: 'voz sussurrando', color: '#87CEEB' },
        { name: 'a jaula', texture: 'grades', sound: 'som de grades', color: '#A9A9A9' },
        { name: 'o buraco', texture: 'eco de voz', sound: 'eco de voz', color: '#000' },
        { name: 'o espelho', texture: 'reflexo', sound: 'som de espelho', color: '#C0C0C0' }
    ];

    const faceElements = [];
    faces.forEach((face, index) => {
        const faceElement = document.createElement('div');
        faceElement.className = 'cube-face hidden';
        faceElement.style.backgroundColor = face.color;
        faceElement.textContent = face.name;
        faceElement.dataset.index = index;
        container.appendChild(faceElement);
        faceElements.push(faceElement);
    });

    // Create void
    const voidElement = document.createElement('div');
    voidElement.className = 'void';
    container.appendChild(voidElement);

    // Create trace
    const traceElement = document.createElement('div');
    traceElement.className = 'trace';
    container.appendChild(traceElement);

    // Audio context
    let audioContext;
    let oscillator;
    let gainNode;

    // State
    let currentFaceIndex = null;
    let isRotating = false;
    let rotationStartX = 0;
    let rotationStartY = 0;
    let rotationX = 0;
    let rotationY = 0;
    let lastInteractionTime = Date.now();
    let voidTimeout;
    let traceTimeout;

    // Event listeners
    const handleMouseMove = (e) => {
        if (isRotating) {
            const deltaX = e.clientX - rotationStartX;
            const deltaY = e.clientY - rotationStartY;
            rotationX = deltaY * 0.5;
            rotationY = -deltaX * 0.5;

            faceElements.forEach((face, index) => {
                const angle = (index * Math.PI * 2) / 6;
                const x = Math.cos(angle) * 150;
                const y = Math.sin(angle) * 150;
                face.style.transform = `translate(${x}px, ${y}px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
            });

            // Update sound based on rotation speed
            if (audioContext && oscillator && gainNode) {
                const speed = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
                gainNode.gain.value = Math.min(0.5, speed / 100);
            }
        } else {
            const rect = container.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const distance = Math.sqrt(Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2));
            const maxDistance = Math.min(rect.width, rect.height) / 2;

            if (distance < maxDistance) {
                const distortion = (1 - distance / maxDistance) * 10;
                centralPoint.style.transform = `translate(-50%, -50%) scale(${1 + distortion * 0.1})`;
                centralPoint.style.boxShadow = `0 0 ${10 + distortion * 5}px ${5 + distortion * 2.5}px rgba(255, 255, 255, ${0.5 + distortion * 0.2})`;
            } else {
                centralPoint.style.transform = 'translate(-50%, -50%) scale(1)';
                centralPoint.style.boxShadow = '0 0 10px 5px rgba(255, 255, 255, 0.5)';
            }
        }
    };

    const handleMouseDown = (e) => {
        if (e.target === centralPoint) {
            isRotating = true;
            rotationStartX = e.clientX;
            rotationStartY = e.clientY;

            // Initialize audio context on first gesture
            if (!audioContext) {
                audioContext = new (window.AudioContext || window.webkitAudioContext)();
                oscillator = audioContext.createOscillator();
                gainNode = audioContext.createGain();

                oscillator.type = 'sine';
                oscillator.frequency.value = 440;
                gainNode.gain.value = 0.1;

                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                oscillator.start();
            }

            // Show random face
            const randomIndex = Math.floor(Math.random() * faceElements.length);
            showFace(randomIndex);
        } else if (e.target.classList.contains('cube-face')) {
            const index = parseInt(e.target.dataset.index);
            activateFace(index);
        }
    };

    const handleMouseUp = () => {
        if (isRotating) {
            isRotating = false;
            rotationX = 0;
            rotationY = 0;

            faceElements.forEach(face => {
                face.style.transform = '';
            });

            if (audioContext && gainNode) {
                gainNode.gain.value = 0;
            }
        }
    };

    const handleTouchStart = (e) => {
        if (e.touches.length === 1) {
            const touch = e.touches[0];
            if (touch.target === centralPoint) {
                isRotating = true;
                rotationStartX = touch.clientX;
                rotationStartY = touch.clientY;

                // Initialize audio context on first gesture
                if (!audioContext) {
                    audioContext = new (window.AudioContext || window.webkitAudioContext)();
                    oscillator = audioContext.createOscillator();
                    gainNode = audioContext.createGain();

                    oscillator.type = 'sine';
                    oscillator.frequency.value = 440;
                    gainNode.gain.value = 0.1;

                    oscillator.connect(gainNode);
                    gainNode.connect(audioContext.destination);
                    oscillator.start();
                }

                // Show random face
                const randomIndex = Math.floor(Math.random() * faceElements.length);
                showFace(randomIndex);
            } else if (touch.target.classList.contains('cube-face')) {
                const index = parseInt(touch.target.dataset.index);
                activateFace(index);
            }
        }
    };

    const handleTouchMove = (e) => {
        if (isRotating && e.touches.length === 1) {
            const touch = e.touches[0];
            const deltaX = touch.clientX - rotationStartX;
            const deltaY = touch.clientY - rotationStartY;
            rotationX = deltaY * 0.5;
            rotationY = -deltaX * 0.5;

            faceElements.forEach((face, index) => {
                const angle = (index * Math.PI * 2) / 6;
                const x = Math.cos(angle) * 150;
                const y = Math.sin(angle) * 150;
                face.style.transform = `translate(${x}px, ${y}px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
            });

            // Update sound based on rotation speed
            if (audioContext && oscillator && gainNode) {
                const speed = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
                gainNode.gain.value = Math.min(0.5, speed / 100);
            }
        }
    };

    const handleTouchEnd = () => {
        if (isRotating) {
            isRotating = false;
            rotationX = 0;
            rotationY = 0;

            faceElements.forEach(face => {
                face.style.transform = '';
            });

            if (audioContext && gainNode) {
                gainNode.gain.value = 0;
            }
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            onClose();
        }
    };

    // Event listeners for mouse
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mouseup', handleMouseUp);

    // Event listeners for touch
    container.addEventListener('touchstart', handleTouchStart, { passive: false });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('touchend', handleTouchEnd);

    // Event listener for keyboard
    document.addEventListener('keydown', handleKeyDown);

    // Show face
    function showFace(index) {
        if (currentFaceIndex !== null) {
            faceElements[currentFaceIndex].classList.add('hidden');
        }

        currentFaceIndex = index;
        const face = faceElements[index];
        face.classList.remove('hidden');

        // Position the face in the center
        face.style.transform = 'translate(-50%, -50%)';
        face.style.left = '50%';
        face.style.top = '50%';

        // Update last interaction time
        lastInteractionTime = Date.now();

        // Clear void timeout if it exists
        if (voidTimeout) {
            clearTimeout(voidTimeout);
            voidTimeout = null;
        }

        // Set timeout for void
        voidTimeout = setTimeout(() => {
            showVoid();
        }, 10000);
    }

    // Activate face
    function activateFace(index) {
        const face = faceElements[index];
        face.classList.add('active');

        // Update sound based on face
        if (audioContext && oscillator) {
            const frequencies = [440, 330, 220, 110, 55, 27.5];
            oscillator.frequency.value = frequencies[index % frequencies.length];
            gainNode.gain.value = 0.3;
        }

        // Vibrate if supported
        if (window.navigator.vibrate) {
            window.navigator.vibrate(50);
        }

        // Show trace
        showTrace(faces[index].name);

        // Deactivate after a delay
        setTimeout(() => {
            face.classList.remove('active');
            if (audioContext && gainNode) {
                gainNode.gain.value = 0;
            }
        }, 1000);
    }

    // Show void
    function showVoid() {
        voidElement.classList.add('active');
        voidElement.textContent = 'O que não cabe na jaula?';

        // Show trace
        showTrace('mancha de tinta');

        // Hide void after a delay
        setTimeout(() => {
            voidElement.classList.remove('active');
            voidElement.textContent = '';

            // Show central point again
            centralPoint.style.display = 'block';
        }, 3000);
    }

    // Show trace
    function showTrace(text) {
        traceElement.textContent = text;
        traceElement.classList.add('active');

        // Hide trace after a delay
        if (traceTimeout) {
            clearTimeout(traceTimeout);
        }
        traceTimeout = setTimeout(() => {
            traceElement.classList.remove('active');
        }, 3000);
    }

    // Check for inactivity
    function checkInactivity() {
        const now = Date.now();
        if (now - lastInteractionTime > 10000 && !voidTimeout) {
            showVoid();
        }
    }

    // Set interval for inactivity check
    const inactivityInterval = setInterval(checkInactivity, 1000);

    // Clean up function
    function destroy() {
        // Remove event listeners
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mousedown', handleMouseDown);
        container.removeEventListener('mouseup', handleMouseUp);
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('touchmove', handleTouchMove);
        container.removeEventListener('touchend', handleTouchEnd);
        document.removeEventListener('keydown', handleKeyDown);

        // Clear timeouts and intervals
        if (voidTimeout) {
            clearTimeout(voidTimeout);
        }
        if (traceTimeout) {
            clearTimeout(traceTimeout);
        }
        clearInterval(inactivityInterval);

        // Stop audio
        if (audioContext) {
            if (oscillator) {
                oscillator.stop();
            }
            audioContext.close();
        }

        // Remove elements
        rootElement.removeChild(container);
        document.head.removeChild(style);
    }

    return { destroy };
}
