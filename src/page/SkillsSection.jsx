import { LuPencil, LuDatabase, LuAppWindow, LuTerminal, LuCpu, LuGlobe } from 'react-icons/lu'

const SkillBadge = ({ name }) => (
  <span className="tag-sketch hand-drawn-text text-xs px-3 py-1.5">
    {name}
  </span>
)

const SkillCard = ({ title, icon, skills, index }) => {
  const Icon = icon
  return (
    <div className="sketch-card sketch-border p-6 relative group animate-fade-up stagger-list" style={{ borderRadius: '12px 8px 16px 4px / 8px 16px 4px 12px', animationDelay: `${index * 0.1}s` }}>
      <div className="absolute -top-2 -right-2 w-2 h-2 border-2 rounded-full opacity-30" style={{ borderColor: 'var(--fg-subtle)' }} />
      <div className="absolute -bottom-2 -left-2 w-3 h-3 border-2 border-dashed rounded-full opacity-20" style={{ borderColor: 'var(--fg-subtle)' }} />

      <div className="flex items-center gap-4 mb-4">
        <div className="flex h-12 w-12 items-center justify-center sketch-border">
          <Icon size={24} style={{ color: 'var(--fg-muted)' }} />
        </div>
        <h3 className="text-base md:text-lg font-bold hand-drawn-text" style={{ color: 'var(--fg)' }}>{title}</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillBadge key={skill} name={skill} />
        ))}
      </div>

      {/* Hover glow effect */}
      <div className="pointer-events-none absolute -right-4 -top-4 h-20 w-20 rounded-full blur-2xl opacity-0 transition-opacity group-hover:opacity-100" style={{ backgroundColor: 'var(--fg)', opacity: 0.08 }} />
    </div>
  )
}

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: LuAppWindow,
      skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Bootstrap", "Tailwind CSS", "React Bits"],
      index: 0
    },
    {
      title: "Backend",
      icon: LuTerminal,
      skills: ["Node.js", "Express", "NestJS", "REST APIs", "Socket.io"],
      index: 1
    },
    {
      title: "Database",
      icon: LuDatabase,
      skills: ["MongoDB", "MySQL", "MariaDB", "PostgreSQL"],
      index: 2
    },
    {
      title: "DevOps & Tools",
      icon: LuCpu,
      skills: ["Linux", "Docker", "Docker Compose", "Nginx", "Git", "GitHub", "Bash Scripting"],
      index: 3
    },
    {
      title: "Systems & AI",
      icon: LuGlobe,
      skills: ["C", "C++", "OpenRouter API", "System Programming", "Algorithms"],
      index: 4
    },
    {
      title: "Design",
      icon: LuPencil,
      skills: ["Figma", "UI/UX", "Wireframing", "Prototyping"],
      index: 5
    }
  ]

  return (
    <section id="skills" className="relative py-20 px-6">
      {/* Background paper texture - full width */}
      <div className="absolute inset-0 paper-lines opacity-10" aria-hidden="true" />

      {/* Decorative elements - full width positioning */}
      <div className="absolute top-0 right-0 w-40 h-40 border-2 rounded-tr-full opacity-10" style={{ borderColor: 'var(--fg-subtle)' }} />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-2 rounded-bl-full opacity-10" style={{ borderColor: 'var(--fg-subtle)' }} />

      {/* Centered content container */}
      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-12 animate-fade-up stagger-1">
          <div className="section-label mb-6">
            <span>Stack</span>
          </div>
          <h2 className="heading-lg" style={{ color: 'var(--fg)' }}>
            Tool <br />
            <span className="hand-drawn-text text-2xl sm:text-3xl font-normal">Box.</span>
          </h2>
          <p className="text-base max-w-xl leading-relaxed mt-4" style={{ color: 'var(--fg-muted)' }}>
            The modern technologies and creative frameworks I use to bring complex ideas to life across the web.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-list">
          {skillCategories.map((category) => (
            <SkillCard
              key={category.title}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
              index={category.index}
            />
          ))}
        </div>
      </div>

      {/* Divider - full width */}
      <div className="absolute bottom-0 left-0 right-0 mx-auto w-1/2 divider-sketch" />
    </section>
  )
}