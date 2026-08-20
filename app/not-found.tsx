import Link from 'next/link'

export default function NotFound() {
  return (
    <html lang="es">
      <body style={{ margin: 0, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#1C0800', fontFamily: 'Inter, sans-serif' }}>
        <div style={{ textAlign: 'center', padding: 24 }}>
          <p style={{ fontFamily: 'Georgia, serif', fontSize: 64, fontWeight: 900, margin: 0, background: 'linear-gradient(90deg,#00C9B1,#F0B429,#F45E0C,#E0157A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>404</p>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: 8 }}>Esta página no existe.</p>
          <Link href="/es" style={{ display: 'inline-block', marginTop: 24, background: '#E0157A', color: '#fff', fontWeight: 700, fontSize: 14, padding: '12px 28px', borderRadius: 999, textDecoration: 'none' }}>
            Volver al inicio
          </Link>
        </div>
      </body>
    </html>
  )
}
