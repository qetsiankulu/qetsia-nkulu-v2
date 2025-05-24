"use client"
import { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"

interface QNProps {
  scale: number
}

export default function QN({ scale }: QNProps) {
  const { nodes, materials } = useGLTF("/models/qn-yellow-transformed.glb")
  const modelRef = useRef<THREE.Group>(null) // Create a reference to the QN model

  // Rotate the model on each frame
  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.007 // Adjust rotation speed as needed
    }
  })

  return (
    <group
      dispose={null}
      ref={modelRef}
      position={[0, 0.6, 0]}
      rotation={[0, 0, 0]}
      scale={scale} // Use the scale prop directly
    >
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any).svg_2.geometry}
        material={(nodes as any).svg_2.material}
        position={[-0.017, -0.035, -0.096]}
        rotation={[-0.011, 0, 0]}
        scale={0.001}
      />
    </group>
  )
}

useGLTF.preload("/models/qn-yellow-transformed.glb")
