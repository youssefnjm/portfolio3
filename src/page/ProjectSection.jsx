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

  const variantStyles = {
    featured: {
      container: 'sketch-border relative overflow-hidden group hover:shadow-[12px_12px_0px_var(--shadow),_24px_24px_0px_var(--shadow-strong)] transition-all duration-500 p-8 lg:p-10',
      radius: '24px 12px 28px 12px / 12px 28px 12px 24px',
      titleSize: 'text-3xl lg:text-4xl',
      descSize: 'text-lg',
      tagSize: 'text-sm',
      showFullDesc: true,
      showFullTags: true,
      layout: 'lg:flex lg:items-center lg:justify-between gap-8',
    },
    showcase: {
      container: 'sketch-border relative overflow-hidden group hover:shadow-[8px_8px_0px_var(--shadow),_16px_16px_0px_var(--shadow-strong)] transition-all duration-300 h-full p-6 lg:p-8 flex flex-col',
      radius: '20px 10px 24px 10px / 10px 24px 10px 20px',
      titleSize: 'text-xl lg:text-2xl',
      descSize: 'text-base',
      tagSize: 'text-xs',
      showFullDesc: true,
      showFullTags: true,
      layout: 'flex flex-col',
    },
    detailed: {
      container: 'sketch-border relative overflow-hidden group hover:shadow-[6px_6px_0px_var(--shadow),_12px_12px_0px_var(--shadow-strong)] transition-all duration-300 h-full p-5 lg:p-6 flex flex-col',
      radius: '16px 8px 20px 8px / 8px 20px 8px 16px',
      titleSize: 'text-lg lg:text-xl',
      descSize: 'text-sm',
      tagSize: 'text-xs',
      showFullDesc: false,
      showFullTags: false,
      layout: 'flex flex-col',
    },
    compact: {
      container: 'sketch-border relative overflow-hidden group hover:shadow-[4px_4px_0px_var(--shadow),_8px_8px_0px_var(--shadow-strong)] transition-all duration-300 p-4 lg:p-5',
      radius: '14px 8px 16px 8px / 8px 16px 8px 14px',
      titleSize: 'text-base lg:text-lg',
      descSize: 'text-sm',
      tagSize: 'text-xs',
      showFullDesc: false,
      showFullTags: false,
      layout: '',
    },
  }

  const style = variantStyles[cardVariant] || variantStyles.compact

  return (
    <li className="animate-fade-up stagger-list" style={{ animationDelay: `${delay}s` }}>
      <article
        className={style.container}
        style={{ borderRadius: style.radius }}
      >
        {/* Floating bracket decorations */}
        <div className="absolute -top-3 -left-3 text-3xl hand-drawn-text opacity-25 animate-wiggle" style={{ color: 'var(--fg)' }}>&#123;</div>
        <div className="absolute -top-3 -right-3 text-3xl hand-drawn-text opacity-25 animate-wiggle" style={{ color: 'var(--fg)', animationDelay: '0.3s' }}>&#125;</div>
        <div className="absolute bottom-3 -left-3 text-3xl hand-drawn-text opacity-25 animate-wiggle" style={{ color: 'var(--fg)', animationDelay: '0.6s' }}>&#59;</div>
        <div className="absolute bottom-3 -right-3 text-3xl hand-drawn-text opacity-25 animate-wiggle" style={{ color: 'var(--fg)', animationDelay: '0.9s' }}>&#123;</div>

        {/* Corner accent marks */}
        <div className="absolute top-3 left-3 w-10 h-10 border-t-2 border-l-2 opacity-30" style={{ borderColor: 'var(--fg-subtle)' }} />
        <div className="absolute top-3 right-3 w-10 h-10 border-t-2 border-r-2 opacity-30" style={{ borderColor: 'var(--fg-subtle)' }} />
        <div className="absolute bottom-3 left-3 w-10 h-10 border-b-2 border-l-2 opacity-30" style={{ borderColor: 'var(--fg-subtle)' }} />
        <div className="absolute bottom-3 right-3 w-10 h-10 border-b-2 border-r-2 opacity-30" style={{ borderColor: 'var(--fg-subtle)' }} />

        <div className={style.layout}>
          <div className="flex-1 min-w-0 flex flex-col justify-between">
            {/* Header row */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono hand-drawn-text" style={{ color: 'var(--fg-muted)' }}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                {cardVariant === 'featured' && (
                  <span className="tag-sketch hand-drawn-text text-sm" style={{
                    backgroundColor: 'var(--accent)',
                    color: 'var(--bg)',
                    borderColor: 'var(--accent)'
                  }}>Featured</span>
                )}
              </div>
              <div className="flex items-center gap-2">
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
                  className="shrink-0 flex items-center justify-center w-9 h-9 sketch-border group/link transition-all duration-300"
                  style={{ borderRadius: '8px 4px 8px 4px / 4px 8px 4px 8px' }}
                  aria-label={`View ${project.name}`}
                >
                  <LuExternalLink className="transition-colors" size={16} style={{ color: 'var(--fg-muted)' }} />
                </a>
              </div>
            </div>

            {/* Icon accent - small, top-right */}
            <div className="absolute top-6 right-6 w-16 h-16 opacity-10" style={{ transform: 'rotate(-12deg)' }}>
              <Icon size={48} style={{ color: 'var(--fg-subtle)' }} />
            </div>

            {/* Main content */}
            <div className="flex-1">
              <h3 className={`${style.titleSize} font-bold hand-drawn-text tracking-tight mb-3`} style={{ color: 'var(--fg)' }}>
                {project.name}
              </h3>

              <p className={`${style.descSize} leading-relaxed mb-5 ${style.showFullDesc ? '' : 'line-clamp-3'}`} style={{ color: 'var(--fg-muted)' }}>
                {project.desc}
              </p>
            </div>

            {/* Footer with tags and actions */}
            <div className="pt-4 mt-auto" style={{ borderTopColor: 'var(--fg-subtle)', borderTopWidth: '1px', borderTopStyle: 'solid' }}>
              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 stagger-list mb-4">
                {project.tech?.slice(0, style.showFullTags ? 99 : 5).map((tech, i) => (
                  <span key={tech} className={`tag-sketch hand-drawn-text ${style.tagSize} animate-fade-up`} style={{ animationDelay: `${i * 0.05}s` }}>
                    {tech}
                  </span>
                ))}
                {project.tech && project.tech.length > 5 && !style.showFullTags && (
                  <span className={`tag-sketch hand-drawn-text ${style.tagSize}`} style={{ color: 'var(--fg-subtle)' }}>
                    +{project.tech.length - 5} more
                  </span>
                )}
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-sketch group hand-drawn-text text-sm flex items-center gap-2"
                  style={{ borderRadius: '10px 6px 12px 4px / 6px 12px 4px 10px' }}
                >
                  <span className="relative z-10">View Live</span>
                  <span className="absolute inset-0 bg-current transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" style={{ zIndex: -1, borderRadius: '8px 4px 10px 2px / 4px 10px 2px 8px' }} />
                  <LuExternalLink className="relative z-10 transition-transform group-hover:translate-x-1" size={14} />
                </a>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-sketch-secondary group hand-drawn-text text-sm flex items-center gap-2"
                    style={{ borderRadius: '10px 6px 12px 4px / 6px 12px 4px 10px' }}
                  >
                    <span className="relative z-10 flex items-center gap-1.5">Code <LuGithub size={14} /></span>
                    <span className="absolute inset-0 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" style={{
                      zIndex: -1,
                      borderRadius: '8px 4px 10px 2px / 4px 10px 2px 8px',
                      backgroundColor: 'var(--paper-alt)'
                    }} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: 'var(--fg)' }} />
      </article>
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