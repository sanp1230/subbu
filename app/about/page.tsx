import BackgroundElements from "@/components/background-elements"
import { FadeUp, FadeIn, SlideIn, ScaleIn } from "@/components/scroll-animations"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  GraduationCap,
  Heart,
  Sparkles,
  Star,
  Trophy,
} from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24">
      <BackgroundElements />

      {/* Hero Section */}
      <section className="pt-12 pb-20 md:pt-20 md:pb-32 px-4 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeIn>
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

            <SlideIn delay={0.2}>
              <div className="space-y-6">
                <div className="inline-flex items-center justify-center p-1 bg-white rounded-full mb-2">
                  <div className="bg-lavender/10 text-lavender px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <Sparkles className="w-4 h-4 mr-2" />
                    About Me
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  How I Became a <span className="text-neon-pink">Visual Storyteller</span>
                </h1>

                <p className="text-lg text-muted-foreground">
                  I'm Bareedu Subbaiah, a passionate Canva designer and digital marketing specialist with a love for
                  creating visually stunning and effective digital content.
                </p>

                <p className="text-lg text-muted-foreground">
                  My journey began with a fascination for visual arts and digital media, which evolved into a career
                  helping brands tell their stories through compelling design and strategic marketing.
                </p>

                <div className="flex flex-wrap gap-6 pt-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-lavender/10 text-lavender rounded-full flex items-center justify-center mr-3">
                      <Trophy className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold">5+ Years</h3>
                      <p className="text-sm text-muted-foreground">Experience</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-neon-pink/10 text-neon-pink rounded-full flex items-center justify-center mr-3">
                      <Star className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold">100+</h3>
                      <p className="text-sm text-muted-foreground">Projects</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-electric-blue/10 text-electric-blue rounded-full flex items-center justify-center mr-3">
                      <Heart className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold">50+</h3>
                      <p className="text-sm text-muted-foreground">Happy Clients</p>
                    </div>
                  </div>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* My Journey */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              My <span className="text-electric-blue">Journey</span>
            </h2>
          </FadeUp>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:translate-x-[-0.5px]"></div>

            <div className="space-y-12 relative">
              {/* Timeline item 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">
                <FadeUp className="md:text-right md:pr-12">
                  <div className="hidden md:block absolute right-0 top-0 w-4 h-4 rounded-full bg-lavender transform translate-x-2"></div>
                  <div className="md:hidden absolute left-0 top-0 w-4 h-4 rounded-full bg-lavender transform -translate-x-2"></div>
                  <div className="bg-background p-6 rounded-xl shadow-md border border-border/50">
                    <div className="w-10 h-10 bg-lavender/10 text-lavender rounded-lg flex items-center justify-center mb-4">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Education</h3>
                    <p className="text-muted-foreground mb-1">2015 - 2019</p>
                    <p className="text-lg">Bachelor's in Digital Media Design</p>
                    <p className="text-muted-foreground">University of Creative Arts</p>
                  </div>
                </FadeUp>
                <div className="md:block hidden"></div>
              </div>

              {/* Timeline item 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">
                <div className="md:block hidden"></div>
                <FadeUp className="md:pl-12">
                  <div className="hidden md:block absolute left-0 top-0 w-4 h-4 rounded-full bg-neon-pink transform -translate-x-2"></div>
                  <div className="md:hidden absolute left-0 top-0 w-4 h-4 rounded-full bg-neon-pink transform -translate-x-2"></div>
                  <div className="bg-background p-6 rounded-xl shadow-md border border-border/50">
                    <div className="w-10 h-10 bg-neon-pink/10 text-neon-pink rounded-lg flex items-center justify-center mb-4">
                      <BriefcaseBusiness className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">First Design Role</h3>
                    <p className="text-muted-foreground mb-1">2019 - 2021</p>
                    <p className="text-lg">Junior Designer</p>
                    <p className="text-muted-foreground">Creative Solutions Agency</p>
                  </div>
                </FadeUp>
              </div>

              {/* Timeline item 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">
                <FadeUp className="md:text-right md:pr-12">
                  <div className="hidden md:block absolute right-0 top-0 w-4 h-4 rounded-full bg-electric-blue transform translate-x-2"></div>
                  <div className="md:hidden absolute left-0 top-0 w-4 h-4 rounded-full bg-electric-blue transform -translate-x-2"></div>
                  <div className="bg-background p-6 rounded-xl shadow-md border border-border/50">
                    <div className="w-10 h-10 bg-electric-blue/10 text-electric-blue rounded-lg flex items-center justify-center mb-4">
                      <Award className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Marketing Specialist</h3>
                    <p className="text-muted-foreground mb-1">2021 - 2022</p>
                    <p className="text-lg">Digital Marketing Lead</p>
                    <p className="text-muted-foreground">Innovative Digital Co.</p>
                  </div>
                </FadeUp>
                <div className="md:block hidden"></div>
              </div>

              {/* Timeline item 4 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">
                <div className="md:block hidden"></div>
                <FadeUp className="md:pl-12">
                  <div className="hidden md:block absolute left-0 top-0 w-4 h-4 rounded-full bg-lavender transform -translate-x-2"></div>
                  <div className="md:hidden absolute left-0 top-0 w-4 h-4 rounded-full bg-lavender transform -translate-x-2"></div>
                  <div className="bg-background p-6 rounded-xl shadow-md border border-border/50">
                    <div className="w-10 h-10 bg-lavender/10 text-lavender rounded-lg flex items-center justify-center mb-4">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Freelance Journey</h3>
                    <p className="text-muted-foreground mb-1">2022 - Present</p>
                    <p className="text-lg">Canva Designer & Digital Marketer</p>
                    <p className="text-muted-foreground">Self-employed</p>
                  </div>
                </FadeUp>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Tools */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Skills & <span className="text-lavender">Tools</span>
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScaleIn delay={0.1}>
              <div className="bg-background p-6 rounded-xl shadow-md border border-border/50 h-full">
                <h3 className="text-xl font-bold mb-4 text-lavender">Design Skills</h3>
                <ul className="space-y-3">
                  <li className="flex flex-col">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Canva Design</span>
                      <span className="text-sm text-muted-foreground">95%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-lavender h-2 rounded-full" style={{ width: "95%" }}></div>
                    </div>
                  </li>
                  <li className="flex flex-col">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Visual Storytelling</span>
                      <span className="text-sm text-muted-foreground">90%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-lavender h-2 rounded-full" style={{ width: "90%" }}></div>
                    </div>
                  </li>
                  <li className="flex flex-col">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Brand Identity</span>
                      <span className="text-sm text-muted-foreground">85%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-lavender h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </li>
                  <li className="flex flex-col">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Typography</span>
                      <span className="text-sm text-muted-foreground">80%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-lavender h-2 rounded-full" style={{ width: "80%" }}></div>
                    </div>
                  </li>
                </ul>
              </div>
            </ScaleIn>

            <ScaleIn delay={0.2}>
              <div className="bg-background p-6 rounded-xl shadow-md border border-border/50 h-full">
                <h3 className="text-xl font-bold mb-4 text-neon-pink">Marketing Skills</h3>
                <ul className="space-y-3">
                  <li className="flex flex-col">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Social Media Marketing</span>
                      <span className="text-sm text-muted-foreground">90%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-neon-pink h-2 rounded-full" style={{ width: "90%" }}></div>
                    </div>
                  </li>
                  <li className="flex flex-col">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Content Strategy</span>
                      <span className="text-sm text-muted-foreground">85%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-neon-pink h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </li>
                  <li className="flex flex-col">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">SEO Optimization</span>
                      <span className="text-sm text-muted-foreground">80%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-neon-pink h-2 rounded-full" style={{ width: "80%" }}></div>
                    </div>
                  </li>
                  <li className="flex flex-col">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Analytics & Reporting</span>
                      <span className="text-sm text-muted-foreground">75%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-neon-pink h-2 rounded-full" style={{ width: "75%" }}></div>
                    </div>
                  </li>
                </ul>
              </div>
            </ScaleIn>

            <ScaleIn delay={0.3}>
              <div className="bg-background p-6 rounded-xl shadow-md border border-border/50 h-full">
                <h3 className="text-xl font-bold mb-4 text-electric-blue">Tools</h3>
                <ul className="space-y-3">
                  <li className="flex flex-col">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Canva</span>
                      <span className="text-sm text-muted-foreground">98%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-electric-blue h-2 rounded-full" style={{ width: "98%" }}></div>
                    </div>
                  </li>
                  <li className="flex flex-col">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Google Analytics</span>
                      <span className="text-sm text-muted-foreground">85%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-electric-blue h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </li>
                  <li className="flex flex-col">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Social Media Platforms</span>
                      <span className="text-sm text-muted-foreground">90%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-electric-blue h-2 rounded-full" style={{ width: "90%" }}></div>
                    </div>
                  </li>
                  <li className="flex flex-col">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">SEO Tools</span>
                      <span className="text-sm text-muted-foreground">80%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-electric-blue h-2 rounded-full" style={{ width: "80%" }}></div>
                    </div>
                  </li>
                </ul>
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
              Let's <span className="text-neon-pink">Create</span> Together
            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>

            <Button size="lg" className="bg-lavender hover:bg-lavender/80 text-white">
              Contact Me
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </FadeUp>
        </div>
      </section>
    </main>
  )
}
