'use client'
import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import RevealWrapper from '@/components/ui/RevealWrapper'

const options = [
  {
    icon: '🏷️',
    title: 'Brand Sponsorship',
    desc: 'Associate your brand with Sri Lanka\'s fastest rising athletic talent across all competitions, media, and social platforms.',
  },
  {
    icon: '🎓',
    title: 'University Scholarship',
    desc: 'Support Ayomal\'s academic and athletic development through university athletic scholarship partnerships.',
  },
  {
    icon: '🌍',
    title: 'International Training',
    desc: 'Fund high-altitude training camps, elite coaching access, and international training facility programmes.',
  },
  {
    icon: '✈️',
    title: 'Competition Travel',
    desc: 'Enable participation in world-class international meets that build the experience needed for Olympic qualification.',
  },
]

export default function SponsorSection() {
  return (
    <section
      id="sponsor"
      className="py-24 px-6 md:px-12 lg:px-16"
      style={{ background: 'var(--navy-deep)' }}
    >
      <SectionLabel color="gold" className="mb-3">Partner With Us</SectionLabel>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-bebas tracking-[0.04em] leading-none mb-12"
        style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
      >
        Support A <span className="text-gold">Future Olympian</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left */}
        <RevealWrapper>
          <div className="space-y-4 text-[0.93rem] text-light/70 leading-[1.85]">
            <p>
              Ayomal Akalanka represents an extraordinary opportunity to partner with one of South
              Asia&apos;s most exciting young athletes at the beginning of what promises to be a
              historic career.
            </p>
            <p>
              Backing Ayomal means investing in a story that is already capturing national
              attention — and will only grow louder as he approaches Olympic qualification.
            </p>
            <p className="text-light/50 text-[0.83rem]">
              Every hurdle he clears. Every record he breaks. Every stage he steps onto. Your brand,
              part of that story.
            </p>
          </div>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center mt-8 bg-gold text-navy-deep font-bold text-[0.78rem] tracking-[0.1em] uppercase px-8 py-3.5 hover:bg-yellow-300 hover:-translate-y-0.5 transition-all duration-200"
          >
            Become a Partner →
          </a>
        </RevealWrapper>

        {/* Options Grid */}
        <RevealWrapper delay={0.15}>
          <div
            className="grid grid-cols-2 border border-[rgba(0,194,255,0.15)]"
            style={{ gap: '1px', background: 'rgba(0,194,255,0.12)' }}
          >
            {options.map((opt, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-6 transition-colors duration-300 hover:bg-navy cursor-default"
                style={{ background: 'var(--navy-deep)' }}
              >
                <div className="text-[1.5rem] mb-3">{opt.icon}</div>
                <h4 className="text-[0.88rem] font-bold text-light tracking-[0.04em] mb-2">
                  {opt.title}
                </h4>
                <p className="text-[0.76rem] text-muted leading-[1.6]">{opt.desc}</p>
              </motion.div>
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
