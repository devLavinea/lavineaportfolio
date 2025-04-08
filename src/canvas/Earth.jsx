import * as THREE from "three";
import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Nebula from "./Nebula";
import EarthMaterial from "./EarthMaterial";

const sunDirection = new THREE.Vector3(-2, 0.5, 1.5);

function Earth() {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.003;
  });

  const axialTilt = (23.4 * Math.PI) / 180;

  return (
    <group rotation-z={axialTilt}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[2.3, 64]} />
        <EarthMaterial sunDirection={sunDirection} />
      </mesh>
    </group>
  );
}

function EarthCanvas() {
  const [canvasSize, setCanvasSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setCanvasSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Corrigido: acessando as propriedades x, y, z corretamente
  const x = sunDirection.x;
  const y = sunDirection.y;
  const z = sunDirection.z;

  return (
    <Canvas
      camera={{ position: [0, 0.1, 5] }}
      gl={{ toneMapping: THREE.NoToneMapping }}
      style={{
        width: "100%",
        height: "100%",
        display: "block",
      }}
    >
      <Earth />

      <directionalLight
        color={0x00008b}
        intensity={10}
        position={[0, 30, 0]}
        castShadow={true}
      />
      <hemisphereLight args={[0xffffff, 0x000000, 3.0]} />
      <directionalLight position={[x, y, z]} />
      <Nebula />

      <OrbitControls
        enableRotate={false}
        enablePan={false}
        enableZoom={true}
        minDistance={6}
        maxDistance={10}
      />
    </Canvas>
  );
}

export default EarthCanvas;
