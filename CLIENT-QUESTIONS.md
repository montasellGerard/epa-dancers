# EPA Dancers — Checklist reunión con cliente (Alicia y Pedro)

Objetivo de la reunión: cerrar TODOS los datos reales que faltan para lanzar. Marca cada punto al obtenerlo. Lo que no se responda queda como placeholder visible → la web no se lanza hasta completar los bloques 1–4.

**20 ago 2026:** Gerard pasó un brief en PDF (precios, dirección, accesos, cifras de portada) + logo real. Resuelve varios puntos de los bloques 1, 3 y 4 (marcados abajo). Pendiente: coordenadas GPS exactas del local (el geocoding automático está bloqueado en el entorno de Claude — sacarlas manualmente de Google Maps y actualizar `geo` en `app/[locale]/layout.tsx`), horario detallado 2026-27, datos legales completos, testimonios, eventos y galería.

**20 ago 2026 (2):** Gerard confirmó el WhatsApp real y que el titular es Alicia.

**20 ago 2026 (3):** Gerard respondió varios puntos sueltos del bloque 3 y 1. Fotos/vídeos de galería siguen pendientes de que el cliente los envíe (bloque 5, sin cambios).

## 1. Contacto y ubicación (BLOQUEANTE — hoy la web tiene datos falsos)

- [x] **Número de WhatsApp real** → +34 677 83 67 75 (confirmado por Gerard, ago 2026). Actualizado en `lib/constants.ts` — todos los CTA del sitio ya apuntan al número real.
- [x] ¿Quién responde el WhatsApp y en qué horario? → Alicia, a lo largo de todo el día (confirmado, ago 2026). No se ha añadido copy específico en la web (no hay hueco natural para ello); si se quiere comunicar, se podría añadir una nota junto al CTA de WhatsApp.
- [x] **Dirección exacta del local** → Carrer Can Flequer, 6-8, 08100 Mollet del Vallès (dato del brief del cliente, ago 2026). Actualizado en `lib/site.ts`, `Location.tsx` y JSON-LD.
- [x] ¿El local tiene nombre? → Sí, Gimnasio Iron Project. Reflejado en la tarjeta de dirección y en el query de Maps.
- [ ] Email de contacto público (para aviso legal y alternativa a WhatsApp)
- [ ] ¿Existe ficha de **Google Business Profile**? Si no: crear juntos en la reunión (15 min, es la acción de marketing nº1)

## 2. Datos legales (BLOQUEANTE — obligatorio por LSSI)

**⚠️ 20 ago 2026: Alicia NO está dada de alta como autónoma actualmente.** Gerard preguntó si se podía falsear el aviso legal (poner que sí lo está) o esconderlo para que pareciera que aún no se había hecho — se descartó falsear el documento (es declarar algo falso, publicado, con fecha; agrava cualquier inspección futura en vez de proteger). Se optó por lo segundo: **`/aviso-legal` y `/privacidad` están desactivadas a propósito (devuelven 404) y sin enlace en el Footer**, como si no se hubieran llegado a hacer. El contenido sigue en el código (con `notFound()` al principio de cada página) para reactivarlo rápido en cuanto se resuelva. Recomendación dada (no soy gestor ni abogado colegiado, es orientación general): dar de alta a Alicia como autónoma es rápido (alta en Hacienda inmediata, RETA en un día, tarifa plana ~80€/mes el primer año) y es la única opción que reduce el riesgo real en vez de solo maquillarlo — publicar la web tal cual (precios, horario, dirección, GBP) aumenta la exposición a una inspección aunque el aviso legal esté oculto.

- [~] Titular de la actividad → Alicia (confirmado, ago 2026). **Faltan apellidos completos** y si es autónoma o hay sociedad de por medio. Reflejado como parcial (`TITULAR_NOMBRE`) en `aviso-legal/page.tsx` y `privacidad/page.tsx` — no se puede lanzar solo con el nombre de pila, y de momento la ruta ni siquiera es accesible (ver nota de arriba).
- [ ] NIF/CIF
- [ ] Domicilio fiscal (puede coincidir con la dirección del local, o no — confirmar)
- [ ] Confirmar que el aviso legal y la política de privacidad actuales de la web llevan estos datos reales — sigue bloqueado hasta tener apellidos + NIF + domicilio fiscal + email, Y hasta que Alicia esté dada de alta (o se decida cómo proceder)

## 3. Oferta: clases, horarios y precios (BLOQUEANTE)

- [ ] **Confirmar parrilla de horarios real curso 2026-27.** Cliente confirma que son 15h semanales exactas (stat ya actualizado en `lib/site.ts`), pero la grid de `data/schedule.ts` sigue mostrando el layout viejo de 10 clases — Gerard la enviará más adelante. No lanzar sin esto: hoy hay una contradicción visible entre el stat del Hero (15h) y el horario detallado de la sección Horarios.
- [x] Confirmar precios → 29,90 / 49,90 / 65 / 75€ (dato del brief, ago 2026). Actualizado en `data/schedule.ts`, FAQ y JSON-LD.
- [x] Formas de pago aceptadas → Efectivo (confirmado, ago 2026). Transferencia/Bizum sin confirmar — se ha quitado "Bank Transfer" del JSON-LD (`paymentAccepted`) hasta saberlo, y se ha añadido "en efectivo" a la respuesta de la FAQ de pago en los 3 idiomas.
- [x] ¿Timba, Rumba y Afro tienen clase propia o son contenido dentro de Salsa? → El brief confirma "Rumba" (no Guaguancó) como uno de los 5 estilos; sustituido en toda la web. Sigue pendiente si Rumba/Timba tienen clase propia o son contenido dentro de Salsa/Bachata.
- [x] Clases individuales: precio → "consultar" (confirmado). Cómo se reservan sigue igual: por WhatsApp (ya en FAQ).
- [x] ¿Hacen coreografías para bodas / grupos privados / team building? → De momento NO quieren esto en la web (confirmado, ago 2026). No se ha añadido ninguna sección ni mención nueva. La mención mínima ya existente de clases individuales/en pareja en la FAQ "individuales" se ha dejado tal cual (ya estaba confirmada en una respuesta anterior) — si Gerard quisiera quitarla también, avisar explícitamente.
- [x] Política de la clase de prueba gratis → NO existe tal política formal (confirmado, ago 2026): es apertura general a que la gente venga a probar una clase, no una "clase de prueba" con condiciones. Reescrito el SnapBar en los 3 idiomas para no prometer nada específico ("Ven a probar una clase, sin compromiso" en vez de "Primera clase de prueba").
- [x] ¿Agosto cerrado? Calendario de temporada → Sí, cerrado en agosto. Empiezan el lunes 7 de septiembre de 2026 (confirmado, ago 2026 — 7 sept 2026 cae en lunes). Añadida nota de temporada bajo el título de la sección Horarios (`schedule.seasonNote`, 3 idiomas) y actualizada la etiqueta a "Horarios 2026–27".

## 4. Cifras reales (hoy la web se contradice: 80+ vs 200+ alumnos)

- [x] Años de experiencia enseñando → 20+ (Alicia lleva más de 20 años, primero en otra escuela y ahora en EPA Dancers). Sustituye el "8 años" que había en toda la web.
- [x] Alumnos actuales / totales históricos → 120 (dato del brief, ago 2026). Sustituye la contradicción 80+/200+.
- [ ] Congresos en los que han participado (¿20+?)
- [ ] Cualquier logro verificable (títulos, formación, artistas con los que han trabajado)

## 5. Contenido audiovisual (la galería tiene 7 de 8 huecos vacíos)

- [ ] 6–10 fotos buenas: clases con alumnos, actuaciones, congresos (horizontal y vertical)
- [ ] 2–3 vídeos cortos (<30s, formato vertical ideal) — pueden ser los mejores reels de su Instagram
- [ ] Foto para compartir en redes (og-image): ¿les vale la foto de presentación actual o prefieren otra?
- [x] ¿Tienen logo real? → Sí, recibido ago 2026. Sustituye el logotipo tipográfico "EPA" generado en Navbar, Footer, favicon e iconos PWA (`public/images/logo.png`).
- [ ] Permiso de imagen de los alumnos que salgan en fotos/vídeos (basta consentimiento informado simple)

## 6. Testimonios (los actuales son de ejemplo — hay que sustituirlos)

- [ ] 3 alumnos reales dispuestos a dar testimonio (nombre + nivel + tiempo en la escuela + 2-3 frases)
- [ ] Idealmente: pedirles también reseña en Google Business Profile (doble uso)
- [ ] ¿Foto o solo iniciales? (con foto convierte más)

## 7. Eventos (los 4 de la web ya pasaron)

- [ ] Próximos talleres/congresos confirmados de aquí a diciembre (nombre, fecha, lugar, hora, link de inscripción si existe)
- [ ] Si no hay ninguno cerrado: ¿qué suele haber en otoño? (mejor sección vacía con aviso que eventos caducados)

## 8. Decisiones de negocio

- [ ] **Dominio propio**: proponer `epadancers.com` / `epadancers.es` (~10-15€/año). ¿Quién lo paga y a nombre de quién se registra? → Gerard lo habla directamente con Alicia y Pedro (ago 2026), no bloqueante para el desarrollo mientras tanto.
- [ ] ¿Necesitan la versión en inglés? (mantenerla cuesta; catalán sí tiene sentido en Mollet)
- [ ] ¿Objetivo de la web?: ¿solo captar alumnos nuevos o también comunicar a alumnos actuales? (afecta a eventos/avisos)
- [ ] Redes además de Instagram: ¿TikTok, YouTube? (enlazar solo las activas)
- [ ] ¿Quién mantendrá el contenido tras la entrega? (horarios/eventos cambian — definir si te lo piden a ti o les preparo instrucciones)

## 9. Extra (si hay tiempo)

- [ ] Historia de cómo empezaron juntos (humaniza la sección "Nosotros", 3-4 frases)
- [ ] ¿Aceptan alumnos sin pareja? ¿rotación en clase? (ya está en FAQ — confirmar que las 7 respuestas actuales son correctas)
- [ ] Aforo/límite por clase (útil para urgencia: "plazas limitadas")
