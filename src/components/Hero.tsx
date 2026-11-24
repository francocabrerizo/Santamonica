import { useEffect, useRef, useState } from 'react'
import {
  LayoutGroup,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from 'framer-motion'
import { siteConfig } from '../data/siteConfig'
import SafeImage from './SafeImage'

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1]

function InstagramGlyph({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

export default function Hero() {
  const { hero } = siteConfig
  const sectionRef = useRef<HTMLElement | null>(null)
  const [activeStopId, setActiveStopId] = useState(hero.progressRail.stops[0]?.targetId ?? '')
  const reduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', reduceMotion ? '0%' : '14%'])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.02, reduceMotion ? 1.02 : 1.08])

  useEffect(() => {
    const elements = hero.progressRail.stops
      .map((stop) => document.getElementById(stop.targetId))
      .filter((element): element is HTMLElement => element !== null)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveStopId(visible.target.id)
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.2, 0.5, 1] },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [hero.progressRail.stops])

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduceMotion ? 0 : 0.1, delayChildren: 0.08 },
    },
  }
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeOut },
    },
  }
  const lineReveal: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: easeOut },
    },
  }

  return (
    <section
      id={hero.id}
      ref={sectionRef}
      className="relative isolate min-h-[100svh] w-full overflow-hidden bg-forest text-cream"
    >
      {/* Fotografía principal unificada con tono cálido */}
      <motion.div
        aria-hidden="true"
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 h-full w-full"
      >
        <SafeImage
          src={hero.image.src}
          alt={hero.image.alt}
          priority={hero.image.priority}
          className="h-full w-full"
          imageClassName="object-cover object-[center_35%] sepia-[0.06] contrast-[1.02]"
        />
      </motion.div>

      {/* Degradados orgánicos y viñeta suave cinematográfica */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-[#0E1810]/55 via-[#121E15]/22 to-[#121E15]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(14,24,16,0.45)_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#121E15] via-[#121E15]/65 to-transparent"
      />

      {/* Riel izquierdo social (solo desktop — únicamente Instagram) */}
      <div className="absolute left-7 top-1/2 z-20 hidden -translate-y-1/2 flex-col items-center gap-4 text-cream lg:flex">
        <span aria-hidden="true" className="h-8 w-[1.5px] bg-gold/75" />
        <span className="rotate-180 text-[10px] font-bold uppercase tracking-[0.28em] text-cream/90 [writing-mode:vertical-rl]">
          {hero.socialRail.label}
        </span>
        <span aria-hidden="true" className="h-6 w-[1.5px] bg-cream/30" />
        {hero.socialRail.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            aria-label={link.label}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full text-cream/90 transition hover:bg-cream/10 hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            <InstagramGlyph className="h-[18px] w-[18px]" />
          </a>
        ))}
      </div>

      {/* Riel derecho de progreso de lectura (solo desktop) */}
      <div className="absolute right-6 top-1/2 z-20 hidden -translate-y-1/2 lg:block">
        <nav aria-label={hero.progressRail.label}>
          <LayoutGroup id="hero-progress">
            {hero.progressRail.stops.map((stop) => {
              const isActive = activeStopId === stop.targetId
              return (
                <button
                  key={stop.targetId}
                  type="button"
                  onClick={() =>
                    document
                      .getElementById(stop.targetId)
                      ?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
                  }
                  className="group relative flex h-12 items-center justify-end gap-3 pl-4 pr-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  <span
                    className={`font-display text-xs tracking-[0.12em] transition-colors duration-300 ${
                      isActive ? 'italic text-gold' : 'text-cream/65 group-hover:text-white'
                    }`}
                  >
                    {stop.label}
                  </span>
                  <span className="relative h-full w-[2px] bg-cream/25">
                    {isActive && (
                      <motion.span
                        layoutId="progress-active"
                        className="absolute inset-0 bg-gold"
                        transition={
                          reduceMotion
                            ? { duration: 0 }
                            : { type: 'spring', stiffness: 300, damping: 30 }
                        }
                      />
                    )}
                  </span>
                </button>
              )
            })}
          </LayoutGroup>
        </nav>
      </div>

      {/* Contenido editorial superpuesto */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 pb-16 pt-28 sm:px-10 md:pb-20 md:pt-32 lg:px-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto w-full max-w-3xl"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3.5">
            <span aria-hidden="true" className="h-[1.5px] w-10 shrink-0 bg-gold/90" />
            <span className="font-display text-sm italic tracking-wide text-gold drop-shadow-[0_1px_6px_rgba(0,0,0,0.45)] sm:text-base">
              {hero.eyebrow}
            </span>
          </motion.div>

          <h1 className="mt-4 font-display text-4xl font-normal leading-[1.14] tracking-[-0.02em] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.38)] sm:text-5xl md:mt-6 md:text-6xl lg:text-[4.7rem] lg:leading-[1.12]">
            {hero.titleLines.map((line, index) => (
              <motion.span
                key={line}
                variants={lineReveal}
                className={`block pb-1 ${index === 1 ? 'italic text-cream' : ''}`}
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.div variants={fadeUp} className="mt-6 flex items-center gap-4 md:mt-8">
            <span aria-hidden="true" className="h-px w-10 bg-gold/75" />
            <a
              href={`#${hero.scrollTargetId}`}
              className="cue-drift inline-block w-fit font-display text-sm italic text-cream/95 no-underline drop-shadow-[0_1px_6px_rgba(0,0,0,0.45)] transition-colors duration-200 hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              {hero.scrollCueLabel}
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4 md:mt-11"
          >
            {hero.actions.map((action) => {
              const external = action.href.startsWith('http')
              return (
                <motion.a
                  key={action.label}
                  href={action.href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noreferrer' : undefined}
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                  className="inline-flex items-center justify-center rounded-full bg-action px-7 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-action-ink no-underline shadow-[0_8px_22px_rgba(0,0,0,0.3)] transition-colors duration-200 hover:bg-action-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:min-w-[162px] md:px-8"
                >
                  {action.label}
                </motion.a>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
