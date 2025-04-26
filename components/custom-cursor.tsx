"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Paintbrush, Pen, PenTool } from "lucide-react"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [cursorVariant, setCursorVariant] = useState<"default" | "text" | "button">("default")
  const [cursorTool, setCursorTool] = useState<"brush" | "pen" | "pentool">("brush")
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorTool((prev) => {
        if (prev === "brush") return "pen"
        if (prev === "pen") return "pentool"
        return "brush"
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      // Rotate cursor slightly based on mouse movement
      const newRotation = (e.movementX + e.movementY) * 0.5
      setRotation((prev) => prev + newRotation * 0.1)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      if (target.tagName === "BUTTON" || target.tagName === "A" || target.classList.contains("clickable")) {
        setIsHovering(true)
        setCursorVariant("button")
      } else if (
        target.tagName === "P" ||
        target.tagName === "H1" ||
        target.tagName === "H2" ||
        target.tagName === "H3" ||
        target.tagName === "SPAN" ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA"
      ) {
        setIsHovering(true)
        setCursorVariant("text")
      } else {
        setIsHovering(false)
        setCursorVariant("default")
      }
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseover", handleMouseOver)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseover", handleMouseOver)
    }
  }, [])

  const cursorSize = cursorVariant === "default" ? 24 : cursorVariant === "button" ? 40 : 30

  const cursorColor =
    cursorVariant === "default"
      ? "hsl(var(--primary))"
      : cursorVariant === "button"
        ? "hsl(var(--secondary))"
        : "hsl(var(--accent))"

  const getCursorIcon = () => {
    switch (cursorTool) {
      case "brush":
        return <Paintbrush className="w-full h-full" />
      case "pen":
        return <Pen className="w-full h-full" />
      case "pentool":
        return <PenTool className="w-full h-full" />
    }
  }

  return (
    <motion.div
      className="custom-cursor"
      style={{
        left: position.x,
        top: position.y,
        color: cursorColor,
      }}
      animate={{
        x: position.x - cursorSize / 2,
        y: position.y - cursorSize / 2,
        scale: isHovering ? 1.2 : 1,
        rotate: rotation,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5,
      }}
    >
      <motion.div
        style={{
          width: cursorSize,
          height: cursorSize,
        }}
        animate={{
          rotate: isHovering ? rotation * 2 : rotation,
        }}
      >
        {getCursorIcon()}
      </motion.div>
    </motion.div>
  )
}
