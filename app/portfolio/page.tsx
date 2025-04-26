import BackgroundElements from "@/components/background-elements"
import { FadeUp } from "@/components/scroll-animations"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function PortfolioPage() {
  return (
    <main className="min-h-screen pt-24">
      <BackgroundElements />

      {/* Hero Section */}
      <section className="pt-12 pb-20 md:pt-20 md:pb-32 px-4 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto">
            <FadeUp>
              <div className="inline-flex items-center justify-center p-1 bg-white rounded-full mb-4">
                <div className="bg-lavender/10 text-lavender px-4 py-1 rounded-full text-sm font-medium flex items-center">
                  <Sparkles className="w-4 h-4 mr-2" />
                  My Portfolio
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Creative <span className="text-neon-pink">Work</span> Showcase
              </h1>

              <p className="text-lg text-muted-foreground mb-8">
                Browse through my latest projects and see how I've helped brands transform their digital presence with
                stunning designs and effective marketing strategies.
              </p>
            </FadeUp>

            <PortfolioFilter />
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <PortfolioItem key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-lavender/20 via-neon-pink/20 to-electric-blue/20">
        <div className="container mx-auto max-w-4xl text-center">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Let's Create <span className="text-neon-pink">Your Next</span> Project
            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to transform your brand with stunning visuals and effective marketing strategies? Let's work
              together to bring your vision to life.
            </p>

            <Button size="lg" className="bg-lavender hover:bg-lavender/80 text-white">
              Start a Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </FadeUp>
        </div>
      </section>
    </main>
  )
}
// Portfolio Filter Component
;("use client")
function PortfolioFilter() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filters = [
    { id: "all", label: "All" },
    { id: "canva", label: "Canva Design" },
    { id: "marketing", label: "Digital Marketing" },
    { id: "branding", label: "Branding" },
  ]

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {filters.map((filter) => (
        <Button
          key={filter.id}
          variant={activeFilter === filter.id ? "default" : "outline"}
          className={
            activeFilter === filter.id
              ? "bg-lavender hover:bg-lavender/80 text-white"
              : "border-lavender text-lavender hover:bg-lavender/10"
          }
          onClick={() => setActiveFilter(filter.id)}
        >
          {filter.label}
        </Button>
      ))}
    </div>
  )
}

// Portfolio Item Component
function PortfolioItem({ project, index }) {
  return (
    <FadeUp delay={index * 0.1}>
      <div className="group relative overflow-hidden rounded-xl bg-background border border-border/50 hover:border-lavender/50 transition-all duration-300">
        <div className="relative overflow-hidden aspect-[4/3]">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={600}
            height={450}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="p-6">
              <span className="inline-block px-3 py-1 bg-lavender/80 text-white rounded-full text-xs font-medium mb-2">
                {project.category}
              </span>
              <h3 className="text-white font-bold text-xl">{project.title}</h3>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold text-xl">{project.title}</h3>
            <span className="inline-block px-3 py-1 bg-lavender/10 text-lavender rounded-full text-xs font-medium">
              {project.category}
            </span>
          </div>
          <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
          <Link
            href={`/portfolio/${project.id}`}
            className="text-lavender font-medium hover:underline inline-flex items-center"
          >
            View Project
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </FadeUp>
  )
}

// Sample project data
const projects = [
  {
    id: "project-1",
    title: "Social Media Campaign",
    category: "Canva Design",
    description: "A series of eye-catching social media graphics for a fashion brand's summer collection launch.",
    image: "/placeholder.svg?height=450&width=600&text=Fashion Campaign",
  },
  {
    id: "project-2",
    title: "Brand Identity",
    category: "Branding",
    description:
      "Complete brand identity design for a startup tech company, including logo, color palette, and typography.",
    image: "/placeholder.svg?height=450&width=600&text=Tech Branding",
  },
  {
    id: "project-3",
    title: "Marketing Strategy",
    category: "Digital Marketing",
    description:
      "Comprehensive digital marketing strategy for a local restaurant, resulting in 200% increase in online orders.",
    image: "/placeholder.svg?height=450&width=600&text=Restaurant Marketing",
  },
  {
    id: "project-4",
    title: "Presentation Design",
    category: "Canva Design",
    description: "Professional pitch deck design for a startup seeking investment, helping them secure $1M in funding.",
    image: "/placeholder.svg?height=450&width=600&text=Pitch Deck",
  },
  {
    id: "project-5",
    title: "E-commerce Rebrand",
    category: "Branding",
    description: "Complete rebranding for an e-commerce store, including new visual identity and marketing materials.",
    image: "/placeholder.svg?height=450&width=600&text=E-commerce Rebrand",
  },
  {
    id: "project-6",
    title: "SEO Optimization",
    category: "Digital Marketing",
    description:
      "SEO strategy implementation for a B2B service provider, resulting in 150% increase in organic traffic.",
    image: "/placeholder.svg?height=450&width=600&text=SEO Project",
  },
  {
    id: "project-7",
    title: "Product Catalog",
    category: "Canva Design",
    description: "Visually stunning product catalog design for a jewelry brand, showcasing their premium collection.",
    image: "/placeholder.svg?height=450&width=600&text=Jewelry Catalog",
  },
  {
    id: "project-8",
    title: "Social Media Management",
    category: "Digital Marketing",
    description: "Ongoing social media management for a lifestyle brand, growing their following by 300% in 6 months.",
    image: "/placeholder.svg?height=450&width=600&text=Social Media",
  },
  {
    id: "project-9",
    title: "Event Branding",
    category: "Branding",
    description: "Complete visual identity for a major conference, including promotional materials and signage.",
    image: "/placeholder.svg?height=450&width=600&text=Event Branding",
  },
]
