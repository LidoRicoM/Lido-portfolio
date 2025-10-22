"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Linkedin, Github, MapPin, Calendar, Code, Palette, Database, Globe } from "lucide-react"

export default function CVPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent mb-2">
              Manuel Lidó Rico
            </h1>
            <p className="text-xl text-muted-foreground mb-6">Web Developer & Software Engineer</p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a
                href="mailto:lidoricom@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                lidoricom@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/manuel-lid%C3%B3-rico-650345242/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="https://github.com/LidoRicoM"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Professional Summary */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card className="p-6 rounded-2xl border-2 shadow-lg">
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Code className="w-6 h-6 text-accent" />
                    Professional Summary
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Passionate web developer specializing in React, Next.js, and TypeScript. I create modern, 
                    accessible, and high-performance interfaces while integrating APIs and following engineering 
                    best practices. Dedicated to clean design, exceptional developer experience, and agile 
                    collaboration to deliver quality products.
                  </p>
                </Card>
              </motion.div>

              {/* Experience */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="p-6 rounded-2xl border-2 shadow-lg">
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <Calendar className="w-6 h-6 text-accent" />
                    Experience
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-baseline justify-between gap-4 mb-3">
                        <h3 className="text-lg font-semibold text-foreground">Web Developer — Personal Projects</h3>
                        <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">2023 — Present</span>
                      </div>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                          Developed portfolio using Next.js 16, React 19, and Tailwind CSS 4
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                          Implemented accessible components with Radix UI and smooth animations with Framer Motion
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                          Created responsive interfaces with performance optimization and image optimization
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Featured Projects */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="p-6 rounded-2xl border-2 shadow-lg">
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <Globe className="w-6 h-6 text-accent" />
                    Featured Projects
                  </h2>
                  <div className="space-y-4">
                    <div className="p-4 bg-muted/50 rounded-xl">
                      <h3 className="font-semibold text-foreground mb-2">E-Commerce Platform</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Modern e-commerce solution with real-time inventory management and secure payments
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Next.js</Badge>
                        <Badge variant="secondary">TypeScript</Badge>
                        <Badge variant="secondary">Stripe</Badge>
                        <Badge variant="secondary">Tailwind</Badge>
                      </div>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-xl">
                      <h3 className="font-semibold text-foreground mb-2">Task Management App</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Collaborative tool with real-time updates and advanced filtering capabilities
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">React</Badge>
                        <Badge variant="secondary">Node.js</Badge>
                        <Badge variant="secondary">Socket.io</Badge>
                        <Badge variant="secondary">MongoDB</Badge>
                      </div>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-xl">
                      <h3 className="font-semibold text-foreground mb-2">AI Content Generator</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        AI-powered platform for efficient content creation
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Next.js</Badge>
                        <Badge variant="secondary">OpenAI</Badge>
                        <Badge variant="secondary">Prisma</Badge>
                        <Badge variant="secondary">PostgreSQL</Badge>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Technical Skills */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="p-6 rounded-2xl border-2 shadow-lg">
                  <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Code className="w-5 h-5 text-accent" />
                    Technical Skills
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <Palette className="w-4 h-4" />
                        Frontend
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">React</Badge>
                        <Badge variant="outline">Next.js</Badge>
                        <Badge variant="outline">TypeScript</Badge>
                        <Badge variant="outline">Tailwind CSS</Badge>
                        <Badge variant="outline">Radix UI</Badge>
                        <Badge variant="outline">Framer Motion</Badge>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <Database className="w-4 h-4" />
                        Backend & Tools
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Node.js</Badge>
                        <Badge variant="outline">REST APIs</Badge>
                        <Badge variant="outline">Git</Badge>
                        <Badge variant="outline">GitHub</Badge>
                        <Badge variant="outline">Prisma</Badge>
                        <Badge variant="outline">PostgreSQL</Badge>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Education */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="p-6 rounded-2xl border-2 shadow-lg">
                  <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-accent" />
                    Education
                  </h2>
                  <div className="space-y-4">
                    {/* CESUR */}
                    <div className="border-l-4 border-accent pl-4">
                      <div className="flex items-baseline justify-between gap-4 mb-1">
                        <h3 className="font-semibold text-foreground">CESUR</h3>
                        <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">Sept 2024 - May 2025</span>
                      </div>
                      <h4 className="text-sm font-medium text-foreground mb-2">Second Year DAM - Multiplatform Application Development</h4>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-medium text-accent">Grade: 9.3</span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2 leading-relaxed">
                        Transferred to CESUR for flexible online learning while living abroad. Focused on mobile app development, 
                        UI design, and business systems integration in an English-speaking environment.
                      </p>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs px-2 py-0">Android</Badge>
                        <Badge variant="outline" className="text-xs px-2 py-0">JavaFX</Badge>
                        <Badge variant="outline" className="text-xs px-2 py-0">REST APIs</Badge>
                        <Badge variant="outline" className="text-xs px-2 py-0">MySQL</Badge>
                        <Badge variant="outline" className="text-xs px-2 py-0">MVC</Badge>
                      </div>
                    </div>

                    {/* CIFP Carlos III */}
                    <div className="border-l-4 border-muted-foreground pl-4">
                      <div className="flex items-baseline justify-between gap-4 mb-1">
                        <h3 className="font-semibold text-foreground">CIFP Carlos III</h3>
                        <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">Sept 2023 - Jun 2024</span>
                      </div>
                      <h4 className="text-sm font-medium text-foreground mb-2">First Year DAM - Multiplatform Application Development</h4>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-medium text-accent">Grade: 7.2</span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2 leading-relaxed">
                        Gained solid foundation in programming, database management, and computer systems. 
                        Worked on individual and team projects using Java, SQL, and agile methodologies.
                      </p>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs px-2 py-0">Java</Badge>
                        <Badge variant="outline" className="text-xs px-2 py-0">SQL</Badge>
                        <Badge variant="outline" className="text-xs px-2 py-0">IDEs</Badge>
                        <Badge variant="outline" className="text-xs px-2 py-0">UML</Badge>
                        <Badge variant="outline" className="text-xs px-2 py-0">Agile</Badge>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Languages */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="p-6 rounded-2xl border-2 shadow-lg">
                  <h2 className="text-xl font-bold text-foreground mb-4">Languages</h2>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Spanish</span>
                      <span className="text-sm font-medium text-accent">Native</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">English</span>
                      <span className="text-sm font-medium text-accent">Advanced</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>

          {/* Back to Home */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-2xl hover:bg-accent/90 transition-colors font-medium"
            >
              ← Back to Home
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  )
}


