export function mountCuratorialExperience({ root, context = {}, onClose = () => {} }) {
    const experienceId = 'galeria-diletante';
    const styleId = `${experienceId}-styles`;
    const title = 'Galeria Diletante';
    const nunoPhotos = [
        'https://example.com/nuno-photo1.jpg',
        'https://example.com/nuno-photo2.jpg',
        'https://example.com/nuno-photo3.jpg',
        'https://example.com/nuno-photo4.jpg',
        'https://example.com/nuno-photo5.jpg',
        'https://example.com/nuno-photo6.jpg',
        'https://example.com/nuno-photo7.jpg',
        'https://example.com/nuno-photo8.jpg',
        'https://example.com/nuno-photo9.jpg',
        'https://example.com/nuno-photo10.jpg'
    ];
    const poeticTexts = [
        'A palavra que escreveste fez a foto ganhar um tom azulado, como se a memória ficasse mais fria.',
        'A galeria suspirou quando a palavra foi escrita. A foto agora parece respirar.',
        'O silêncio da galeria é um suspiro. A palavra que escreveste fez a foto ganhar um tom avermelhado, como se a memória ficasse mais quente.',
        'A galeria está a ouvir-te. A foto agora parece dançar.',
        'A palavra que escreveste fez a foto ganhar um tom verde, como se a memória ficasse mais viva.'
    ];

    let audioContext;
    let oscillator;
    let gainNode;
    let isPlaying = false;
    let animationFrameId;
    let timeoutId;
    let titleMutationInterval;
    let photoRespirationInterval;
    let currentPhotoIndex = 0;
    let currentPoeticTextIndex = 0;
    let titleMutations = [
        'Galeria Diletantte',
        'Galeria Diletante',
        'Galeria Diletante',
        'Galeria Diletante',
        'Galeria Diletante'
    ];
    let currentTitleMutationIndex = 0;

    function createStyles() {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
            #${experienceId} {
                position: relative;
                width: 100%;
                height: 100%;
                background: linear-gradient(to bottom, #f5f5f5, #d9d9d9);
                overflow: hidden;
                font-family: 'Arial', sans-serif;
            }
            #${experienceId}-title {
                position: absolute;
                top: 20px;
                left: 20px;
                font-size: 2em;
                font-weight: bold;
                color: #333;
                transition: all 0.5s ease;
            }
            #${experienceId}-input-container {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 80%;
                max-width: 500px;
            }
            #${experienceId}-input {
                width: 100%;
                padding: 10px;
                font-size: 1em;
                border: 1px solid #ccc;
                border-radius: 5px;
                background-color: rgba(255, 255, 255, 0.8);
            }
            #${experienceId}-photo-container {
                position: absolute;
                bottom: 20px;
                left: 20px;
                width: 200px;
                height: 200px;
                border: 1px solid #ccc;
                overflow: hidden;
                display: none;
            }
            #${experienceId}-photo {
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: transform 0.5s ease;
            }
            #${experienceId}-poetic-text {
                position: absolute;
                bottom: 20px;
                right: 20px;
                max-width: 300px;
                font-size: 1.2em;
                color: #333;
                display: none;
            }
            @media (prefers-reduced-motion: reduce) {
                #${experienceId}-title, #${experienceId}-photo {
                    transition: none;
                }
            }
        `;
        document.head.appendChild(style);
    }

    function createElements() {
        const container = document.createElement('div');
        container.id = experienceId;

        const titleElement = document.createElement('div');
        titleElement.id = `${experienceId}-title`;
        titleElement.textContent = title;

        const inputContainer = document.createElement('div');
        inputContainer.id = `${experienceId}-input-container`;

        const input = document.createElement('input');
        input.id = `${experienceId}-input`;
        input.type = 'text';
        input.placeholder = 'Aproxima duas coisas';

        const photoContainer = document.createElement('div');
        photoContainer.id = `${experienceId}-photo-container`;

        const photo = document.createElement('img');
        photo.id = `${experienceId}-photo`;

        const poeticText = document.createElement('div');
        poeticText.id = `${experienceId}-poetic-text`;

        photoContainer.appendChild(photo);
        inputContainer.appendChild(input);
        container.appendChild(titleElement);
        container.appendChild(inputContainer);
        container.appendChild(photoContainer);
        container.appendChild(poeticText);

        root.appendChild(container);
    }

    function setupAudio() {
        if (window.AudioContext || window.webkitAudioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
            gainNode = audioContext.createGain();
            gainNode.gain.value = 0.1;
            gainNode.connect(audioContext.destination);
        }
    }

    function playPaperSound() {
        if (audioContext && !isPlaying) {
            oscillator = audioContext.createOscillator();
            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
            oscillator.connect(gainNode);
            oscillator.start();
            isPlaying = true;
        }
    }

    function stopPaperSound() {
        if (audioContext && isPlaying) {
            oscillator.stop();
            oscillator.disconnect();
            isPlaying = false;
        }
    }

    function triggerVibration(duration = 100) {
        if (navigator.vibrate) {
            navigator.vibrate(duration);
        }
    }

    function animateTitle() {
        const titleElement = document.getElementById(`${experienceId}-title`);
        if (titleElement) {
            titleElement.style.transform = 'scale(1.02)';
            setTimeout(() => {
                titleElement.style.transform = 'scale(1)';
            }, 500);
        }
    }

    function animatePhoto() {
        const photo = document.getElementById(`${experienceId}-photo`);
        if (photo) {
            photo.style.transform = 'scale(1.05)';
            setTimeout(() => {
                photo.style.transform = 'scale(1)';
            }, 500);
        }
    }

    function mutateTitle() {
        const titleElement = document.getElementById(`${experienceId}-title`);
        if (titleElement) {
            currentTitleMutationIndex = (currentTitleMutationIndex + 1) % titleMutations.length;
            titleElement.textContent = titleMutations[currentTitleMutationIndex];
            animateTitle();
        }
    }

    function showPhoto() {
        const photoContainer = document.getElementById(`${experienceId}-photo-container`);
        const photo = document.getElementById(`${experienceId}-photo`);
        if (photoContainer && photo) {
            currentPhotoIndex = Math.floor(Math.random() * nunoPhotos.length);
            photo.src = nunoPhotos[currentPhotoIndex];
            photoContainer.style.display = 'block';
            animatePhoto();
        }
    }

    function showPoeticText() {
        const poeticText = document.getElementById(`${experienceId}-poetic-text`);
        if (poeticText) {
            currentPoeticTextIndex = Math.floor(Math.random() * poeticTexts.length);
            poeticText.textContent = poeticTexts[currentPoeticTextIndex];
            poeticText.style.display = 'block';
        }
    }

    function handleInput(event) {
        if (event.key === 'Enter') {
            const input = document.getElementById(`${experienceId}-input`);
            if (input && input.value.trim() !== '') {
                input.style.display = 'none';
                stopPaperSound();
                showPhoto();
                showPoeticText();
                mutateTitle();
                triggerVibration();
            }
        }
    }

    function handlePhotoClick() {
        const photoContainer = document.getElementById(`${experienceId}-photo-container`);
        if (photoContainer) {
            photoContainer.style.border = '2px solid #ff0000';
            setTimeout(() => {
                photoContainer.style.border = '1px solid #ccc';
            }, 1000);
            triggerVibration();
        }
    }

    function handleSilence() {
        timeoutId = setTimeout(() => {
            mutateTitle();
            const photo = document.getElementById(`${experienceId}-photo`);
            if (photo) {
                photo.style.filter = 'grayscale(50%)';
                setTimeout(() => {
                    photo.style.filter = 'none';
                }, 2000);
            }
        }, 10000);
    }

    function setupEventListeners() {
        const input = document.getElementById(`${experienceId}-input`);
        const photoContainer = document.getElementById(`${experienceId}-photo-container`);

        if (input) {
            input.addEventListener('keydown', handleInput);
            input.addEventListener('focus', playPaperSound);
            input.addEventListener('blur', stopPaperSound);
        }

        if (photoContainer) {
            photoContainer.addEventListener('click', handlePhotoClick);
        }

        handleSilence();
    }

    function startTitleMutation() {
        titleMutationInterval = setInterval(mutateTitle, 5000);
    }

    function startPhotoRespiration() {
        photoRespirationInterval = setInterval(animatePhoto, 3000);
    }

    function animate() {
        animationFrameId = requestAnimationFrame(animate);
    }

    function init() {
        createStyles();
        createElements();
        setupAudio();
        setupEventListeners();
        startTitleMutation();
        startPhotoRespiration();
        animate();
    }

    function destroy() {
        const style = document.getElementById(styleId);
        if (style) {
            document.head.removeChild(style);
        }

        const container = document.getElementById(experienceId);
        if (container) {
            root.removeChild(container);
        }

        if (audioContext) {
            if (isPlaying) {
                stopPaperSound();
            }
            audioContext.close();
        }

        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }

        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        if (titleMutationInterval) {
            clearInterval(titleMutationInterval);
        }

        if (photoRespirationInterval) {
            clearInterval(photoRespirationInterval);
        }

        onClose();
    }

    init();

    return { destroy };
}
