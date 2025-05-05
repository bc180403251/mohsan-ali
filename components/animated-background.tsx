"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePosition = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []
    let hue = 160 // Starting hue (emerald green)

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = {
        x: e.clientX,
        y: e.clientY,
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      hue: number
      alpha: number
      decay: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 5 + 1
        this.speedX = Math.random() * 2 - 1
        this.speedY = Math.random() * 2 - 1
        this.hue = hue + Math.random() * 20 - 10 // Slight hue variation
        this.color = `hsla(${this.hue}, 70%, 50%, 0.8)`
        this.alpha = 0.1 + Math.random() * 0.4
        this.decay = 0.0005 + Math.random() * 0.001
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Boundary check with bounce effect
        if (this.x < 0 || this.x > canvas.width) {
          this.speedX *= -1
        }
        if (this.y < 0 || this.y > canvas.height) {
          this.speedY *= -1
        }

        // Mouse interaction - particles are attracted to mouse position
        const dx = mousePosition.current.x - this.x
        const dy = mousePosition.current.y - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const forceDirectionX = dx / distance
        const forceDirectionY = dy / distance
        const maxDistance = 200
        const force = (maxDistance - distance) / maxDistance

        if (distance < maxDistance && mousePosition.current.x !== 0) {
          this.speedX += forceDirectionX * force * 0.2
          this.speedY += forceDirectionY * force * 0.2
        }

        // Speed limit
        const maxSpeed = 2
        this.speedX = Math.max(Math.min(this.speedX, maxSpeed), -maxSpeed)
        this.speedY = Math.max(Math.min(this.speedY, maxSpeed), -maxSpeed)

        // Fade out
        this.alpha -= this.decay
      }

      draw() {
        ctx!.beginPath()
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx!.fillStyle = `hsla(${this.hue}, 70%, 50%, ${this.alpha})`
        ctx!.fill()
      }
    }

    // Initialize particles
    const initParticles = () => {
      particles = []
      for (let i = 0; i < 100; i++) {
        particles.push(new Particle())
      }
    }

    initParticles()

    // Connect particles with lines
    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const maxDistance = 150

          if (distance < maxDistance) {
            ctx!.beginPath()
            ctx!.strokeStyle = `hsla(${hue}, 70%, 50%, ${0.1 * (1 - distance / maxDistance)})`
            ctx!.lineWidth = 0.5
            ctx!.moveTo(particles[i].x, particles[i].y)
            ctx!.lineTo(particles[j].x, particles[j].y)
            ctx!.stroke()
          }
        }
      }
    }

    // Animation loop
    const animate = () => {
      ctx!.clearRect(0, 0, canvas.width, canvas.height)

      // Slowly shift hue for color variation
      hue += 0.1
      if (hue > 180) hue = 160 // Keep in the green/emerald range

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()

        // Replace faded particles
        if (particles[i].alpha <= 0.05) {
          particles.splice(i, 1)
          particles.push(new Particle())
        }
      }

      connectParticles()
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-30"
        style={{ background: "linear-gradient(to bottom, #ffffff, #f8fafc)" }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
    </div>
  )
}
