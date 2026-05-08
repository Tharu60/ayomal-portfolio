'use client'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

interface CountUpNumberProps {
  end: number
  suffix?: string
  className?: string
  duration?: number
}

export default function CountUpNumber({
  end,
  suffix = '',
  className,
  duration = 2,
}: CountUpNumberProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 })

  return (
    <span ref={ref} className={className}>
      {inView ? (
        <CountUp end={end} duration={duration} suffix={suffix} />
      ) : (
        '0'
      )}
    </span>
  )
}
