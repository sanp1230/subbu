"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function OpeningAnimation() {
  const [showAnimation, setShowAnimation] = useState(true)
  const [animationStep, setAnimationStep] = useState(0)
  const [paintedText, setPaintedText] = useState("")
  const [colorIndex, setColorIndex] = useState(0)

  const fullName = "Bareedu Subbaiah"
  const designerText = "Hello, I'm your creative designer"

  const colors = ["text-lavender", "text-neon-pink", "text-electric-blue"]

  useEffect(() => {
    // Check if animation has been shown before
    const hasSeenAnimation = localStorage.getItem("hasSeenAnimation")

    if (hasSeenAnimation) {
      setShowAnimation(false)
      return
    }

    // Start painting the name
    if (animationStep === 0) {
      let currentIndex = 0

      const interval = setInterval(() => {
        if (currentIndex <= fullName.length) {
          setPaintedText(fullName.substring(0, currentIndex))
          currentIndex++
        } else {
          clearInterval(interval)
          setTimeout(() => setAnimationStep(1), 1000)
        }
      }, 150)

      return () => clearInterval(interval)
    }

    // Color cycle for "designer"
    if (animationStep === 2) {
      const interval = setInterval(() => {
        setColorIndex((prev) => (prev + 1) % colors.length)
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [animationStep, fullName])

  const handleEnter = () => {
    setShowAnimation(false)
    localStorage.setItem("hasSeenAnimation", "true")
  }

  if (!showAnimation) return null

  return (
    <AnimatePresence>
      {showAnimation && (
        <motion.div
          className="fixed inset-0 bg-deep-black z-[100] flex flex-col items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Step 1: Paint the name */}
          {animationStep === 0 && (
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-dancing text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {paintedText}
              <motion.span
                className="inline-block w-0.5 h-8 md:h-12 bg-white ml-1"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
              />
            </motion.h1>
          )}

          {/* Step 2: Name glows and moves to corner */}
          {animationStep === 1 && (
            <>
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-dancing text-white"
                initial={{ scale: 1, y: 0 }}
                animate={{
                  scale: 0.5,
                  y: -200,
                  x: -window.innerWidth / 3,
                  textShadow: [
                    "0 0 0px rgba(255,255,255,0)",
                    "0 0 20px rgba(255,255,255,0.8)",
                    "0 0 0px rgba(255,255,255,0)",
                  ],
                }}
                transition={{ duration: 1.5 }}
                onAnimationComplete={() => setAnimationStep(2)}
              >
                {fullName}
              </motion.h1>
            </>
          )}

          {/* Step 3: Show "Hello, I'm your creative designer" */}
          {animationStep === 2 && (
            <div className="text-center">
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl mb-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {designerText.split(" ").map((word, index) => (
                  <span key={index} className="inline-block mx-1">
                    {word === "designer" ? <span className={colors[colorIndex]}>{word}</span> : word}
                  </span>
                ))}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <Button
                  size="lg"
                  className="bg-lavender hover:bg-lavender/80 text-white text-lg px-8 py-6"
                  onClick={handleEnter}
                >
                  Enter My World
                </Button>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
