/**
 * Single source of truth for site-wide data.
 * Every value marked TODO(cliente) must be confirmed before launch.
 * Consumed by: Hero, About, Footer, Location, layout JSON-LD, sitemap, robots.
 */

// TODO(cliente): replace with custom domain (e.g. https://epadancers.com) once purchased
export const BASE_URL = 'https://epa-dancers.vercel.app'

export const STATS = {
  years:         { val: 20,  suffix: '+' },  // Confirmed by Alicia: 20+ years teaching (first at another school, now at EPA Dancers)
  styles:        { val: 5,   suffix: ''  },  // Salsa, Bachata, Timba, Rumba, Afro
  weeklyClasses: { val: 15,  suffix: ''  },  // Confirmed exact: 15h/week. NOTE: data/schedule.ts grid still shows the old 10-class layout — client will send the real 2026-27 grid later (see GERARD-TODO.md). Update schedule.ts to match before launch.
  students:      { val: 120, suffix: '+' },  // Confirmed via client brief (previously showed conflicting 80+/200+)
  congresses:    { val: 20,  suffix: '+' },  // TODO(cliente): confirm
} as const

export const ADDRESS = {
  street:     'Carrer Can Flequer, 6-8',
  postalCode: '08100',
  city:       'Mollet del Vallès',
  region:     'Vallès Oriental',
  venue:      'Gimnasio Iron Project',
  full:       'Carrer Can Flequer, 6-8, 08100 Mollet del Vallès, Barcelona', // Confirmed via client brief
} as const

/** Weekly opening hours — keep Location card, footer and JSON-LD in sync. */
export const OPENING_HOURS = [
  { dayKey: 'dayMonday',    schemaDay: 'Monday',    opens: '19:00', closes: '22:00', label: '19:00 – 22:00 h' },
  { dayKey: 'dayTuesday',   schemaDay: 'Tuesday',   opens: '19:00', closes: '22:00', label: '19:00 – 22:00 h' },
  { dayKey: 'dayWednesday', schemaDay: 'Wednesday', opens: '19:00', closes: '22:30', label: '19:00 – 22:30 h' },
  { dayKey: 'dayThursday',  schemaDay: 'Thursday',  opens: '19:00', closes: '22:00', label: '19:00 – 22:00 h' },
  { dayKey: 'dayFriday',    schemaDay: 'Friday',    opens: '20:00', closes: '21:30', label: '20:00 – 21:30 h' },
] as const
