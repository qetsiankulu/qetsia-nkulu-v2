"use client"
import type React from "react"
import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  draw: () => void
  update: () => void
}

const StardustBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let particlesArray: Particle[] = []
    const numberOfParticles = 400

    // Set canvas size
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Resize canvas when window resizes
    const handleResize = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      createParticles()
    }

    window.addEventListener("resize", handleResize)

    // Particle constructor
    function createParticle(x: number, y: number, size: number, speedX: number, speedY: number): Particle {
      const particle: Particle = {
        x,
        y,
        size,
        speedX,
        speedY,
        opacity: Math.random() * 0.7 + 0.7,

        // Draw each particle
        draw() {
          if (!ctx || !canvas) return
          ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
          ctx.fill()
        },

        // Update particle's position and make it move
        update() {
          if (!canvas) return
          this.x += this.speedX
          this.y += this.speedY

          // Wrap particles to other side of the screen when they go off the edge
          if (this.x > canvas.width) this.x = 0
          if (this.x < 0) this.x = canvas.width
          if (this.y > canvas.height) this.y = 0
          if (this.y < 0) this.y = canvas.height
        },
      }

      return particle
    }

    // Create particles array
    function createParticles() {
      if (!canvas) return
      particlesArray = []
      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 3
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const speedX = Math.random() * 1 - 0.5
        const speedY = Math.random() * 1 - 0.5
        particlesArray.push(createParticle(x, y, size, speedX, speedY))
      }
    }

    // Animate particles
    function animateParticles() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesArray.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      requestAnimationFrame(animateParticles)
    }

    // Initialize particles and animation
    createParticles()
    animateParticles()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none" />
}

export default StardustBackground
