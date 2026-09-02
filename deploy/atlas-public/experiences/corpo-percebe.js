export function mountCuratorialExperience({ root, context = {}, onClose = () => {} }) {
    let audioContext;
    let oscillator;
    let gainNode;
    let animationFrameId;
    let touchStartX = 0;
    let touchStartY = 0;
    let isTouching = false;
    let pulseInterval;
    let pulsePhase = 0;
    let pulseDirection = 1;
    let lightColor = 'white';
    let lightSize = 50;
    let lightX = 0;
    let lightY = 0;
    let lightOpacity = 1;
    let textOpacity = 0;
    let textContent = '';
    let textSize = 24;
    let textX = 0;
    let textY = 0;
    let textTremble = 0;
    let textTrembleDirection = 1;
    let textTrembleInterval;
    let phase = 'LIMIAR';
    let phaseStartTime = Date.now();
    let lastInteractionTime = Date.now();
    let isImmobile = false;
    let hasTouched = false;
    let hasChosen = false;
    let hasWaited = false;
    let hasAppeared = false;
    let hasReturned = false;
    let hasEnded = false;
    let finalColor = '';
    let finalText = '';
    let isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const experienceId = 'corpo-percebe';
    const styleId = `${experienceId}-styles`;
    const canvasId = `${experienceId}-canvas`;
    const canvas = document.createElement('canvas');
    canvas.id = canvasId;
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    root.appendChild(canvas);

    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        lightX = canvas.width / 2;
        lightY = canvas.height / 2;
        textX = canvas.width / 2;
        textY = canvas.height / 2;
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    function injectStyles() {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
            #${experienceId} {
                position: relative;
                width: 100%;
                height: 100%;
                background-color: #222;
                overflow: hidden;
                touch-action: manipulation;
            }
            #${canvasId} {
                display: block;
            }
        `;
        document.head.appendChild(style);
    }

    function removeStyles() {
        const style = document.getElementById(styleId);
        if (style) {
            document.head.removeChild(style);
        }
    }

    function setupAudio() {
        if (audioContext) return;
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        gainNode = audioContext.createGain();
        gainNode.gain.value = 0.1;
        gainNode.connect(audioContext.destination);
    }

    function playSound(frequency, type = 'sine', duration = 1) {
        if (isReducedMotion) return;
        setupAudio();
        oscillator = audioContext.createOscillator();
        oscillator.type = type;
        oscillator.frequency.value = frequency;
        oscillator.connect(gainNode);
        oscillator.start();
        oscillator.stop(audioContext.currentTime + duration);
    }

    function vibrate(pattern) {
        if (navigator.vibrate) {
            navigator.vibrate(pattern);
        }
    }

    function startPulse() {
        if (isReducedMotion) return;
        pulseInterval = setInterval(() => {
            pulsePhase += 0.02 * pulseDirection;
            if (pulsePhase >= 1 || pulsePhase <= 0) {
                pulseDirection *= -1;
            }
        }, 16);
    }

    function stopPulse() {
        clearInterval(pulseInterval);
    }

    function trembleText() {
        if (isReducedMotion) return;
        textTrembleInterval = setInterval(() => {
            textTremble += 0.5 * textTrembleDirection;
            if (textTremble >= 2 || textTremble <= -2) {
                textTrembleDirection *= -1;
            }
        }, 50);
    }

    function stopTrembleText() {
        clearInterval(textTrembleInterval);
    }

    function drawLight() {
        ctx.beginPath();
        ctx.arc(lightX, lightY, lightSize, 0, Math.PI * 2);
        ctx.fillStyle = lightColor;
        ctx.globalAlpha = lightOpacity;
        ctx.fill();
        ctx.globalAlpha = 1;
    }

    function drawText() {
        ctx.font = `${textSize}px Arial`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = 'white';
        ctx.globalAlpha = textOpacity;
        ctx.fillText(textContent, textX + textTremble, textY + textTremble);
        ctx.globalAlpha = 1;
    }

    function update() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawLight();
        drawText();
        animationFrameId = requestAnimationFrame(update);
    }

    function handleTouchStart(e) {
        isTouching = true;
        hasTouched = true;
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        lastInteractionTime = Date.now();
        if (phase === 'PRIMEIRO GESTO') {
            phase = 'RESPOSTA VIVA';
            phaseStartTime = Date.now();
            lightSize = 30;
            playSound(440, 'sine', 0.5);
            vibrate(50);
            textContent = 'Onde sentes o ar a tocar-te?';
            textOpacity = 1;
            setTimeout(() => {
                textOpacity = 0;
            }, 3000);
        } else if (phase === 'ESCOLHA / ACASO / SILÊNCIO' && !hasChosen) {
            hasChosen = true;
            const touchX = e.touches[0].clientX;
            const touchY = e.touches[0].clientY;
            const distance = Math.sqrt(Math.pow(touchX - lightX, 2) + Math.pow(touchY - lightY, 2));
            if (distance < lightSize) {
                lightColor = 'orange';
                lightSize = canvas.width / 2;
                playSound(220, 'sine', 1);
                vibrate(100);
                setTimeout(() => {
                    phase = 'APARIÇÃO';
                    phaseStartTime = Date.now();
                    textContent = 'O chão lembra-se dos teus passos.';
                    textOpacity = 1;
                    textSize = 36;
                    trembleText();
                }, 1000);
            }
        }
    }

    function handleTouchMove(e) {
        if (isTouching && phase === 'RESPOSTA VIVA') {
            const touchX = e.touches[0].clientX;
            const touchY = e.touches[0].clientY;
            const deltaX = touchX - touchStartX;
            const deltaY = touchY - touchStartY;
            lightX += deltaX * 0.1;
            lightY += deltaY * 0.1;
            touchStartX = touchX;
            touchStartY = touchY;
            lastInteractionTime = Date.now();
        }
    }

    function handleTouchEnd() {
        isTouching = false;
    }

    function handleKeyDown(e) {
        if (phase === 'PRIMEIRO GESTO' && (e.key === ' ' || e.key === 'Enter')) {
            phase = 'RESPOSTA VIVA';
            phaseStartTime = Date.now();
            lightSize = 30;
            playSound(440, 'sine', 0.5);
            vibrate(50);
            textContent = 'Onde sentes o ar a tocar-te?';
            textOpacity = 1;
            setTimeout(() => {
                textOpacity = 0;
            }, 3000);
        } else if (phase === 'ESCOLHA / ACASO / SILÊNCIO' && !hasChosen && (e.key === ' ' || e.key === 'Enter')) {
            hasChosen = true;
            lightColor = 'orange';
            lightSize = canvas.width / 2;
            playSound(220, 'sine', 1);
            vibrate(100);
            setTimeout(() => {
                phase = 'APARIÇÃO';
                phaseStartTime = Date.now();
                textContent = 'O chão lembra-se dos teus passos.';
                textOpacity = 1;
                textSize = 36;
                trembleText();
            }, 1000);
        }
    }

    function checkImmobile() {
        const currentTime = Date.now();
        if (currentTime - lastInteractionTime > 10000 && !isImmobile) {
            isImmobile = true;
            if (phase === 'PRIMEIRO GESTO') {
                phase = 'RESPOSTA VIVA';
                phaseStartTime = Date.now();
                lightSize = 30;
                playSound(440, 'sine', 0.5);
                vibrate(50);
                textContent = 'Onde sentes o ar a tocar-te?';
                textOpacity = 1;
                setTimeout(() => {
                    textOpacity = 0;
                }, 3000);
            } else if (phase === 'RESPOSTA VIVA') {
                phase = 'DESVIO';
                phaseStartTime = Date.now();
                lightSize = 20;
                playSound(330, 'sine', 0.5);
                vibrate(50);
                textContent = 'Há algo que não é só teu.';
                textOpacity = 1;
                setTimeout(() => {
                    textOpacity = 0;
                }, 3000);
            }
        }
    }

    function advancePhase() {
        const currentTime = Date.now();
        switch (phase) {
            case 'LIMIAR':
                if (currentTime - phaseStartTime > 5000) {
                    phase = 'CHAMADA';
                    phaseStartTime = currentTime;
                    lightSize = 100;
                    playSound(110, 'sine', 1);
                    vibrate(200);
                    textContent = 'Sente o peso dos teus pés no chão.';
                    textOpacity = 1;
                    setTimeout(() => {
                        textOpacity = 0;
                    }, 3000);
                }
                break;
            case 'CHAMADA':
                if (currentTime - phaseStartTime > 5000) {
                    phase = 'PRIMEIRO GESTO';
                    phaseStartTime = currentTime;
                    lightSize = 50;
                    textContent = 'Fecha os olhos. O corpo começa.';
                    textOpacity = 1;
                    setTimeout(() => {
                        textOpacity = 0;
                    }, 3000);
                }
                break;
            case 'RESPOSTA VIVA':
                if (currentTime - phaseStartTime > 10000) {
                    phase = 'DESVIO';
                    phaseStartTime = currentTime;
                    lightSize = 20;
                    playSound(330, 'sine', 0.5);
                    vibrate(50);
                    textContent = 'Há algo que não é só teu.';
                    textOpacity = 1;
                    setTimeout(() => {
                        textOpacity = 0;
                    }, 3000);
                }
                break;
            case 'DESVIO':
                if (currentTime - phaseStartTime > 5000) {
                    phase = 'APROFUNDAMENTO SENSORIAL';
                    phaseStartTime = currentTime;
                    lightSize = 30;
                    playSound(220, 'sine', 1);
                    vibrate(100);
                    textContent = 'Escuta o que o teu corpo já sabe.';
                    textOpacity = 1;
                    setTimeout(() => {
                        textOpacity = 0;
                    }, 3000);
                }
                break;
            case 'APROFUNDAMENTO SENSORIAL':
                if (currentTime - phaseStartTime > 10000) {
                    phase = 'ESCOLHA / ACASO / SILÊNCIO';
                    phaseStartTime = currentTime;
                    lightSize = 50;
                    textContent = 'Toca ou espera.';
                    textOpacity = 1;
                    setTimeout(() => {
                        textOpacity = 0;
                    }, 3000);
                }
                break;
            case 'ESCOLHA / ACASO / SILÊNCIO':
                if (currentTime - phaseStartTime > 10000 && !hasChosen) {
                    hasWaited = true;
                    lightColor = 'white';
                    lightSize = canvas.width / 2;
                    playSound(110, 'sine', 1);
                    vibrate(200);
                    setTimeout(() => {
                        phase = 'APARIÇÃO';
                        phaseStartTime = currentTime;
                        textContent = 'Aqui.';
                        textOpacity = 1;
                        textSize = 36;
                        trembleText();
                    }, 1000);
                }
                break;
            case 'APARIÇÃO':
                if (currentTime - phaseStartTime > 5000) {
                    phase = 'DEVOLUÇÃO';
                    phaseStartTime = currentTime;
                    stopTrembleText();
                    textOpacity = 0;
                    lightSize = 50;
                    finalColor = ['blue', 'green', 'purple'][Math.floor(Math.random() * 3)];
                    lightColor = finalColor;
                    finalText = hasChosen ? 'O chão lembra-se dos teus passos.' : 'Aqui.';
                    playSound(550, 'sine', 0.5);
                    vibrate(50);
                    textContent = 'Leva isto contigo.';
                    textOpacity = 1;
                    setTimeout(() => {
                        textOpacity = 0;
                    }, 3000);
                }
                break;
            case 'DEVOLUÇÃO':
                if (currentTime - phaseStartTime > 5000) {
                    phase = 'RASTO / LATÊNCIA';
                    phaseStartTime = currentTime;
                    lightSize = 50;
                    textContent = '';
                    hasEnded = true;
                    onClose();
                }
                break;
        }
    }

    function init() {
        injectStyles();
        startPulse();
        update();
        canvas.addEventListener('touchstart', handleTouchStart);
        canvas.addEventListener('touchmove', handleTouchMove);
        canvas.addEventListener('touchend', handleTouchEnd);
        document.addEventListener('keydown', handleKeyDown);
        setInterval(checkImmobile, 1000);
        setInterval(advancePhase, 1000);
    }

    function destroy() {
        stopPulse();
        stopTrembleText();
        cancelAnimationFrame(animationFrameId);
        canvas.removeEventListener('touchstart', handleTouchStart);
        canvas.removeEventListener('touchmove', handleTouchMove);
        canvas.removeEventListener('touchend', handleTouchEnd);
        document.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('resize', resizeCanvas);
        removeStyles();
        if (audioContext) {
            audioContext.close();
        }
        root.removeChild(canvas);
    }

    init();

    return {
        destroy
    };
}
