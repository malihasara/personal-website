"use client"

import { useEffect, useRef } from "react"

export function Y2kBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      const scrollY = window.scrollY
      const els = containerRef.current.querySelectorAll<HTMLElement>("[data-parallax]")
      els.forEach((el) => {
        const speed = parseFloat(el.dataset.parallax || "0.02")
        el.style.transform = `translateY(${scrollY * speed}px)`
      })
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Scan-line texture */}
      <div className="y2k-scanlines absolute inset-0" />

      {/* Gloss overlay */}
      <div className="y2k-gloss absolute inset-0" />

      {/* Decorative spiral -- top left */}
      <svg
        data-parallax="0.03"
        className="absolute -top-20 -left-20"
        style={{ opacity: "var(--y2k-motif-opacity, 1)" }}
        width="500"
        height="500"
        viewBox="0 0 500 500"
        fill="none"
      >
        <circle cx="250" cy="250" r="200" stroke="var(--primary)" strokeWidth="0.5" strokeOpacity="0.08" />
        <circle cx="250" cy="250" r="160" stroke="var(--primary)" strokeWidth="0.5" strokeOpacity="0.08" />
        <circle cx="250" cy="250" r="120" stroke="var(--primary)" strokeWidth="0.5" strokeOpacity="0.08" />
        <circle cx="250" cy="250" r="80" stroke="var(--primary)" strokeWidth="0.5" strokeOpacity="0.08" />
        <circle cx="250" cy="250" r="40" stroke="var(--primary)" strokeWidth="0.5" strokeOpacity="0.08" />
        <path
          d="M250 250 C250 200, 300 180, 320 220 C340 260, 300 310, 250 300 C200 290, 180 240, 210 210 C240 180, 290 190, 280 240 C270 290, 220 280, 230 250"
          stroke="var(--accent)"
          strokeWidth="0.8"
          strokeOpacity="0.06"
          style={{ animation: "y2k-spin-slow 120s linear infinite" }}
        />
      </svg>

      {/* Ornamental curves -- top right */}
      <svg
        data-parallax="-0.02"
        className="absolute top-40 -right-16"
        width="400"
        height="400"
        viewBox="0 0 400 400"
        fill="none"
      >
        <path
          d="M50 350 Q100 100, 200 200 T350 50"
          stroke="var(--primary)"
          strokeWidth="0.8"
          strokeOpacity="0.06"
        />
        <path
          d="M80 380 Q140 120, 220 230 T380 80"
          stroke="var(--accent)"
          strokeWidth="0.5"
          strokeOpacity="0.05"
        />
        <circle cx="200" cy="200" r="80" stroke="var(--primary)" strokeWidth="0.4" strokeOpacity="0.05" strokeDasharray="4 8" />
        <circle cx="200" cy="200" r="120" stroke="var(--primary)" strokeWidth="0.3" strokeOpacity="0.04" strokeDasharray="2 12" />
      </svg>

      {/* Floral vector motif -- center left */}
      <svg
        data-parallax="0.04"
        className="absolute top-[55%] -left-10"
        width="350"
        height="350"
        viewBox="0 0 350 350"
        fill="none"
        style={{ animation: "y2k-pulse 12s ease-in-out infinite" }}
      >
        <ellipse cx="175" cy="100" rx="25" ry="60" stroke="var(--primary)" strokeWidth="0.6" strokeOpacity="0.06" transform="rotate(0 175 175)" />
        <ellipse cx="175" cy="100" rx="25" ry="60" stroke="var(--primary)" strokeWidth="0.6" strokeOpacity="0.06" transform="rotate(45 175 175)" />
        <ellipse cx="175" cy="100" rx="25" ry="60" stroke="var(--primary)" strokeWidth="0.6" strokeOpacity="0.06" transform="rotate(90 175 175)" />
        <ellipse cx="175" cy="100" rx="25" ry="60" stroke="var(--primary)" strokeWidth="0.6" strokeOpacity="0.06" transform="rotate(135 175 175)" />
        <ellipse cx="175" cy="100" rx="25" ry="60" stroke="var(--accent)" strokeWidth="0.6" strokeOpacity="0.05" transform="rotate(180 175 175)" />
        <ellipse cx="175" cy="100" rx="25" ry="60" stroke="var(--accent)" strokeWidth="0.6" strokeOpacity="0.05" transform="rotate(225 175 175)" />
        <ellipse cx="175" cy="100" rx="25" ry="60" stroke="var(--accent)" strokeWidth="0.6" strokeOpacity="0.05" transform="rotate(270 175 175)" />
        <ellipse cx="175" cy="100" rx="25" ry="60" stroke="var(--accent)" strokeWidth="0.6" strokeOpacity="0.05" transform="rotate(315 175 175)" />
        <circle cx="175" cy="175" r="15" stroke="var(--primary)" strokeWidth="0.8" strokeOpacity="0.07" />
      </svg>

      {/* Chrome circle cluster -- bottom right */}
      <svg
        data-parallax="-0.025"
        className="absolute bottom-20 right-10"
        width="300"
        height="300"
        viewBox="0 0 300 300"
        fill="none"
        style={{ animation: "y2k-drift 25s ease-in-out infinite" }}
      >
        <circle cx="150" cy="150" r="130" stroke="var(--primary)" strokeWidth="0.5" strokeOpacity="0.06" />
        <circle cx="150" cy="150" r="100" stroke="var(--primary)" strokeWidth="0.4" strokeOpacity="0.05" />
        <circle cx="150" cy="150" r="70" stroke="var(--accent)" strokeWidth="0.6" strokeOpacity="0.06" />
        <circle cx="100" cy="100" r="40" stroke="var(--primary)" strokeWidth="0.3" strokeOpacity="0.04" strokeDasharray="3 6" />
        <circle cx="200" cy="200" r="35" stroke="var(--accent)" strokeWidth="0.3" strokeOpacity="0.04" strokeDasharray="3 6" />
        <path d="M80 80 Q150 40, 220 80" stroke="var(--primary)" strokeWidth="0.8" strokeOpacity="0.06" fill="none" />
        <path d="M60 120 Q150 70, 240 120" stroke="var(--accent)" strokeWidth="0.5" strokeOpacity="0.05" fill="none" />
      </svg>

      {/* Small ornamental swirl -- mid right */}
      <svg
        data-parallax="0.015"
        className="absolute top-[30%] right-[5%]"
        width="200"
        height="200"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path
          d="M100 100 C100 60, 140 40, 160 80 C180 120, 140 160, 100 140 C60 120, 60 60, 100 60 C130 60, 150 90, 130 110"
          stroke="var(--primary)"
          strokeWidth="0.7"
          strokeOpacity="0.05"
        />
      </svg>

      {/* Radial glow -- centered */}
      <div
        className="absolute inset-0"
        style={{
          background:
            `radial-gradient(ellipse 60% 50% at 50% 40%, var(--y2k-glow) 0%, transparent 70%)`,
        }}
      />
    </div>
  )
}
