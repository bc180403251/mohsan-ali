"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useMotionValue } from "framer-motion"

interface RotatingCubeProps {
  size?: number
  className?: string
}

export default function RotatingCube({ size = 100, className = "" }: RotatingCubeProps) {
  const controls = useAnimation()
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Start automatic rotation
    controls.start({
      rotateY: 360,
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Number.POSITIVE_INFINITY,
      },
    })
  }, [controls])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    // Calculate distance from center
    const x = (e.clientX - centerX) / 10
    const y = (e.clientY - centerY) / 10

    mouseX.set(x)
    mouseY.set(-y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  const faceStyle = {
    position: "absolute",
    width: `${size}px`,
    height: `${size}px`,
    backfaceVisibility: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: `${size / 4}px`,
    fontWeight: "bold",
    color: "white",
    border: "1px solid rgba(255, 255, 255, 0.1)",
  } as const

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        perspective: "1000px",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        animate={controls}
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          transformStyle: "preserve-3d",
          rotateX: mouseY,
          rotateY: mouseX,
        }}
      >
        {/* Front face */}
        <div
          style={{
            ...faceStyle,
            transform: `translateZ(${size / 2}px)`,
            background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ width: `${size / 3}px`, height: `${size / 3}px` }}
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </div>

        {/* Back face */}
        <div
          style={{
            ...faceStyle,
            transform: `rotateY(180deg) translateZ(${size / 2}px)`,
            background: "linear-gradient(135deg, #047857 0%, #065f46 100%)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ width: `${size / 3}px`, height: `${size / 3}px` }}
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </div>

        {/* Right face */}
        <div
          style={{
            ...faceStyle,
            transform: `rotateY(90deg) translateZ(${size / 2}px)`,
            background: "linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ width: `${size / 3}px`, height: `${size / 3}px` }}
          >
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
            <line x1="8" y1="21" x2="16" y2="21"></line>
            <line x1="12" y1="17" x2="12" y2="21"></line>
          </svg>
        </div>

        {/* Left face */}
        <div
          style={{
            ...faceStyle,
            transform: `rotateY(-90deg) translateZ(${size / 2}px)`,
            background: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ width: `${size / 3}px`, height: `${size / 3}px` }}
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
        </div>

        {/* Top face */}
        <div
          style={{
            ...faceStyle,
            transform: `rotateX(90deg) translateZ(${size / 2}px)`,
            background: "linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ width: `${size / 3}px`, height: `${size / 3}px` }}
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </div>

        {/* Bottom face */}
        <div
          style={{
            ...faceStyle,
            transform: `rotateX(-90deg) translateZ(${size / 2}px)`,
            background: "linear-gradient(135deg, #0d9488 0%, #0f766e 100%)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ width: `${size / 3}px`, height: `${size / 3}px` }}
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
        </div>
      </motion.div>
    </div>
  )
}
