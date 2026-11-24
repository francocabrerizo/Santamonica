import { useEffect } from 'react'
import Lenis from 'lenis'

export default function SmoothScroll() {
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (media.matches) return

    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      touchMultiplier: 1.5,
    })

    let rafId = 0
    const raf = (time: number) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    const onAnchorClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement | null)?.closest('a[href^="#"]')
      if (!target) return
      const href = target.getAttribute('href')
      if (!href || href === '#') return
      const element = document.querySelector<HTMLElement>(href)
      if (!element) return

      event.preventDefault()
      lenis.scrollTo(element, { offset: -88, duration: 1.1 })
      window.history.pushState(null, '', href)
    }

    document.addEventListener('click', onAnchorClick)

    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        document.removeEventListener('click', onAnchorClick)
        cancelAnimationFrame(rafId)
        lenis.destroy()
      }
    }
    media.addEventListener('change', onChange)

    return () => {
      document.removeEventListener('click', onAnchorClick)
      media.removeEventListener('change', onChange)
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return null
}
