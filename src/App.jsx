import { useEffect, useState } from 'react'
import { site, about, projects, experience, skills, education, coursework, highlights } from './content'

const MODES = ['light', 'dark', 'system']
const isDark = (m) => m === 'dark' || (m === 'system' && matchMedia('(prefers-color-scheme: dark)').matches)

function ThemeToggle() {
  const [mode, setMode] = useState(() => { try { return localStorage.getItem('theme') || 'system' } catch { return 'system' } })
  useEffect(() => {
    const apply = () => document.documentElement.classList.toggle('dark', isDark(mode))
    apply()
    try { localStorage.setItem('theme', mode) } catch {}
    if (mode !== 'system') return
    const mq = matchMedia('(prefers-color-scheme: dark)')
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [mode])
  return (
    <div role="group" aria-label="Theme" className="flex overflow-hidden rounded-md border border-line text-sm">
      {MODES.map((m) => (
        <button key={m} type="button" aria-pressed={mode === m} onClick={() => setMode(m)}
          className={`px-3 py-2 capitalize ${mode === m ? 'bg-accent text-bg' : 'text-muted hover:text-fg'}`}>
          {m}
        </button>
      ))}
    </div>
  )
}

const A = ({ href, children }) => (
  <a href={href} className="underline decoration-line underline-offset-4 hover:decoration-accent hover:text-accent"
    {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{children}</a>
)

const Section = ({ id, title, children }) => (
  <section id={id} aria-labelledby={`${id}-h`} className="py-12 border-t border-line">
    <h2 id={`${id}-h`} className="font-display text-2xl font-bold tracking-tight mb-6">{title}</h2>
    {children}
  </section>
)

const Bullets = ({ items }) => (
  <ul className="mt-3 space-y-2 text-muted list-disc pl-5 marker:text-accent">
    {items.map((p) => <li key={p}>{p}</li>)}
  </ul>
)

export default function App() {
  const links = [
    ['Email', `mailto:${site.email}`],
    ...site.links.filter((l) => l.url).map((l) => [l.label, l.url]),
    ['Resume (PDF)', '/resume.pdf'],
  ]
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:bg-bg focus:px-3 focus:py-2 focus:border focus:border-accent">Skip to content</a>
      <header className="sticky top-0 z-10 border-b border-line bg-bg">
        <div className="mx-auto max-w-2xl px-5 py-3 flex items-center justify-between gap-3">
          <a href="#top" className="font-display font-bold">{site.name}</a>
          <ThemeToggle />
        </div>
        <nav aria-label="Primary" className="mx-auto max-w-2xl px-5 pb-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted">
          {[['projects', 'Projects'], ['experience', 'Experience'], ['skills', 'Skills'], ['education', 'Education'], ['contact', 'Contact']].map(([id, l]) => (
            <a key={id} href={`#${id}`} className="py-1 hover:text-accent">{l}</a>
          ))}
        </nav>
      </header>

      <main id="main" className="mx-auto max-w-2xl px-5">
        <div id="top" className="pt-16 pb-14 sm:pt-24">
          <h1 className="rise font-display text-5xl sm:text-7xl font-bold tracking-tight leading-[1.02]">{site.name}</h1>
          <p className="rise mt-4 text-xl text-accent font-medium" style={{ animationDelay: '.12s' }}>{site.role}</p>
          <p className="rise mt-6 max-w-prose text-lg" style={{ animationDelay: '.24s' }}>{site.tagline}</p>
          <ul className="rise mt-8 flex flex-wrap gap-x-6 gap-y-2" style={{ animationDelay: '.36s' }}>
            {links.map(([l, h]) => <li key={l}><A href={h}>{l}</A></li>)}
          </ul>
        </div>

        <Section id="about" title="About">
          <div className="space-y-4 max-w-prose">{about.map((p) => <p key={p}>{p}</p>)}</div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="space-y-10">
            {projects.map((p) => (
              <article key={p.title}>
                <h3 className="font-display text-lg font-bold">{p.title}</h3>
                <p className="text-sm text-muted">{[p.dates, p.stack].filter(Boolean).join('. ')}</p>
                <Bullets items={p.points} />
                {p.repo && <p className="mt-3"><A href={p.repo}>View code</A></p>}
              </article>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience">
          {experience.map((e) => (
            <article key={e.role}>
              <h3 className="font-display text-lg font-bold">{e.role}, {e.org}</h3>
              <p className="text-sm text-muted">{e.dates}</p>
              <Bullets items={e.points} />
            </article>
          ))}
        </Section>

        <Section id="skills" title="Skills">
          <dl className="space-y-3">
            {skills.map(([k, v]) => (
              <div key={k} className="sm:grid sm:grid-cols-[9rem_1fr] sm:gap-4">
                <dt className="font-medium">{k}</dt>
                <dd className="text-muted">{v}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="education" title="Education">
          <ul className="space-y-5">
            {education.map((e) => (
              <li key={e.detail}>
                <p className="font-medium">{e.school}</p>
                <p className="text-muted">{e.detail}</p>
                <p className="text-sm text-muted">{e.dates}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-muted"><span className="text-fg font-medium">Coursework:</span> {coursework}.</p>
          <Bullets items={highlights} />
        </Section>

        <Section id="contact" title="Contact">
          <p className="max-w-prose">Open to internships and junior roles in full-stack and GenAI development. The quickest way to reach me is <A href={`mailto:${site.email}`}>{site.email}</A>.</p>
        </Section>
      </main>

      <footer className="mx-auto max-w-2xl px-5 py-10 border-t border-line text-sm text-muted flex justify-between">
        <p>&copy; {new Date().getFullYear()} {site.name}</p>
        <a href="#top" className="hover:text-accent">Back to top</a>
      </footer>
    </>
  )
}
