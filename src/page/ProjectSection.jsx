import ProjectList from "../data/ProjectList.js"
import { LuExternalLink, LuGithub, LuServer, LuGlobe, LuLock, LuTerminal, LuCode, LuShoppingCart, LuZap, LuUsers, LuGamepad2 } from 'react-icons/lu'

function getProjectIcon(name) {
  const iconMap = {
    "Clockasion E-Commerce": LuShoppingCart,
    "IdeaPulse": LuZap,
    "DarNet": LuUsers,
    "World Cup 2026 Hub": LuGlobe,
    "Online Tic Tac Toe": LuGamepad2,
    "Inception": LuServer,
    "Born2beroot": LuLock,
    "Minishell": LuTerminal,
    "Portfolio v3": LuCode,
  }
  return iconMap[name] || LuCode
}

function ProjectCard({ project, index, variant }) {
  const Icon = getProjectIcon(project.name)
  const delay = index * 0.08

  const cardVariant = variant || (index === 0 ? 'featured' : index === 1 ? 'showcase' : index < 4 ? 'detailed' : 'compact')

  return (
    <li className="animate-fade-up stagger-list" style={{ animationDelay: `${delay}s` }}>
      {cardVariant === 'featured' && (
        <article className="sketch-border relative overflow-hidden group hover:shadow-[12px_12px_0px_var(--shadow),_24px_24px_0px_var(--shadow-strong)] transition-all duration-500"
          style={{ borderRadius: '24px 12px 28px 12px / 12px 28px 12px 24px' }}
        >
          {/* Large featured card - horizontal layout */}
          <div className="flex flex-col lg:flex-row relative">
            {/* Left: Visual illustration area */}
            <div className="relative lg:w-1/2 min-h-[320px] lg:min-h-[400px] paper-lines flex items-center justify-center p-8"
              style={{ borderRadius: '22px 10px 26px 10px / 10px 26px 10px 22px 0 0 0 0' }}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="relative z-10 text-center">
                  <Icon style={{ color: 'var(--fg-subtle)', opacity: 0.5 }} size={100} />
                  <div className="absolute -top-8 -right-8 w-20 h-20 border-2 rounded-full opacity-20 animate-float" style={{ borderColor: 'var(--fg-subtle)', animationDelay: '0s' }} />
                  <div className="absolute bottom-8 left-8 w-12 h-12 border-2 border-dashed rounded-full opacity-15 animate-float" style={{ borderColor: 'var(--fg-subtle)', animationDelay: '1s' }} />
                  <div className="absolute top-1/2 -left-10 w-3 h-3 rounded-full opacity-30 animate-float" style={{ backgroundColor: 'var(--fg-subtle)', animationDelay: '0.5s' }} />
                  <div className="absolute -top-4 right-1/2 w-4 h-4 border rotate-45 opacity-20 animate-float" style={{ borderColor: 'var(--fg-subtle)', animationDelay: '1.5s' }} />
                  <div className="absolute bottom-1/2 right-10 w-2 h-2 rounded-full opacity-40 animate-float" style={{ backgroundColor: 'var(--fg-subtle)', animationDelay: '2s' }} />
                </div>
              </div>

              {/* Corner decorations */}
              <div className="absolute top-4 left-4 w-16 h-16 border-2 rounded-tl-[20px] rounded-bl-[20px]" style={{ borderColor: 'var(--fg-subtle)' }} />
              <div className="absolute top-4 right-4 w-16 h-16 border-2 rounded-tr-[20px] rounded-br-[20px]" style={{ borderColor: 'var(--fg-subtle)' }} />
              <div className="absolute bottom-4 left-4 w-16 h-16 border-2 rounded-bl-[20px] rounded-br-[20px]" style={{ borderColor: 'var(--fg-subtle)' }} />
              <div className="absolute bottom-4 right-4 w-16 h-16 border-2 rounded-br-[20px] rounded-tr-[20px]" style={{ borderColor: 'var(--fg-subtle)' }} />

              {/* Tape - using CSS variables */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-10 border rotate-1 rounded-sm shadow-sm tape" style={{
                backgroundColor: 'var(--paper-alt)',
                borderColor: 'var(--fg-subtle)',
                opacity: 0.8
              }} />
            </div>

            {/* Right: Content area */}
            <div className="relative lg:w-1/2 p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono hand-drawn-text" style={{ color: 'var(--fg-muted)' }}>01</span>
                <span className="tag-sketch hand-drawn-text text-sm" style={{
                  backgroundColor: 'var(--accent)',
                  color: 'var(--bg)',
                  borderColor: 'var(--accent)'
                }}>Featured</span>
              </div>

              <h3 className="text-3xl lg:text-4xl font-bold hand-drawn-text tracking-tight leading-tight mb-4" style={{ color: 'var(--fg)' }}>
                {project.name}
              </h3>

              <p className="text-lg leading-relaxed mb-6 flex-1" style={{ color: 'var(--fg-muted)' }}>
                {project.desc}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2.5 mb-8 stagger-list">
                {project.tech?.map((tech, i) => (
                  <span key={tech} className="tag-sketch hand-drawn-text text-sm animate-fade-up px-3 py-1.5" style={{
                    animationDelay: `${i * 0.05}s`,
                    backgroundColor: 'var(--tag-bg)',
                    borderColor: 'var(--tag-border)',
                    color: 'var(--tag-text)'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4" style={{ borderTopColor: 'var(--fg-subtle)', borderTopWidth: '1px', borderTopStyle: 'solid' }}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-sketch group hand-drawn-text flex items-center gap-2"
                  style={{ borderRadius: '12px 8px 16px 4px / 8px 16px 4px 12px' }}
                >
                  <span className="relative z-10">View Live</span>
                  <span className="absolute inset-0 bg-current transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" style={{ zIndex: -1, borderRadius: '10px 6px 14px 2px / 6px 14px 2px 10px' }} />
                  <LuExternalLink className="relative z-10 transition-transform group-hover:translate-x-1" size={16} />
                </a>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-sketch-secondary group hand-drawn-text flex items-center gap-2"
                    style={{ borderRadius: '12px 8px 16px 4px / 8px 16px 4px 12px' }}
                  >
                    <span className="relative z-10 flex items-center gap-2">Code <LuGithub size={16} /></span>
                    <span className="absolute inset-0 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" style={{
                      zIndex: -1,
                      borderRadius: '10px 6px 14px 2px / 6px 14px 2px 10px',
                      backgroundColor: 'var(--paper-alt)'
                    }} />
                  </a>
                )}
              </div>
            </div>

            {/* Type badge overlay */}
            <div className="absolute bottom-6 left-6 right-6 lg:left-auto lg:right-6 lg:bottom-6 lg:w-48">
              <span className="tag-sketch hand-drawn-text text-sm block text-center" style={{
                backgroundColor: 'var(--paper)',
                borderColor: 'var(--fg-subtle)',
                color: 'var(--fg-muted)'
              }}>
                {project.type}
              </span>
            </div>

            {/* Floating bracket decorations */}
            <div className="absolute -top-4 -left-4 text-4xl hand-drawn-text opacity-30 animate-wiggle" style={{ color: 'var(--fg)' }}>&#123;</div>
            <div className="absolute -top-4 -right-4 text-4xl hand-drawn-text opacity-30 animate-wiggle" style={{ color: 'var(--fg)', animationDelay: '0.3s' }}>&#125;</div>
            <div className="absolute bottom-4 -left-4 text-4xl hand-drawn-text opacity-30 animate-wiggle" style={{ color: 'var(--fg)', animationDelay: '0.6s' }}>&#59;</div>
            <div className="absolute bottom-4 -right-4 text-4xl hand-drawn-text opacity-30 animate-wiggle" style={{ color: 'var(--fg)', animationDelay: '0.9s' }}>&#123;</div>
          </div>
        </article>
      )}

      {cardVariant === 'showcase' && (
        <article className="sketch-border relative overflow-hidden group hover:shadow-[8px_8px_0px_var(--shadow),_16px_16px_0px_var(--shadow-strong)] transition-all duration-300"
          style={{ borderRadius: '20px 10px 24px 10px / 10px 24px 10px 20px' }}
        >
          {/* Showcase card - vertical with large illustration on top */}
          <div className="relative">
            {/* Illustration header */}
            <div className="relative paper-lines aspect-video flex items-center justify-center p-6"
              style={{ borderRadius: '18px 8px 0 0 / 8px 18px 0 0' }}
            >
              <div className="relative">
                <Icon style={{ color: 'var(--fg-subtle)', opacity: 0.5 }} size={72} />
                <div className="absolute -top-4 -right-4 w-12 h-12 border-2 rounded-full opacity-20 animate-float" style={{ borderColor: 'var(--fg-subtle)', animationDelay: `${index * 0.2}s` }} />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-2 border-dashed rounded-full opacity-15 animate-float" style={{ borderColor: 'var(--fg-subtle)', animationDelay: `${1 + index * 0.2}s` }} />
                <div className="absolute top-1/2 -left-6 w-2 h-2 rounded-full opacity-30 animate-float" style={{ backgroundColor: 'var(--fg-subtle)', animationDelay: `${0.5 + index * 0.2}s` }} />
                <div className="absolute -top-2 right-1/2 w-3 h-3 border rotate-45 opacity-20 animate-float" style={{ borderColor: 'var(--fg-subtle)', animationDelay: `${1.5 + index * 0.2}s` }} />
              </div>

              {/* Corner brackets on illustration */}
              <div className="absolute top-3 left-3 w-12 h-12 border-t-2 border-l-2" style={{ borderColor: 'var(--fg-subtle)' }} />
              <div className="absolute top-3 right-3 w-12 h-12 border-t-2 border-r-2" style={{ borderColor: 'var(--fg-subtle)' }} />
              <div className="absolute bottom-3 left-3 w-12 h-12 border-b-2 border-l-2" style={{ borderColor: 'var(--fg-subtle)' }} />
              <div className="absolute bottom-3 right-3 w-12 h-12 border-b-2 border-r-2" style={{ borderColor: 'var(--fg-subtle)' }} />

              {/* Type badge on illustration */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <span className="tag-sketch hand-drawn-text text-xs" style={{
                  backgroundColor: 'var(--paper)',
                  borderColor: 'var(--fg-subtle)',
                  color: 'var(--fg-muted)'
                }}>
                  {project.type}
                </span>
              </div>

              {/* Tape */}
              <div className="absolute top-3 right-3 w-14 h-7 border rotate-2 rounded-sm shadow-sm tape" style={{
                backgroundColor: 'var(--paper-alt)',
                borderColor: 'var(--fg-subtle)',
                opacity: 0.8
              }} />
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono hand-drawn-text" style={{ color: 'var(--fg-muted)' }}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 flex items-center justify-center w-9 h-9 sketch-border group/link transition-all duration-300"
                  style={{ borderRadius: '8px 4px 8px 4px / 4px 8px 4px 8px' }}
                  aria-label={`View ${project.name}`}
                >
                  <LuExternalLink className="transition-colors" size={16} style={{ color: 'var(--fg-muted)' }} />
                </a>
              </div>

              <h3 className="text-xl lg:text-2xl font-bold hand-drawn-text tracking-tight mb-3" style={{ color: 'var(--fg)' }}>
                {project.name}
              </h3>

              <p className="leading-relaxed mb-4 line-clamp-3" style={{ color: 'var(--fg-muted)' }}>
                {project.desc}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 stagger-list mb-4">
                {project.tech?.map((tech, i) => (
                  <span key={tech} className="tag-sketch hand-drawn-text text-xs animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                    {tech}
                  </span>
                ))}
              </div>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium hand-drawn-text group transition-colors" style={{ color: 'var(--fg-muted)' }}
                >
                  <LuGithub className="transition-transform group-hover:scale-110" size={14} />
                  View Code
                </a>
              )}
            </div>

            {/* Bottom accent */}
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: 'var(--fg)' }} />
          </div>
        </article>
      )}

      {cardVariant === 'detailed' && (
        <article className="sketch-border relative overflow-hidden group hover:shadow-[6px_6px_0px_var(--shadow),_12px_12px_0px_var(--shadow-strong)] transition-all duration-300"
          style={{ borderRadius: '16px 8px 20px 8px / 8px 20px 8px 16px' }}
        >
          {/* Detailed card - side by side on desktop */}
          <div className="flex flex-col lg:flex-row relative">
            {/* Left: Mini illustration */}
            <div className="relative lg:w-36 lg:flex-shrink-0 paper-lines flex items-center justify-center p-4"
              style={{ borderRadius: '14px 4px 0 0 / 4px 14px 0 0 0 0 0 0' }}
            >
              <Icon style={{ color: 'var(--fg-muted)' }} size={36} />
              <div className="absolute -top-2 -right-2 w-6 h-6 border rounded-full opacity-20 animate-float" style={{ borderColor: 'var(--fg-subtle)', animationDelay: `${index * 0.3}s` }} />
              <div className="absolute bottom-2 left-2 w-4 h-4 border border-dashed rounded-full opacity-15 animate-float" style={{ borderColor: 'var(--fg-subtle)', animationDelay: `${1 + index * 0.3}s` }} />
            </div>

            {/* Right: Content */}
            <div className="relative flex-1 p-5 lg:p-6 flex flex-col justify-center min-h-[160px]">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono hand-drawn-text" style={{ color: 'var(--fg-muted)' }}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="tag-sketch hand-drawn-text text-xs" style={{
                    backgroundColor: 'var(--paper)',
                    borderColor: 'var(--fg-subtle)',
                    color: 'var(--fg-muted)'
                  }}>
                    {project.type}
                  </span>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 flex items-center justify-center w-8 h-8 sketch-border group/link transition-all duration-300"
                  style={{ borderRadius: '6px 4px 6px 4px / 4px 6px 4px 6px' }}
                  aria-label={`View ${project.name}`}
                >
                  <LuExternalLink className="transition-colors" size={14} style={{ color: 'var(--fg-muted)' }} />
                </a>
              </div>

              <h3 className="text-lg lg:text-xl font-bold hand-drawn-text tracking-tight mb-2" style={{ color: 'var(--fg)' }}>
                {project.name}
              </h3>

              <p className="text-sm leading-relaxed mb-3 line-clamp-2 flex-1" style={{ color: 'var(--fg-muted)' }}>
                {project.desc}
              </p>

              {/* Tech tags - compact */}
              <div className="flex flex-wrap gap-1.5 stagger-list">
                {project.tech?.slice(0, 5).map((tech, i) => (
                  <span key={tech} className="tag-sketch hand-drawn-text text-xs animate-fade-up" style={{ animationDelay: `${i * 0.03}s` }}>
                    {tech}
                  </span>
                ))}
                {project.tech && project.tech.length > 5 && (
                  <span className="tag-sketch hand-drawn-text text-xs" style={{ color: 'var(--fg-subtle)' }}>
                    +{project.tech.length - 5} more
                  </span>
                )}
              </div>
            </div>

            {/* Decorative line separator */}
            <div className="hidden lg:block absolute left-36 top-8 bottom-8 w-px" style={{ backgroundColor: 'var(--fg-subtle)' }} />
          </div>

          {/* Bottom accent */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: 'var(--fg)' }} />
        </article>
      )}

      {cardVariant === 'compact' && (
        <article className="sketch-border relative overflow-hidden group hover:shadow-[4px_4px_0px_var(--shadow),_8px_8px_0px_var(--shadow-strong)] transition-all duration-300"
          style={{ borderRadius: '14px 8px 16px 8px / 8px 16px 8px 14px' }}
        >
          {/* Compact card - minimal */}
          <div className="p-4 lg:p-5 relative">
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono hand-drawn-text" style={{ color: 'var(--fg-muted)' }}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <Icon style={{ color: 'var(--fg-muted)' }} size={18} />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="tag-sketch hand-drawn-text text-xs" style={{
                  backgroundColor: 'var(--paper)',
                  borderColor: 'var(--fg-subtle)',
                  color: 'var(--fg-muted)'
                }}>
                  {project.type}
                </span>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-7 h-7 sketch-border group/link transition-all duration-300"
                  style={{ borderRadius: '6px 3px 6px 3px / 3px 6px 3px 6px' }}
                  aria-label={`View ${project.name}`}
                >
                  <LuExternalLink className="transition-colors" size={12} style={{ color: 'var(--fg-muted)' }} />
                </a>
              </div>
            </div>

            <h3 className="text-base lg:text-lg font-bold hand-drawn-text tracking-tight mb-2" style={{ color: 'var(--fg)' }}>
              {project.name}
            </h3>

            <p className="text-sm leading-relaxed mb-3 line-clamp-2" style={{ color: 'var(--fg-muted)' }}>
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-1.5 stagger-list">
              {project.tech?.slice(0, 4).map((tech, i) => (
                <span key={tech} className="tag-sketch hand-drawn-text text-xs animate-fade-up" style={{ animationDelay: `${i * 0.03}s` }}>
                  {tech}
                </span>
              ))}
            </div>

            {/* GitHub link */}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium hand-drawn-text group transition-colors mt-3" style={{ color: 'var(--fg-muted)' }}
              >
                <LuGithub className="transition-transform group-hover:scale-110" size={12} />
                Code
              </a>
            )}
          </div>

          {/* Bottom accent */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: 'var(--fg)' }} />
        </article>
      )}
    </li>
  )
}

export default function ProjectSection() {
  return (
    <section id="projects" className="relative py-20 px-6">
      {/* Background paper texture - full width */}
      <div className="absolute inset-0 paper-lines opacity-10" aria-hidden="true" />

      {/* Decorative elements - hand-drawn style - full width positioning */}
      <div className="absolute top-10 left-4 w-3 h-3 border-2 rounded-full opacity-20 animate-float" style={{ borderColor: 'var(--fg-subtle)' }} />
      <div className="absolute top-20 right-6 w-2 h-2 rounded-full opacity-30 animate-float" style={{ backgroundColor: 'var(--fg-muted)', animationDelay: '0.5s' }} />
      <div className="absolute bottom-10 right-4 w-2 h-2 rounded-full opacity-30 animate-float" style={{ backgroundColor: 'var(--fg-muted)', animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-6 w-3 h-3 border-2 border-dashed rounded-full opacity-20 animate-float" style={{ borderColor: 'var(--fg-subtle)', animationDelay: '1.5s' }} />
      <div className="absolute left-2 top-1/2 w-1 h-1 rounded-full opacity-40 animate-float" style={{ backgroundColor: 'var(--fg-muted)', animationDelay: '2s' }} />
      <div className="absolute right-2 top-1/3 w-2 h-2 border rotate-45 opacity-20 animate-float" style={{ borderColor: 'var(--fg-subtle)', animationDelay: '2.5s' }} />

      {/* Centered content container */}
      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-12 animate-fade-up stagger-1 text-center relative">
          <div className="section-label justify-center mb-6">
            <span>Portfolio</span>
          </div>

          {/* Decorative header elements */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-px" style={{ backgroundColor: 'var(--fg-subtle)' }} />
            <span className="hand-drawn-text text-2xl rotate-12" style={{ color: 'var(--fg-muted)' }}>◉</span>
            <div className="w-16 h-px" style={{ backgroundColor: 'var(--fg-subtle)' }} />
          </div>

          <h2 className="heading-lg mx-auto max-w-3xl relative" style={{ color: 'var(--fg)' }}>
            Selected <br />
            <span className="hand-drawn-text text-2xl sm:text-3xl font-normal">Works.</span>
          </h2>

          <p className="text-base max-w-xl leading-relaxed mt-4 mx-auto" style={{ color: 'var(--fg-muted)' }}>
            A curated collection of builds spanning full-stack applications, real-time systems, DevOps infrastructure, and low-level programming.
          </p>

          {/* Divider under header */}
          <div className="mt-8 w-24 mx-auto divider-sketch" />
        </div>

        {/* Projects grid - custom layout per project */}
        <div className="space-y-6 lg:space-y-8 stagger-list">
          {/* Featured project - large horizontal card */}
          <ProjectCard project={ProjectList[0]} index={0} variant="featured" />

          {/* Showcase row - 2 cards side by side on desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ProjectCard project={ProjectList[1]} index={1} variant="showcase" />
            <ProjectCard project={ProjectList[2]} index={2} variant="showcase" />
          </div>

          {/* Detailed row - 3 cards side by side on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <ProjectCard project={ProjectList[3]} index={3} variant="detailed" />
            <ProjectCard project={ProjectList[4]} index={4} variant="detailed" />
            <ProjectCard project={ProjectList[5]} index={5} variant="detailed" />
          </div>

          {/* Compact row - 3 cards for remaining projects */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <ProjectCard project={ProjectList[6]} index={6} variant="compact" />
            <ProjectCard project={ProjectList[7]} index={7} variant="compact" />
            <ProjectCard project={ProjectList[8]} index={8} variant="compact" />
          </div>
        </div>

        {/* Footer decoration */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="w-full max-w-xs h-px" style={{ backgroundColor: 'var(--fg-subtle)' }} />
          <div className="relative flex items-center justify-center">
            <span className="hand-drawn-text text-3xl" style={{ color: 'var(--fg-muted)' }}>◆</span>
            <div className="absolute inset-0 animate-float" style={{ animationDuration: '3s' }}>
              <span className="hand-drawn-text text-3xl" style={{ color: 'var(--fg-muted)' }}>◆</span>
            </div>
          </div>
          <div className="w-full max-w-xs h-px" style={{ backgroundColor: 'var(--fg-subtle)' }} />
        </div>

        {/* Divider */}
        <div className="mt-16 w-1/2 mx-auto divider-sketch" />
      </div>
    </section>
  )
}