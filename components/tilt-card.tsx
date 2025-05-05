"use client"

import type React from "react"

import { useState, useRef, type ReactNode } from "react"
import { motion } from "framer-motion"

interface TiltCardProps {
  children: ReactNode
  className?: string
  glareEnabled?: boolean
  tiltMaxAngleX?: number
  tiltMaxAngleY?: number
  perspective?: number
  scale?: number
}

export default function TiltCard({
  children,
  className = "",
  glareEnabled = false,
  tiltMaxAngleX = 10,
  tiltMaxAngleY = 10,
  perspective = 1000,
  scale = 1.02,
}: TiltCardProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0, glarePosition: { x: 0, y: 0 } })
  const [isHovering, setIsHovering] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    // Calculate distance from center as a percentage (-1 to 1)
    const x = (e.clientX - centerX) / (rect.width / 2)
    const y = (e.clientY - centerY) / (rect.height / 2)

    // Calculate tilt angles
    const tiltX = -y * tiltMaxAngleX
    const tiltY = x * tiltMaxAngleY

    // Calculate glare position (0 to 100%)
    const glareX = ((e.clientX - rect.left) / rect.width) * 100
    const glareY = ((e.clientY - rect.top) / rect.height) * 100

    setTilt({
      x: tiltX,
      y: tiltY,
      glarePosition: { x: glareX, y: glareY },
    })
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    setTilt({ x: 0, y: 0, glarePosition: { x: 50, y: 50 } })
  }

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: `${perspective}px`,
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX: tilt.x,
        rotateY: tilt.y,
        scale: isHovering ? scale : 1,
      }}
      transition={{
        rotateX: { type: "spring", stiffness: 300, damping: 30 },
        rotateY: { type: "spring", stiffness: 300, damping: 30 },
        scale: { type: "spring", stiffness: 500, damping: 30 },
      }}
    >
      {children}

      {glareEnabled && isHovering && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${tilt.glarePosition.x}% ${tilt.glarePosition.y}%, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 60%)`,
            zIndex: 2,
          }}
        />
      )}
    </motion.div>
  )
}
