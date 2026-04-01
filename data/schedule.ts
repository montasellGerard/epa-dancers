export interface ClassSlot {
  level: string
  day: string
  time: string
}

export const schedule: { salsa: ClassSlot[]; bachata: ClassSlot[] } = {
  salsa: [
    { level: 'Inicio 1',      day: 'Lun', time: '19h–20h'   },
    { level: 'Inicio 2',      day: 'Jue', time: '21h–22h'   },
    { level: 'Intermedio 4',  day: 'Jue', time: '21h–22h'   },
  ],
  bachata: [
    { level: 'Inicio 2',      day: 'Jue', time: '20h–21h'   },
    { level: 'Intermedio 2',  day: 'Mar', time: '19:30h–20:30h' },
    { level: 'Intermedio 4',  day: 'Mar', time: '20:30h–21:30h' },
  ],
}

export const prices = [
  { amount: '29€',   label: '1 curso / mes',   featured: false },
  { amount: '49€',   label: '2 cursos / mes',  featured: false },
  { amount: '64€',   label: '3 cursos / mes',  featured: true, badge: 'Más popular' },
  { amount: '74.5€', label: 'Tarifa plana',    featured: false },
]
