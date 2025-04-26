import OpeningAnimation from "@/components/opening-animation"
import BackgroundElements from "@/components/background-elements"
import { FadeUp, FadeIn, SlideIn, ScaleIn } from "@/components/scroll-animations"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brush, Palette, PenTool, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen">
      <OpeningAnimation />
      <BackgroundElements />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-4 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <SlideIn>
              <div className="space-y-6">
                <div className="flex space-x-3">
                  <span className="inline-block px-3 py-1 bg-lavender/10 text-lavender rounded-full text-sm font-medium">
                    Canva Designer
                  </span>
                  <span className="inline-block px-3 py-1 bg-neon-pink/10 text-neon-pink rounded-full text-sm font-medium">
                    Digital Marketer
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Turning <span className="text-lavender">ideas</span> into{" "}
                  <span className="text-neon-pink">visual</span> <span className="text-electric-blue">stories</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground">
                  I create stunning visuals and effective marketing strategies that help brands stand out in the digital
                  landscape.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Button size="lg" className="bg-lavender hover:bg-lavender/80 text-white">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-lavender text-lavender hover:bg-lavender/10">
                    Contact Me
                  </Button>
                </div>
              </div>
            </SlideIn>

            <FadeIn delay={0.3}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-lavender via-neon-pink to-electric-blue rounded-full opacity-30 blur-xl animate-glow" />
                <div className="relative bg-muted rounded-2xl overflow-hidden aspect-square">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Bareedu Subbaiah"
                    width={600}
                    height={600}
                    className="object-cover"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Floating tags */}
        <div className="absolute top-40 right-10 animate-float hidden lg:block">
          <div className="bg-lavender/10 text-lavender px-4 py-2 rounded-full">Canva Expert</div>
        </div>
        <div className="absolute bottom-20 left-10 animate-float delay-300 hidden lg:block">
          <div className="bg-neon-pink/10 text-neon-pink px-4 py-2 rounded-full">Digital Marketing</div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Services I <span className="text-lavender">Offer</span>
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScaleIn delay={0.1}>
              <div className="bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 group hover:border-lavender/50 h-full">
                <div className="w-12 h-12 bg-lavender/10 text-lavender rounded-lg flex items-center justify-center mb-4 group-hover:bg-lavender group-hover:text-white transition-colors duration-300">
                  <Brush className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Canva Design</h3>
                <p className="text-muted-foreground mb-4">
                  Professional designs created in Canva for all your marketing needs.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-lavender rounded-full mr-2"></span>
                    Social media graphics
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-lavender rounded-full mr-2"></span>
                    Presentations & pitches
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-lavender rounded-full mr-2"></span>
                    Brand kits & style guides
                  </li>
                </ul>
                <Link href="/services" className="text-lavender font-medium hover:underline inline-flex items-center">
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </ScaleIn>

            <ScaleIn delay={0.2}>
              <div className="bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 group hover:border-neon-pink/50 h-full">
                <div className="w-12 h-12 bg-neon-pink/10 text-neon-pink rounded-lg flex items-center justify-center mb-4 group-hover:bg-neon-pink group-hover:text-white transition-colors duration-300">
                  <Palette className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Digital Marketing</h3>
                <p className="text-muted-foreground mb-4">
                  Strategic marketing solutions to grow your online presence.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-neon-pink rounded-full mr-2"></span>
                    Social media management
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-neon-pink rounded-full mr-2"></span>
                    Content marketing
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-neon-pink rounded-full mr-2"></span>
                    SEO optimization
                  </li>
                </ul>
                <Link href="/services" className="text-neon-pink font-medium hover:underline inline-flex items-center">
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </ScaleIn>

            <ScaleIn delay={0.3}>
              <div className="bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 group hover:border-electric-blue/50 h-full">
                <div className="w-12 h-12 bg-electric-blue/10 text-electric-blue rounded-lg flex items-center justify-center mb-4 group-hover:bg-electric-blue group-hover:text-white transition-colors duration-300">
                  <PenTool className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Brand Identity</h3>
                <p className="text-muted-foreground mb-4">
                  Cohesive brand identity design to make your business memorable.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-electric-blue rounded-full mr-2"></span>
                    Logo design
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-electric-blue rounded-full mr-2"></span>
                    Color palette selection
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-electric-blue rounded-full mr-2"></span>
                    Brand guidelines
                  </li>
                </ul>
                <Link
                  href="/services"
                  className="text-electric-blue font-medium hover:underline inline-flex items-center"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Featured <span className="text-neon-pink">Work</span>
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
              A selection of my recent projects showcasing my design and marketing expertise.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <FadeUp key={item} delay={item * 0.1}>
                <Link href="/portfolio" className="group">
                  <div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-muted">
                    <Image
                      src={`/placeholder.svg?height=400&width=600&text=Project ${item}`}
                      alt={`Project ${item}`}
                      width={600}
                      height={400}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4">
                        <h3 className="text-white font-bold text-lg">Project {item}</h3>
                        <p className="text-white/80 text-sm">Canva Design</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button size="lg" variant="outline" className="border-lavender text-lavender hover:bg-lavender/10">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-lavender/20 via-neon-pink/20 to-electric-blue/20">
        <div className="container mx-auto max-w-4xl text-center">
          <FadeUp>
            <div className="inline-flex items-center justify-center p-1 bg-white rounded-full mb-6">
              <div className="bg-lavender/10 text-lavender px-4 py-1 rounded-full text-sm font-medium flex items-center">
                <Sparkles className="w-4 h-4 mr-2" />
                Let's Create Magic Together
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to transform your <span className="text-neon-pink">digital presence</span>?
            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you need stunning visuals or effective marketing strategies, I'm here to help you stand out in the
              digital landscape.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-lavender hover:bg-lavender/80 text-white">
                Get in Touch
              </Button>
              <Button size="lg" variant="outline" className="border-lavender text-lavender hover:bg-lavender/10">
                View Services
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  )
}
