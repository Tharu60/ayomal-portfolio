'use client'
import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import { timelineEvents } from '@/data/timeline'
import { cn } from '@/lib/utils'

const tagStyles = {
  international: {
    bg: 'rgba(0,194,255,0.1)',
    border: 'rgba(0,194,255,0.2)',
    color: 'var(--blue)',
    label: 'International',
  },
  national: {
    bg: 'rgba(255,184,0,0.1)',
    border: 'rgba(255,184,0,0.2)',
    color: 'var(--gold)',
    label: 'National',
  },
  record: {
    bg: 'rgba(255,184,0,0.12)',
    border: 'rgba(255,184,0,0.3)',
    color: 'var(--gold)',
    label: 'National Record',
  },
  future: {
    bg: 'rgba(255,184,0,0.08)',
    border: 'rgba(255,184,0,0.2)',
    color: 'var(--gold)',
    label: 'Olympic Target',
  },
  origin: {
    bg: 'rgba(0,194,255,0.08)',
    border: 'rgba(0,194,255,0.15)',
    color: 'var(--muted)',
    label: 'Origin Story',
  },
}

export default function TimelineSection() {
  return (
    <section
      id="journey"
      className="py-24 px-6 md:px-12 lg:px-16"
      style={{ background: 'var(--navy)' }}
    >
      <SectionLabel className="mb-3">Career Milestones</SectionLabel>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-bebas tracking-[0.04em] leading-none"
        style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
      >
        The <span className="text-electric">Road</span> Taken
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-muted text-[0.88rem] mt-2 mb-14"
      >
        From football fields to international arenas — the making of a champion.
      </motion.p>

      <div className="timeline-line relative pl-10 max-w-3xl">
        {timelineEvents.map((event, i) => {
          const isGold = event.tag === 'record' || event.tag === 'future' || event.tag === 'national'
          const tag = tagStyles[event.tag]

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={cn('relative mb-10 pl-4', event.future && 'opacity-60')}
            >
              {/* Dot */}
              <div
                className={cn(
                  'absolute -left-[2.85rem] top-1 w-3 h-3 rounded-full border-2 transition-all duration-300',
                  'hover:scale-125'
                )}
                style={{
                  background: 'var(--navy-deep)',
                  borderColor: isGold ? 'var(--gold)' : 'var(--blue)',
                  borderStyle: event.future ? 'dashed' : 'solid',
                  boxShadow: event.highlight
                    ? isGold
                      ? '0 0 14px rgba(255,184,0,0.5)'
                      : '0 0 14px rgba(0,194,255,0.5)'
                    : 'none',
                }}
              />

              {/* Year */}
              <div
                className="font-bebas text-[0.85rem] tracking-[0.15em] mb-1"
                style={{ color: isGold ? 'var(--gold)' : 'var(--blue)' }}
              >
                {event.year}
              </div>

              {/* Title */}
              <div className="text-[1.05rem] font-semibold text-light mb-1.5">
                {event.title}
              </div>

              {/* Description */}
              <div className="text-[0.83rem] text-muted leading-[1.6]">
                {event.description}
              </div>

              {/* Tag */}
              <span
                className="inline-block mt-2 text-[0.65rem] font-bold tracking-[0.12em] uppercase px-2.5 py-1 border"
                style={{
                  background: tag.bg,
                  borderColor: tag.border,
                  color: tag.color,
                }}
              >
                {tag.label}
              </span>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
