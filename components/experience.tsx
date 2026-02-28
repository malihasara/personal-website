import { SectionHeading } from "./about"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    role: "SCADA System Analyst Intern",
    company: "Consolidated Edison",
    period: "2024 -- Present",
    description:
      "Analyzing SCADA infrastructure to support distribution grid operations. Working with PI Vision, data integration tools, and control systems to improve real-time monitoring and operational efficiency.",
    tags: ["SCADA", "PI Vision", "Data Analysis", "Power Systems"],
  },
  {
    role: "EG-1004 Teaching Assistant",
    company: "NYU Tandon School of Engineering",
    period: "2025 -- Present",
    description:
      "Guiding first-year engineering students through the introductory design and analysis course. Facilitating lab sessions on CAD, Arduino, Excel, and engineering problem-solving methodologies.",
    tags: ["Teaching", "Arduino", "CAD", "Engineering Design"],
  },
  {
    role: "Distribution Engineering Aide Intern",
    company: "Consolidated Edison",
    period: "2023 -- 2024",
    description:
      "Supported distribution engineering projects involving load analysis, circuit mapping, and infrastructure assessments for the NYC power grid.",
    tags: ["Power Distribution", "Load Analysis", "Circuit Mapping"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Work Experience" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 left-6 w-px bg-border md:left-1/2 md:-translate-x-px" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.role}
                className={`relative flex flex-col gap-4 pl-16 md:w-1/2 md:pl-0 ${
                  index % 2 === 0 ? "md:pr-12 md:self-start" : "md:pl-12 md:self-end"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-4 top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-primary bg-background md:left-auto ${
                    index % 2 === 0 ? "md:-right-2.5" : "md:-left-2.5"
                  }`}
                >
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>

                <div className="glass-card glow-border-hover card-hover rounded-xl p-6">
                  <div className="mb-3 flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/15">
                      <Briefcase size={18} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-muted-foreground">{exp.company}</p>
                    </div>
                  </div>

                  <p className="mb-1 text-xs font-medium font-mono uppercase tracking-wider text-primary/80">
                    {exp.period}
                  </p>

                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
