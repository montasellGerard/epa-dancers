import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EPA Dancers — Clases de Salsa y Bachata con Alicia y Pedro',
  description: 'Escuela de baile latino en Barcelona. Clases grupales e individuales de Salsa y Bachata para todos los niveles con Alicia y Pedro.',
  openGraph: {
    title: 'EPA Dancers',
    description: 'Clases de Salsa y Bachata con Alicia y Pedro',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
