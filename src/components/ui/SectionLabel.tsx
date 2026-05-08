'use client'
import { cn } from '@/lib/utils'

interface SectionLabelProps {
  children: React.ReactNode
  color?: 'blue' | 'gold'
  className?: string
}

export default function SectionLabel({ children, color = 'blue', className }: SectionLabelProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-3 text-[0.7rem] font-semibold tracking-[0.25em] uppercase',
        color === 'blue' ? 'text-electric' : 'text-gold',
        className
      )}
    >
      <span
        className={cn(
          'inline-block w-6 h-px',
          color === 'blue' ? 'bg-electric' : 'bg-gold'
        )}
      />
      {children}
    </div>
  )
}
