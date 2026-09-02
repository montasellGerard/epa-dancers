export type LevelColor = 'inicio' | 'intermedio' | 'avanzado'
export type DayKey     = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun'
export type Discipline = 'salsa' | 'bachata' | 'cubanos'   // msgKey doubles as messages.schedule.<Discipline>

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

// Real 2026-27 timetable, confirmed by Alicia (29-31 ago 2026). Ajustes puntuales confirmados por Gerard el 2-sep-2026
// (Salsa Inicio 3, Salsa Intermedio 2, Bachata Avanzado — ver historial de commits de este archivo).
export const schedule: { salsa: ClassSlot[]; bachata: ClassSlot[] } = {
  salsa: [
    { level: 'Inicio 1',     dayKey: 'thu', time: '21h–22h',       levelColor: 'inicio'     },
    { level: 'Inicio 2',     dayKey: 'wed', time: '20h–21h',       levelColor: 'inicio'     },
    { level: 'Inicio 3',     dayKey: 'tue', time: '21h–22h',       levelColor: 'inicio'     },
    { level: 'Intermedio 2', dayKey: 'thu', time: '18:45h–19:45h', levelColor: 'intermedio' },
    { level: 'Intermedio 3', dayKey: 'fri', time: '20h–21h',       levelColor: 'intermedio' },
    { level: 'Avanzado',     dayKey: 'wed', time: '21h–22h',       levelColor: 'avanzado'   },
  ],
  bachata: [
    { level: 'Inicio 1',     dayKey: 'thu', time: '20h–21h',       levelColor: 'inicio'     },
    { level: 'Inicio 2',     dayKey: 'tue', time: '20h–21h',       levelColor: 'inicio'     },
    { level: 'Inicio 3',     dayKey: 'mon', time: '21:30h–22:30h', levelColor: 'inicio'     },
    { level: 'Intermedio 2', dayKey: 'mon', time: '19:30h–20:30h', levelColor: 'intermedio' },
    { level: 'Avanzado',     dayKey: 'mon', time: '20:30h–21:30h', levelColor: 'avanzado'   },
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

// ---- Vista "por día" — derivada de schedule + cubanStyles, no es una fuente de datos aparte ----
// Feedback de varios alumnos (recogido por Gerard, 2-sep-2026): quieren poder ver "qué hay tal día"
// en vez de tener que mirar disciplina por disciplina. Mockup aprobado antes de este commit.

export interface DayRow {
  label:      string        // nivel (Salsa/Bachata) o nombre de estilo (Cubanos)
  discipline: Discipline
  time:       string
}

export interface DaySchedule {
  dayKey: DayKey
  rows:   DayRow[]
}

const DAY_ORDER: DayKey[] = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

// Ordena por hora de inicio real (no alfabéticamente) — soporta '21h–22h' y '18:45h–19:45h'.
function startMinutes(time: string): number {
  const match = time.match(/^(\d{1,2})(?::(\d{2}))?h/)
  if (!match) return 0
  const hours   = parseInt(match[1], 10)
  const minutes = match[2] ? parseInt(match[2], 10) : 0
  return hours * 60 + minutes
}

function buildScheduleByDay(): DaySchedule[] {
  const flat: (DayRow & { dayKey: DayKey })[] = [
    ...schedule.salsa.map((r)   => ({ label: r.level, discipline: 'salsa' as const,   time: r.time, dayKey: r.dayKey })),
    ...schedule.bachata.map((r) => ({ label: r.level, discipline: 'bachata' as const, time: r.time, dayKey: r.dayKey })),
    ...cubanStyles.map((r)      => ({ label: r.name,  discipline: 'cubanos' as const, time: r.time, dayKey: r.dayKey })),
  ]

  return DAY_ORDER
    .map((dayKey) => ({
      dayKey,
      rows: flat
        .filter((r) => r.dayKey === dayKey)
        .sort((a, b) => startMinutes(a.time) - startMinutes(b.time))
        .map(({ label, discipline, time }) => ({ label, discipline, time })),
    }))
    .filter((day) => day.rows.length > 0)
}

export const scheduleByDay: DaySchedule[] = buildScheduleByDay()
