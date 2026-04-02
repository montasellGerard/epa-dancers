export type LevelColor = 'inicio' | 'intermedio' | 'avanzado'
export type DayKey     = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun'

export interface ClassSlot {
  level:      string
  dayKey:     DayKey   // translated via messages.schedule.days.*
  time:       string
  levelColor: LevelColor
}

export const schedule: { salsa: ClassSlot[]; bachata: ClassSlot[] } = {
  salsa: [
    { level: 'Inicio 1',     dayKey: 'mon', time: '19h–20h',      levelColor: 'inicio'     },
    { level: 'Inicio 2',     dayKey: 'wed', time: '19h–20h',      levelColor: 'inicio'     },
    { level: 'Intermedio 2', dayKey: 'mon', time: '20h–21h',      levelColor: 'intermedio' },
    { level: 'Intermedio 4', dayKey: 'thu', time: '21h–22h',      levelColor: 'intermedio' },
    { level: 'Avanzado',     dayKey: 'fri', time: '20h–21:30h',   levelColor: 'avanzado'   },
  ],
  bachata: [
    { level: 'Inicio 1',     dayKey: 'tue', time: '19h–20h',      levelColor: 'inicio'     },
    { level: 'Inicio 2',     dayKey: 'thu', time: '20h–21h',      levelColor: 'inicio'     },
    { level: 'Intermedio 2', dayKey: 'tue', time: '19:30h–20:30h',levelColor: 'intermedio' },
    { level: 'Intermedio 4', dayKey: 'tue', time: '20:30h–21:30h',levelColor: 'intermedio' },
    { level: 'Avanzado',     dayKey: 'wed', time: '21h–22:30h',   levelColor: 'avanzado'   },
  ],
}

// Prices — amounts are fixed, labels/descriptions come from messages.schedule.*
export const prices = [
  { amount: '30€', msgKey: 'price1', featured: false },
  { amount: '50€', msgKey: 'price2', featured: false },
  { amount: '65€', msgKey: 'price3', featured: true  },
  { amount: '75€', msgKey: 'price4', featured: false },
]
