export type EventType = 'taller' | 'congreso'

export interface DanceEvent {
  day: string
  month: string
  type: EventType
  name: string
  location: string
  time: string
  link: string
}

export const events: DanceEvent[] = [
  {
    day: '12',
    month: 'Abr',
    type: 'taller',
    name: 'Taller de Salsa On2 — Trabajo de pies',
    location: 'Barcelona',
    time: '18:00h – 20:00h',
    link: '#',
  },
  {
    day: '26',
    month: 'Abr',
    type: 'congreso',
    name: 'Congreso de Salsa & Bachata — Andorra',
    location: 'Andorra la Vella',
    time: '26–28 Abril',
    link: '#',
  },
  {
    day: '17',
    month: 'May',
    type: 'taller',
    name: 'Taller de Bachata Sensual — Cuerpo y conexión',
    location: 'Barcelona',
    time: '17:00h – 19:00h',
    link: '#',
  },
  {
    day: '07',
    month: 'Jun',
    type: 'congreso',
    name: 'Festival Latino — Actuación de Alicia & Pedro',
    location: 'Por confirmar',
    time: 'Todo el fin de semana',
    link: '#',
  },
]
