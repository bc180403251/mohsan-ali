"use client"

import { useEffect, useState, useRef } from "react"
import { useInView } from "react-intersection-observer"

interface AnimatedCounterProps {
  value: string
}

export default function AnimatedCounter({ value }: AnimatedCounterProps) {
  const [count, setCount] = useState("0")
  const countRef = useRef<string>(value)
  const startTimeRef = useRef<number | null>(null) // Store stable start time
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    countRef.current = value
  }, [value])

  useEffect(() => {
    if (!inView) return

    // If value is not a number, just set it directly
    if (isNaN(Number(value))) {
      setCount(value)
      return
    }

    const end = parseInt(value)
    const duration = 2000
    startTimeRef.current = performance.now() // More accurate than Date.now()

    const animateCount = (now: number) => {
      const progress = Math.min((now - (startTimeRef.current ?? now)) / duration, 1)
      const currentCount = Math.floor(progress * end)

      if (progress < 1) {
        setCount(currentCount.toString())
        requestAnimationFrame(animateCount)
      } else {
        setCount(end.toString())
      }
    }

    requestAnimationFrame(animateCount)
  }, [inView, value])

  return <span ref={ref}>{count}</span>
}
