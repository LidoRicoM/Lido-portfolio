"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface GradientTextProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function GradientText({ children, className = "", delay = 0 }: GradientTextProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className={`relative ${className}`}
    >
      <motion.div
        className="bg-gradient-to-r from-accent via-purple-500 to-pink-500 bg-clip-text text-transparent"
        animate={{
          backgroundPosition: [
            "0% 50%",
            "100% 50%",
            "0% 50%",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% 200%",
        }}
      >
        {children}
      </motion.div>
      
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-accent/20 via-purple-500/20 to-pink-500/20 blur-xl -z-10"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  )
}

interface FloatingElementProps {
  children: React.ReactNode
  className?: string
  intensity?: number
}

export function FloatingElement({ children, className = "", intensity = 1 }: FloatingElementProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -10 * intensity, 0],
        rotate: [0, 1 * intensity, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  )
}

interface GlitchTextProps {
  text: string
  className?: string
}

export function GlitchText({ text, className = "" }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 200)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className={`relative ${className}`}
      animate={isGlitching ? {
        x: [0, -2, 2, -2, 2, 0],
        textShadow: [
          "0 0 0 transparent",
          "2px 0 0 #ff0000, -2px 0 0 #00ffff",
          "0 0 0 transparent",
        ],
      } : {}}
      transition={{ duration: 0.2 }}
    >
      {text}
    </motion.div>
  )
}
