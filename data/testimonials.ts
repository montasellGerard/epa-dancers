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
 *   level       — nivel de danza (opcional — solo si el alumno lo indica)
 *   style       — estilo que practica (opcional)
 *   since       — tiempo en la escuela (opcional, texto libre, ej: "2 años")
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
  level?: DanceLevel
  style?: DanceStyle
  since?: string
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

// Testimonios reales enviados por Alicia por WhatsApp (29-ago-2026). Sustituyen a los placeholders de lanzamiento.
export const testimonials: Testimonial[] = [
  {
    id: 'mario',
    name: 'Mario',
    photo: '/testimonials/mario.jpg',
    initials: 'MA',
    avatarColor: 'turquoise',
    since: '4 años',
    quote: 'Personas excepcionales tanto en lo "profesional" como en lo personal. 4 años de cursos y con la paciencia de ellos progresando. Ayudan a no darse por vencido y te apoyan durante las clases.',
    highlight: '4 años sin rendirse',
    order: 1,
    featured: true,
  },
  {
    id: 'mel',
    name: 'Mel',
    photo: '/testimonials/mel.jpg',
    initials: 'ME',
    avatarColor: 'magenta',
    quote: 'Gran academia, con altísimo nivel de enseñanza, pasión por el baile y conocimientos musicales y técnicos sobre la salsa y bachata. Haberlos conocido ha sido uno de los grandes giros de mi vida.',
    highlight: 'Uno de los grandes giros de mi vida',
    order: 2,
    featured: true,
  },
  {
    id: 'victor',
    name: 'Víctor',
    photo: null,
    initials: 'VI',
    avatarColor: 'gold',
    quote: 'Esta escuela destaca por su autenticidad: no siguen modas ni lo comercial, defienden de verdad su propio estilo. Pero lo mejor es lo familiar y acogedor que es el ambiente, te hacen sentir parte desde el primer día.',
    highlight: 'Autenticidad y ambiente familiar',
    order: 3,
    featured: true,
  },
]
