
"use client"
import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import clsx from 'clsx'
import React, { Suspense } from 'react'

const RenderModel = ({children, className}) => {
  return (
    <Canvas className={clsx("w-screen h-screen relative", className)}> 
        <Suspense fallback={null}> 
            {children}
        </Suspense>
        <Environment preset='park'/>   
    </Canvas> 
  )
}

export default RenderModel