"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";

import { loadSlim } from "@tsparticles/slim";

const ParticlesMain = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    // console.log(container);
  };

  if (init) {
    return (
      <Particles
        className="overflow-hidden"
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={require("@/lib/hackverse-particles .json")}
      />
    );
  }

  return <></>;
};

export default ParticlesMain;
