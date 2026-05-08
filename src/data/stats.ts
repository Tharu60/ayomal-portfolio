export const personalBests = [
  {
    event: '400m Hurdles',
    time: '49',
    decimal: '.90',
    unit: 's',
    record: 'National Junior Record',
    recordShort: 'NJR · 2025',
    date: 'October 2025',
    venue: 'All-Island School Games',
    note: 'Only the 3rd Sri Lankan ever to break the 50-second barrier',
    color: 'blue' as const,
  },
  {
    event: '400m Flat',
    time: '46',
    decimal: '.29',
    unit: 's',
    record: 'Elite National Standard',
    recordShort: 'National Standard',
    date: '2025',
    venue: '',
    note: 'Exceptional speed endurance across both hurdle and flat disciplines',
    color: 'gold' as const,
  },
]

export const quickStats = [
  { value: '19', suffix: '', label: 'Years Old', color: 'gold' as const },
  { value: '49', suffix: '.90s', label: '400mH Personal Best', color: 'blue' as const },
  { value: '46', suffix: '.29s', label: '400m Personal Best', color: 'blue' as const },
  { value: '3', suffix: '', label: 'National Records', color: 'gold' as const },
  { value: '10', suffix: '+', label: 'National Titles', color: 'gold' as const },
  { value: '5', suffix: '+', label: 'Intl Medals', color: 'blue' as const },
]

export const hurdlesProgression = [
  { year: '2022', time: 53.2, label: '53.20s' },
  { year: '2023', time: 51.85, label: '51.85s' },
  { year: '2024', time: 50.7, label: '50.70s' },
  { year: 'SA 2025', time: 50.29, label: '50.29s' },
  { year: 'NR 2025', time: 49.9, label: '49.90s ★' },
]

export const olympicTarget = {
  event: '400m Hurdles',
  olympicAStandard: 48.40,
  currentPB: 49.90,
  targetYear: 2027,
  gapToStandard: 1.50,
}
