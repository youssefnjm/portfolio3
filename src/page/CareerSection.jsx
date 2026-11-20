// No hooks needed for static timeline

const TimelineItem = ({ year, title, description, index }) => (
  <div className="animate-fade-up stagger-list" style={{ animationDelay: `${index * 0.15}s` }}>
    <div className="relative pl-8 pb-12 last:pb-0">
      {/* Timeline dot and line */}
      <div className="absolute left-0 top-1 w-4 h-4 rounded-full z-10 sketch-circle" style={{
        backgroundColor: 'var(--paper)',
        borderColor: 'var(--border)',
        borderWidth: '2px',
        borderRadius: '50% 45% 55% 50% / 45% 55% 50% 45%'
      }} />
      <div className="absolute left-1.5 top-5 bottom-0 w-0.5 last:hidden" style={{ backgroundColor: 'var(--border-soft)' }} />

      <div className="sketch-border p-6 relative" style={{ borderRadius: '12px 8px 16px 4px / 8px 16px 4px 12px' }}>
        <div className="tape" />
        <div className="mb-3 flex items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-widest hand-drawn-text" style={{ color: 'var(--fg-subtle)' }}>{year}</span>
        </div>
        <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--fg)' }}>{title}</h3>
        <p className="text-base leading-relaxed" style={{ color: 'var(--fg-muted)' }}>{description}</p>
      </div>
    </div>
  </div>
)

export default function CareerSection() {
  const timelineData = [
    {
      year: "2021 - 2022",
      title: "Baccalauréat - Physical Sciences & Chemistry",
      description: "Completed high school in physical sciences and chemistry at Lycée Abderrahmane Belkorchi, developing discipline and a strong interest in technology and problem-solving."
    },
    {
      year: "2022 - 2024",
      title: "Technicien Spécialisé - Full-Stack Development",
      description: "Learned full-stack development hands-on at Centre de Formation Professionnelle Hassania, building and deploying real-world digital solutions with modern web technologies."
    },
    {
      year: "2024 - Present",
      title: "Student at 1337 Coding School (42 Network)",
      description: "Advancing software engineering through project-based peer learning. Focused on low-level programming, systems logic, C/C++, algorithms, and building high-performance unmanaged code."
    }
  ]

  return (
    <section id="career" className="relative py-20 px-6">
      {/* Background paper texture - full width */}
      <div className="absolute inset-0 paper-lines opacity-10" aria-hidden="true" />

      {/* Decorative elements - full width positioning */}
      <div className="absolute top-20 left-4 w-2 h-2 rounded-full opacity-30 animate-float" style={{ backgroundColor: 'var(--fg-subtle)' }} />
      <div className="absolute bottom-20 right-4 w-3 h-3 border-2 rounded-full opacity-20 animate-float" style={{ borderColor: 'var(--fg-subtle)', animationDelay: '1s' }} />

      {/* Centered content container */}
      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-12 animate-fade-up stagger-1">
          <div className="section-label mb-6">
            <span>Journey</span>
          </div>
          <h2 className="heading-lg text-center" style={{ color: 'var(--fg)' }}>
            My <br />
            <span className="hand-drawn-text text-2xl sm:text-3xl font-normal">Path.</span>
          </h2>
          <p className="text-base max-w-xl leading-relaxed mt-4 mx-auto text-center" style={{ color: 'var(--fg-muted)' }}>
            Tracing my professional timeline from academic foundations to real-world experience and industry milestones.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6 stagger-list">
            {timelineData.map((item, index) => (
              <TimelineItem key={index} {...item} index={index} />
            ))}

            <div className="text-center animate-fade-up stagger-list" style={{ animationDelay: `${timelineData.length * 0.15}s` }}>
              <p className="text-xl font-bold italic hand-drawn-text" style={{ color: 'var(--fg-muted)' }}>
                ...and the journey continues, incha'Allah.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider - full width */}
      <div className="absolute bottom-0 left-0 right-0 mx-auto w-1/2 divider-sketch" />
    </section>
  )
}