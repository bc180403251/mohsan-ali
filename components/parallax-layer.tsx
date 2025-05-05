"use client"

import { type ReactNode, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxLayerProps {
  children: ReactNode
  speed?: number
  className?: string
  direction?: "up" | "down"
}

export default function ParallaxLayer({ children, speed = 0.5, className = "", direction = "up" }: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Adjust the movement direction based on the direction prop
  const factor = direction === "up" ? -1 : 1
  const y = useTransform(scrollYProgress, [0, 1], [0, 100 * speed * factor])

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}
