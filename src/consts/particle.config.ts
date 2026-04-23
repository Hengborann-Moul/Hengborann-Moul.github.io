export const ParticlesConfig = {
  fullScreen: {
    enable: true,
    zIndex: 0,
  },
  detectRetina: true,
  fpsLimit: 60,
  preload: [
    { src: "images/tech-icons/ubuntu-icon.svg" },
    { src: "images/tech-icons/nextjs-icon.svg" },
    { src: "images/tech-icons/Octocat-min.png" },
    { src: "images/tech-icons/JavaScript-logo.png" },
    { src: "images/tech-icons/typescript.svg" },
    { src: "images/tech-icons/go.svg" },
    { src: "images/tech-icons/docker-icon.svg" },
    { src: "images/tech-icons/angular.svg" },
    { src: "images/tech-icons/redux.svg" },
    { src: "images/tech-icons/React-icon.svg" },
    { src: "images/tech-icons/vue.svg" },
    { src: "images/tech-icons/python.svg" },
    { src: "images/tech-icons/aws-logo.png" },
    { src: "images/tech-icons/tailwind-css-logo.png" },
    { src: "images/tech-icons/laravel.svg" },
    { src: "images/tech-icons/scss-icon.svg" },
    { src: "images/tech-icons/neovim.svg" },
  ],
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        width: 800,
        height: 800,
      },
    },
    color: {
      value: ["#C912ED", "#00BFFF", "#22DD22", "#FFD500", "#FF8000", "#FF2600"],
    },
    shape: {
      type: ["image"],
      options: {
        image: [
          {
            src: "images/tech-icons/ubuntu-icon.svg",
            width: 100,
            height: 100,
          },
          {
            src: "images/tech-icons/nextjs-icon.svg",
            width: 100,
            height: 100,
          },
          {
            src: "images/tech-icons/Octocat-min.png",
            width: 100,
            height: 100,
          },
          {
            src: "images/tech-icons/JavaScript-logo.png",
            width: 100,
            height: 100,
          },
          {
            src: "images/tech-icons/typescript.svg",
            width: 100,
            height: 100,
          },
          {
            src: "images/tech-icons/go.svg",
            width: 75,
            height: 100,
          },
          {
            src: "images/tech-icons/docker-icon.svg",
            width: 100,
            height: 100,
          },
          {
            src: "images/tech-icons/angular.svg",
            width: 100,
            height: 100,
          },
          {
            src: "images/tech-icons/redux.svg",
            width: 100,
            height: 100,
          },
          {
            src: "images/tech-icons/React-icon.svg",
            width: 100,
            height: 75,
          },
          {
            src: "images/tech-icons/vue.svg",
            width: 100,
            height: 80,
          },
          {
            src: "images/tech-icons/python.svg",
            width: 100,
            height: 100,
          },
          {
            src: "images/tech-icons/aws-logo.png",
            width: 300,
            height: 225,
          },
          {
            src: "images/tech-icons/tailwind-css-logo.png",
            width: 100,
            height: 50,
          },
          {
            src: "images/tech-icons/laravel.svg",
            width: 100,
            height: 100,
          },
          {
            src: "images/tech-icons/scss-icon.svg",
            width: 100,
            height: 100,
          },
          {
            src: "images/tech-icons/neovim.svg",
            width: 100,
            height: 100,
          },
        ],
      },
    },
    opacity: {
      value: 0.9,
      animation: {
        enable: false,
        speed: 1,
        sync: false,
      },
    },
    size: {
      value: { min: 2, max: 20 },
      animation: {
        enable: false,
        speed: 30,
        sync: true,
      },
    },
    links: {
      enable: true,
      distance: 75,
      color: "#808080",
      opacity: 0.9,
      width: 1,
      consent: false,
      blink: false,
    },
    move: {
      enable: true,
      speed: 1,
      random: false,
      straight: false,
      bounce: false,
      attract: {
        enable: false,
        rotate: {
          x: 600,
          y: 1200,
        },
      },
    },
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse",
      },
      onClick: {
        enable: true,
        mode: "push",
      },
      resize: {
        delay: 0,
        enable: true,
      },
    },
    modes: {
      attract: {
        distance: 100,
        duration: 1,
        speed: 5,
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 0.8,
      },
      grab: {
        distance: 400,
        links: {
          opacity: 1,
        },
      },
      push: {
        quantity: 3,
      },
      remove: {
        quantity: 2,
      },
      repulse: {
        distance: 100,
        duration: 1,
      },
    },
  },
};
