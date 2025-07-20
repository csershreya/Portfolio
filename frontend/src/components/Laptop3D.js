import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const LaptopModel = () => {
  const { scene } = useGLTF("/models/Laptop.glb");
  const ref = useRef();

  // Continuous slow rotation
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.005;
    }
  });

  return <primitive object={scene} ref={ref} scale={0.1} />;
};

export default function Laptop3D() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Canvas camera={{ position: [0, 1.2, 4], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 5, 5]} />
        <LaptopModel />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
