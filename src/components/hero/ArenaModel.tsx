"use client"

import { useRef } from "react"
import { Float, MeshDistortMaterial } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

function LightBeam() {
  const ref = useRef<THREE.Mesh>(null!)

  useFrame(({ clock }) => {
    ref.current.scale.y = 1 + Math.sin(clock.getElapsedTime() * 3) * 0.1
  })

  return (
    <mesh ref={ref} position={[0, 2.2, 0]}>
      <cylinderGeometry args={[0.1, 0.4, 3, 16, 1, true]} />
      <meshBasicMaterial color="#facc15" transparent opacity={0.15} />
    </mesh>
  )
}

export default function ArenaModel() {
  return (
    <group position={[0, -1, 0]}>
      <Float speed={1} rotationIntensity={0} floatIntensity={0.2}>
        <mesh position={[0, -0.3, 0]} receiveShadow>
          <cylinderGeometry args={[2.2, 2.5, 0.4, 64]} />
          <MeshDistortMaterial color="#2d1b4e" distort={0.3} speed={2} />
        </mesh>
        <mesh position={[0, 0.2, 0]}>
          <cylinderGeometry args={[1.8, 2.0, 0.4, 64]} />
          <meshStandardMaterial color="#3f2a6b" roughness={0.8} metalness={0.2} />
        </mesh>
      </Float>
      <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
        <group position={[0, 0.8, 0]}>
          <mesh>
            <cylinderGeometry args={[0.4, 0.5, 0.15, 32]} />
            <meshStandardMaterial color="#facc15" emissive="#facc15" emissiveIntensity={0.4} metalness={0.9} roughness={0.2} />
          </mesh>
          <mesh position={[0, 0.4, 0]}>
            <torusGeometry args={[0.5, 0.15, 16, 32]} />
            <meshStandardMaterial color="#facc15" emissive="#facc15" emissiveIntensity={0.6} metalness={0.8} roughness={0.1} />
          </mesh>
          <mesh position={[0, 0.3, 0]}>
            <sphereGeometry args={[0.25, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
            <meshStandardMaterial color="#fbbf24" emissive="#f59e0b" emissiveIntensity={0.3} />
          </mesh>
        </group>
      </Float>
      <LightBeam />
    </group>
  )
}