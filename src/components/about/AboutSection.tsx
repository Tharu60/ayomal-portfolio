'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { School, MapPin, Zap, User, Dumbbell, Globe } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import RevealWrapper from '@/components/ui/RevealWrapper'
import { siteConfig } from '@/data/site'

const infoCards = [
  { icon: School, label: 'School', value: 'Ambagamuwa Central College' },
  { icon: MapPin, label: 'Hometown', value: 'Hatton, Sri Lanka' },
  { icon: Zap, label: 'Specialty Events', value: '400m Hurdles & 400m Flat' },
  { icon: User, label: 'Coach', value: 'Anura Bandara' },
  { icon: Dumbbell, label: 'Started Athletics', value: 'Sri Pada Central College (from football)' },
  { icon: Globe, label: 'Profile', value: 'World Athletics', isLink: true, href: siteConfig.worldAthleticsUrl },
]

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-12 lg:px-16"
      style={{ background: 'var(--navy-deep)' }}
    >
      <SectionLabel className="mb-3">The Athlete</SectionLabel>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-bebas tracking-[0.04em] leading-none mb-12"
        style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
      >
        The Journey of <br />
        <span className="text-electric">Ayomal Akalanka</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Text + Portrait */}
        <RevealWrapper>
          <div className="space-y-5 text-[0.93rem] text-light/70 leading-[1.85]">
            <p>
              Born in Hatton and raised in the hill country of Sri Lanka,{' '}
              <span className="text-electric font-semibold">Ayomal Akalanka</span> has emerged as
              one of South Asia&apos;s most exciting young track & field talents — a name the
              athletics world is beginning to know well.
            </p>
            <p>
              His journey began not on the track, but on the football field. After transitioning to
              athletics at{' '}
              <span className="text-electric font-semibold">Sri Pada Central College, Hatton</span>,
              he showed an extraordinary natural ability for the 400m hurdles — a notoriously
              demanding event that tests speed, strength, and technique in equal measure.
            </p>

            <blockquote className="border-l-[3px] border-gold pl-6 my-7">
              <p className="font-barlow font-semibold text-[1.25rem] text-light leading-[1.5]">
                &ldquo;In October 2025, at just 19 years old, Ayomal made history — clocking{' '}
                <span className="text-gold">49.90 seconds</span> at the All-Island School Games,
                becoming only the third Sri Lankan ever to break the 50-second barrier in the 400m
                hurdles.&rdquo;
              </p>
            </blockquote>

            <p>
              He trains under the guidance of{' '}
              <span className="text-electric font-semibold">Coach Anura Bandara</span>, balancing
              elite-level training with his academic commitments — a testament to his discipline and
              focus. Today he competes for{' '}
              <span className="text-electric font-semibold">Ambagamuwa Central College</span> and
              represents Sri Lanka on the international stage with one clear goal:
            </p>
            <p className="text-gold font-bold text-[1rem] tracking-[0.04em]">
              To compete at the Los Angeles 2028 Olympic Games.
            </p>
          </div>
        </RevealWrapper>

        {/* Portrait + Info Cards */}
        <RevealWrapper delay={0.2}>
          {/* Portrait image */}
          <div className="relative w-full aspect-[3/4] mb-5 overflow-hidden border border-[rgba(0,194,255,0.15)]">
            <Image
              src="/images/about-portrait.jpg"
              alt="Ayomal Akalanka — Sri Lanka 21st Asian U20 Athletics Championships"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Bottom gradient */}
            <div
              className="absolute bottom-0 left-0 right-0 h-20"
              style={{ background: 'linear-gradient(to bottom, transparent, rgba(5,10,18,0.8))' }}
            />
            {/* Caption badge */}
            <div className="absolute bottom-3 left-3 right-3">
              <span className="text-[0.62rem] tracking-[0.12em] uppercase text-muted/70">
                🌏 21st Asian U20 Athletics Championships · Dubai, UAE 2024
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {infoCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-center gap-4 p-4 border border-[rgba(0,194,255,0.15)] transition-colors duration-300 hover:border-[rgba(0,194,255,0.4)]"
                style={{ background: 'var(--navy)' }}
              >
                <div className="w-10 h-10 flex items-center justify-center border border-[rgba(0,194,255,0.2)] flex-shrink-0"
                  style={{ background: 'rgba(0,194,255,0.08)' }}>
                  <card.icon size={18} color="var(--blue)" />
                </div>
                <div>
                  <div className="text-[0.65rem] tracking-[0.12em] uppercase text-muted mb-0.5">
                    {card.label}
                  </div>
                  <div className="text-[0.9rem] font-semibold text-light">
                    {card.isLink ? (
                      <a
                        href={card.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-electric hover:text-sky-300 transition-colors"
                      >
                        {card.value} ↗
                      </a>
                    ) : (
                      card.value
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
