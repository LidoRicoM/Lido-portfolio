"use client"

import { motion } from "framer-motion"
import { ArrowDown, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { GradientText, FloatingElement } from "./visual-effects"
import { ParallaxElement, MagneticButton } from "./scroll-effects"
import { TypingText } from "./micro-interactions"
import { AnimatedBackground, MorphingShape } from "./theme-toggle"

export function Hero() {
  return (
    <AnimatedBackground>
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        {/* Custom cursor and particles will be added to layout */}
        
        {/* Floating decorative elements */}
        <FloatingElement intensity={0.5} className="absolute top-20 left-10 opacity-20">
          <Sparkles className="w-8 h-8 text-accent" />
        </FloatingElement>
        
        <FloatingElement intensity={0.3} className="absolute top-40 right-20 opacity-20">
          <Sparkles className="w-6 h-6 text-purple-500" />
        </FloatingElement>

        {/* Morphing shapes */}
        <MorphingShape className="top-20 right-10 w-20 h-20" />
        <MorphingShape className="bottom-40 left-20 w-16 h-16" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            {/* Text content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-6"
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-balance bg-gradient-to-r from-accent via-sky-400 to-violet-400 bg-clip-text text-transparent">
                  Hi, I'm Manuel Lidó Rico
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-8"
              >
                <TypingText 
                  text="Web Developer & Software Engineer" 
                  speed={80}
                  className="text-xl sm:text-2xl md:text-3xl text-muted-foreground text-balance"
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-base sm:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0 text-pretty"
              >
                Crafting elegant digital experiences with modern web technologies. Passionate about clean code, innovative
                solutions, and pushing the boundaries of what's possible on the web.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <MagneticButton strength={0.2}>
                  <Button
                    size="lg"
                    className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-2xl text-base px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
                    asChild
                  >
                    <a href="#projects">View My Work</a>
                  </Button>
                </MagneticButton>
                
                <MagneticButton strength={0.2}>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="rounded-2xl text-base px-8 py-6 bg-transparent border-2 hover:bg-accent/10 transition-all duration-300" 
                    asChild
                  >
                    <a href="#contact">Get In Touch</a>
                  </Button>
                </MagneticButton>
              </motion.div>
            </motion.div>

            {/* Profile image with parallax */}
            <ParallaxElement speed={0.3} direction="down">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex-1 flex justify-center lg:justify-end"
              >
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
                  {/* Enhanced glow effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-accent/30 via-purple-500/20 to-pink-500/30 rounded-full blur-3xl"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  
                  {/* Image with enhanced effects */}
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Image
                      src="/foto-manuel.png"
                      alt="Manuel Lidó Rico"
                      width={400}
                      height={400}
                      className="relative rounded-full border-4 border-accent/30 shadow-2xl object-cover hover:border-accent/50 transition-all duration-300"
                    />
                  </motion.div>
                  
                  {/* Floating particles around image */}
                  {[...Array(6)].map((_, i) => (
                    <FloatingElement 
                      key={i} 
                      intensity={0.5 + i * 0.1}
                      className={`absolute w-2 h-2 bg-accent rounded-full opacity-60`}
                      style={{
                        left: `${20 + (i * 15)}%`,
                        top: `${30 + (i * 10)}%`,
                        animationDelay: `${i * 0.5}s`,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </ParallaxElement>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="flex flex-col items-center gap-2"
          >
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
            <motion.div
              className="w-1 h-8 bg-gradient-to-b from-accent to-transparent rounded-full"
              animate={{ scaleY: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </motion.div>
        </motion.div>
      </section>
    </AnimatedBackground>
  )
}
