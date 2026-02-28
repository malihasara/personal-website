"use client"

import { useState, useEffect } from "react"
import { Menu, X, Github, Linkedin, FileText } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "glass border-border/50 py-2.5"
          : "bg-transparent border-transparent py-3.5"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
        {/* Left: Logo */}
        <a
          href="#home"
          className="text-xl font-bold tracking-tight text-foreground transition-colors hover:text-primary"
        >
          MS
        </a>

        {/* Center: Section links */}
        <ul className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav-link-outlined">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: Icons + Theme toggle */}
        <div className="hidden items-center gap-2.5 lg:flex">
          <a
            href="https://github.com/malihasara"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-hover flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/maliha-sara"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-hover flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-hover flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
            aria-label="Resume"
          >
            <FileText size={16} />
          </a>

          <div className="mx-0.5 h-5 w-px bg-border/50" />

          <ThemeToggle />
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-foreground lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="glass mt-2 mx-4 rounded-xl p-6 lg:hidden">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="nav-link-outlined inline-block"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex items-center gap-3 border-t border-border/30 pt-5">
            <a
              href="https://github.com/malihasara"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-hover flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/maliha-sara"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-hover flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-hover flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
              aria-label="Resume"
            >
              <FileText size={16} />
            </a>

            <div className="ml-auto">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
