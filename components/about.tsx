import Image from "next/image"
import { GraduationCap, Radio, Cpu, FileText } from "lucide-react"

export function About() {
  return (
    <section id="about" className="relative px-6 pt-8 pb-24 lg:pt-12 lg:pb-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="About Me" />

        <div className="grid items-center gap-12 lg:grid-cols-5">
          {/* Profile photo */}
          <div className="flex justify-center lg:col-span-2">
            <div className="glass-card glow-border card-hover relative h-72 w-72 overflow-hidden rounded-2xl sm:h-80 sm:w-80">
              <Image
                src="/profile.jpg"
                alt="Portrait of Maliha Sara"
                fill
                sizes="(min-width: 1024px) 20rem, 18rem"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Bio */}
          <div className="lg:col-span-3">
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              {"I'm"} an Electrical and Computer Engineering student at New York University,
              minoring in Mathematics and Management. My academic journey is focused on
              RF systems, wireless engineering, and digital electronics.
            </p>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              I am passionate about the intersection of hardware and software,
              building and optimizing real-world systems that push the boundaries
              of modern communication and sensing technologies.
            </p>

            <div className="grid gap-4 sm:grid-cols-4">
              <StatCard icon={<GraduationCap size={20} />} label="GPA" value="3.7" />
              <StatCard icon={<Radio size={20} />} label="Focus" value="RF Systems" />
              <StatCard icon={<Cpu size={20} />} label="Grad" value="May 2028" />
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card card-hover flex flex-col items-center rounded-xl px-4 py-3 text-center"
              >
                <div className="mb-1 flex items-center justify-center text-primary">
                  <FileText size={20} />
                </div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Resume
                </p>
                <p className="text-base font-semibold text-foreground">View Resume</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function StatCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="glass-card card-hover rounded-xl px-4 py-3 text-center">
      <div className="mb-1 flex items-center justify-center text-primary">{icon}</div>
      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      <p className="text-base font-semibold text-foreground">{value}</p>
    </div>
  )
}

export function SectionHeading({ title }: { title: string }) {
  return (
    <div className="mb-12 flex items-center gap-4">
      <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>
      <div className="h-px flex-1 bg-border" />
    </div>
  )
}
