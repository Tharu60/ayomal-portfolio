'use client'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import { quickStats } from '@/data/stats'

export default function QuickStats() {
  return (
    <section id="stats" className="py-24 px-6 md:px-12 lg:px-16" style={{ background: 'var(--navy)' }}>
      <SectionLabel className="mb-3">By The Numbers</SectionLabel>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-bebas tracking-[0.04em] leading-none mb-12"
        style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
      >
        The Numbers That <span className="text-electric">Define Him</span>
      </motion.h2>

      <div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border border-[rgba(0,194,255,0.15)]"
        style={{ gap: '1px', background: 'rgba(0,194,255,0.15)' }}
      >
        {quickStats.map((stat, i) => (
          <StatCard key={i} stat={stat} index={i} />
        ))}
      </div>
    </section>
  )
}

interface StatCardProps {
  stat: typeof quickStats[0]
  index: number
}

function StatCard({ stat, index }: StatCardProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 })
  const isGold = stat.color === 'gold'

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="stat-card-top relative group overflow-hidden text-center py-10 px-4 transition-colors duration-300 cursor-default"
      style={{ background: 'var(--navy-deep)' }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'var(--navy-mid)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'var(--navy-deep)'
      }}
    >
      <div
        className="font-bebas text-[3rem] leading-none block"
        style={{ color: isGold ? 'var(--gold)' : 'var(--blue)' }}
      >
        {inView ? (
          <CountUp
            end={parseInt(stat.value)}
            duration={1.8}
            suffix={stat.suffix}
          />
        ) : (
          '0'
        )}
      </div>
      <div className="text-[0.7rem] tracking-[0.1em] uppercase text-muted mt-2 leading-[1.4]">
        {stat.label}
      </div>
    </motion.div>
  )
}
