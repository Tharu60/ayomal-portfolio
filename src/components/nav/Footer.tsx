'use client'
import { siteConfig } from '@/data/site'

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer
      className="border-t border-[rgba(0,194,255,0.15)] px-6 md:px-12 lg:px-16 py-8"
      style={{ background: 'var(--navy-deep)' }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-5">
        {/* Logo */}
        <div className="font-bebas text-[1.25rem] tracking-[0.1em]">
          Ayomal <span className="text-gold">Akalanka</span>
        </div>

        {/* Copyright */}
        <p className="text-[0.72rem] text-muted tracking-[0.05em] text-center">
          © {year} Ayomal Akalanka · Sri Lankan National Athlete · Road to LA 2028
        </p>

        {/* Links */}
        <div className="flex gap-5">
          {[
            { label: 'Home', href: '#home' },
            { label: 'Achievements', href: '#achievements' },
            { label: 'LA 2028', href: '#olympic' },
            { label: 'Contact', href: '#contact' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                scrollTo(link.href)
              }}
              className="text-muted text-[0.72rem] tracking-[0.08em] uppercase hover:text-electric transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
