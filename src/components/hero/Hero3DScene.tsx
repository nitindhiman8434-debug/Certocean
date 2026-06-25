"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles, Stars } from "@react-three/drei";
import type { Group, Mesh } from "three";

const ORBIT_BADGES = [
  { radius: 2.6, speed: 0.5, offset: 0, y: 0.4, color: "#e2ab35" },
  { radius: 3.15, speed: -0.35, offset: 1.4, y: -0.5, color: "#82a4d8" },
  { radius: 2.2, speed: 0.65, offset: 3.1, y: 0.7, color: "#ecc35a" },
  { radius: 3.4, speed: -0.45, offset: 4.6, y: -0.3, color: "#4f78bb" },
  { radius: 2.85, speed: 0.4, offset: 5.8, y: 0.2, color: "#f3d98a" },
];

function CertificationCore() {
  const meshRef = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += delta * 0.15;
    meshRef.current.rotation.x += delta * 0.05;
  });
  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.4, 1]} />
      <MeshDistortMaterial
        color="#cf9326"
        emissive="#e2ab35"
        emissiveIntensity={0.35}
        roughness={0.25}
        metalness={0.6}
        distort={0.22}
        speed={1.4}
        wireframe
      />
    </mesh>
  );
}

function OrbitingBadge({ radius, speed, offset, y, color }: { radius: number; speed: number; offset: number; y: number; color: string }) {
  const groupRef = useRef<Group>(null);
  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime() * speed + offset;
    groupRef.current.position.x = Math.cos(t) * radius;
    groupRef.current.position.z = Math.sin(t) * radius;
    groupRef.current.position.y = y + Math.sin(t * 1.3) * 0.5;
  });
  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={1.1} floatIntensity={0.7}>
        <mesh>
          <octahedronGeometry args={[0.22, 0]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} roughness={0.3} metalness={0.4} />
        </mesh>
      </Float>
    </group>
  );
}

function Scene() {
  return (
    <group position={[2.2, 0, 0]}>
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={1.6} color="#e2ab35" />
      <pointLight position={[-5, -3, -5]} intensity={1} color="#4f78bb" />
      <CertificationCore />
      {ORBIT_BADGES.map((b, i) => (
        <OrbitingBadge key={i} {...b} />
      ))}
      <Sparkles count={60} scale={7} size={2.5} speed={0.3} color="#f3d98a" />
      <Stars radius={22} depth={30} count={1100} factor={1.6} fade speed={0.5} />
    </group>
  );
}

export function Hero3DScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6.5], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}
