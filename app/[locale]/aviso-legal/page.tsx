import type { Metadata } from 'next'
import { notFound }      from 'next/navigation'
import { Link }          from '@/navigation'
import { BASE_URL }      from '@/lib/site'

export const metadata: Metadata = {
  title:  'Aviso Legal | EPA Dancers',
  robots: { index: false, follow: true },
}

/* Legal text is provided in Spanish only (governing language). */
// TODO(cliente): titular confirmado como "Alicia" (nombre) — faltan apellidos, NIF/DNI, domicilio fiscal y email de contacto.
// Página desactivada a propósito (devuelve 404) mientras el alta de Alicia como autónoma y estos datos
// sigan sin confirmar — decisión explícita de Gerard (20 ago 2026), ver CLIENT-QUESTIONS.md bloque 2.
// Quitar el notFound() de abajo en cuanto estén los 4 datos y se reactiven los enlaces en Footer.tsx.
const PENDING = '[PENDIENTE CLIENTE]'
const TITULAR_NOMBRE = 'Alicia [apellidos pendientes de confirmar]'

export default function AvisoLegalPage() {
  notFound()
  return (
    <main className="min-h-screen py-16 px-6" style={{ background: '#FDF6E3' }}>
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="font-sans text-sm font-semibold underline" style={{ color: '#E0157A' }}>
          ← Volver al inicio
        </Link>

        <h1 className="font-black mt-8 mb-10" style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(32px,5vw,44px)', color: '#1A0A00' }}>
          Aviso Legal
        </h1>

        <div className="font-sans text-[15px] leading-relaxed space-y-6" style={{ color: '#4A3520' }}>
          <section>
            <h2 className="font-bold text-lg mb-2" style={{ color: '#1A0A00' }}>1. Datos del titular (Art. 10 LSSI-CE)</h2>
            <p>En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), se informa:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Titular:</strong> {TITULAR_NOMBRE}</li>
              <li><strong>NIF/DNI:</strong> {PENDING}</li>
              <li><strong>Domicilio:</strong> {PENDING} — dirección fiscal completa</li>
              <li><strong>Email de contacto:</strong> {PENDING}</li>
              <li><strong>Actividad:</strong> Escuela de baile latino — EPA Dancers</li>
            </ul>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-2" style={{ color: '#1A0A00' }}>2. Objeto y ámbito de aplicación</h2>
            <p>El presente Aviso Legal regula el acceso y uso del sitio web {BASE_URL} (en adelante, «el sitio web»), titularidad del responsable indicado en el apartado anterior. El acceso al sitio web implica la aceptación plena de las condiciones aquí recogidas. EPA Dancers se reserva el derecho a modificar este aviso en cualquier momento, siendo responsabilidad del usuario revisarlo periódicamente.</p>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-2" style={{ color: '#1A0A00' }}>3. Propiedad intelectual</h2>
            <p>Todos los contenidos del sitio web (textos, imágenes, diseño, código fuente, logotipos, etc.) son propiedad de EPA Dancers o de sus autores, y están protegidos por la legislación española e internacional de propiedad intelectual e industrial. Queda prohibida su reproducción, distribución o comunicación pública sin autorización expresa y por escrito del titular.</p>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-2" style={{ color: '#1A0A00' }}>4. Limitación de responsabilidad</h2>
            <p>EPA Dancers no garantiza la disponibilidad continua del sitio web ni la ausencia de errores en sus contenidos. El usuario acepta que el uso del sitio es bajo su propia responsabilidad.</p>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-2" style={{ color: '#1A0A00' }}>5. Legislación aplicable</h2>
            <p>Este Aviso Legal se rige por la legislación española. Para cualquier controversia, las partes se someten a los juzgados y tribunales competentes conforme a la ley.</p>
          </section>

          <p className="pt-4">
            <Link href="/privacidad" className="font-semibold underline" style={{ color: '#E0157A' }}>Política de Privacidad</Link>
          </p>
        </div>
      </div>
    </main>
  )
}
