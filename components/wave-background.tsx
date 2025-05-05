"use client"

import { useEffect, useRef } from "react"

export default function WaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let time = 0

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Wave parameters
    const waves = [
      { amplitude: 25, period: 100, phase: 0, color: "rgba(16, 185, 129, 0.05)" }, // Emerald
      { amplitude: 20, period: 120, phase: 0.5, color: "rgba(6, 182, 212, 0.03)" }, // Cyan
      { amplitude: 15, period: 80, phase: 1, color: "rgba(16, 185, 129, 0.04)" }, // Emerald
      { amplitude: 30, period: 150, phase: 1.5, color: "rgba(6, 182, 212, 0.02)" }, // Cyan
    ]

    // Draw wave
    const drawWave = (
      yOffset: number,
      amplitude: number,
      period: number,
      phase: number,
      color: string,
      time: number,
    ) => {
      ctx.beginPath()
      ctx.moveTo(0, yOffset)

      for (let x = 0; x < canvas.width; x++) {
        const y = yOffset + amplitude * Math.sin((x / period) * 2 + phase + time)
        ctx.lineTo(x, y)
      }

      ctx.lineTo(canvas.width, canvas.height)
      ctx.lineTo(0, canvas.height)
      ctx.closePath()
      ctx.fillStyle = color
      ctx.fill()
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += 0.005

      // Draw multiple waves with different parameters
      waves.forEach((wave, index) => {
        const yOffset = (canvas.height / (waves.length + 1)) * (index + 1)
        drawWave(yOffset, wave.amplitude, wave.period, wave.phase, wave.color, time)
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  )
}
