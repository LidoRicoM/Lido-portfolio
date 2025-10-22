"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce solution with real-time inventory management, secure payments, and an intuitive admin dashboard.",
    image: "/modern-ecommerce-website.png",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
    github: "#",
    demo: "#",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative task management tool with real-time updates, team workspaces, and advanced filtering capabilities.",
    image: "/task-management-dashboard.png",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    github: "#",
    demo: "#",
  },
  {
    title: "AI Content Generator",
    description:
      "AI-powered content creation platform that helps marketers and writers generate high-quality content efficiently.",
    image: "/ai-content-generator-interface.png",
    tags: ["Next.js", "OpenAI", "PostgreSQL", "Prisma"],
    github: "#",
    demo: "#",
  },
  {
    title: "Portfolio CMS",
    description:
      "Headless CMS designed for creative professionals to showcase their work with customizable templates and SEO optimization.",
    image: "/portfolio-cms-dashboard.jpg",
    tags: ["React", "GraphQL", "Strapi", "AWS"],
    github: "#",
    demo: "#",
  },
  {
    title: "Fitness Tracker",
    description:
      "Mobile-first fitness tracking application with workout plans, progress analytics, and social features.",
    image: "/fitness-tracker-app-interface.png",
    tags: ["React Native", "Firebase", "Redux", "Chart.js"],
    github: "#",
    demo: "#",
  },
  {
    title: "Real Estate Platform",
    description:
      "Property listing platform with advanced search filters, virtual tours, and integrated mortgage calculator.",
    image: "/real-estate-platform.jpg",
    tags: ["Next.js", "Mapbox", "Supabase", "Tailwind"],
    github: "#",
    demo: "#",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A selection of my recent work showcasing diverse skills and technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden rounded-2xl border-2 shadow-lg hover:shadow-2xl transition-all duration-300 group h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed flex-1">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="rounded-full">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="flex-1 rounded-xl bg-transparent" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90 rounded-xl"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
