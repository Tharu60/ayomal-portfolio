export interface TimelineEvent {
  year: string
  title: string
  description: string
  tag: 'international' | 'national' | 'record' | 'future' | 'origin'
  highlight?: boolean
  future?: boolean
}

export const timelineEvents: TimelineEvent[] = [
  {
    year: 'Early Years',
    title: 'From Football to the Track',
    description:
      'Started sports journey playing football in Hatton. Transitioned to track & field at Sri Pada Central College, Hatton — discovering a natural talent for the 400m hurdles that would change everything.',
    tag: 'origin',
  },
  {
    year: '2023',
    title: 'International Breakthrough',
    description:
      'Announced himself on the continental stage with Silver at the Commonwealth Youth Games and Bronze at the Asian U18 Athletics Championships — establishing Sri Lanka\'s next great hurdler on the world map.',
    tag: 'international',
  },
  {
    year: '2024',
    title: 'World Stage — U20 Championships Semi-Finalist',
    description:
      'Competed at the World Athletics U20 Championships, reaching the semi-finals. Finished 6th at the Asian Junior Athletics Championships. Swept all four major national titles in dominant fashion.',
    tag: 'international',
    highlight: true,
  },
  {
    year: 'Oct 2025',
    title: 'History Made — 49.90 Seconds',
    description:
      'Set a new National Junior Record of 49.90s at the All-Island School Games — becoming only the third Sri Lankan ever to run sub-50 seconds in the 400m hurdles. The fastest by a Sri Lankan in 23 years.',
    tag: 'record',
    highlight: true,
  },
  {
    year: '2025',
    title: 'South Asian Champion — Silver & Gold',
    description:
      'Won Silver in the 400m Hurdles (50.29s) and Gold in the 4×400m Relay at the South Asian Athletics Championships. Added Thailand Open gold to a growing international medal collection.',
    tag: 'international',
  },
  {
    year: '2028',
    title: 'The Dream — Los Angeles Olympics',
    description:
      'The ultimate goal. Every race, every record, every session is preparation for the world\'s biggest stage — the Olympic Games, Los Angeles 2028. The mission is clear: qualify, compete, medal.',
    tag: 'future',
    future: true,
  },
]
