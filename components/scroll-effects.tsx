"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useEffect, useState } from "react"

interface ParallaxElementProps {
  children: React.ReactNode
  className?: string
  speed?: number
  direction?: "up" | "down" | "left" | "right"
}

export function ParallaxElement({ 
  children, 
  className = "", 
  speed = 0.5, 
  direction = "up" 
}: ParallaxElementProps) {
  const { scrollY } = useScroll()
  
  const getTransform = () => {
    switch (direction) {
      case "up":
        return useTransform(scrollY, [0, 1000], [0, -100 * speed])
      case "down":
        return useTransform(scrollY, [0, 1000], [0, 100 * speed])
      case "left":
        return useTransform(scrollY, [0, 1000], [0, -50 * speed])
      case "right":
        return useTransform(scrollY, [0, 1000], [0, 50 * speed])
      default:
        return useTransform(scrollY, [0, 1000], [0, -100 * speed])
    }
  }

  const y = getTransform()

  return (
    <motion.div
      className={className}
      style={{ y }}
    >
      {children}
    </motion.div>
  )
}

interface ScrollProgressProps {
  className?: string
}

export function ScrollProgress({ className = "" }: ScrollProgressProps) {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-purple-500 to-pink-500 z-50 ${className}`}
      style={{ scaleX, transformOrigin: "0%" }}
    />
  )
}

interface RevealOnScrollProps {
  children: React.ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right"
  delay?: number
}

export function RevealOnScroll({ 
  children, 
  className = "", 
  direction = "up", 
  delay = 0 
}: RevealOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById(`reveal-${delay}`)
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [delay])

  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: 100, opacity: 0 }
      case "down":
        return { y: -100, opacity: 0 }
      case "left":
        return { x: 100, opacity: 0 }
      case "right":
        return { x: -100, opacity: 0 }
      default:
        return { y: 100, opacity: 0 }
    }
  }

  return (
    <motion.div
      id={`reveal-${delay}`}
      className={className}
      initial={getInitialPosition()}
      animate={isVisible ? { x: 0, y: 0, opacity: 1 } : getInitialPosition()}
      transition={{
        duration: 0.8,
        delay: delay * 0.1,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  )
}

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  strength?: number
}

export function MagneticButton({ 
  children, 
  className = "", 
  strength = 0.3 
}: MagneticButtonProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const deltaX = (e.clientX - centerX) * strength
    const deltaY = (e.clientY - centerY) * strength

    setPosition({ x: deltaX, y: deltaY })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.div
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
    >
      {children}
    </motion.div>
  )
}
