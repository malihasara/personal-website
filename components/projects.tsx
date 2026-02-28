import { SectionHeading } from "./about"
import { Radio, Gamepad2, Terminal, Droplets, Car } from "lucide-react"

const projects = [
  {
    title: "NYU Wireless -- 6G Subteam",
    description:
      "Contributing to next-generation wireless research. Working on SOLT calibration kit development, ADS simulations, and RF modeling for sub-THz communication systems.",
    tags: ["ADS", "RF Modeling", "SOLT Calibration", "6G Research"],
    icon: <Radio size={22} />,
  },
  {
    title: "2048 Replica",
    description:
      "A fully functional browser-based recreation of the classic 2048 puzzle game with custom UI styling, animations, and local storage for high score persistence.",
    tags: ["JavaScript", "CSS", "Game Logic", "UI Design"],
    icon: <Gamepad2 size={22} />,
  },
  {
    title: "Snake Game",
    description:
      "A Python implementation of the classic Snake game using object-oriented programming principles, featuring modular class design and clean game loop architecture.",
    tags: ["Python", "OOP", "Game Development"],
    icon: <Terminal size={22} />,
  },
  {
    title: "Automated Retainer Cleaning System",
    description:
      "An Arduino-powered automated cleaning device using ultrasonic sensors, water flow control, and WiFi connectivity for remote monitoring and scheduling.",
    tags: ["Arduino", "Sensors", "WiFi", "Embedded Systems"],
    icon: <Droplets size={22} />,
  },
  {
    title: "Remote Control Car",
    description:
      "A custom-built RC car combining Arduino motor control with Raspberry Pi for video streaming and remote navigation. Chassis designed with Fusion 360 CAD.",
    tags: ["Arduino", "Raspberry Pi", "CAD", "Embedded"],
    icon: <Car size={22} />,
  },
]

export function Projects() {
  return (
    <section id="projects" className="relative px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Projects" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="glass-card glow-border-hover card-hover group flex flex-col rounded-xl p-6"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/15 text-primary transition-colors group-hover:bg-primary/25">
                {project.icon}
              </div>

              <h3 className="mb-2 text-base font-semibold text-foreground">
                {project.title}
              </h3>

              <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
