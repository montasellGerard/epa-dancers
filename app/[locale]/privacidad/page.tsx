import type { Metadata } from 'next'
import { notFound }      from 'next/navigation'
import { Link }          from '@/navigation'

export const metadata: Metadata = {
  title:  'Política de Privacidad | EPA Dancers',
  robots: { index: false, follow: true },
}

// TODO(cliente): titular confirmado como "Alicia" (nombre) — faltan apellidos, NIF/DNI, domicilio fiscal y email de contacto.
// Página desactivada a propósito (devuelve 404) mientras el alta de Alicia como autónoma y estos datos
// sigan sin confirmar — decisión explícita de Gerard (20 ago 2026), ver CLIENT-QUESTIONS.md bloque 2.
// Quitar el notFound() de abajo en cuanto estén los 4 datos y se reactiven los enlaces en Footer.tsx.
const PENDING = '[PENDIENTE CLIENTE]'
const TITULAR_NOMBRE = 'Alicia [apellidos pendientes de confirmar]'

export default function PrivacidadPage() {
  notFound()
  return (
    <main className="min-h-screen py-16 px-6" style={{ background: '#FDF6E3' }}>
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="font-sans text-sm font-semibold underline" style={{ color: '#E0157A' }}>
          ← Volver al inicio
        </Link>

        <h1 className="font-black mt-8 mb-10" style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(32px,5vw,44px)', color: '#1A0A00' }}>
          Política de Privacidad
        </h1>

        <div className="font-sans text-[15px] leading-relaxed space-y-6" style={{ color: '#4A3520' }}>
          <section>
            <h2 className="font-bold text-lg mb-2" style={{ color: '#1A0A00' }}>1. Responsable del tratamiento</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Titular:</strong> {TITULAR_NOMBRE}</li>
              <li><strong>NIF/DNI:</strong> {PENDING}</li>
              <li><strong>Domicilio:</strong> {PENDING} — dirección fiscal completa</li>
              <li><strong>Email:</strong> {PENDING}</li>
            </ul>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-2" style={{ color: '#1A0A00' }}>2. Datos que recogemos</h2>
            <p>Este sitio web utiliza Vercel Analytics y Vercel Speed Insights para medir el rendimiento y la experiencia del usuario. Estas herramientas recogen:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Información del dispositivo y navegador (User-Agent anonimizado)</li>
              <li>País/región de origen (sin nivel de ciudad)</li>
              <li>Páginas visitadas y tiempo de carga</li>
              <li>Puntuaciones de Core Web Vitals</li>
            </ul>
            <p className="mt-2">Vercel Analytics está diseñado para respetar la privacidad: no utiliza cookies de seguimiento persistentes, no almacena IPs completas y no crea perfiles individuales de usuario. Este sitio web NO utiliza cookies de publicidad ni herramientas de seguimiento de marketing.</p>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-2" style={{ color: '#1A0A00' }}>3. Finalidad y base legal</h2>
            <p>Los datos se recogen exclusivamente con finalidad de análisis técnico del rendimiento del sitio web (tiempos de carga, errores) y mejora de la experiencia del usuario. Base legal: interés legítimo del responsable (Art. 6.1.f RGPD), consistente en conocer el rendimiento técnico del sitio para mejorarlo.</p>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-2" style={{ color: '#1A0A00' }}>4. Destinatarios</h2>
            <p>Los datos son procesados por Vercel Inc. (proveedor de hosting y analytics), con quien existe un contrato de encargado del tratamiento. Vercel actúa bajo las garantías del marco EU-US Data Privacy Framework. No se ceden datos a terceros con fines comerciales.</p>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-2" style={{ color: '#1A0A00' }}>5. Plazo de conservación</h2>
            <p>Los datos de analytics se conservan durante el plazo establecido por Vercel en sus condiciones de servicio (habitualmente 90 días para datos desagregados).</p>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-2" style={{ color: '#1A0A00' }}>6. Tus derechos</h2>
            <p>Tienes derecho a acceder, rectificar, suprimir, limitar y portabilizar tus datos, así como a oponerte a su tratamiento. Puedes ejercerlos enviando un email a {PENDING}. También puedes presentar una reclamación ante la Agencia Española de Protección de Datos (aepd.es).</p>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-2" style={{ color: '#1A0A00' }}>7. Cookies</h2>
            <p>Este sitio utiliza únicamente cookies técnicas estrictamente necesarias para el funcionamiento básico del sitio. No se instalan cookies de terceros sin tu consentimiento previo. El mapa de Google Maps solo se carga si haces clic en «Ver mapa interactivo», momento en el que Google puede establecer sus propias cookies. Consulta la política de privacidad de Google para más información.</p>
          </section>

          <p className="pt-4">
            <Link href="/aviso-legal" className="font-semibold underline" style={{ color: '#E0157A' }}>Aviso Legal</Link>
          </p>
        </div>
      </div>
    </main>
  )
}
