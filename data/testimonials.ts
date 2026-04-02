/**
 * TESTIMONIOS DE ALUMNOS — EPA DANCERS
 *
 * ⚠️  Este archivo es gestionado exclusivamente por Alicia y Pedro.
 *     Los usuarios NO pueden añadir comentarios desde la web.
 *     Para añadir un nuevo testimonio, añade un objeto al array `testimonials`.
 *
 * Campos:
 *   id          — identificador único (kebab-case)
 *   name        — nombre del alumno
 *   photo       — ruta en /public/testimonials/ o null (usa avatar con initials)
 *   initials    — 2 letras para el avatar de fallback (ej: "ML")
 *   avatarColor — color del avatar: 'magenta' | 'turquoise' | 'gold' | 'orange'
 *   level       — nivel de danza
 *   style       — estilo que practica
 *   since       — tiempo en la escuela (texto libre, ej: "2 años")
 *   quote       — testimonio (máx. 200 caracteres recomendados)
 *   highlight   — frase clave destacada en badge (opcional, máx. 60 caracteres)
 *   order       — orden de aparición (ascendente)
 *   featured    — si aparece en el bloque principal de la web
 */

export type DanceLevel = 'Iniciación' | 'Intermedio' | 'Avanzado'
export type DanceStyle = 'Salsa' | 'Bachata' | 'Salsa & Bachata'
export type AvatarColor = 'magenta' | 'turquoise' | 'gold' | 'orange'

export interface Testimonial {
  id: string
  name: string
  photo: string | null
  initials: string
  avatarColor: AvatarColor
  level: DanceLevel
  style: DanceStyle
  since: string
  quote: string
  highlight?: string
  order: number
  featured: boolean
}

export const avatarGradients: Record<AvatarColor, string> = {
  magenta:   'linear-gradient(135deg, #E0157A, #A00C58)',
  turquoise: 'linear-gradient(135deg, #00C9B1, #007A6E)',
  gold:      'linear-gradient(135deg, #F0B429, #B88B00)',
  orange:    'linear-gradient(135deg, #F45E0C, #B83900)',
}

export const testimonials: Testimonial[] = [
  {
    id: 'maria-lopez-salsa',
    name: 'María López',
    photo: null,
    initials: 'ML',
    avatarColor: 'magenta',
    level: 'Intermedio',
    style: 'Salsa',
    since: '2 años',
    quote: 'Llegué sin saber mover los pies y ahora voy a congresos. Alicia y Pedro tienen una paciencia y una energía que te enganchan desde el primer día.',
    highlight: 'De cero a congresos en 2 años',
    order: 1,
    featured: true,
  },
  {
    id: 'carlos-ruiz-bachata',
    name: 'Carlos Ruiz',
    photo: null,
    initials: 'CR',
    avatarColor: 'turquoise',
    level: 'Avanzado',
    style: 'Bachata',
    since: '3 años',
    quote: 'EPA Dancers es mi segunda familia. La comunidad que han creado Alicia y Pedro es única en Barcelona. No solo aprendes a bailar, aprendes a disfrutarlo.',
    highlight: 'Una comunidad única en Barcelona',
    order: 2,
    featured: true,
  },
  {
    id: 'laura-martinez-salsa-bachata',
    name: 'Laura Martínez',
    photo: null,
    initials: 'LM',
    avatarColor: 'gold',
    level: 'Iniciación',
    style: 'Salsa & Bachata',
    since: '8 meses',
    quote: 'Empecé con miedo y sin ritmo. Pedro y Alicia hacen que todo parezca fácil y que nunca te sientas mal por equivocarte. Ahora espero las clases cada semana.',
    highlight: 'Las clases que esperaba cada semana',
    order: 3,
    featured: true,
  },
]
