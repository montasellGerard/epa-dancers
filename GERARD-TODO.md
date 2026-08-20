# EPA Dancers — Tareas que solo puedes hacer tú (Gerard)

Ordenadas por dependencia. Las de la fase A no requieren al cliente; las de la fase B salen de la reunión (ver CLIENT-QUESTIONS.md).

## Fase A — Ya, sin cliente

1. **Verificar el drift repo↔producción antes de cualquier deploy.** He reconstruido las páginas legales de producción dentro del repo, pero comprueba en Vercel (Deployments → deployment activo → Source) si el deploy actual tiene ALGO MÁS que no esté en GitHub. Si hay más código huérfano, recupéralo antes de pushear.
2. **Revisar mis cambios y hacer commit + push.** He dejado el working tree modificado (sin commitear) para que revises el diff. Sugerencia: un commit por bloque (`fix: conversion blockers`, `feat: legal pages in repo`, `chore: ci`).
3. **Regla de proceso a partir de ahora: nunca deployar desde local.** Solo push a main → deploy automático de Vercel. Es lo que ha causado el drift.
4. **Comprar dominio** (`epadancers.com`/`.es`) y conectarlo en Vercel. Después: actualizar `BASE_URL` en `app/[locale]/layout.tsx`, `app/sitemap.ts` y `app/robots.ts` (lo he dejado centralizado en `lib/site.ts` — un solo sitio).
5. **Alta en Google Search Console** con el dominio nuevo y enviar el sitemap.
6. **Decidir sobre Playwright**: he dejado CI con lint+types+build. Un smoke test e2e (home carga en 3 idiomas, CTAs apuntan al wa.me correcto) son ~2h y habría cazado el bug del número falso. Recomendado pero opcional.

## Fase B — Después de la reunión con el cliente

7. **Sustituir placeholders con datos reales** — todos están marcados con `TODO(cliente)` en el código; búscalos con `grep -r "TODO(cliente)"`:
   - `lib/constants.ts` → número de WhatsApp real (1 línea, lo más crítico)
   - `lib/site.ts` → cifras (alumnos, años, congresos), dirección, horarios
   - `components/Location.tsx` → embed de Google Maps real (Maps → Compartir → Insertar mapa)
   - `data/testimonials.ts` → 3 testimonios reales
   - `data/events.ts` → eventos futuros reales
   - `data/gallery.ts` → fotos/vídeos reales
   - Páginas legales → NIF, titular y domicilio reales
8. **og-image definitiva**: he generado una provisional con la foto actual. Si el cliente da mejor foto/logo, regenerarla (o me lo pides).
9. **Google Business Profile** con el cliente (verificación por correo postal tarda ~1 semana — empezar cuanto antes). Pedir a 3-5 alumnos reseña con foto.
10. **Sesión de fotos/vídeo** o recopilar material de su Instagram para la galería.
11. **Decisión EN sí/no** — si no, quitar locale y simplificar.
12. **Deploy final + QA manual en móvil real** (iPhone y Android: probar el click de WhatsApp de verdad, el vídeo, el mapa).
13. **Entregar al cliente**: mini-guía de mantenimiento (cómo pedirte cambios de horarios/eventos/testimonios — los datos están todos en `data/` y `lib/site.ts`, editables sin tocar componentes).

## Criterio de "web terminada"

Sin `TODO(cliente)` en el código, dominio propio activo, GBP verificado, CI en verde, probado en móvil real, y el cliente ha validado horarios/precios/textos legales. Todo lo demás (sección Estilos, blog, más idiomas) es v2.
