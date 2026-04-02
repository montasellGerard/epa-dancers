/**
 * Minimal root layout required by Next.js.
 * The actual <html> / <body> structure lives in app/[locale]/layout.tsx
 * which is the effective root for all localised routes.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
