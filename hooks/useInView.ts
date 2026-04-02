'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Hook reutilizable que dispara `inView = true` la primera vez que
 * el elemento referenciado entra en el viewport.
 * Ideal para animaciones de entrada (scroll-triggered).
 */
export function useInView<T extends HTMLElement = HTMLElement>(
  threshold = 0.15
) {
  const ref     = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(el) // Solo dispara una vez
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, inView }
}
