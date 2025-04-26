import BackgroundElements from "@/components/background-elements"
import { FadeUp, FadeIn, SlideIn } from "@/components/scroll-animations"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Mail, MapPin, MessageSquare, Phone, Sparkles } from "lucide-react"

export default function ContactPage() {
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
                  Get in Touch
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Let's Create <span className="text-neon-pink">Magic</span> Together
              </h1>

              <p className="text-lg text-muted-foreground mb-8">
                Have a project in mind or want to discuss how I can help your brand? I'd love to hear from you. Fill out
                the form below or reach out directly.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 px-4 mb-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <SlideIn>
              <div className="bg-background p-8 rounded-xl shadow-lg border border-border/50">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Send Me a <span className="text-lavender">Message</span>
                </h2>

                <ContactForm />
              </div>
            </SlideIn>

            <FadeIn delay={0.3}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">
                    Contact <span className="text-neon-pink">Information</span>
                  </h2>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-lavender/10 text-lavender rounded-lg flex items-center justify-center mr-4 shrink-0">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Email</h3>
                        <p className="text-muted-foreground mb-1">For inquiries and quotes</p>
                        <a href="mailto:hello@bareedsubbaiah.com" className="text-lavender hover:underline">
                          hello@bareedsubbaiah.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-neon-pink/10 text-neon-pink rounded-lg flex items-center justify-center mr-4 shrink-0">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Phone</h3>
                        <p className="text-muted-foreground mb-1">Monday to Friday, 9am to 6pm</p>
                        <a href="tel:+1234567890" className="text-neon-pink hover:underline">
                          +1 (234) 567-890
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-electric-blue/10 text-electric-blue rounded-lg flex items-center justify-center mr-4 shrink-0">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Location</h3>
                        <p className="text-muted-foreground mb-1">Working remotely from</p>
                        <p>New York, NY</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-6">
                    Follow <span className="text-electric-blue">Me</span>
                  </h2>

                  <div className="flex gap-4">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-lavender/10 text-lavender rounded-lg flex items-center justify-center hover:bg-lavender hover:text-white transition-colors duration-300"
                      aria-label="Instagram"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-instagram"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    </a>

                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-neon-pink/10 text-neon-pink rounded-lg flex items-center justify-center hover:bg-neon-pink hover:text-white transition-colors duration-300"
                      aria-label="Twitter"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-twitter"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                      </svg>
                    </a>

                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-electric-blue/10 text-electric-blue rounded-lg flex items-center justify-center hover:bg-electric-blue hover:text-white transition-colors duration-300"
                      aria-label="LinkedIn"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-linkedin"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </a>

                    <a
                      href="https://behance.net"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-lavender/10 text-lavender rounded-lg flex items-center justify-center hover:bg-lavender hover:text-white transition-colors duration-300"
                      aria-label="Behance"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-figma"
                      >
                        <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
                        <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
                        <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
                        <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
                        <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-lavender/20 via-neon-pink/20 to-electric-blue/20 p-8 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-neon-pink/10 text-neon-pink rounded-lg flex items-center justify-center mr-4">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-xl">Quick Response</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    I typically respond to all inquiries within 24 hours. For urgent matters, please reach out via
                    phone.
                  </p>
                  <Button className="bg-neon-pink hover:bg-neon-pink/80 text-white">
                    Schedule a Call
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  )
}
// Contact Form Component
;("use client")
function ContactForm() {
  return (
    <form className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <Input id="name" placeholder="Your name" className="border-border/50 focus:border-lavender" required />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="Your email"
            className="border-border/50 focus:border-lavender"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium">
          Subject
        </label>
        <Input
          id="subject"
          placeholder="What is this regarding?"
          className="border-border/50 focus:border-lavender"
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <Textarea
          id="message"
          placeholder="Tell me about your project..."
          className="min-h-[150px] border-border/50 focus:border-lavender"
          required
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="consent"
            className="rounded border-border/50 text-lavender focus:ring-lavender"
            required
          />
          <label htmlFor="consent" className="text-sm text-muted-foreground">
            I agree to the processing of my data as outlined in the Privacy Policy
          </label>
        </div>
      </div>

      <Button type="submit" className="w-full bg-lavender hover:bg-lavender/80 text-white">
        Send Message
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </form>
  )
}
