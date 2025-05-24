"use client"
import { useState, useEffect } from "react"
import QN from "./QN" // Import QN component

{
  /* Scale the QN based on the screen size */
}
export default function ResponsiveQN() {
  const [scale, setScale] = useState(6) // Default scale

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      switch (true) {
        case width >= 1024:
          setScale(6) // Large screens (lg+)
          break
        case width >= 768:
          setScale(6) // Medium screens (md)
          break
        case width >= 320:
          setScale(8)
          break
        default:
          setScale(6) // Small screens (default)
      }
    }

    window.addEventListener("resize", handleResize)
    handleResize() // Set initial scale

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return <QN scale={scale} />
}
