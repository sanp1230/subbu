"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

type Element = {
  id: number
  x: number
  y: number
  size: number
  rotation: number
  color: string
  delay: number
  duration: number
}

const colors = ["hsl(var(--lavender) / 0.3)", "hsl(var(--neon-pink) / 0.3)", "hsl(var(--electric-blue) / 0.3)"]

export default function BackgroundElements() {
  const [elements, setElements] = useState<Element[]>([])

  useEffect(() => {
    const generateElements = () => {
      const newElements: Element[] = []
      const count = window.innerWidth < 768 ? 5 : 10

      for (let i = 0; i < count; i++) {
        newElements.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 100 + 50,
          rotation: Math.random() * 360,
          color: colors[Math.floor(Math.random() * colors.length)],
          delay: Math.random() * 2,
          duration: Math.random() * 10 + 15,
        })
      }

      setElements(newElements)
    }

    generateElements()

    window.addEventListener("resize", generateElements)
    return () => window.removeEventListener("resize", generateElements)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute rounded-full opacity-30 blur-xl"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: element.size,
            height: element.size,
            backgroundColor: element.color,
            rotate: element.rotation,
          }}
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -30, 30, 0],
            rotate: [element.rotation, element.rotation + 180, element.rotation + 360],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
