"use client"

import { Suspense, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { Stars, OrbitControls } from "@react-three/drei"
import { EffectComposer, Bloom } from "@react-three/postprocessing"
import UfoModel from "./UfoModel"
import { useMediaQuery } from "@/hooks/useMediaQuery"

function ReadyNotifier({ onReady }: { onReady?: () => void }) {
  useEffect(() => {
    onReady?.()
  }, [onReady])
  return null
}

interface ThreeSceneProps {
  onReady?: () => void
}

export default function ThreeScene({ onReady }: ThreeSceneProps) {
  const isTouchDevice = useMediaQuery("(pointer: coarse)")

  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 2, 10], fov: 45 }}>
        <fog attach="fog" args={["#0a0514", 3, 15]} />
        <color attach="background" args={["#0a0514"]} />
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#c9a84c" />
        <pointLight position={[-5, -2, -5]} intensity={0.4} color="#9b59b6" />

        <Stars
          radius={80}
          depth={40}
          count={2000}
          factor={5}
          saturation={0}
          fade
          speed={0.5}
        />

        <Suspense fallback={null}>
          <UfoModel />
          <ReadyNotifier onReady={onReady} />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.2}
          maxPolarAngle={Math.PI / 2.2}
          enableRotate={true}
        />

        <EffectComposer>
          <Bloom
            luminanceThreshold={0.4}
            luminanceSmoothing={0.9}
            height={300}
            intensity={1.5}
          />
        </EffectComposer>
      </Canvas>
    </div>
  )
}