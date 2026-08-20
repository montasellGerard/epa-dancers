import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name:             'EPA Dancers — Alicia y Pedro',
    short_name:       'EPA Dancers',
    description:      'Clases de Salsa, Bachata, Timba y más en Mollet del Vallès.',
    start_url:        '/es',
    display:          'standalone',
    background_color: '#1C0800',
    theme_color:      '#00C9B1',
    orientation:      'portrait',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  }
}
