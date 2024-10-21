particlesJS("particles-js", {
  particles: {
    number: {
      value: 150, // More particles for a dense effect
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      // Random color circles
      value: ["#3498db", "#e74c3c", "#2ecc71", "#f1c40f", "#9b59b6"],
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
    },
    opacity: {
      value: 0.6,
      random: true, // Opacity will change for dynamic look
    },
    size: {
      value: 4,
      random: true, // Random sizes for particles
    },
    move: {
      enable: true,
      speed: 8, // Faster movement
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse", // Repulsion effect on hover
        speed: 15, // Faster repulse speed
      },
      onclick: {
        enable: true,
        mode: "push", // Adds particles on click
        particles_nb: 6, // Number of particles added on click
      },
    },
    modes: {
      repulse: {
        distance: 100, // Stronger repulse distance
        duration: 0.4, // Faster reaction time
      },
    },
  },
});
