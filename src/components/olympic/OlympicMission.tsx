'use client'
import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import RevealWrapper from '@/components/ui/RevealWrapper'
import OlympicCountdown from './OlympicCountdown'

const focusAreas = [
  {
    num: '01',
    title: 'Speed Endurance',
    desc: 'Building the lactate threshold and race-specific conditioning to sustain elite pace through all 10 hurdles.',
  },
  {
    num: '02',
    title: 'Technical Hurdle Efficiency',
    desc: 'Optimizing stride pattern, lead leg mechanics, and hurdle clearance height to shave crucial milliseconds.',
  },
  {
    num: '03',
    title: 'Strength & Conditioning',
    desc: 'Targeted power training to support explosive acceleration and maintain form in the final 100m.',
  },
  {
    num: '04',
    title: 'International Competition Exposure',
    desc: 'Racing at the highest level to build competitive experience and meet Olympic qualification standards.',
  },
  {
    num: '05',
    title: 'Olympic Qualification Standard',
    desc: 'Target: breaking 48.40s — the current Olympic A standard — by the 2027 competition season.',
  },
]

export default function OlympicMission() {
  return (
    <section
      id="olympic"
      className="relative py-24 px-6 md:px-12 lg:px-16 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, var(--navy-deep) 0%, var(--navy) 50%, var(--navy-deep) 100%)',
      }}
    >
      {/* Watermark */}
      <div className="olympic-watermark select-none pointer-events-none">LA 2028</div>

      <SectionLabel color="gold" className="mb-3">The Ultimate Goal</SectionLabel>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-bebas tracking-[0.04em] leading-none mb-12"
        style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
      >
        Road to <span className="text-gold">LA 2028</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-14 lg:gap-20 items-start">
        {/* Left — Text + Countdown */}
        <RevealWrapper>
          <div className="space-y-4 text-[0.93rem] text-light/70 leading-[1.85]">
            <p>
              Every race is preparation for the world&apos;s biggest stage. Ayomal&apos;s current
              focus is building international experience, refining race strategy, and pushing
              performance boundaries toward qualifying for the{' '}
              <strong className="text-light">
                2028 Olympic Games in Los Angeles.
              </strong>
            </p>
            <p>
              At 19 years old with a 49.90s personal best and a growing medal collection, the
              trajectory is clear — Sri Lanka&apos;s next great 400m hurdler is already on his way.
            </p>
          </div>
          <OlympicCountdown />
        </RevealWrapper>

        {/* Right — Focus Areas */}
        <RevealWrapper delay={0.15}>
          <p className="text-[0.72rem] tracking-[0.15em] uppercase text-muted mb-4">
            Current Development Focus Areas
          </p>
          <div className="flex flex-col gap-3">
            {focusAreas.map((area, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-4 p-4 border border-[rgba(0,194,255,0.15)] transition-all duration-250 hover:border-[rgba(0,194,255,0.3)] hover:translate-x-1 cursor-default"
                style={{ background: 'var(--navy-deep)' }}
              >
                <span className="font-bebas text-[1.5rem] leading-none text-electric/30 w-8 flex-shrink-0 mt-0.5">
                  {area.num}
                </span>
                <div>
                  <div className="text-[0.9rem] font-semibold text-light mb-0.5">{area.title}</div>
                  <div className="text-[0.77rem] text-muted leading-[1.55]">{area.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
