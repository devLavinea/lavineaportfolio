import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Preload } from "@react-three/drei";

const Stars = ({ position = [1, 1, 0], ...props }) => {
  const ref = useRef();
  const [geometry] = useState(() => {
    const positions = new Float32Array(5000 * 3);

    for (let i = 0; i < 5000; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      const radius = Math.random() * 5;
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    return geometry;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta / -10;
      ref.current.rotation.y -= delta / 20;
    }
  });

  return (
    <group position={position}>
      <points ref={ref} geometry={geometry} {...props}>
        <pointsMaterial
          transparent
          color="#ffffff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 0] }}>
        <Suspense fallback={null}>
          <Stars position={[1, 0, 0]} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
