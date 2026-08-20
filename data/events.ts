export type EventType = 'taller' | 'congreso'

export interface DanceEvent {
  id: string
  day: string
  month: string
  dateISO: string   // 'YYYY-MM-DD' — para detectar eventos pasados
  type: EventType
  name: string
  location: string
  time: string
  link: string
}

// TODO(cliente): replace with real upcoming events. Past events are hidden automatically.
export const events: DanceEvent[] = [
  {
    id: 'taller-salsa-on2-abr-2026',
    day: '12',
    month: 'Abr',
    dateISO: '2026-04-12',
    type: 'taller',
    name: 'Taller de Salsa On2 — Trabajo de pies',
    location: 'Barcelona',
    time: '18:00h – 20:00h',
    link: '#',
  },
  {
    id: 'congreso-salsa-bachata-andorra-abr-2026',
    day: '26',
    month: 'Abr',
    dateISO: '2026-04-26',
    type: 'congreso',
    name: 'Congreso de Salsa & Bachata — Andorra',
    location: 'Andorra la Vella',
    time: '26–28 Abril',
    link: '#',
  },
  {
    id: 'taller-bachata-sensual-may-2026',
    day: '17',
    month: 'May',
    dateISO: '2026-05-17',
    type: 'taller',
    name: 'Taller de Bachata Sensual — Cuerpo y conexión',
    location: 'Barcelona',
    time: '17:00h – 19:00h',
    link: '#',
  },
  {
    id: 'festival-latino-jun-2026',
    day: '07',
    month: 'Jun',
    dateISO: '2026-06-07',
    type: 'congreso',
    name: 'Festival Latino — Actuación de Alicia & Pedro',
    location: 'Por confirmar',
    time: 'Todo el fin de semana',
    link: '#',
  },
]
