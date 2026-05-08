'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { siteConfig } from '@/data/site'

interface TimeLeft {
  days: number
  hours: number
  mins: number
  secs: number
}

export default function OlympicCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, mins: 0, secs: 0 })

  useEffect(() => {
    const target = new Date(siteConfig.olympicDate).getTime()

    const tick = () => {
      const diff = target - Date.now()
      if (diff <= 0) return
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        mins: Math.floor((diff % 3600000) / 60000),
        secs: Math.floor((diff % 60000) / 1000),
      })
    }

    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  const units = [
    { val: timeLeft.days, label: 'Days', pad: 3 },
    { val: timeLeft.hours, label: 'Hours', pad: 2 },
    { val: timeLeft.mins, label: 'Mins', pad: 2 },
    { val: timeLeft.secs, label: 'Secs', pad: 2 },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="border p-6 mt-7"
      style={{
        background: 'var(--navy-deep)',
        borderColor: 'rgba(255,184,0,0.2)',
      }}
    >
      <p className="text-[0.68rem] tracking-[0.2em] uppercase text-gold mb-5">
        🎯 Countdown to LA {siteConfig.olympicYear} Olympic Games
      </p>
      <div className="flex items-center gap-3 sm:gap-5">
        {units.map(({ val, label, pad }, i) => (
          <div key={label} className="flex items-center gap-3 sm:gap-5">
            {i > 0 && (
              <span className="font-bebas text-2xl sm:text-3xl text-gold/50 mb-4">:</span>
            )}
            <div className="text-center">
              <motion.span
                key={val}
                initial={{ opacity: 0.5, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.15 }}
                className="font-bebas text-[2.8rem] sm:text-[3.5rem] text-light leading-none block"
              >
                {String(val).padStart(pad, '0')}
              </motion.span>
              <span className="text-[0.6rem] tracking-[0.15em] uppercase text-muted mt-1 block">
                {label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
