"use client"

import { motion } from "framer-motion"
import { Code2, Palette, Rocket, Zap, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const skills = [
  { name: "React / Next.js", level: 95, icon: Code2 },
  { name: "TypeScript", level: 90, icon: Zap },
  { name: "Tailwind CSS", level: 92, icon: Palette },
  { name: "Node.js", level: 85, icon: Rocket },
]

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Passionate developer with expertise in modern web technologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 rounded-2xl border-2 shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-4">Building the Future of Web</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                I'm a full-stack developer specializing in creating exceptional digital experiences. With a strong
                foundation in modern JavaScript frameworks and a keen eye for design, I transform ideas into elegant,
                performant web applications.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                My approach combines technical excellence with creative problem-solving, ensuring every project not only
                meets requirements but exceeds expectations. I'm constantly learning and adapting to new technologies to
                deliver cutting-edge solutions.
              </p>
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-2xl" asChild>
                <a href="/cv">
                  <FileText className="mr-2 h-5 w-5" />
                  See My CV
                </a>
              </Button>
            </Card>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 rounded-2xl border-2 shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-accent/10 rounded-lg">
                        <Icon className="w-5 h-5 text-accent" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-foreground">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
