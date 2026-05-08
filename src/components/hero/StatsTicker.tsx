const tickerItems = [
  { val: '49.90s', label: '400m Hurdles PB' },
  { val: '46.29s', label: '400m PB' },
  { val: '19', label: 'Years Old' },
  { label: '🥈 South Asian Championships 2025' },
  { label: '🥇 Thailand Open 2025' },
  { val: '3', label: 'National Records' },
  { label: 'World Athletics U20 Semi-Finalist' },
  { label: '🏆 10+ National Titles' },
  { label: 'Coach — Anura Bandara' },
  { label: '🎯 LA 2028 Olympic Mission' },
  { label: '🥇 South Asian 4×400m Relay Gold' },
  { label: '🥈 Commonwealth Youth Games 2023' },
]

export default function StatsTicker() {
  const doubled = [...tickerItems, ...tickerItems]

  return (
    <div
      className="overflow-hidden border-t border-b border-[rgba(0,194,255,0.15)]"
      style={{ background: 'var(--navy-mid)' }}
    >
      <div
        className="flex whitespace-nowrap animate-ticker"
        aria-hidden="true"
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-2 px-10 py-3 text-[0.73rem] tracking-[0.12em] uppercase text-muted border-r border-[rgba(0,194,255,0.12)] flex-shrink-0"
          >
            {item.val && (
              <span className="font-barlow font-bold text-[1rem] text-gold">{item.val}</span>
            )}
            {item.label}
          </div>
        ))}
      </div>
    </div>
  )
}
