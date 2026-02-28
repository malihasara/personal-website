import { ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[85vh] flex-col items-center justify-center px-6 pt-20"
    >
      {/* Subtle grid background */}
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-30" />

      {/* Radial glow overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 50% 45%, var(--y2k-glow) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p className="mb-4 text-sm font-medium tracking-widest uppercase text-muted-foreground">
          Electrical & Computer Engineering
        </p>

        <h1 className="text-gradient mb-6 text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl text-balance">
          Maliha Sara
        </h1>

        <p className="mx-auto mb-4 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          ECE student at NYU specializing in RF Engineering & Digital Electronics.
          Building the future of wireless systems.
        </p>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 animate-bounce text-muted-foreground transition-colors hover:text-foreground"
        aria-label="Scroll to about section"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  )
}
