'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { siteConfig } from '@/data/site'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = document.querySelectorAll('section[id]')
      const scrollY = window.scrollY
      sections.forEach((sec) => {
        const el = sec as HTMLElement
        const top = el.offsetTop - 120
        const bottom = top + el.offsetHeight
        if (scrollY >= top && scrollY < bottom) {
          setActiveSection(el.id)
        }
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-300',
          scrolled
            ? 'bg-[rgba(5,10,18,0.92)] backdrop-blur-[16px] border-b border-[rgba(0,194,255,0.15)] shadow-lg'
            : 'bg-transparent'
        )}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
          className="font-bebas text-2xl tracking-[0.12em] text-light hover:text-white transition-colors"
        >
          Ayomal <span className="text-gold">Akalanka</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-7">
          {siteConfig.navLinks.map((link) => {
            const sectionId = link.href.replace('#', '')
            const isActive = activeSection === sectionId
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                  className={cn(
                    'text-[0.76rem] font-medium tracking-[0.1em] uppercase transition-colors duration-200',
                    isActive ? 'text-electric' : 'text-muted hover:text-light'
                  )}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
            className="hidden md:inline-flex items-center bg-gold text-navy-deep font-bold text-[0.73rem] tracking-[0.08em] uppercase px-5 py-2.5 hover:bg-yellow-300 transition-colors duration-200"
          >
            Sponsor / Contact
          </a>

          <button
            className="md:hidden text-muted hover:text-light transition-colors p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[65px] left-0 right-0 z-40 bg-[rgba(5,10,18,0.97)] backdrop-blur-[20px] border-b border-[rgba(0,194,255,0.15)] px-6 py-6"
          >
            <ul className="flex flex-col gap-4">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                    className="text-[0.9rem] font-medium tracking-[0.1em] uppercase text-muted hover:text-electric transition-colors duration-200 block py-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
                  className="inline-flex items-center bg-gold text-navy-deep font-bold text-[0.78rem] tracking-[0.08em] uppercase px-5 py-2.5 mt-2 hover:bg-yellow-300 transition-colors duration-200"
                >
                  Sponsor / Contact
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
