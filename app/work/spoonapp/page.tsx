import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const GITHUB = "https://github.com/LidoRicoM/spoonapp-landing"
const DEMO = "https://lidoricom.github.io/spoonapp-landing/"

export default function SpoonAppCaseStudyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <article className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 max-w-3xl">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to projects
        </Link>

        <p className="text-sm font-medium text-accent mb-2">Featured work</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">SpoonApp restaurant landing</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          Public marketing site and merchant portal screens for a restaurant-focused product: responsive UI, demo
          authentication, 3D kitchen visuals, and localized copy. Built as a static Next.js export suitable for
          hosting on GitHub Pages or any CDN.
        </p>

        <div className="flex flex-wrap gap-3 mb-10">
          <Button asChild className="rounded-xl">
            <a href={DEMO} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Open live demo
            </a>
          </Button>
          <Button variant="outline" asChild className="rounded-xl bg-transparent">
            <a href={GITHUB} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View source
            </a>
          </Button>
        </div>

        <div className="relative rounded-2xl overflow-hidden border-2 border-border shadow-lg mb-10">
          <Image
            src="/spoonapp-landing-preview.jpg"
            alt="SpoonApp landing preview"
            width={1200}
            height={675}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">What to look for in the demo</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Hero and kitchen sections with motion and 3D elements</li>
            <li>Sign-in / sign-up flows and protected merchant portal routes</li>
            <li>Multi-language strings and mobile-oriented layouts</li>
          </ul>
          <p className="text-muted-foreground mt-6 text-sm">
            If the live demo shows a 404, enable <strong>GitHub Pages</strong> on the repository (Source: GitHub
            Actions) after the first successful deploy workflow run on <code className="text-xs">main</code>.
          </p>
        </div>
      </article>
      <Footer />
    </main>
  )
}
