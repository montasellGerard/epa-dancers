export type GalleryCategory = 'clase' | 'congreso' | 'actuacion' | 'taller'

export interface GalleryItem {
  id:        string
  title:     string
  category:  GalleryCategory
  videoSrc?: string      // vídeo local real
  poster?:   string      // frame de portada (JPG en /videos/posters/)
  credit?:   string      // atribución obligatoria del material de terceros
  placeholder?: true     // sin vídeo todavía
}

// Gradientes de fondo por categoría
export const categoryConfig: Record<
  GalleryCategory,
  { label: string; gradient: string; accent: string }
> = {
  clase:     { label: 'Clase',     gradient: 'linear-gradient(160deg,#00C9B1 0%,#007A6E 100%)', accent: '#00C9B1' },
  congreso:  { label: 'Congreso',  gradient: 'linear-gradient(160deg,#E0157A 0%,#6B0035 100%)', accent: '#E0157A' },
  actuacion: { label: 'Actuación', gradient: 'linear-gradient(160deg,#F0B429 0%,#B88B00 100%)', accent: '#F0B429' },
  taller:    { label: 'Taller',    gradient: 'linear-gradient(160deg,#F45E0C 0%,#8C3000 100%)', accent: '#F45E0C' },
}

export const galleryItems: GalleryItem[] = [
  { id: 'g1', title: 'Salsa en pareja — nivel intermedio',  category: 'clase',     placeholder: true },
  {
    id:       'g2',
    title:    'La Clave Festival — Alicia y Pedro',
    category: 'congreso',
    videoSrc: '/videos/congreso-la-clave.mp4',
    poster:   '/videos/posters/congreso-la-clave.jpg',
    credit:   '@laclave_festival',
  },
  { id: 'g3', title: 'Actuación fin de temporada',          category: 'actuacion', placeholder: true },
  {
    id:       'g4',
    title:    'Taller ACM — Alicia y Pedro',
    category: 'taller',
    videoSrc: '/videos/Video_Taller_ACM.mp4',
    poster:   '/videos/posters/taller-acm.jpg',
  },
  { id: 'g5', title: 'Bachata sensual — clase avanzado',    category: 'clase',     placeholder: true },
  {
    id:       'g6',
    title:    'Elito, Alicia y Pedro',
    category: 'congreso',
    videoSrc: '/videos/congreso-elito.mp4',
    poster:   '/videos/posters/congreso-elito.jpg',
  },
  { id: 'g7', title: 'Rumba — demostración Alicia',         category: 'actuacion', placeholder: true },
  {
    id:       'g8',
    title:    'QueChimba SBK — Alicia y Pedro',
    category: 'taller',
    videoSrc: '/videos/taller-quechimba.mp4',
    poster:   '/videos/posters/taller-quechimba.jpg',
    credit:   '@pablorios.photography',
  },
]
