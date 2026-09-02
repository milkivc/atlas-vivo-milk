const cadernoRasgado = (() => {
  let audioContext;
  let isPlaying = false;
  let animationFrameId;
  let rippleAnimationId;
  let rippleElements = [];
  let currentPhrase = "O rio carrega as memórias que a cidade esqueceu";
  let phrases = [
    "O rio carrega as memórias que a cidade esqueceu",
    "A noite é um espelho que reflete as estrelas perdidas",
    "O vento sussurra segredos aos ouvidos dos que sabem escutar",
    "A chuva lava as ruas, mas não apaga as marcas do tempo",
    "O sol é um farol que guia os que se perdem no caminho"
  ];

  const createSVGElement = (type, attributes = {}) => {
    const element = document.createElementNS("http://www.w3.org/2000/svg", type);
    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
    return element;
  };

  const createRipple = (x, y, container) => {
    const ripple = createSVGElement("circle", {
      cx: x,
      cy: y,
      r: 0,
      fill: "none",
      stroke: "rgba(0, 0, 0, 0.1)",
      "stroke-width": "2"
    });
    container.appendChild(ripple);
    rippleElements.push(ripple);

    const animateRipple = (timestamp) => {
      const radius = (timestamp / 10) % 100;
      ripple.setAttribute("r", radius);

      if (radius < 100) {
        rippleAnimationId = requestAnimationFrame(animateRipple);
      } else {
        container.removeChild(ripple);
        rippleElements = rippleElements.filter(el => el !== ripple);
      }
    };

    rippleAnimationId = requestAnimationFrame(animateRipple);
  };

  const loadAudio = () => {
    try {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
    } catch (error) {
      console.error("Error creating AudioContext:", error);
    }
  };

  const createOscillator = (frequency, type = "sine", duration = 1) => {
    if (!audioContext) return;

    const oscillator = audioContext.createOscillator();
    oscillator.type = type;
    oscillator.frequency.value = frequency;

    const gainNode = audioContext.createGain();
    gainNode.gain.value = 0.3;

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.start();
    oscillator.stop(audioContext.currentTime + duration);
  };

  const playSound = (type) => {
    if (!audioContext) return;

    switch (type) {
      case "pencil":
        createOscillator(440, "sine", 0.5);
        break;
      case "paperRip":
        createOscillator(220, "square", 0.3);
        break;
      case "water":
        createOscillator(330, "triangle", 0.4);
        break;
      case "needle":
        createOscillator(110, "sawtooth", 0.2);
        break;
      default:
        break;
    }
  };

  const createPaperTexture = (canvas) => {
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;

    ctx.fillStyle = "#f5f5dc";
    ctx.fillRect(0, 0, width, height);

    ctx.strokeStyle = "rgba(0, 0, 0, 0.1)";
    ctx.lineWidth = 1;

    for (let i = 0; i < height; i += 10) {
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(width, i);
      ctx.stroke();
    }

    for (let i = 0; i < width; i += 10) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, height);
      ctx.stroke();
    }

    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    for (let i = 0; i < 50; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const size = Math.random() * 3 + 1;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
    }
  };

  const createNotebookPage = (container) => {
    const notebookPage = document.createElement("div");
    notebookPage.className = "notebook-page";

    const canvas = document.createElement("canvas");
    canvas.width = 600;
    canvas.height = 800;
    createPaperTexture(canvas);

    const svg = createSVGElement("svg", {
      width: "100%",
      height: "100%",
      viewBox: "0 0 600 800",
      preserveAspectRatio: "xMidYMid meet"
    });

    const text = createSVGElement("text", {
      x: "50%",
      y: "50%",
      "text-anchor": "middle",
      "dominant-baseline": "middle",
      "font-family": "'Brush Script MT', cursive",
      "font-size": "24px",
      fill: "#000"
    });
    text.textContent = currentPhrase;

    svg.appendChild(text);
    notebookPage.appendChild(canvas);
    notebookPage.appendChild(svg);

    container.appendChild(notebookPage);

    return { notebookPage, svg, text };
  };

  const animateNotebookPage = (svg) => {
    const animate = () => {
      const time = Date.now() * 0.001;
      const dx = Math.sin(time) * 2;
      const dy = Math.cos(time) * 2;

      svg.style.transform = `translate(${dx}px, ${dy}px)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
  };

  const createInvitation = (container) => {
    const invitation = document.createElement("div");
    invitation.className = "invitation";
    invitation.textContent = "Parte uma frase. Faz duas entradas.";
    container.appendChild(invitation);

    setTimeout(() => {
      invitation.style.opacity = "0";
      setTimeout(() => {
        container.removeChild(invitation);
      }, 1000);
    }, 3000);
  };

  const handleRip = (x, y, svg, text) => {
    if (!isPlaying) {
      playSound("pencil");
      isPlaying = true;
    }

    const parts = text.textContent.split(" ");
    const middle = Math.floor(parts.length / 2);
    const part1 = parts.slice(0, middle).join(" ");
    const part2 = parts.slice(middle).join(" ");

    const text1 = createSVGElement("text", {
      x: "30%",
      y: "50%",
      "text-anchor": "middle",
      "dominant-baseline": "middle",
      "font-family": "'Brush Script MT', cursive",
      "font-size": "24px",
      fill: "#000"
    });
    text1.textContent = part1;

    const text2 = createSVGElement("text", {
      x: "70%",
      y: "50%",
      "text-anchor": "middle",
      "dominant-baseline": "middle",
      "font-family": "'Brush Script MT', cursive",
      "font-size": "24px",
      fill: "#000"
    });
    text2.textContent = part2;

    svg.removeChild(text);
    svg.appendChild(text1);
    svg.appendChild(text2);

    playSound("paperRip");

    if (navigator.vibrate) {
      navigator.vibrate(50);
    }

    setTimeout(() => {
      playSound("water");
    }, 1000);

    const animateParts = () => {
      const time = Date.now() * 0.001;
      const dx1 = Math.sin(time) * 10;
      const dy1 = Math.cos(time) * 10;
      const dx2 = Math.sin(time + Math.PI) * 10;
      const dy2 = Math.cos(time + Math.PI) * 10;

      text1.setAttribute("x", `${30 + dx1}%`);
      text1.setAttribute("y", `${50 + dy1}%`);
      text2.setAttribute("x", `${70 + dx2}%`);
      text2.setAttribute("y", `${50 + dy2}%`);

      animationFrameId = requestAnimationFrame(animateParts);
    };

    animationFrameId = requestAnimationFrame(animateParts);
  };

  const handleDrag = (e, svg, text) => {
    const rect = svg.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    createRipple(x, y, svg);
  };

  const handleKeyDown = (e, svg, text) => {
    if (e.key === "Enter") {
      const rect = svg.getBoundingClientRect();
      const x = rect.width / 2;
      const y = rect.height / 2;
      handleRip(x, y, svg, text);
    }
  };

  const mountCuratorialExperience = ({ root, context = {}, onClose = () => {} }) => {
    const style = document.createElement("style");
    style.textContent = `
      .caderno-rasgado-container {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background-color: #f5f5dc;
      }

      .notebook-page {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 600px;
        height: 800px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        cursor: pointer;
      }

      .invitation {
        position: absolute;
        top: 20px;
        right: 20px;
        font-family: 'Brush Script MT', cursive;
        font-size: 24px;
        color: #000;
        opacity: 1;
        transition: opacity 1s ease-in-out;
      }

      @media (prefers-reduced-motion: reduce) {
        .notebook-page {
          animation: none;
          transform: translate(-50%, -50%);
        }
      }
    `;
    document.head.appendChild(style);

    const container = document.createElement("div");
    container.className = "caderno-rasgado-container";
    root.appendChild(container);

    currentPhrase = phrases[Math.floor(Math.random() * phrases.length)];

    const { notebookPage, svg, text } = createNotebookPage(container);
    animateNotebookPage(svg);
    createInvitation(container);

    notebookPage.addEventListener("click", (e) => {
      const rect = notebookPage.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      handleRip(x, y, svg, text);
    });

    notebookPage.addEventListener("mousemove", (e) => {
      handleDrag(e, svg, text);
    });

    notebookPage.addEventListener("touchmove", (e) => {
      e.preventDefault();
      handleDrag(e.touches[0], svg, text);
    });

    document.addEventListener("keydown", (e) => {
      handleKeyDown(e, svg, text);
    });

    loadAudio();

    return {
      destroy: () => {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }

        if (rippleAnimationId) {
          cancelAnimationFrame(rippleAnimationId);
        }

        rippleElements.forEach(ripple => {
          if (ripple.parentNode) {
            ripple.parentNode.removeChild(ripple);
          }
        });

        if (audioContext) {
          audioContext.close();
        }

        notebookPage.removeEventListener("click", handleRip);
        notebookPage.removeEventListener("mousemove", handleDrag);
        notebookPage.removeEventListener("touchmove", handleDrag);
        document.removeEventListener("keydown", handleKeyDown);

        root.removeChild(container);
        document.head.removeChild(style);
      }
    };
  };

  return { mountCuratorialExperience };
})();
