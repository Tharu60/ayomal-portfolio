'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, Globe, Flag } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import SectionLabel from '@/components/ui/SectionLabel'
import RevealWrapper from '@/components/ui/RevealWrapper'
import { siteConfig } from '@/data/site'

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  subject: z.string().min(4, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})
type FormData = z.infer<typeof schema>

const contactItems = [
  {
    icon: Phone,
    label: 'Phone / WhatsApp',
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, '')}`,
  },
  {
    icon: Mail,
    label: 'Email',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Globe,
    label: 'World Athletics Profile',
    value: 'View Official Profile ↗',
    href: siteConfig.worldAthleticsUrl,
    external: true,
  },
  {
    icon: Flag,
    label: 'Affiliation',
    value: siteConfig.affiliation,
    href: null,
  },
]

export default function ContactSection() {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    setSending(true)
    await new Promise((r) => setTimeout(r, 1200))
    console.log('Form data:', data)
    setSending(false)
    setSent(true)
    reset()
    setTimeout(() => setSent(false), 5000)
  }

  const inputClass =
    'w-full bg-navy-deep border border-[rgba(0,194,255,0.15)] px-4 py-3 text-[0.88rem] text-light placeholder:text-muted/50 focus:outline-none focus:border-electric transition-colors duration-200'

  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-12 lg:px-16"
      style={{ background: 'var(--navy)' }}
    >
      <SectionLabel className="mb-3">Get In Touch</SectionLabel>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-bebas tracking-[0.04em] leading-none mb-12"
        style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
      >
        For Sponsorships, <br />
        <span className="text-electric">Media & Opportunities</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
        {/* Contact items */}
        <RevealWrapper>
          <div className="flex flex-col gap-3 mb-8">
            {contactItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-4 p-4 border border-[rgba(0,194,255,0.15)] transition-colors duration-300 hover:border-[rgba(0,194,255,0.3)]"
                style={{ background: 'var(--navy-deep)' }}
              >
                <div
                  className="w-11 h-11 flex items-center justify-center border flex-shrink-0"
                  style={{
                    background: 'rgba(0,194,255,0.08)',
                    borderColor: 'rgba(0,194,255,0.15)',
                  }}
                >
                  <item.icon size={18} color="var(--blue)" />
                </div>
                <div>
                  <div className="text-[0.65rem] tracking-[0.15em] uppercase text-electric mb-0.5">
                    {item.label}
                  </div>
                  <div className="text-[0.9rem] text-light font-medium">
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noopener noreferrer' : undefined}
                        className="hover:text-electric transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </RevealWrapper>

        {/* Contact Form / CTA */}
        <RevealWrapper delay={0.15}>
          <div
            className="p-8 border"
            style={{
              background: 'linear-gradient(135deg, rgba(0,194,255,0.06) 0%, rgba(255,184,0,0.03) 100%)',
              borderColor: 'rgba(0,194,255,0.2)',
            }}
          >
            <h3 className="font-bebas text-[1.8rem] leading-[1.1] mb-2 tracking-[0.04em]">
              Partner with <br />
              <span className="text-gold">Sri Lanka&apos;s Next</span>
              <br /> Olympic Contender
            </h3>
            <p className="text-[0.85rem] text-muted leading-[1.7] mb-6">
              Whether you represent a brand, a university, a sports federation, or media — reach out
              to discuss partnership opportunities.
            </p>

            {sent ? (
              <div className="border border-[rgba(0,194,255,0.3)] bg-[rgba(0,194,255,0.08)] px-5 py-4 text-[0.88rem] text-electric">
                ✅ Message sent! We&apos;ll be in touch soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
                <div>
                  <input
                    {...register('name')}
                    placeholder="Your Name"
                    className={inputClass}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-[0.72rem] mt-1">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="Email Address"
                    className={inputClass}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-[0.72rem] mt-1">{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <input
                    {...register('subject')}
                    placeholder="Subject (e.g. Brand Sponsorship)"
                    className={inputClass}
                  />
                  {errors.subject && (
                    <p className="text-red-400 text-[0.72rem] mt-1">{errors.subject.message}</p>
                  )}
                </div>
                <div>
                  <textarea
                    {...register('message')}
                    placeholder="Your message..."
                    rows={4}
                    className={`${inputClass} resize-none`}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-[0.72rem] mt-1">{errors.message.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="bg-electric text-navy-deep font-bold text-[0.78rem] tracking-[0.1em] uppercase px-8 py-3.5 mt-1 hover:bg-sky-300 hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {sending ? 'Sending...' : 'Send Message →'}
                </button>
              </form>
            )}
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
