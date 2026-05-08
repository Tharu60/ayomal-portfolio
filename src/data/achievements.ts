export type Medal = 'gold' | 'silver' | 'bronze' | 'finalist' | '6th' | 'relay-gold'

export interface AchievementItem {
  medal: Medal
  event: string
  discipline: string
  time?: string
  flag?: string
}

export interface AchievementYear {
  year: number
  items: AchievementItem[]
}

export const nationalAchievements: AchievementYear[] = [
  {
    year: 2025,
    items: [
      { medal: 'gold', event: 'National Championships', discipline: '400m Hurdles' },
      { medal: 'gold', event: 'Junior National Championships', discipline: '400m Hurdles' },
      { medal: 'gold', event: 'Junior National Championships', discipline: '400m' },
      { medal: 'gold', event: 'Sir John Tarbet Senior Championships', discipline: '' },
      { medal: 'gold', event: 'National Sports Festival', discipline: '' },
      { medal: 'gold', event: 'All Island School Games', discipline: '400m Hurdles' },
      { medal: 'silver', event: 'All Island School Games', discipline: '400m' },
    ],
  },
  {
    year: 2024,
    items: [
      { medal: 'gold', event: 'National Championships', discipline: '' },
      { medal: 'gold', event: 'National Sports Festival', discipline: '' },
      { medal: 'gold', event: 'Junior National Championships', discipline: '' },
      { medal: 'gold', event: 'Sir John Tarbet Senior Championships', discipline: '' },
    ],
  },
  {
    year: 2023,
    items: [
      { medal: 'gold', event: 'Junior National Championships', discipline: '' },
      { medal: 'gold', event: 'All Island School Games', discipline: '' },
    ],
  },
]

export const internationalAchievements: AchievementYear[] = [
  {
    year: 2025,
    items: [
      {
        medal: 'silver',
        event: 'South Asian Athletics Championships',
        discipline: '400m Hurdles',
        time: '50.29s',
        flag: '🌏',
      },
      {
        medal: 'gold',
        event: 'South Asian Athletics Championships',
        discipline: '4×400m Relay',
        flag: '🌏',
      },
      {
        medal: 'gold',
        event: 'Thailand Open Track & Field Championships',
        discipline: '',
        flag: '🇹🇭',
      },
    ],
  },
  {
    year: 2024,
    items: [
      {
        medal: 'finalist',
        event: 'World Athletics U20 Championships',
        discipline: 'Semi-Finalist',
        flag: '🌍',
      },
      {
        medal: '6th',
        event: 'Asian Junior Athletics Championships',
        discipline: '6th Place',
        flag: '🌏',
      },
    ],
  },
  {
    year: 2023,
    items: [
      {
        medal: 'silver',
        event: 'Commonwealth Youth Games',
        discipline: '',
        flag: '🌐',
      },
      {
        medal: 'bronze',
        event: 'Asian U18 Athletics Championships',
        discipline: '',
        flag: '🌏',
      },
    ],
  },
]

export const records = [
  { title: 'National Youth Record', subtitle: '400m Hurdles', flag: '🇱🇰' },
  { title: 'National Junior Record', subtitle: '400m Hurdles — 49.90s', flag: '🇱🇰' },
  { title: 'South Asian Junior Record', subtitle: '400m Hurdles', flag: '🌏' },
  { title: 'John Tarbet Championship Record', subtitle: 'Multiple Years', flag: '🏅' },
  { title: 'Third Sri Lankan Ever Sub-50s', subtitle: '400m Hurdles', flag: '⚡' },
]
