import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          deep: '#050A12',
          DEFAULT: '#0A192F',
          mid: '#0D2137',
        },
        electric: '#00C2FF',
        'electric-dim': '#0096CC',
        gold: {
          DEFAULT: '#FFB800',
          dim: '#CC9200',
        },
        muted: '#8899AA',
        light: '#F8FAFC',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        bebas: ['var(--font-bebas)', 'sans-serif'],
        barlow: ['var(--font-barlow)', 'sans-serif'],
      },
      animation: {
        ticker: 'ticker 28s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.7s ease both',
        'fade-in-down': 'fadeInDown 0.7s ease both',
        'track-slide': 'trackSlide 3s ease-in-out infinite alternate',
        'dot-pulse': 'dotPulse 2s infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          from: { opacity: '0', transform: 'translateY(-16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        trackSlide: {
          '0%': { opacity: '0.4' },
          '100%': { opacity: '1' },
        },
        dotPulse: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(0.8)' },
        },
      },
      backgroundImage: {
        'grid-pattern': `
          linear-gradient(rgba(0,194,255,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,194,255,0.04) 1px, transparent 1px)
        `,
        'hero-glow-left': 'radial-gradient(circle, rgba(0,194,255,0.12) 0%, transparent 70%)',
        'hero-glow-right': 'radial-gradient(circle, rgba(255,184,0,0.08) 0%, transparent 70%)',
        'gradient-track': 'linear-gradient(90deg, transparent, #00C2FF 30%, #FFB800 70%, transparent)',
        'gradient-timeline': 'linear-gradient(180deg, #00C2FF, #FFB800, transparent)',
        'gradient-pb-card': 'linear-gradient(90deg, #00C2FF, #FFB800)',
        'gradient-olympic': 'linear-gradient(135deg, #050A12 0%, #0A192F 50%, #050A12 100%)',
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
      boxShadow: {
        'glow-blue': '0 0 20px rgba(0,194,255,0.3)',
        'glow-gold': '0 0 20px rgba(255,184,0,0.3)',
        'glow-blue-sm': '0 0 12px rgba(0,194,255,0.5)',
        'glow-gold-sm': '0 0 12px rgba(255,184,0,0.5)',
      },
    },
  },
  plugins: [],
}

export default config
