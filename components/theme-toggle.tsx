"use client"

import { motion } from "framer-motion"
import { Sun, Moon } from "lucide-react"
import { useState, useEffect } from "react"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check initial theme
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    
    if (newTheme) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-12 h-6 bg-muted rounded-full p-1 transition-colors duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute top-1 left-1 w-4 h-4 bg-background rounded-full shadow-md flex items-center justify-center"
        animate={{
          x: isDark ? 24 : 0,
          rotate: isDark ? 180 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        {isDark ? (
          <Moon className="w-2.5 h-2.5 text-accent" />
        ) : (
          <Sun className="w-2.5 h-2.5 text-accent" />
        )}
      </motion.div>
    </motion.button>
  )
}

interface AnimatedBackgroundProps {
  children: React.ReactNode
  className?: string
}

export function AnimatedBackground({ children, className = "" }: AnimatedBackgroundProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, #ff6b6b 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, #4ecdc4 0%, transparent 50%)",
            "radial-gradient(circle at 40% 80%, #45b7d1 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, #ff6b6b 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Floating orbs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-32 h-32 rounded-full opacity-20 blur-xl"
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -50, 100, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            background: `hsl(${200 + i * 60}, 70%, 60%)`,
            left: `${20 + i * 30}%`,
            top: `${30 + i * 20}%`,
          }}
        />
      ))}
      
      {children}
    </div>
  )
}

interface MorphingShapeProps {
  className?: string
}

export function MorphingShape({ className = "" }: MorphingShapeProps) {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{
        borderRadius: [
          "30% 70% 70% 30% / 30% 30% 70% 70%",
          "70% 30% 30% 70% / 70% 70% 30% 30%",
          "30% 70% 70% 30% / 30% 30% 70% 70%",
        ],
        rotate: [0, 180, 360],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="w-full h-full bg-gradient-to-br from-accent/20 to-purple-500/20" />
    </motion.div>
  )
}
