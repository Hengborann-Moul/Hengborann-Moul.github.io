import React from "react";

import Particles from "react-tsparticles";

import systes from "./particle.module.scss";

const PARAMS = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        area: 800,
      },
    },
    color: {
      value: ["C912ED", "00BFFF", "22DD22", "FFD500", "FF8000", "FF2600"],
    },
    shape: {
      type: "image",
      stroke: {
        width: 0,
        color: "000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: [
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
      ],
    },
    opacity: {
      value: 0.9,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.5,
        sync: false,
      },
    },
    size: {
      value: 20,
      random: {
        enable: true,
        minimumValue: 2,
      },
      anim: {
        enable: false,
        speed: 30,
        size_min: 0.1,
        sync: true,
      },
    },
    links: {
      enable: true,
      distance: 75,
      color: "808080",
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
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
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
        opacity: 8,
        speed: 3,
      },
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      push: {
        particles_nb: 3,
      },
      remove: {
        particles_nb: 2,
      },
      repulse: {
        distance: 100,
        duration: 1,
      },
    },
  },
  retina_detect: true,
  fpsLimit: 60,
};

export function Particle(): JSX.Element {
  return (
    <div className={systes.Particle}>
      <Particles width="100vw" height="100vh" options={PARAMS} />
    </div>
  );
}
