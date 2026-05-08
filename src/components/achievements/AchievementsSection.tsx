'use client'
import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import RevealWrapper from '@/components/ui/RevealWrapper'
import { nationalAchievements, internationalAchievements, records } from '@/data/achievements'
import type { Medal } from '@/data/achievements'

const medalEmoji: Record<Medal, string> = {
  gold: '🥇',
  silver: '🥈',
  bronze: '🥉',
  finalist: '🏁',
  '6th': '6️⃣',
  'relay-gold': '🥇',
}

export default function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="py-24 px-6 md:px-12 lg:px-16"
      style={{ background: 'var(--navy)' }}
    >
      <SectionLabel className="mb-3">Medals & Titles</SectionLabel>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-bebas tracking-[0.04em] leading-none mb-12"
        style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
      >
        Achievements &{' '}
        <span className="text-gold">Honours</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
        {/* National */}
        <RevealWrapper>
          <div>
            <div className="text-[1rem] font-barlow font-bold tracking-[0.15em] uppercase text-muted border-b border-[rgba(0,194,255,0.15)] pb-3 mb-6 flex items-center gap-2">
              🇱🇰 National Achievements
            </div>
            {nationalAchievements.map((yearGroup) => (
              <div key={yearGroup.year} className="mb-8">
                <div className="font-bebas text-[1.1rem] tracking-[0.1em] text-gold mb-3">
                  {yearGroup.year}
                </div>
                <div className="flex flex-col gap-2">
                  {yearGroup.items.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      className="flex items-center gap-3 px-4 py-2.5 border border-[rgba(0,194,255,0.15)] text-[0.82rem] text-light/80 cursor-default hover:border-[rgba(0,194,255,0.35)] hover:bg-[rgba(0,194,255,0.04)] hover:translate-x-1 transition-all duration-250"
                      style={{ background: 'var(--navy-deep)' }}
                    >
                      <span className="text-base w-5 text-center flex-shrink-0">
                        {medalEmoji[item.medal]}
                      </span>
                      <span>
                        {item.event}
                        {item.discipline && (
                          <span className="text-muted ml-1">— {item.discipline}</span>
                        )}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </RevealWrapper>

        {/* International */}
        <RevealWrapper delay={0.15}>
          <div>
            <div className="text-[1rem] font-barlow font-bold tracking-[0.15em] uppercase text-muted border-b border-[rgba(0,194,255,0.15)] pb-3 mb-6 flex items-center gap-2">
              🌍 International Achievements
            </div>
            {internationalAchievements.map((yearGroup) => (
              <div key={yearGroup.year} className="mb-8">
                <div className="font-bebas text-[1.1rem] tracking-[0.1em] text-gold mb-3">
                  {yearGroup.year}
                </div>
                <div className="flex flex-col gap-2">
                  {yearGroup.items.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      className="flex items-center gap-3 px-4 py-2.5 border border-[rgba(0,194,255,0.15)] text-[0.82rem] text-light/80 cursor-default hover:border-[rgba(0,194,255,0.35)] hover:bg-[rgba(0,194,255,0.04)] hover:translate-x-1 transition-all duration-250"
                      style={{ background: 'var(--navy-deep)' }}
                    >
                      <span className="text-base w-5 text-center flex-shrink-0">
                        {medalEmoji[item.medal]}
                      </span>
                      <span>
                        {item.flag && <span className="mr-1">{item.flag}</span>}
                        {item.event}
                        {item.discipline && (
                          <span className="text-muted ml-1">— {item.discipline}</span>
                        )}
                        {item.time && (
                          <span className="text-electric text-[0.72rem] ml-2">{item.time}</span>
                        )}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}

            {/* Records box */}
            <div
              className="mt-4 border border-[rgba(255,184,0,0.2)] p-5"
              style={{ background: 'var(--navy-deep)' }}
            >
              <div className="text-[0.85rem] font-barlow font-bold tracking-[0.15em] uppercase text-muted pb-3 mb-3 border-b border-[rgba(255,184,0,0.12)] flex items-center gap-2">
                ⚡ Records Held
              </div>
              <div className="flex flex-col gap-1">
                {records.map((rec, i) => (
                  <div key={i} className="flex items-center gap-3 py-1.5 text-[0.83rem]">
                    <span className="text-gold text-base w-5 text-center flex-shrink-0">{rec.flag}</span>
                    <span>
                      <span className="text-light font-medium">{rec.title}</span>
                      {rec.subtitle && (
                        <span className="text-muted ml-2 text-[0.75rem]">— {rec.subtitle}</span>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
