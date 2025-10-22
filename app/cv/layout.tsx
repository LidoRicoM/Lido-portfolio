import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "CV | Manuel Lidó Rico",
  description: "Curriculum Vitae of Manuel Lidó Rico, Web Developer & Software Engineer",
}

export default function CVLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
