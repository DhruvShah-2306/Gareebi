// Toggle dark/light mode
document.getElementById("toggle-mode").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
  
  // Initialize tsparticles background
  tsParticles.load("tsparticles", {
    background: {
      color: {
        value: "transparent"
      }
    },
    particles: {
      number: {
        value: 60
      },
      color: {
        value: "#ffffff"
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.4
      },
      size: {
        value: 3,
        random: true
      },
      move: {
        enable: true,
        speed: 1.5,
        out_mode: "bounce"
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.3,
        width: 1
      }
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        }
      }
    },
    retina_detect: true
  });