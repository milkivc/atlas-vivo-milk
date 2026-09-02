export function mountCuratorialExperience({ root, context = {}, onClose = () => {} }) {
    const experienceId = 'cubo-interior';
    const styleId = `${experienceId}-styles`;

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

        .cube-container {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            perspective: 1000px;
        }

        .cube {
            position: relative;
            width: 200px;
            height: 200px;
            transform-style: preserve-3d;
            transition: transform 1s;
        }

        .face {
            position: absolute;
            width: 200px;
            height: 200px;
            border: 2px solid rgba(255, 255, 255, 0.1);
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 24px;
            color: white;
            cursor: pointer;
            user-select: none;
        }

        .front {
            background: rgba(255, 0, 0, 0.1);
            transform: translateZ(100px);
        }

        .back {
            background: rgba(0, 255, 0, 0.1);
            transform: rotateY(180deg) translateZ(100px);
        }

        .right {
            background: rgba(0, 0, 255, 0.1);
            transform: rotateY(90deg) translateZ(100px);
        }

        .left {
            background: rgba(255, 255, 0, 0.1);
            transform: rotateY(-90deg) translateZ(100px);
        }

        .top {
            background: rgba(255, 0, 255, 0.1);
            transform: rotateX(90deg) translateZ(100px);
        }

        .bottom {
            background: rgba(0, 255, 255, 0.1);
            transform: rotateX(-90deg) translateZ(100px);
        }

        .expanded-face {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #000;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-size: 24px;
            cursor: pointer;
        }

        .invitation {
            position: absolute;
            bottom: 20px;
            color: white;
            font-size: 20px;
            cursor: pointer;
        }
    `;
    document.head.appendChild(style);

    // Create the experience container
    const container = document.createElement('div');
    container.id = experienceId;
    root.appendChild(container);

    // Create the cube container
    const cubeContainer = document.createElement('div');
    cubeContainer.className = 'cube-container';
    container.appendChild(cubeContainer);

    // Create the cube
    const cube = document.createElement('div');
    cube.className = 'cube';
    cubeContainer.appendChild(cube);

    // Create the faces
    const faces = [
        { className: 'front', text: 'A porta', sound: 'wood-creak.mp3', texture: 'wood.jpg' },
        { className: 'back', text: 'O buraco', sound: 'silence.mp3', texture: 'dark.jpg' },
        { className: 'right', text: 'O céu', sound: 'wind.mp3', texture: 'sky.jpg' },
        { className: 'left', text: 'O chão', sound: 'earth.mp3', texture: 'earth.jpg' },
        { className: 'top', text: 'O espelho', sound: 'echo.mp3', texture: 'mirror.jpg' },
        { className: 'bottom', text: 'A jaula', sound: 'metal.mp3', texture: 'metal.jpg' }
    ];

    faces.forEach(face => {
        const faceElement = document.createElement('div');
        faceElement.className = `face ${face.className}`;
        faceElement.textContent = face.text;
        cube.appendChild(faceElement);
    });

    // Create the expanded face
    const expandedFace = document.createElement('div');
    expandedFace.className = 'expanded-face';
    expandedFace.style.display = 'none';
    container.appendChild(expandedFace);

    // Create the invitation
    const invitation = document.createElement('div');
    invitation.className = 'invitation';
    invitation.textContent = 'Entra';
    invitation.style.display = 'none';
    container.appendChild(invitation);

    // Audio context and sounds
    let audioContext;
    const sounds = {};
    const breathingSound = new Audio('breathing.mp3');
    breathingSound.loop = true;

    // Initialize audio context on user gesture
    function initAudioContext() {
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
            breathingSound.play();
        }
    }

    // Load sounds
    function loadSounds() {
        faces.forEach(face => {
            sounds[face.className] = new Audio(face.sound);
        });
    }

    // Handle face click
    function handleFaceClick(event) {
        initAudioContext();
        const face = event.target.closest('.face');
        if (!face) return;

        const faceClass = face.className.split(' ')[1];
        const faceData = faces.find(f => f.className === faceClass);

        // Stop all sounds
        Object.values(sounds).forEach(sound => sound.pause());

        // Play the selected face sound
        sounds[faceClass].play();

        // Expand the face
        expandedFace.style.display = 'flex';
        expandedFace.textContent = faceData.text;
        expandedFace.style.backgroundImage = `url(${faceData.texture})`;

        // Show invitation
        invitation.style.display = 'block';

        // Vibrate if supported
        if (navigator.vibrate) {
            navigator.vibrate(200);
        }
    }

    // Handle invitation click
    function handleInvitationClick() {
        // Here you would implement the specific response for each face
        // For simplicity, we'll just log the action
        console.log('Entering the face');

        // Reset the cube
        expandedFace.style.display = 'none';
        invitation.style.display = 'none';
    }

    // Add event listeners
    cube.addEventListener('click', handleFaceClick);
    invitation.addEventListener('click', handleInvitationClick);

    // Cleanup function
    function destroy() {
        // Remove event listeners
        cube.removeEventListener('click', handleFaceClick);
        invitation.removeEventListener('click', handleInvitationClick);

        // Stop all sounds
        breathingSound.pause();
        Object.values(sounds).forEach(sound => sound.pause());

        // Remove the container and styles
        root.removeChild(container);
        document.head.removeChild(style);

        // Close the experience
        onClose();
    }

    // Load sounds
    loadSounds();

    return { destroy };
}
