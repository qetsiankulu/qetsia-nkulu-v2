"use client"
import { Environment } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import clsx from "clsx"
import { Suspense } from "react"
import type { ReactNode } from "react"

interface RenderModelProps {
  children: ReactNode
  className?: string
}

const RenderModel = ({ children, className }: RenderModelProps) => {
  return (
    <Canvas className={clsx("w-full h-full relative", className)}>
      <Suspense fallback={null}>{children}</Suspense>
      <Environment preset="sunset" />
    </Canvas>
  )
}

export default RenderModel
