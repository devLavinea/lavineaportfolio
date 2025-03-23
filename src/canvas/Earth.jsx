import * as THREE from "three";
import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, } from "@react-three/drei";
import Nebula from "./Nebula";
import EarthMaterial from "./EarthMaterial";

const sunDirection = new THREE.Vector3(-2, 0.5, 1.5);

function Earth() {
  const ref = React.useRef();
  
  useFrame(() => {
    ref.current.rotation.y += 0.003;
  });
  
  const axialTilt = 23.4 * Math.PI / 180;

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
  // Corrigido: acessando as propriedades x, y, z corretamente
  const x = sunDirection.x;
  const y = sunDirection.y;
  const z = sunDirection.z;

  return (
    <Canvas 
      camera={{ position: [0, 0.1, 5] }}
      gl={{ toneMapping: THREE.NoToneMapping }}
    >
    
        <Earth />
        
     
      
      <hemisphereLight args={[0xffffff, 0x000000, 3.0]} />
      <directionalLight position={[x, y, z]} />
      <Nebula />
      
      {/* Configuração do OrbitControls */}
      <OrbitControls
        enableRotate={false}  // Desabilita rotação com o mouse
        enablePan={false}     // Desabilita pan (movimento lateral com o mouse)
        enableZoom={true}     // Habilita zoom com o mouse
      />
    </Canvas>
  );
}

export default EarthCanvas;
