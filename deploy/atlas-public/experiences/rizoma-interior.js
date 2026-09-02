export function mountCuratorialExperience({ root, context = {}, onClose = () => {} }) {
    const experienceId = 'rizoma-interior';
    const styleId = `${experienceId}-styles`;
    const canvasId = `${experienceId}-canvas`;
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    let animationFrameId;
    let silenceTimer;
    let particles = [];
    let audioNodes = [];
    let isDestroyed = false;

    const styles = `
        #${experienceId} {
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
            background-color: #f5f5f5;
            touch-action: none;
        }

        #${canvasId} {
            display: block;
            width: 100%;
            height: 100%;
        }

        .${experienceId}-particle {
            position: absolute;
            border-radius: 50%;
            pointer-events: none;
        }
    `;

    function injectStyles() {
        const styleElement = document.createElement('style');
        styleElement.id = styleId;
        styleElement.textContent = styles;
        document.head.appendChild(styleElement);
    }

    function removeStyles() {
        const styleElement = document.getElementById(styleId);
        if (styleElement) {
            document.head.removeChild(styleElement);
        }
    }

    function createCanvas() {
        const canvas = document.createElement('canvas');
        canvas.id = canvasId;
        root.appendChild(canvas);
        return canvas;
    }

    function removeCanvas() {
        const canvas = document.getElementById(canvasId);
        if (canvas) {
            root.removeChild(canvas);
        }
    }

    function createPulsingPoint(ctx, x, y) {
        const point = {
            x,
            y,
            radius: 10,
            pulseSpeed: 0.05,
            pulseRange: 5,
            color: '#000000',
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            },
            update() {
                this.radius = 10 + Math.sin(Date.now() * this.pulseSpeed) * this.pulseRange;
            }
        };
        return point;
    }

    function createParticle(x, y, type) {
        const particle = {
            x,
            y,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            radius: 5 + Math.random() * 5,
            color: `hsl(${Math.random() * 360}, 100%, 50%)`,
            type,
            lifespan: 100 + Math.random() * 100,
            age: 0,
            draw(ctx) {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            },
            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.age++;
                if (this.age > this.lifespan) {
                    return false;
                }
                return true;
            }
        };
        return particle;
    }

    function createAudioBuffer(frequency, duration) {
        const sampleRate = audioContext.sampleRate;
        const buffer = audioContext.createBuffer(1, sampleRate * duration, sampleRate);
        const data = buffer.getChannelData(0);

        for (let i = 0; i < sampleRate * duration; i++) {
            data[i] = Math.sin(2 * Math.PI * frequency * i / sampleRate);
        }

        return buffer;
    }

    function playSound(frequency, duration = 0.5) {
        if (isDestroyed) return;

        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.type = 'sine';
        oscillator.frequency.value = frequency;
        gainNode.gain.value = 0.1;

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.start();
        oscillator.stop(audioContext.currentTime + duration);

        audioNodes.push(oscillator, gainNode);
    }

    function playAmbientSound() {
        if (isDestroyed) return;

        const buffer = createAudioBuffer(50, 2);
        const source = audioContext.createBufferSource();
        const gainNode = audioContext.createGain();

        source.buffer = buffer;
        source.loop = true;
        gainNode.gain.value = 0.05;

        source.connect(gainNode);
        gainNode.connect(audioContext.destination);

        source.start();
        audioNodes.push(source, gainNode);
    }

    function stopAllAudio() {
        audioNodes.forEach(node => {
            if (node instanceof AudioBufferSourceNode) {
                node.stop();
            } else if (node instanceof OscillatorNode) {
                node.stop();
            }
        });
        audioNodes = [];
    }

    function handlePointerMove(e) {
        const canvas = document.getElementById(canvasId);
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Update point pulse speed based on cursor proximity
        const distance = Math.sqrt((x - canvas.width / 2) ** 2 + (y - canvas.height / 2) ** 2);
        const maxDistance = Math.min(canvas.width, canvas.height) / 2;
        const pulseSpeed = 0.05 + (1 - distance / maxDistance) * 0.15;

        // Update ambient sound volume based on cursor position
        const volume = 0.05 + (1 - distance / maxDistance) * 0.15;
        audioNodes.forEach(node => {
            if (node instanceof GainNode) {
                node.gain.value = volume;
            }
        });
    }

    function handlePointerDown(e) {
        const canvas = document.getElementById(canvasId);
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Check if the point was clicked
        const distance = Math.sqrt((x - canvas.width / 2) ** 2 + (y - canvas.height / 2) ** 2);
        if (distance < 20) {
            // Start drawing
            isDrawing = true;
            lastX = x;
            lastY = y;
            playSound(200);
        } else {
            // Check if a particle was clicked
            particles.forEach(particle => {
                const particleDistance = Math.sqrt((x - particle.x) ** 2 + (y - particle.y) ** 2);
                if (particleDistance < particle.radius) {
                    // Fix the particle
                    particle.vx = 0;
                    particle.vy = 0;
                    playSound(400);
                    if (window.navigator.vibrate) {
                        window.navigator.vibrate(50);
                    }
                }
            });
        }
    }

    function handlePointerUp() {
        isDrawing = false;
        lastX = null;
        lastY = null;
    }

    function handlePointerMoveDrawing(e) {
        if (!isDrawing) return;

        const canvas = document.getElementById(canvasId);
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (lastX !== null && lastY !== null) {
            // Draw a line
            const ctx = canvas.getContext('2d');
            ctx.beginPath();
            ctx.moveTo(lastX, lastY);
            ctx.lineTo(x, y);
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 2;
            ctx.stroke();

            // Create particles along the line
            const distance = Math.sqrt((x - lastX) ** 2 + (y - lastY) ** 2);
            const particleCount = Math.floor(distance / 10);
            for (let i = 0; i < particleCount; i++) {
                const t = i / particleCount;
                const particleX = lastX + (x - lastX) * t;
                const particleY = lastY + (y - lastY) * t;
                particles.push(createParticle(particleX, particleY, 'organic'));
            }

            // Play sound based on drawing speed
            const speed = distance / (e.timeStamp - lastTimeStamp);
            const frequency = 200 + speed * 100;
            playSound(frequency, 0.1);
        }

        lastX = x;
        lastY = y;
        lastTimeStamp = e.timeStamp;
    }

    function handleKeyDown(e) {
        if (e.key === 'Escape') {
            onClose();
        }
    }

    function setupEventListeners() {
        const canvas = document.getElementById(canvasId);
        canvas.addEventListener('pointermove', handlePointerMove);
        canvas.addEventListener('pointerdown', handlePointerDown);
        canvas.addEventListener('pointerup', handlePointerUp);
        canvas.addEventListener('pointermove', handlePointerMoveDrawing);
        document.addEventListener('keydown', handleKeyDown);

        // Silence timer
        silenceTimer = setTimeout(() => {
            // Aglomerate particles
            const canvas = document.getElementById(canvasId);
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            particles.forEach(particle => {
                const angle = Math.random() * Math.PI * 2;
                const distance = Math.random() * 50;
                particle.x = centerX + Math.cos(angle) * distance;
                particle.y = centerY + Math.sin(angle) * distance;
                particle.vx = 0;
                particle.vy = 0;
            });
            playSound(300);
        }, 10000);
    }

    function removeEventListeners() {
        const canvas = document.getElementById(canvasId);
        canvas.removeEventListener('pointermove', handlePointerMove);
        canvas.removeEventListener('pointerdown', handlePointerDown);
        canvas.removeEventListener('pointerup', handlePointerUp);
        canvas.removeEventListener('pointermove', handlePointerMoveDrawing);
        document.removeEventListener('keydown', handleKeyDown);

        if (silenceTimer) {
            clearTimeout(silenceTimer);
        }
    }

    function animate() {
        if (isDestroyed) return;

        const canvas = document.getElementById(canvasId);
        const ctx = canvas.getContext('2d');

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update and draw particles
        particles = particles.filter(particle => {
            particle.update();
            particle.draw(ctx);
            return particle.age < particle.lifespan;
        });

        animationFrameId = requestAnimationFrame(animate);
    }

    function init() {
        injectStyles();
        const canvas = createCanvas();
        canvas.width = root.clientWidth;
        canvas.height = root.clientHeight;

        // Create initial pulsing point
        const ctx = canvas.getContext('2d');
        const point = createPulsingPoint(ctx, canvas.width / 2, canvas.height / 2);
        point.draw();

        // Play ambient sound
        playAmbientSound();

        setupEventListeners();
        animate();
    }

    function destroy() {
        isDestroyed = true;
        removeEventListeners();
        stopAllAudio();
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }
        removeCanvas();
        removeStyles();
    }

    init();

    return {
        destroy
    };
}
