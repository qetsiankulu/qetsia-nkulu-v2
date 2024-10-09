/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

"use client"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function QN(props) {
  const { nodes, materials } = useGLTF("/models/qn-transformed.glb")
  const groupRef = useRef()
  
   // Rotate the model on each frame
   useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.007 // Adjust rotation speed as needed
    }
  })

  return (
    <group ref={groupRef} {...props} dispose={null}
    position={[0, 0, 0]} 
    rotation={[0, 0, 0]} 
    scale ={[3.25, 3.25, 3.25]}
    >
      <mesh
        name="Path"
        castShadow
        receiveShadow
        geometry={nodes.Path.geometry}
        material={nodes.Path.material}
        position={[-0.017, -0.035, -0.096]}
        rotation={[-0.011, 0, 0]}
        scale={0.001}
      />
    </group>
  )



//   return (
//     <group {...props} dispose={null}
//         position = {[0, 0, 0]}
//         scale ={[3.25, 3.25, 3.25]}

//     >
//       <mesh
//         name="Path"
//         castShadow
//         receiveShadow
//         geometry={nodes.Path.geometry}
//         material={nodes.Path.material}
//         position={[-0.017, -0.035, -0.096]}
//         rotation={[-0.011, 0, 0]}
//         scale={0.001}
//       />
//     </group>
//   )
}

useGLTF.preload("/models/qn-transformed.glb")