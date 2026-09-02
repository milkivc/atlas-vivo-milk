export function mountCuratorialExperience({ root, context = {}, onClose = () => {} }) {
    const experienceId = 'lendas-138';
    const styleId = `${experienceId}-styles`;
    const canvasId = `${experienceId}-canvas`;
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    let animationFrameId;
    let audioSources = [];
    let timers = [];
    let listeners = [];
    let isDestroyed = false;

    const styles = `
        #${experienceId} {
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
            background-color: black;
        }

        #${canvasId} {
            display: block;
            width: 100%;
            height: 100%;
        }

        .${experienceId}-path {
            position: absolute;
            width: 2px;
            height: 100%;
            background-color: white;
            transform-origin: bottom center;
            transition: opacity 0.5s ease;
        }

        .${experienceId}-path.blue {
            background-color: #1a237e;
        }

        .${experienceId}-path.red {
            background-color: #b71c1c;
        }

        .${experienceId}-path.white {
            background-color: #e0e0e0;
        }

        .${experienceId}-particle {
            position: absolute;
            width: 3px;
            height: 3px;
            border-radius: 50%;
            background-color: white;
            pointer-events: none;
        }

        .${experienceId}-story {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            font-family: Arial, sans-serif;
            font-size: 16px;
            text-align: center;
            max-width: 80%;
            pointer-events: none;
        }

        .${experienceId}-keyword {
            position: absolute;
            color: white;
            font-weight: bold;
            pointer-events: none;
        }

        .${experienceId}-map {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 80%;
            height: 80%;
            background-color: rgba(0, 0, 0, 0.7);
            border-radius: 10px;
            display: none;
        }

        .${experienceId}-map-point {
            position: absolute;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: white;
            cursor: pointer;
        }
    `;

    function createStyleElement() {
        const styleElement = document.createElement('style');
        styleElement.id = styleId;
        styleElement.textContent = styles;
        document.head.appendChild(styleElement);
    }

    function createCanvas() {
        const canvas = document.createElement('canvas');
        canvas.id = canvasId;
        root.appendChild(canvas);
        return canvas;
    }

    function createPath(color, left, keyword) {
        const path = document.createElement('div');
        path.className = `${experienceId}-path ${color}`;
        path.style.left = `${left}%`;
        path.style.opacity = '0';
        root.appendChild(path);

        const keywordElement = document.createElement('div');
        keywordElement.className = `${experienceId}-keyword`;
        keywordElement.textContent = keyword;
        keywordElement.style.left = `${left}%`;
        keywordElement.style.top = '50%';
        keywordElement.style.transform = 'translateY(-50%)';
        root.appendChild(keywordElement);

        return { path, keyword: keywordElement };
    }

    function createStoryElement() {
        const story = document.createElement('div');
        story.className = `${experienceId}-story`;
        root.appendChild(story);
        return story;
    }

    function createMap() {
        const map = document.createElement('div');
        map.className = `${experienceId}-map`;
        root.appendChild(map);

        const points = [
            { left: '20%', top: '30%' },
            { left: '50%', top: '40%' },
            { left: '70%', top: '60%' }
        ];

        points.forEach(point => {
            const mapPoint = document.createElement('div');
            mapPoint.className = `${experienceId}-map-point`;
            mapPoint.style.left = point.left;
            mapPoint.style.top = point.top;
            map.appendChild(mapPoint);

            mapPoint.addEventListener('click', () => {
                map.style.display = 'none';
                storyElement.textContent = 'Você escolheu um novo princípio. A lenda continua...';
                setTimeout(() => {
                    storyElement.textContent = '';
                    onClose();
                }, 3000);
            });
        });

        return map;
    }

    function createParticles() {
        const particles = [];
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = `${experienceId}-particle`;
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            root.appendChild(particle);
            particles.push(particle);
        }
        return particles;
    }

    function animateParticles(particles) {
        if (isDestroyed) return;

        particles.forEach(particle => {
            const x = parseFloat(particle.style.left);
            const y = parseFloat(particle.style.top);
            particle.style.left = `${x + (Math.random() - 0.5) * 0.5}%`;
            particle.style.top = `${y + (Math.random() - 0.5) * 0.5}%`;
        });

        animationFrameId = requestAnimationFrame(() => animateParticles(particles));
    }

    function createAudioSource(frequency, type = 'sine') {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.type = type;
        oscillator.frequency.value = frequency;
        gainNode.gain.value = 0.1;

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.start();
        audioSources.push({ oscillator, gainNode });

        return { oscillator, gainNode };
    }

    function playMurmur() {
        const frequencies = [100, 120, 150, 180, 200];
        frequencies.forEach(freq => {
            createAudioSource(freq, 'sine');
        });
    }

    function stopAllAudio() {
        audioSources.forEach(source => {
            source.oscillator.stop();
            source.gainNode.disconnect();
        });
        audioSources = [];
    }

    function handlePathHover(path, keyword, frequency) {
        const hoverListener = () => {
            path.style.opacity = '1';
            keyword.style.opacity = '1';
            createAudioSource(frequency);
        };

        const leaveListener = () => {
            path.style.opacity = '0.5';
            keyword.style.opacity = '0.5';
            stopAllAudio();
        };

        path.addEventListener('mouseenter', hoverListener);
        path.addEventListener('mouseleave', leaveListener);

        listeners.push({ element: path, type: 'mouseenter', listener: hoverListener });
        listeners.push({ element: path, type: 'mouseleave', listener: leaveListener });
    }

    function handlePathClick(path, color, keyword) {
        const clickListener = () => {
            paths.forEach(p => {
                if (p.path !== path) {
                    p.path.style.opacity = '0';
                    p.keyword.style.opacity = '0';
                }
            });

            path.style.opacity = '1';
            keyword.style.opacity = '1';

            stopAllAudio();
            createAudioSource(color === 'blue' ? 200 : color === 'red' ? 300 : 400, 'sine');

            setTimeout(() => {
                storyElement.textContent = 'A lenda começa a ser contada...';
                setTimeout(() => {
                    storyElement.textContent = 'Em certo ponto, a lenda divide-se...';
                    setTimeout(() => {
                        storyElement.textContent = 'Escolha um novo fim:';
                        setTimeout(() => {
                            storyElement.textContent = '';
                            map.style.display = 'block';
                        }, 2000);
                    }, 2000);
                }, 2000);
            }, 1000);
        };

        path.addEventListener('click', clickListener);
        listeners.push({ element: path, type: 'click', listener: clickListener });
    }

    function handleTouchEquivalent(path, color, keyword) {
        const touchStartListener = (e) => {
            e.preventDefault();
            path.style.opacity = '1';
            keyword.style.opacity = '1';
            createAudioSource(color === 'blue' ? 200 : color === 'red' ? 300 : 400, 'sine');
        };

        const touchEndListener = () => {
            path.style.opacity = '0.5';
            keyword.style.opacity = '0.5';
            stopAllAudio();
        };

        path.addEventListener('touchstart', touchStartListener);
        path.addEventListener('touchend', touchEndListener);

        listeners.push({ element: path, type: 'touchstart', listener: touchStartListener });
        listeners.push({ element: path, type: 'touchend', listener: touchEndListener });
    }

    function handleKeyboardEquivalent(path, color, keyword, key) {
        const keyDownListener = (e) => {
            if (e.key === key) {
                path.style.opacity = '1';
                keyword.style.opacity = '1';
                createAudioSource(color === 'blue' ? 200 : color === 'red' ? 300 : 400, 'sine');
            }
        };

        const keyUpListener = (e) => {
            if (e.key === key) {
                path.style.opacity = '0.5';
                keyword.style.opacity = '0.5';
                stopAllAudio();
            }
        };

        document.addEventListener('keydown', keyDownListener);
        document.addEventListener('keyup', keyUpListener);

        listeners.push({ element: document, type: 'keydown', listener: keyDownListener });
        listeners.push({ element: document, type: 'keyup', listener: keyUpListener });
    }

    function handleVibration() {
        if (window.navigator.vibrate) {
            const vibrateListener = () => {
                window.navigator.vibrate(50);
            };

            paths.forEach(p => {
                p.path.addEventListener('mouseenter', vibrateListener);
                listeners.push({ element: p.path, type: 'mouseenter', listener: vibrateListener });
            });
        }
    }

    function handleReducedMotion() {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (mediaQuery.matches) {
            particles.forEach(particle => {
                particle.style.transition = 'none';
            });
        }
    }

    function destroy() {
        isDestroyed = true;
        cancelAnimationFrame(animationFrameId);
        stopAllAudio();
        audioContext.close();

        timers.forEach(timer => clearTimeout(timer));

        listeners.forEach(({ element, type, listener }) => {
            element.removeEventListener(type, listener);
        });

        const styleElement = document.getElementById(styleId);
        if (styleElement) {
            document.head.removeChild(styleElement);
        }

        root.innerHTML = '';
    }

    createStyleElement();
    const canvas = createCanvas();
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    let lightRadius = 5;
    let lightGrowing = true;

    function drawLight() {
        if (isDestroyed) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.beginPath();
        ctx.arc(centerX, centerY, lightRadius, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();

        if (lightGrowing) {
            lightRadius += 0.5;
            if (lightRadius >= 10) {
                lightGrowing = false;
            }
        } else {
            lightRadius -= 0.5;
            if (lightRadius <= 5) {
                lightGrowing = true;
            }
        }

        animationFrameId = requestAnimationFrame(drawLight);
    }

    drawLight();

    const paths = [
        createPath('blue', 30, 'PRINCÍPIO'),
        createPath('red', 50, 'MEIO'),
        createPath('white', 70, 'FIM')
    ];

    const storyElement = createStoryElement();
    const map = createMap();
    const particles = createParticles();

    animateParticles(particles);

    playMurmur();

    paths.forEach((path, index) => {
        handlePathHover(path.path, path.keyword, index === 0 ? 200 : index === 1 ? 300 : 400);
        handlePathClick(path.path, index === 0 ? 'blue' : index === 1 ? 'red' : 'white', path.keyword);
        handleTouchEquivalent(path.path, index === 0 ? 'blue' : index === 1 ? 'red' : 'white', path.keyword);
        handleKeyboardEquivalent(path.path, index === 0 ? 'blue' : index === 1 ? 'red' : 'white', path.keyword, index === 0 ? '1' : index === 1 ? '2' : '3');
    });

    handleVibration();
    handleReducedMotion();

    return { destroy };
}
