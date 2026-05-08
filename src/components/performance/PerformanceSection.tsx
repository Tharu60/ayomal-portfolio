'use client'
import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import RevealWrapper from '@/components/ui/RevealWrapper'
import PBProgressionChart from './PBProgressionChart'
import { personalBests } from '@/data/stats'
import { records } from '@/data/achievements'

export default function PerformanceSection() {
  return (
    <section
      id="performance"
      className="py-24 px-6 md:px-12 lg:px-16"
      style={{ background: 'var(--navy-deep)' }}
    >
      <SectionLabel className="mb-3">Times & Records</SectionLabel>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-bebas tracking-[0.04em] leading-none mb-12"
        style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
      >
        Performance <span className="text-electric">Stats</span>
      </motion.h2>

      {/* PB Cards + Records */}
      <div className="grid md:grid-cols-3 gap-5 mb-12">
        {personalBests.map((pb, i) => (
          <RevealWrapper key={i} delay={i * 0.1}>
            <div
              className="pb-gradient-border relative border border-[rgba(0,194,255,0.15)] p-8 overflow-hidden transition-all duration-300 hover:border-[rgba(0,194,255,0.35)]"
              style={{ background: 'var(--navy)' }}
            >
              <div className="text-[0.7rem] tracking-[0.2em] uppercase text-electric mb-3">
                {pb.event}
              </div>
              <div className="font-bebas leading-none tracking-[0.04em] text-light"
                style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)' }}>
                {pb.time}
                <span className="text-gold" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
                  {pb.decimal}{pb.unit}
                </span>
              </div>
              <div
                className="inline-flex items-center gap-1.5 mt-3 border text-[0.65rem] font-semibold tracking-[0.12em] uppercase px-3 py-1.5"
                style={{
                  background: 'rgba(255,184,0,0.1)',
                  borderColor: 'rgba(255,184,0,0.25)',
                  color: 'var(--gold)',
                }}
              >
                ⚡ {pb.recordShort}
              </div>
              {pb.note && (
                <p className="text-[0.76rem] text-muted mt-4 leading-[1.65]">{pb.note}</p>
              )}
              {pb.venue && (
                <p className="text-[0.68rem] text-muted/60 mt-2 tracking-[0.06em]">
                  {pb.venue} · {pb.date}
                </p>
              )}
            </div>
          </RevealWrapper>
        ))}

        {/* Records column */}
        <RevealWrapper delay={0.25}>
          <div
            className="border border-[rgba(0,194,255,0.15)] p-6"
            style={{ background: 'var(--navy)' }}
          >
            <h3 className="font-barlow text-[0.85rem] tracking-[0.15em] uppercase text-muted border-b border-[rgba(0,194,255,0.12)] pb-4 mb-4">
              Records & Milestones
            </h3>
            <div className="flex flex-col">
              {records.map((rec, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 py-3 border-b border-[rgba(0,194,255,0.07)] text-[0.83rem] last:border-0"
                >
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: i < 3 ? 'var(--gold)' : 'var(--blue)' }}
                  />
                  <span className="text-light">{rec.title}</span>
                </div>
              ))}
            </div>
          </div>
        </RevealWrapper>
      </div>

      {/* Progression Chart */}
      <RevealWrapper delay={0.1}>
        <PBProgressionChart />
      </RevealWrapper>
    </section>
  )
}
