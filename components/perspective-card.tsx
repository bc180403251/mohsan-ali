"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface PerspectiveCardProps {
  children: ReactNode
  className?: string
  depth?: number
}

export default function PerspectiveCard({ children, className = "", depth = 20 }: PerspectiveCardProps) {
  return (
    <div className={`relative ${className}`} style={{ perspective: "1000px" }}>
      <motion.div
        initial={{ rotateX: depth, rotateY: -depth, scale: 0.95 }}
        whileInView={{ rotateX: 0, rotateY: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
        viewport={{ once: true, margin: "-100px" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {children}
      </motion.div>
    </div>
  )
}
