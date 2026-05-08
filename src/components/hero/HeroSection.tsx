'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { siteConfig } from '@/data/site'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: 'easeOut' as const },
})

export default function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ── HERO PHOTO ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-action.jpg"
          alt="Ayomal Akalanka clearing a hurdle"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark gradient overlay — left side readable, right side shows photo */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(105deg, rgba(5,10,18,0.97) 0%, rgba(5,10,18,0.88) 40%, rgba(5,10,18,0.55) 65%, rgba(5,10,18,0.2) 100%)',
          }}
        />
        {/* Bottom fade to next section */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40"
          style={{
            background: 'linear-gradient(to bottom, transparent, var(--navy-deep))',
          }}
        />
      </div>

      {/* Grid background */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,194,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,194,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow left */}
      <div
        className="absolute z-[1] pointer-events-none"
        style={{
          left: '-200px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(0,194,255,0.1) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6 md:px-12 lg:px-16 pt-28 pb-24">
        {/* Badge */}
        <motion.div
          {...fadeUp(0)}
          className="inline-flex items-center gap-2 bg-[rgba(255,184,0,0.1)] border border-[rgba(255,184,0,0.3)] text-gold text-[0.72rem] font-semibold tracking-[0.15em] uppercase px-4 py-2 mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-dot-pulse inline-block" />
          49.90s — National Junior Record 2025 · Sub-50 Barrier Breaker
        </motion.div>

        {/* Name */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' as const }}
            className="font-bebas leading-[0.88] tracking-[0.04em]"
            style={{ fontSize: 'clamp(4.5rem, 11vw, 9rem)' }}
          >
            <span className="block text-light">Ayomal</span>
            <span className="block text-electric">Akalanka</span>
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.35)}
          className="mt-4 text-[0.88rem] tracking-[0.2em] uppercase text-muted"
        >
          {siteConfig.subtitle}
        </motion.p>

        {/* Tagline */}
        <motion.p
          {...fadeUp(0.5)}
          className="mt-5 text-[1.05rem] text-light/75 max-w-[480px] leading-[1.7]"
        >
          {siteConfig.heroStatement}
        </motion.p>

        {/* PB Time */}
        <motion.div
          {...fadeUp(0.65)}
          className="mt-8 flex items-baseline gap-4"
        >
          <span className="font-bebas text-[4.5rem] text-gold leading-none tracking-[0.04em]">
            49.90<small className="text-[2rem]">s</small>
          </span>
          <div className="text-[0.73rem] tracking-[0.1em] uppercase text-muted leading-[1.5]">
            Personal Best<br />400m Hurdles
            <strong className="block text-gold text-[0.65rem] mt-0.5">⚡ National Junior Record</strong>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.8)}
          className="mt-9 flex flex-wrap gap-4"
        >
          <button
            onClick={() => handleScroll('#achievements')}
            className="bg-electric text-navy-deep font-bold text-[0.78rem] tracking-[0.1em] uppercase px-8 py-3.5 hover:bg-sky-300 hover:-translate-y-0.5 transition-all duration-200"
          >
            View Achievements
          </button>
          <button
            onClick={() => handleScroll('#olympic')}
            className="border border-light/25 text-light font-semibold text-[0.78rem] tracking-[0.1em] uppercase px-8 py-3.5 hover:border-light hover:-translate-y-0.5 transition-all duration-200"
          >
            Road to LA 2028 →
          </button>
        </motion.div>
      </div>

      {/* Track line at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[3px] z-10 animate-track-slide"
        style={{
          background: 'linear-gradient(90deg, transparent, #00C2FF 30%, #FFB800 70%, transparent)',
        }}
      />
    </section>
  )
}
