import { SectionHeading } from "./about"
import { Code, Cpu, Wrench } from "lucide-react"

const skillCategories = [
  {
    title: "Languages",
    icon: <Code size={20} />,
    skills: ["Python", "C/C++", "Java", "JavaScript", "Verilog"],
  },
  {
    title: "Hardware",
    icon: <Cpu size={20} />,
    skills: ["ADS", "HFSS", "Arduino", "Circuit Design", "Oscilloscopes"],
  },
  {
    title: "Tools & Software",
    icon: <Wrench size={20} />,
    skills: ["Git/GitHub", "SQL", "Fusion 360", "PI Vision", "Excel", "Power BI"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Skills" />

        <div className="grid gap-6 md:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="glass-card glow-border-hover card-hover rounded-xl p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  {category.icon}
                </div>
                <h3 className="text-base font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-border bg-secondary/50 px-3 py-1.5 text-sm font-medium text-secondary-foreground transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                  >
                    {skill}
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
