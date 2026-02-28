"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem("theme")
    const isCurrentlyDark = !document.documentElement.classList.contains("light")
    setIsDark(stored ? stored !== "light" : isCurrentlyDark)
  }, [])

  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)
    if (next) {
      document.documentElement.classList.remove("light")
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      document.documentElement.classList.add("light")
      localStorage.setItem("theme", "light")
    }
  }

  if (!mounted) {
    return (
      <button
        className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground"
        aria-label="Toggle theme"
      >
        <Moon size={16} />
      </button>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="icon-hover flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  )
}
