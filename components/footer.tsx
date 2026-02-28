import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-sm text-muted-foreground">
          {"© 2026 Maliha Sara. All rights reserved."}
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/malihasara"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-hover text-muted-foreground hover:text-foreground"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/maliha-sara"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-hover text-muted-foreground hover:text-foreground"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:smaliha275@gmail.com"
            className="icon-hover text-muted-foreground hover:text-foreground"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
