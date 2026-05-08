'use client'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, ReferenceLine, Area, AreaChart,
} from 'recharts'
import { hurdlesProgression, olympicTarget } from '@/data/stats'

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="border px-4 py-3 text-[0.78rem]"
        style={{
          background: 'var(--navy)',
          borderColor: 'rgba(0,194,255,0.25)',
        }}
      >
        <p className="text-muted tracking-wider uppercase mb-1">{label}</p>
        <p className="font-bebas text-2xl text-electric">{payload[0].value.toFixed(2)}s</p>
      </div>
    )
  }
  return null
}

export default function PBProgressionChart() {
  return (
    <div
      className="border border-[rgba(0,194,255,0.15)] p-6 md:p-8"
      style={{ background: 'var(--navy)' }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h3 className="font-bebas text-[1.5rem] tracking-[0.05em] text-light">
            400m Hurdles Progression
          </h3>
          <p className="text-[0.75rem] text-muted tracking-wide mt-1">
            Personal Best times 2022–2025
          </p>
        </div>
        <div className="flex items-center gap-4 text-[0.7rem] tracking-wider uppercase text-muted">
          <span className="flex items-center gap-1.5">
            <span className="w-6 h-px bg-electric inline-block" />
            PB Progression
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-6 h-px bg-gold inline-block" style={{ borderTop: '2px dashed' }} />
            Olympic A Standard
          </span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={260}>
        <AreaChart data={hurdlesProgression} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="pbGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00C2FF" stopOpacity={0.15} />
              <stop offset="95%" stopColor="#00C2FF" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,194,255,0.08)" />
          <XAxis
            dataKey="year"
            tick={{ fill: 'var(--muted)', fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            domain={[48, 54]}
            tick={{ fill: 'var(--muted)', fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => `${v}s`}
            width={40}
          />
          <Tooltip content={<CustomTooltip />} />
          <ReferenceLine
            y={olympicTarget.olympicAStandard}
            stroke="var(--gold)"
            strokeDasharray="6 3"
            strokeWidth={1.5}
            label={{
              value: `Olympic A: ${olympicTarget.olympicAStandard}s`,
              position: 'insideTopRight',
              fill: 'var(--gold)',
              fontSize: 10,
            }}
          />
          <Area
            type="monotone"
            dataKey="time"
            stroke="#00C2FF"
            strokeWidth={2.5}
            fill="url(#pbGradient)"
            dot={{ fill: '#00C2FF', strokeWidth: 0, r: 5 }}
            activeDot={{ fill: '#00C2FF', strokeWidth: 2, stroke: '#fff', r: 7 }}
          />
        </AreaChart>
      </ResponsiveContainer>

      <div className="mt-4 flex gap-6 flex-wrap">
        <div className="text-[0.72rem] tracking-wide text-muted">
          <span className="text-electric font-semibold">-3.30s</span> improvement since 2022
        </div>
        <div className="text-[0.72rem] tracking-wide text-muted">
          <span className="text-gold font-semibold">{olympicTarget.gapToStandard}s</span> gap to Olympic A standard
        </div>
        <div className="text-[0.72rem] tracking-wide text-muted">
          Target: <span className="text-light font-semibold">sub-{olympicTarget.olympicAStandard}s</span> by {olympicTarget.targetYear}
        </div>
      </div>
    </div>
  )
}
