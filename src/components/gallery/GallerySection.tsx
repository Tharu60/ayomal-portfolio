'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, ZoomIn } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'

const galleryImages = [
  {
    src: '/images/gallery/g01-hurdle-clearance.jpg',
    alt: 'Ayomal clearing a hurdle at the Sir John Tarbet Championship',
    caption: 'Sir John Tarbet Championship · 2025',
    span: 'col-span-1 row-span-2',
  },
  {
    src: '/images/gallery/g02-tarbet-lead.jpg',
    alt: 'Ayomal leading the field at Sir John Tarbet Championships',
    caption: 'Dominating the field · Sir John Tarbet 2025',
    span: 'col-span-1',
  },
  {
    src: '/images/gallery/g04-trophy-tarbet-2025.jpg',
    alt: 'Ayomal with trophy at Ritzbury Sir John Tarbet Schools Athletic Championship 2025',
    caption: 'Champion · Sir John Tarbet 2025',
    span: 'col-span-1',
  },
  {
    src: '/images/gallery/g03-tarbet-wide.jpg',
    alt: 'Wide shot of Ayomal leading a race at Sir John Tarbet',
    caption: 'Leading the pack · Sir John Tarbet 2025',
    span: 'col-span-1',
  },
  {
    src: '/images/gallery/g06-scoreboard-celebration.jpg',
    alt: 'Ayomal celebrating pointing at the scoreboard after a record time',
    caption: 'Pointing at his record time · 2025',
    span: 'col-span-1',
  },
  {
    src: '/images/gallery/g05-record-scoreboard.jpg',
    alt: 'Ayomal celebrating pointing at the scoreboard',
    caption: 'Record celebration · 2025',
    span: 'col-span-1',
  },
  {
    src: '/images/gallery/g09-starting-blocks.jpg',
    alt: 'Ayomal exploding out of the starting blocks',
    caption: 'Explosive start · Sri Lanka Kit',
    span: 'col-span-1',
  },
  {
    src: '/images/gallery/g07-sprint-closeup.jpg',
    alt: 'Close-up of Ayomal sprinting in full stride',
    caption: 'Full stride · Sir John Tarbet 2025',
    span: 'col-span-1',
  },
  {
    src: '/images/gallery/g10-school-games-lead.jpg',
    alt: 'Ayomal leading at the All Island School Games',
    caption: 'All Island School Games 2024',
    span: 'col-span-1',
  },
  {
    src: '/images/gallery/g12-post-race.jpg',
    alt: 'Ayomal post-race on track Sri Lanka kit',
    caption: 'Post-race · Sri Lanka Athletics',
    span: 'col-span-1',
  },
  {
    src: '/images/gallery/g11-ceylon-athletics.jpg',
    alt: 'Ayomal leading Ceylon Athletics race',
    caption: 'National Championships · Leading',
    span: 'col-span-1',
  },
  {
    src: '/images/gallery/g13-tarbet-field.jpg',
    alt: 'Wide field shot at Sir John Tarbet Championships',
    caption: 'Sir John Tarbet · Stadium atmosphere',
    span: 'col-span-1',
  },
]

export default function GallerySection() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  const prev = () => setLightbox((i) => (i !== null ? (i - 1 + galleryImages.length) % galleryImages.length : null))
  const next = () => setLightbox((i) => (i !== null ? (i + 1) % galleryImages.length : null))

  return (
    <section
      id="gallery"
      className="py-24 px-6 md:px-12 lg:px-16"
      style={{ background: 'var(--navy-deep)' }}
    >
      <SectionLabel className="mb-3">Photos & Videos</SectionLabel>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-bebas tracking-[0.04em] leading-none mb-4"
        style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
      >
        Race <span className="text-electric">Gallery</span>
      </motion.h2>
      <p className="text-muted text-[0.88rem] mb-12">
        Competition moments from Ayomal&apos;s journey — from national tracks to international arenas.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
        {galleryImages.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="relative aspect-square overflow-hidden group cursor-pointer border border-[rgba(0,194,255,0.08)] hover:border-[rgba(0,194,255,0.4)] transition-all duration-300"
            onClick={() => setLightbox(i)}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-[rgba(5,10,18,0.6)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
              <ZoomIn size={22} color="white" className="opacity-80" />
              <p className="text-[0.68rem] text-white/80 text-center px-3 leading-snug">
                {img.caption}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-sm px-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-4xl w-full max-h-[85vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
                <Image
                  src={galleryImages[lightbox].src}
                  alt={galleryImages[lightbox].alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 80vw"
                />
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 text-center pb-3">
                <span className="text-[0.75rem] text-white/60 tracking-wide">
                  {galleryImages[lightbox].caption}
                </span>
              </div>

              {/* Close */}
              <button
                className="absolute top-3 right-3 p-2 text-white/60 hover:text-white transition-colors"
                onClick={() => setLightbox(null)}
              >
                <X size={22} />
              </button>

              {/* Prev / Next */}
              <button
                className="absolute left-3 top-1/2 -translate-y-1/2 p-3 text-white/50 hover:text-white text-2xl font-bebas tracking-widest transition-colors"
                onClick={prev}
              >
                ‹
              </button>
              <button
                className="absolute right-3 top-1/2 -translate-y-1/2 p-3 text-white/50 hover:text-white text-2xl font-bebas tracking-widest transition-colors"
                onClick={next}
              >
                ›
              </button>

              {/* Counter */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 text-[0.68rem] tracking-[0.2em] uppercase text-white/40">
                {lightbox + 1} / {galleryImages.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
