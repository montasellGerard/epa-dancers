import createMiddleware from 'next-intl/middleware'
import { routing }      from './i18n/routing'

export default createMiddleware(routing)

export const config = {
  // Match all paths except Next.js internals and static files
  matcher: ['/((?!_next|_vercel|favicon.ico|og-image.jpg|.*\\.(?:svg|png|webp|jpg|jpeg|gif|ico|css|js|mp4|webm|mov|ogg)).*)'],
}
