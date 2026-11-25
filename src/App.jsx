import './index.css'
import { useState, useEffect } from 'react'
import NavComponent from './components/NavComponent'
import LandingSection from './page/LandingSection'
import AboutSection from './page/AboutSection'
import CareerSection from './page/CareerSection'
import SkillsSection from './page/SkillsSection'
import ProjectSection from './page/ProjectSection'
import CertificationsSection from './page/CertificationsSection'
import ContactSection from './page/ContactSection'
import ThemeToggle from './components/ThemeToggle'

function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved) {
      setTheme(saved)
      document.documentElement.setAttribute('data-theme', saved)
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
      document.documentElement.setAttribute('data-theme', 'dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  const navItems = [
    {
      label: "About",
      links: [
        { label: "About Me", ariaLabel: "About Me", href: "#about" },
        { label: "Journey", ariaLabel: "My Journey", href: "#career" },
        { label: "Certifications", ariaLabel: "Certifications", href: "#certifications" }
      ]
    },
    {
      label: "Work",
      links: [
        { label: "Skills", ariaLabel: "Skills", href: "#skills" },
        { label: "Projects", ariaLabel: "Projects", href: "#projects" }
      ]
    },
    {
      label: "Contact",
      links: [
        { label: "Get in Touch", ariaLabel: "Contact", href: "#contact" },
        { label: "Email", ariaLabel: "Email", href: "mailto:youssefnoujoum04@gmail.com" },
        { label: "LinkedIn", ariaLabel: "LinkedIn", href: "https://www.linkedin.com/in/youssef-noujoum-079bb0289/" },
        { label: "GitHub", ariaLabel: "GitHub", href: "https://github.com/youssefnjm" }
      ]
    }
  ]

  return (
    <>
      <ThemeToggle onToggle={toggleTheme} theme={theme} />
      <main className="relative min-h-screen overflow-x-hidden">
        <NavComponent
          logo={<span className="hand-drawn-text text-xl">YN</span>}
          logoAlt="Youssef Noujoum"
          items={navItems}
          className='fixed top-4 left-1/2 -translate-x-1/2 z-50'
          ease="power3.out"
        />
        <div>
          <LandingSection />
          <AboutSection />
          {/* <CareerSection /> */}
          <ProjectSection />
          <SkillsSection />
          <CertificationsSection />
          <ContactSection />
        </div>

        {/* Footer */}
        <footer style={{
          marginTop: '110px',
          paddingTop: '20px',
          borderTop: '2px dashed var(--color-fg-muted)',
          display: 'flex',
          justifyContent: 'space-between',
          gap: '16px',
          flexWrap: 'wrap',
          fontFamily: 'var(--font-mono)',
          fontWeight: 400,
          fontSize: '12px',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--color-fg-muted)'
        }}>
          <span>© 2026 · Designed & handcrafted with code</span>
          <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }} style={{
            color: 'var(--color-ink)',
            textDecoration: 'none',
            borderBottom: '1.5px solid var(--color-ink)'
          }}>
            Back to page one ↑
          </a>
        </footer>
      </main>
    </>
  )
}

export default App