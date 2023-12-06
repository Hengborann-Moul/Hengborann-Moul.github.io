"use client"

import Particles from 'react-tsparticles';

import { ParticlesConfig } from '../../consts/particle.config';
import { useCallback } from 'react';
import { loadSlim } from 'tsparticles-slim';

export default function Particle() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles options={ParticlesConfig} init={particlesInit} />
  )
}
