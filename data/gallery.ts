export type GalleryCategory = 'clase' | 'congreso' | 'actuacion' | 'taller'

export interface GalleryItem {
  id: string
  title: string
  category: GalleryCategory
  // Cuando haya vídeo real: videoSrc o youtubeId
  // Por ahora solo placeholders
  placeholder: true
}

// Gradientes de fondo para los placeholders (por categoría)
export const categoryConfig: Record<
  GalleryCategory,
  { label: string; gradient: string; accent: string }
> = {
  clase:     { label: 'Clase',      gradient: 'linear-gradient(160deg,#00C9B1 0%,#007A6E 100%)', accent: '#00C9B1' },
  congreso:  { label: 'Congreso',   gradient: 'linear-gradient(160deg,#E0157A 0%,#6B0035 100%)', accent: '#E0157A' },
  actuacion: { label: 'Actuación',  gradient: 'linear-gradient(160deg,#F0B429 0%,#B88B00 100%)', accent: '#F0B429' },
  taller:    { label: 'Taller',     gradient: 'linear-gradient(160deg,#F45E0C 0%,#8C3000 100%)', accent: '#F45E0C' },
}

export const galleryItems: GalleryItem[] = [
  { id: 'g1',  title: 'Salsa en pareja — nivel intermedio',   category: 'clase',     placeholder: true },
  { id: 'g2',  title: 'Congreso de Salsa — Barcelona 2024',   category: 'congreso',  placeholder: true },
  { id: 'g3',  title: 'Actuación fin de temporada',           category: 'actuacion', placeholder: true },
  { id: 'g4',  title: 'Taller de Timba — especial verano',    category: 'taller',    placeholder: true },
  { id: 'g5',  title: 'Bachata sensual — clase avanzado',     category: 'clase',     placeholder: true },
  { id: 'g6',  title: 'Congreso Bachata — Madrid 2024',       category: 'congreso',  placeholder: true },
  { id: 'g7',  title: 'Guaguancó — demostración Alicia',      category: 'actuacion', placeholder: true },
  { id: 'g8',  title: 'Taller Afro — workshop especial',      category: 'taller',    placeholder: true },
]
