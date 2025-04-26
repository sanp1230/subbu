import BackgroundElements from "@/components/background-elements"
import { FadeUp, FadeIn, SlideIn, ScaleIn } from "@/components/scroll-animations"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brush, FileText, LayoutGrid, Palette, PenTool, Sparkles, Target } from "lucide-react"
import Image from "next/image"

export default function ServicesPage() {
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
                  My Services
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Creative <span className="text-neon-pink">Solutions</span> for Your Brand
              </h1>

              <p className="text-lg text-muted-foreground mb-8">
                I offer a range of design and marketing services to help your brand stand out in the digital landscape.
                From stunning visuals to effective marketing strategies, I've got you covered.
              </p>

              <Button size="lg" className="bg-lavender hover:bg-lavender/80 text-white">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Canva Design Services */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <SlideIn>
              <div className="space-y-6">
                <div className="w-12 h-12 bg-lavender/10 text-lavender rounded-lg flex items-center justify-center">
                  <Brush className="w-6 h-6" />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold">
                  Canva Design <span className="text-lavender">Services</span>
                </h2>

                <p className="text-lg text-muted-foreground">
                  I create professional, eye-catching designs using Canva to help your brand communicate effectively
                  with your audience.
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-lavender/10 text-lavender rounded-full flex items-center justify-center mt-1 mr-3">
                      <span className="text-xs font-bold">01</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Social Media Graphics</h3>
                      <p className="text-muted-foreground">
                        Eye-catching posts, stories, and covers for all social platforms
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-lavender/10 text-lavender rounded-full flex items-center justify-center mt-1 mr-3">
                      <span className="text-xs font-bold">02</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Presentations & Pitches</h3>
                      <p className="text-muted-foreground">
                        Professional slide decks that engage and inform your audience
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-lavender/10 text-lavender rounded-full flex items-center justify-center mt-1 mr-3">
                      <span className="text-xs font-bold">03</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Brand Kits & Style Guides</h3>
                      <p className="text-muted-foreground">Consistent visual identity elements for your brand</p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-lavender/10 text-lavender rounded-full flex items-center justify-center mt-1 mr-3">
                      <span className="text-xs font-bold">04</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Print Materials</h3>
                      <p className="text-muted-foreground">
                        Brochures, flyers, business cards, and other print collateral
                      </p>
                    </div>
                  </li>
                </ul>

                <Button className="bg-lavender hover:bg-lavender/80 text-white">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </SlideIn>

            <FadeIn delay={0.3}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-lavender to-neon-pink rounded-full opacity-30 blur-xl animate-glow" />
                <div className="relative bg-muted rounded-2xl overflow-hidden aspect-square">
                  <Image
                    src="/placeholder.svg?height=600&width=600&text=Canva Design"
                    alt="Canva Design Services"
                    width={600}
                    height={600}
                    className="object-cover"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Digital Marketing Services */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeIn className="order-2 md:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-neon-pink to-electric-blue rounded-full opacity-30 blur-xl animate-glow" />
                <div className="relative bg-muted rounded-2xl overflow-hidden aspect-square">
                  <Image
                    src="/placeholder.svg?height=600&width=600&text=Digital Marketing"
                    alt="Digital Marketing Services"
                    width={600}
                    height={600}
                    className="object-cover"
                  />
                </div>
              </div>
            </FadeIn>

            <SlideIn className="order-1 md:order-2" delay={0.3}>
              <div className="space-y-6">
                <div className="w-12 h-12 bg-neon-pink/10 text-neon-pink rounded-lg flex items-center justify-center">
                  <Palette className="w-6 h-6" />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold">
                  Digital Marketing <span className="text-neon-pink">Services</span>
                </h2>

                <p className="text-lg text-muted-foreground">
                  I develop and implement strategic marketing solutions to grow your online presence and reach your
                  target audience effectively.
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-neon-pink/10 text-neon-pink rounded-full flex items-center justify-center mt-1 mr-3">
                      <span className="text-xs font-bold">01</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Social Media Management</h3>
                      <p className="text-muted-foreground">Content creation, scheduling, and community engagement</p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-neon-pink/10 text-neon-pink rounded-full flex items-center justify-center mt-1 mr-3">
                      <span className="text-xs font-bold">02</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Content Marketing</h3>
                      <p className="text-muted-foreground">
                        Strategic content creation to attract and engage your audience
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-neon-pink/10 text-neon-pink rounded-full flex items-center justify-center mt-1 mr-3">
                      <span className="text-xs font-bold">03</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">SEO Optimization</h3>
                      <p className="text-muted-foreground">
                        Improving your online visibility and search engine rankings
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-neon-pink/10 text-neon-pink rounded-full flex items-center justify-center mt-1 mr-3">
                      <span className="text-xs font-bold">04</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Analytics & Reporting</h3>
                      <p className="text-muted-foreground">Data-driven insights to measure and improve performance</p>
                    </div>
                  </li>
                </ul>

                <Button className="bg-neon-pink hover:bg-neon-pink/80 text-white">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Brand Identity Services */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <SlideIn>
              <div className="space-y-6">
                <div className="w-12 h-12 bg-electric-blue/10 text-electric-blue rounded-lg flex items-center justify-center">
                  <PenTool className="w-6 h-6" />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold">
                  Brand Identity <span className="text-electric-blue">Services</span>
                </h2>

                <p className="text-lg text-muted-foreground">
                  I create cohesive brand identities that make your business memorable and help you connect with your
                  target audience.
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-electric-blue/10 text-electric-blue rounded-full flex items-center justify-center mt-1 mr-3">
                      <span className="text-xs font-bold">01</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Logo Design</h3>
                      <p className="text-muted-foreground">Distinctive, memorable logos that represent your brand</p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-electric-blue/10 text-electric-blue rounded-full flex items-center justify-center mt-1 mr-3">
                      <span className="text-xs font-bold">02</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Color Palette Selection</h3>
                      <p className="text-muted-foreground">Strategic color choices that evoke the right emotions</p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-electric-blue/10 text-electric-blue rounded-full flex items-center justify-center mt-1 mr-3">
                      <span className="text-xs font-bold">03</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Typography Selection</h3>
                      <p className="text-muted-foreground">Font choices that align with your brand personality</p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-electric-blue/10 text-electric-blue rounded-full flex items-center justify-center mt-1 mr-3">
                      <span className="text-xs font-bold">04</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Brand Guidelines</h3>
                      <p className="text-muted-foreground">Comprehensive guide for consistent brand application</p>
                    </div>
                  </li>
                </ul>

                <Button className="bg-electric-blue hover:bg-electric-blue/80 text-white">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </SlideIn>

            <FadeIn delay={0.3}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-electric-blue to-lavender rounded-full opacity-30 blur-xl animate-glow" />
                <div className="relative bg-muted rounded-2xl overflow-hidden aspect-square">
                  <Image
                    src="/placeholder.svg?height=600&width=600&text=Brand Identity"
                    alt="Brand Identity Services"
                    width={600}
                    height={600}
                    className="object-cover"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <FadeUp>
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center p-1 bg-white rounded-full mb-4">
                <div className="bg-lavender/10 text-lavender px-4 py-1 rounded-full text-sm font-medium flex items-center">
                  <Target className="w-4 h-4 mr-2" />
                  Packages
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Choose the Right <span className="text-neon-pink">Package</span> for You
              </h2>

              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                I offer flexible service packages designed to meet your specific needs and budget.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Package */}
            <ScaleIn delay={0.1}>
              <div className="bg-background rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 group hover:border-lavender/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-lavender/10 rounded-bl-full -mt-8 -mr-8"></div>

                <div className="w-12 h-12 bg-lavender/10 text-lavender rounded-lg flex items-center justify-center mb-6">
                  <FileText className="w-6 h-6" />
                </div>

                <h3 className="text-2xl font-bold mb-2">Basic</h3>
                <p className="text-muted-foreground mb-6">Perfect for small businesses just starting out</p>

                <div className="mb-6">
                  <span className="text-3xl font-bold">$299</span>
                  <span className="text-muted-foreground">/project</span>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-lavender/10 text-lavender rounded-full flex items-center justify-center mr-3">
                      <span className="text-xs">✓</span>
                    </div>
                    <span>5 Social Media Graphics</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-lavender/10 text-lavender rounded-full flex items-center justify-center mr-3">
                      <span className="text-xs">✓</span>
                    </div>
                    <span>Basic Brand Kit</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-lavender/10 text-lavender rounded-full flex items-center justify-center mr-3">
                      <span className="text-xs">✓</span>
                    </div>
                    <span>1 Revision Round</span>
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-5 h-5 bg-muted rounded-full flex items-center justify-center mr-3">
                      <span className="text-xs">✗</span>
                    </div>
                    <span>Marketing Strategy</span>
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-5 h-5 bg-muted rounded-full flex items-center justify-center mr-3">
                      <span className="text-xs">✗</span>
                    </div>
                    <span>SEO Optimization</span>
                  </li>
                </ul>

                <Button variant="outline" className="w-full border-lavender text-lavender hover:bg-lavender/10">
                  Get Started
                </Button>
              </div>
            </ScaleIn>

            {/* Pro Package */}
            <ScaleIn delay={0.2}>
              <div className="bg-background rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neon-pink/50 group relative overflow-hidden transform scale-105 md:scale-110 z-10">
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-neon-pink/10 rounded-bl-full"></div>

                <div className="absolute top-0 right-0 bg-neon-pink text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  POPULAR
                </div>

                <div className="w-12 h-12 bg-neon-pink/10 text-neon-pink rounded-lg flex items-center justify-center mb-6">
                  <LayoutGrid className="w-6 h-6" />
                </div>

                <h3 className="text-2xl font-bold mb-2">Pro</h3>
                <p className="text-muted-foreground mb-6">Ideal for growing businesses</p>

                <div className="mb-6">
                  <span className="text-3xl font-bold">$599</span>
                  <span className="text-muted-foreground">/project</span>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-neon-pink/10 text-neon-pink rounded-full flex items-center justify-center mr-3">
                      <span className="text-xs">✓</span>
                    </div>
                    <span>15 Social Media Graphics</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-neon-pink/10 text-neon-pink rounded-full flex items-center justify-center mr-3">
                      <span className="text-xs">✓</span>
                    </div>
                    <span>Complete Brand Kit</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-neon-pink/10 text-neon-pink rounded-full flex items-center justify-center mr-3">
                      <span className="text-xs">✓</span>
                    </div>
                    <span>3 Revision Rounds</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-neon-pink/10 text-neon-pink rounded-full flex items-center justify-center mr-3">
                      <span className="text-xs">✓</span>
                    </div>
                    <span>Basic Marketing Strategy</span>
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-5 h-5 bg-muted rounded-full flex items-center justify-center mr-3">
                      <span className="text-xs">✗</span>
                    </div>
                    <span>SEO Optimization</span>
                  </li>
                </ul>

                <Button className="w-full bg-neon-pink hover:bg-neon-pink/80 text-white">Get Started</Button>
              </div>
            </ScaleIn>

            {/* Premium Package */}
            <ScaleIn delay={0.3}>
              <div className="bg-background rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 group hover:border-electric-blue/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-electric-blue/10 rounded-bl-full -mt-8 -mr-8"></div>

                <div className="w-12 h-12 bg-electric-blue/10 text-electric-blue rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-6 h-6" />
                </div>

                <h3 className="text-2xl font-bold mb-2">Premium</h3>
                <p className="text-muted-foreground mb-6">Complete solution for established brands</p>

                <div className="mb-6">
                  <span className="text-3xl font-bold">$999</span>
                  <span className="text-muted-foreground">/project</span>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-electric-blue/10 text-electric-blue rounded-full flex items-center justify-center mr-3">
                      <span className="text-xs">✓</span>
                    </div>
                    <span>30 Social Media Graphics</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-electric-blue/10 text-electric-blue rounded-full flex items-center justify-center mr-3">
                      <span className="text-xs">✓</span>
                    </div>
                    <span>Premium Brand Kit</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-electric-blue/10 text-electric-blue rounded-full flex items-center justify-center mr-3">
                      <span className="text-xs">✓</span>
                    </div>
                    <span>Unlimited Revisions</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-electric-blue/10 text-electric-blue rounded-full flex items-center justify-center mr-3">
                      <span className="text-xs">✓</span>
                    </div>
                    <span>Complete Marketing Strategy</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-electric-blue/10 text-electric-blue rounded-full flex items-center justify-center mr-3">
                      <span className="text-xs">✓</span>
                    </div>
                    <span>SEO Optimization</span>
                  </li>
                </ul>

                <Button
                  variant="outline"
                  className="w-full border-electric-blue text-electric-blue hover:bg-electric-blue/10"
                >
                  Get Started
                </Button>
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-lavender/20 via-neon-pink/20 to-electric-blue/20">
        <div className="container mx-auto max-w-4xl text-center">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to <span className="text-neon-pink">Transform</span> Your Brand?
            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how my services can help you achieve your business goals and create a memorable brand
              experience.
            </p>

            <Button size="lg" className="bg-lavender hover:bg-lavender/80 text-white">
              Let's Create Magic
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </FadeUp>
        </div>
      </section>
    </main>
  )
}
