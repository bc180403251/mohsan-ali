"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ThreeDButtonProps {
  children: ReactNode
  className?: string
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive"
  size?: "default" | "sm" | "lg" | "icon"
  onClick?: () => void
  disabled?: boolean
  type?: "button" | "submit" | "reset"
  depth?: number
}

export default function ThreeDButton({
  children,
  className,
  variant = "default",
  size = "default",
  onClick,
  disabled = false,
  type = "button",
  depth = 4,
}: ThreeDButtonProps) {
  // Determine shadow color based on variant
  const getShadowColor = () => {
    switch (variant) {
      case "default":
        return "rgba(5, 150, 105, 0.5)" // emerald-600
      case "outline":
        return "rgba(209, 213, 219, 0.5)" // gray-300
      case "secondary":
        return "rgba(209, 213, 219, 0.5)" // gray-300
      case "destructive":
        return "rgba(220, 38, 38, 0.5)" // red-600
      default:
        return "transparent"
    }
  }

  return (
    <div className="relative inline-block group">
      {/* Shadow/3D effect layer */}
      <div
        className={cn(
          "absolute inset-0 rounded-md transition-all duration-200 group-hover:translate-x-1 group-hover:translate-y-1",
          disabled ? "opacity-30" : "opacity-100",
        )}
        style={{
          backgroundColor: getShadowColor(),
          top: `${depth}px`,
          left: `${depth}px`,
        }}
      ></div>

      {/* Button */}
      <motion.div whileTap={{ scale: 0.97 }} className="relative">
        <Button
          variant={variant}
          size={size}
          onClick={onClick}
          disabled={disabled}
          type={type}
          className={cn(
            "transition-all duration-200 transform group-hover:-translate-x-1 group-hover:-translate-y-1",
            className,
          )}
        >
          {children}
        </Button>
      </motion.div>
    </div>
  )
}
