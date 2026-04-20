import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Environment, ContactShadows } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Mesh, Group } from "three";

function InkBlob({ position, color, speed = 1 }: { position: [number, number, number]; color: string; speed?: number }) {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
    ref.current.rotation.y = state.clock.elapsedTime * 0.15 * speed;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={ref} position={position} castShadow>
        <icosahedronGeometry args={[1, 32]} />
        <MeshDistortMaterial color={color} distort={0.45} speed={2} roughness={0.15} metalness={0.2} />
      </mesh>
    </Float>
  );
}

function PaperSheet({ position, rotation, color }: { position: [number, number, number]; rotation: [number, number, number]; color: string }) {
  const ref = useRef<Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.z = rotation[2] + Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.7) * 0.15;
  });
  return (
    <group ref={ref} position={position} rotation={rotation}>
      <mesh castShadow>
        <boxGeometry args={[1.6, 2.2, 0.04]} />
        <meshStandardMaterial color={color} roughness={0.6} />
      </mesh>
    </group>
  );
}

const HeroScene = () => {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0, 7], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
        <directionalLight position={[-5, -2, 3]} intensity={0.4} color="#ff3ea5" />

        <InkBlob position={[-2.2, 0.6, 0]} color="#11c8ed" speed={1.1} />
        <InkBlob position={[2.4, -0.4, -0.5]} color="#ee2db0" speed={0.9} />
        <InkBlob position={[0.2, 1.6, -1]} color="#fcd029" speed={1.3} />

        <PaperSheet position={[-1.5, -1.6, 0.5]} rotation={[0, 0, 0.25]} color="#ffffff" />
        <PaperSheet position={[1.6, -1.7, 0.2]} rotation={[0, 0, -0.2]} color="#fcd029" />

        <ContactShadows position={[0, -2.4, 0]} opacity={0.35} scale={12} blur={2.4} far={3} />
        <Environment preset="studio" />
      </Suspense>
    </Canvas>
  );
};

export default HeroScene;
