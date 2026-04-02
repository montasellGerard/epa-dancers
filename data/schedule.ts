export type LevelColor = 'inicio' | 'intermedio' | 'avanzado'

export interface ClassSlot {
  level: string
  day: string
  time: string
  levelColor: LevelColor
}

export const schedule: { salsa: ClassSlot[]; bachata: ClassSlot[] } = {
  salsa: [
    { level: 'Inicio 1',     day: 'Lun', time: '19h–20h',         levelColor: 'inicio'     },
    { level: 'Inicio 2',     day: 'Mié', time: '19h–20h',         levelColor: 'inicio'     },
    { level: 'Intermedio 2', day: 'Lun', time: '20h–21h',         levelColor: 'intermedio' },
    { level: 'Intermedio 4', day: 'Jue', time: '21h–22h',         levelColor: 'intermedio' },
    { level: 'Avanzado',     day: 'Vie', time: '20h–21:30h',      levelColor: 'avanzado'   },
  ],
  bachata: [
    { level: 'Inicio 1',     day: 'Mar', time: '19h–20h',         levelColor: 'inicio'     },
    { level: 'Inicio 2',     day: 'Jue', time: '20h–21h',         levelColor: 'inicio'     },
    { level: 'Intermedio 2', day: 'Mar', time: '19:30h–20:30h',   levelColor: 'intermedio' },
    { level: 'Intermedio 4', day: 'Mar', time: '20:30h–21:30h',   levelColor: 'intermedio' },
    { level: 'Avanzado',     day: 'Mié', time: '21h–22:30h',      levelColor: 'avanzado'   },
  ],
}

export const prices = [
  {
    amount: '29€',
    label: '1 curso / mes',
    description: '1 clase semanal, cualquier estilo',
    featured: false,
  },
  {
    amount: '49€',
    label: '2 cursos / mes',
    description: '2 clases semanales a elegir',
    featured: false,
  },
  {
    amount: '64€',
    label: '3 cursos / mes',
    description: 'El favorito de nuestros alumnos',
    featured: true,
    badge: 'Más popular',
  },
  {
    amount: '74.5€',
    label: 'Tarifa plana',
    description: 'Acceso ilimitado a todas las clases',
    featured: false,
  },
]
