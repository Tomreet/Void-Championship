"use client"

import { useRef } from "react"
import { Float, useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

function LightBeam() {
  const beamRef = useRef<THREE.Mesh>(null!)

  useFrame(({ clock }) => {
    if (beamRef.current) {
      const material = beamRef.current.material as THREE.MeshBasicMaterial
      material.opacity = 0.15 + Math.sin(clock.getElapsedTime() * 4) * 0.05
    }
  })

  return (
    <mesh ref={beamRef} position={[0, -1.8, 0]}>
      <coneGeometry args={[0.6, 4, 16, 1, true]} />
      <meshBasicMaterial
        color="#c9a84c"
        transparent
        opacity={0.15}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

export default function UfoModel() {
  const { scene } = useGLTF("/models/ufo.glb")
  return (
    <group position={[0, 1.5, 0]}
            scale={0.04}>
      <pointLight
        position={[0, -1.5, -3]}
        intensity={50}
        color="#c9a84c"
        distance={6}
        decay={2}
      />
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
        <primitive object={scene} scale={0.6} />
      </Float>
      <LightBeam />
    </group>
  )
}