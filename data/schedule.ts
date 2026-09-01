export type LevelColor = 'inicio' | 'intermedio' | 'avanzado'
export type DayKey     = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun'

export interface ClassSlot {
  level:      string
  dayKey:     DayKey   // translated via messages.schedule.days.*
  time:       string
  levelColor: LevelColor
}

export interface CubanStyleSlot {
  name:   string   // Cuban style name — shown as-is, not translated (Rumba, Afro Cubano, Estilo chico)
  dayKey: DayKey
  time:   string
}

// Real 2026-27 timetable, confirmed by Alicia (29-31 ago 2026). Replaces the old placeholder grid.
export const schedule: { salsa: ClassSlot[]; bachata: ClassSlot[] } = {
  salsa: [
    { level: 'Inicio 1',     dayKey: 'thu', time: '21h–22h', levelColor: 'inicio'     },
    { level: 'Inicio 2',     dayKey: 'wed', time: '20h–21h', levelColor: 'inicio'     },
    { level: 'Inicio 3',     dayKey: 'tue', time: '20h–21h', levelColor: 'inicio'     },
    { level: 'Intermedio 2', dayKey: 'thu', time: '19h–20h', levelColor: 'intermedio' },
    { level: 'Intermedio 3', dayKey: 'fri', time: '20h–21h', levelColor: 'intermedio' },
    { level: 'Avanzado',     dayKey: 'wed', time: '21h–22h', levelColor: 'avanzado'   },
  ],
  bachata: [
    { level: 'Inicio 1',     dayKey: 'thu', time: '20h–21h',       levelColor: 'inicio'     },
    { level: 'Inicio 2',     dayKey: 'tue', time: '20h–21h',       levelColor: 'inicio'     },
    // Día confirmado por Gerard (1-sep-2026): lunes, dentro del horario de apertura (19h-22:30h) y sin solape con Intermedio 2.
    { level: 'Inicio 3',     dayKey: 'mon', time: '21:30h–22:30h', levelColor: 'inicio'     },
    { level: 'Intermedio 2', dayKey: 'mon', time: '19:30h–20:30h', levelColor: 'intermedio' },
    { level: 'Avanzado',     dayKey: 'tue', time: '20:30h–21:30h', levelColor: 'avanzado'   },
  ],
}

// Rumba, Afro Cubano y Estilo chico (afro) — sin niveles definidos por la escuela, se muestran como estilo único.
export const cubanStyles: CubanStyleSlot[] = [
  { name: 'Rumba',                dayKey: 'mon', time: '19h–20h' },
  { name: 'Afro Cubano',          dayKey: 'wed', time: '19h–20h' },
  { name: 'Estilo chico (afro)',  dayKey: 'wed', time: '20h–21h' },
]

// Prices — amounts are fixed, labels/descriptions come from messages.schedule.*
// Confirmed by client brief (Aug 2026): 29,90 / 49,90 / 65 / 75€. Clases privadas: precio a consultar (ya reflejado en FAQ "individuales").
export const prices = [
  { amount: '29,90€', msgKey: 'price1', featured: false },
  { amount: '49,90€', msgKey: 'price2', featured: false },
  { amount: '65€',    msgKey: 'price3', featured: true  },
  { amount: '75€',    msgKey: 'price4', featured: false },
]
