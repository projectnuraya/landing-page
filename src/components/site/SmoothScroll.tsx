'use client'

import Lenis from 'lenis'
import { useEffect } from 'react'

/** Starts Lenis smooth scrolling and exposes it for `scrollToSection`. */
export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
    })

    ;(window as unknown as { __lenis?: unknown }).__lenis = lenis

    let rafId: number
    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      delete (window as unknown as { __lenis?: unknown }).__lenis
    }
  }, [])

  return null
}
