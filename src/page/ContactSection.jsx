import { useState, useEffect } from 'react'
import { LuPhone, LuGithub, LuLinkedin, LuSend, LuMail, LuArrowUpRight, LuMapPin, LuClock } from 'react-icons/lu'
import * as emailjs from "@emailjs/browser"
import validator from 'validator'

const socials = [
  { label: "Email", href: "mailto:youssefnoujoum04@gmail.com", icon: <LuMail /> },
  { label: "GitHub", href: "https://github.com/youssefnjm", icon: <LuGithub /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/youssef-noujoum-079bb0289/", icon: <LuLinkedin /> },
]

const fields = [
  { id: "name", label: "Full Name", type: "text", name: "name" },
  { id: "email", label: "Email Address", type: "email", name: "email" },
]

function Input({ id, label, type, name, value, focused, onChange, onFocus, onBlur }) {
  const up = focused === id || value
  return (
    <div className="relative">
      <label
        htmlFor={id}
        className={`absolute left-0 transition-all duration-200 pointer-events-none font-medium hand-drawn-text text-xs ${up ? "top-0" : "top-4 text-sm"}`}
        style={{ color: up ? 'var(--fg-muted)' : 'var(--fg-subtle)' }}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        name={name}
        onChange={e => onChange(id, e.target.value)}
        onFocus={() => onFocus(id)}
        onBlur={onBlur}
        className="w-full bg-transparent border-b pt-8 pb-3 text-sm outline-none transition-colors duration-200"
        style={{
          borderColor: 'var(--fg-subtle)',
          color: 'var(--fg)',
          borderRadius: '2px 4px 2px 4px / 4px 2px 4px 2px'
        }}
      />
    </div>
  )
}

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
  const [focus, setFocus] = useState(null)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    emailjs.init({
      publicKey: "OjftJ0MJrM7vC20CT",
    })
  }, [])

  const setField = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const submit = (e) => {
    e.preventDefault()

    if (!form.name || !form.email || !form.subject || !form.message) {
      setError("All fields are required")
      return
    } else if (validator.isNumeric(form.name)) {
      setError("Name should contain only characters")
      return
    } else if (!validator.isEmail(form.email)) {
      setError("Email should be in valid format")
      return
    }

    setError('')

    const formElement = document.getElementById("contact_form")

    emailjs.sendForm('service_jvcdp3g', 'template_io9yexj', formElement)
      .then(() => {
        setSent(true)
        setForm({ name: "", email: "", subject: "", message: "" })
        setTimeout(() => setSent(false), 4000)
      }, (error) => {
        setSent(false)
        console.log('FAILED...', error)
        setError("Failed to send message. Please try again.")
      })
  }

  return (
    <section id="contact" className="relative py-20 px-6">
      {/* Background paper texture - full width */}
      <div className="absolute inset-0 paper-lines opacity-10" aria-hidden="true" />

      {/* Decorative elements - full width positioning */}
      <div className="absolute top-0 left-0 w-32 h-32 border-2 rounded-tl-full opacity-10" style={{ borderColor: 'var(--fg-subtle)' }} />
      <div className="absolute bottom-0 right-0 w-40 h-40 border-2 rounded-br-full opacity-10" style={{ borderColor: 'var(--fg-subtle)' }} />

      {/* Centered content container */}
      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-12 animate-fade-up stagger-1">
          <div className="section-label mb-6">
            <span>Contact</span>
          </div>
          <h2 className="heading-lg" style={{ color: 'var(--fg)' }}>
            Let's <br />
            <span className="hand-drawn-text text-2xl sm:text-3xl font-normal">Talk.</span>
          </h2>
          <p className="text-base max-w-xl leading-relaxed mt-4" style={{ color: 'var(--fg-muted)' }}>
            Got a project, an idea, or just want to connect? Drop me a message and I'll get back to you within 24 hours.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left side - Info */}
          <div className="flex flex-col justify-between gap-10 animate-fade-up stagger-2">
            {/* Status */}
            <div className="sketch-border p-6" style={{ borderRadius: '12px 8px 16px 4px / 8px 16px 4px 12px' }}>
              <p className="text-xs font-semibold tracking-widest uppercase mb-3 hand-drawn-text" style={{ color: 'var(--fg-subtle)' }}>Current Status</p>
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ backgroundColor: 'var(--fg-muted)' }} />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full" style={{ backgroundColor: 'var(--fg-muted)' }} />
                </span>
                <span className="font-semibold hand-drawn-text" style={{ color: 'var(--fg)' }}>Available for new projects</span>
              </div>
            </div>

            {/* Direct Contact */}
            <div className="sketch-border p-6" style={{ borderRadius: '12px 8px 16px 4px / 8px 16px 4px 12px' }}>
              <p className="text-xs font-semibold tracking-widest uppercase mb-6 hand-drawn-text" style={{ color: 'var(--fg-subtle)' }}>Direct Contact</p>
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center sketch-border">
                    <LuMail className="text-lg" style={{ color: 'var(--fg-muted)' }} />
                  </div>
                  <div>
                    <p className="text-xs hand-drawn-text" style={{ color: 'var(--fg-subtle)' }}>Email</p>
                    <a href="mailto:youssefnoujoum04@gmail.com" className="font-medium hover:opacity-75 transition-opacity hand-drawn-text" style={{ color: 'var(--fg)' }}>youssefnoujoum04@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center sketch-border">
                    <LuMapPin className="text-lg" style={{ color: 'var(--fg-muted)' }} />
                  </div>
                  <div>
                    <p className="text-xs hand-drawn-text" style={{ color: 'var(--fg-subtle)' }}>Location</p>
                    <p className="font-medium hand-drawn-text" style={{ color: 'var(--fg)' }}>Casablanca, Morocco</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center sketch-border">
                    <LuClock className="text-lg" style={{ color: 'var(--fg-muted)' }} />
                  </div>
                  <div>
                    <p className="text-xs hand-drawn-text" style={{ color: 'var(--fg-subtle)' }}>Response Time</p>
                    <p className="font-medium hand-drawn-text" style={{ color: 'var(--fg)' }}>Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="sketch-border p-6" style={{ borderRadius: '12px 8px 16px 4px / 8px 16px 4px 12px' }}>
              <p className="text-xs font-semibold tracking-widest uppercase mb-6 hand-drawn-text" style={{ color: 'var(--fg-subtle)' }}>Socials</p>
              <div className="space-y-3">
                {socials.map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="group flex items-center justify-between border-b pb-3 hover:opacity-75 transition-opacity duration-200"
                    style={{ borderColor: 'var(--fg-subtle)' }}
                  >
                    <div className="flex items-center gap-3 text-sm font-medium hand-drawn-text group-hover:opacity-100 transition-opacity duration-200" style={{ color: 'var(--fg-muted)' }}>
                      {s.icon}
                      <span>{s.label}</span>
                    </div>
                    <LuArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" style={{ color: 'var(--fg-subtle)' }} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="lg:pl-8 lg:border-l animate-fade-up stagger-3" style={{ borderLeftColor: 'var(--fg-subtle)', borderLeftWidth: '1px', borderLeftStyle: 'solid' }}>
            {sent ? (
              <div className="flex flex-col items-center gap-4 pt-10 text-center sketch-border p-10" style={{ borderRadius: '16px 8px 20px 8px / 8px 20px 8px 16px' }}>
                <div className="text-6xl font-bold hand-drawn-text animate-wiggle" style={{ color: 'var(--fg-muted)' }}>✓</div>
                <p className="text-2xl font-bold hand-drawn-text" style={{ color: 'var(--fg)' }}>Message received.</p>
                <p className="text-sm hand-drawn-text" style={{ color: 'var(--fg-muted)' }}>I'll reach out to you soon. Talk soon!</p>
              </div>
            ) : (
              <form id="contact_form" className="flex flex-col gap-8 sketch-border p-8" style={{ borderRadius: '16px 8px 20px 8px / 8px 20px 8px 16px' }} onSubmit={submit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {fields.map(f => (
                    <Input key={f.id} {...f} value={form[f.id]} focused={focus} onChange={setField} onFocus={setFocus} onBlur={() => setFocus(null)} />
                  ))}
                </div>

                <div className="relative">
                  <label htmlFor="subject" className={`absolute left-0 transition-all duration-200 pointer-events-none font-medium hand-drawn-text text-xs ${focus === "subject" || form.subject ? "top-0" : "top-4 text-sm"}`} style={{ color: focus === "subject" || form.subject ? 'var(--fg-muted)' : 'var(--fg-subtle)' }}>
                    Subject
                  </label>
                  <input id="subject" type="text" value={form.subject} name="subject"
                    onChange={e => setField("subject", e.target.value)}
                    onFocus={() => setFocus("subject")} onBlur={() => setFocus(null)}
                    className="w-full bg-transparent border-b pt-8 pb-3 text-sm outline-none transition-colors duration-200"
                    style={{
                      borderColor: 'var(--fg-subtle)',
                      color: 'var(--fg)',
                      borderRadius: '2px 4px 2px 4px / 4px 2px 4px 2px'
                    }}
                  />
                </div>

                <div className="relative">
                  <label htmlFor="message" className={`absolute left-0 transition-all duration-200 pointer-events-none font-medium hand-drawn-text text-xs ${focus === "message" || form.message ? "top-0" : "top-4 text-sm"}`} style={{ color: focus === "message" || form.message ? 'var(--fg-muted)' : 'var(--fg-subtle)' }}>
                    Message
                  </label>
                  <textarea id="message" rows={4} value={form.message} name="message"
                    onChange={e => setField("message", e.target.value)}
                    onFocus={() => setFocus("message")} onBlur={() => setFocus(null)}
                    maxLength={600}
                    className="w-full bg-transparent border-b pt-8 pb-3 text-sm outline-none resize-none transition-colors duration-200"
                    style={{
                      borderColor: 'var(--fg-subtle)',
                      color: 'var(--fg)',
                      borderRadius: '2px 4px 2px 4px / 4px 2px 4px 2px'
                    }}
                  />
                  <span className="text-xs float-right mt-1 hand-drawn-text" style={{ color: 'var(--fg-subtle)' }}>{form.message.length}/600</span>
                </div>

                {error && (
                  <p className="text-xs text-center my-2 hand-drawn-text" style={{ color: 'var(--accent)' }}>{error}</p>
                )}

                <div className="pt-4">
                  <button type="submit" className="btn-sketch group hand-drawn-text w-full sm:w-auto" style={{ borderRadius: '12px 8px 16px 4px / 8px 16px 4px 12px' }}>
                    <span className="relative z-10 flex items-center gap-3">
                      <span className="relative inline-flex items-center justify-center w-10 h-10 sketch-border group-hover:opacity-80 transition-opacity">
                        <LuSend />
                      </span>
                      Send Message
                    </span>
                    <span className="absolute inset-0 bg-current transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" style={{ zIndex: -1, borderRadius: '10px 6px 14px 2px / 6px 14px 2px 10px' }} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Divider - full width */}
      <div className="absolute bottom-0 left-0 right-0 mx-auto w-1/2 divider-sketch" />
    </section>
  )
}