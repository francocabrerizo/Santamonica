import { useEffect, useRef, useState } from 'react'
import { ArrowRight, X } from 'lucide-react'
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'
import { siteConfig } from '../data/siteConfig'
import type { EditorialDrawer, EditorialSection } from '../types/siteConfig'
import { EucalyptusEngraving, HorizonDivider, MeadowEngraving } from './BotanicalOrnament'
import SafeImage from './SafeImage'

function DrawerContent({
  drawer,
  onClose,
}: {
  drawer: EditorialDrawer
  onClose: () => void
}) {
  if (drawer.kind === 'steps' && drawer.steps) {
    return (
      <ol className="mt-8 space-y-6">
        {drawer.steps.map((step, index) => (
          <li key={step.label} className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/45 font-display text-sm italic text-gold">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div>
              <p className="font-display text-lg text-white">{step.label}</p>
              <p className="mt-1 text-sm leading-relaxed text-cream/80">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    )
  }

  if (drawer.kind === 'gallery' && drawer.gallery) {
    return (
      <div className="mt-8 space-y-8">
        {drawer.gallery.map((item) => (
          <figure key={item.caption} className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                {drawer.beforeLabel && (
                  <p className="mb-2 font-display text-xs italic text-gold/90">
                    {drawer.beforeLabel}
                  </p>
                )}
                <SafeImage
                  src={item.before.src}
                  alt={item.before.alt}
                  className="aspect-[4/5] w-full rounded-xl"
                  imageClassName="rounded-xl object-cover"
                />
              </div>
              <div>
                {drawer.afterLabel && (
                  <p className="mb-2 font-display text-xs italic text-gold/90">
                    {drawer.afterLabel}
                  </p>
                )}
                <SafeImage
                  src={item.after.src}
                  alt={item.after.alt}
                  className="aspect-[4/5] w-full rounded-xl"
                  imageClassName="rounded-xl object-cover"
                />
              </div>
            </div>
            <figcaption className="text-sm leading-relaxed text-cream/80">{item.caption}</figcaption>
          </figure>
        ))}
      </div>
    )
  }

  if (drawer.kind === 'actions' && drawer.actions) {
    return (
      <div className="mt-8 flex flex-col gap-3">
        {drawer.actions.map((action) => {
          const external = action.href.startsWith('http')
          return (
            <a
              key={action.label}
              href={action.href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noreferrer' : undefined}
              onClick={() => {
                if (!external) onClose()
              }}
              className="group flex items-center justify-between rounded-2xl border border-gold/20 bg-forest-soft px-5 py-4 text-left no-underline transition hover:border-gold/50 hover:bg-forest-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              <span className="font-medium text-white">{action.label}</span>
              <ArrowRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-1" />
            </a>
          )
        })}
      </div>
    )
  }

  return null
}

function DetailDrawer({
  section,
  onClose,
}: {
  section: EditorialSection | null
  onClose: () => void
}) {
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (!section) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [section, onClose])

  return (
    <AnimatePresence>
      {section && (
        <>
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.25 }}
            onClick={onClose}
          />
          <motion.aside
            key="panel"
            role="dialog"
            aria-modal="true"
            aria-label={section.drawer.title}
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-xl flex-col border-l border-gold/20 bg-forest p-6 shadow-2xl md:p-10"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={
              reduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 260, damping: 30 }
            }
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-display text-sm italic text-gold">{section.eyebrow}</p>
                <h3 className="mt-2 font-display text-3xl leading-tight text-white md:text-4xl">
                  {section.drawer.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label={section.drawer.closeLabel}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cream/20 text-cream/80 transition hover:border-gold/55 hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-6 overflow-y-auto pr-1">
              <p className="text-[15px] leading-[1.85] text-cream/85">{section.drawer.intro}</p>
              <DrawerContent drawer={section.drawer} onClose={onClose} />
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}

function EditorialBlock({
  section,
  index,
  onOpen,
}: {
  section: EditorialSection
  index: number
  onOpen: (section: EditorialSection) => void
}) {
  const ref = useRef<HTMLElement | null>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const numberY = useTransform(
    scrollYProgress,
    [0, 1],
    [reduceMotion ? 0 : 24, reduceMotion ? 0 : -24],
  )
  const engravingY = useTransform(
    scrollYProgress,
    [0, 1],
    [reduceMotion ? 0 : -28, reduceMotion ? 0 : 34],
  )

  const isLightPaper = index === 1
  const isArchedPortrait = index !== 1

  return (
    <div className={isLightPaper ? 'bg-forest' : ''}>
      {isLightPaper && <HorizonDivider fillClass="text-parchment" />}

      <section
        ref={ref}
        id={section.id}
        className={`relative scroll-mt-24 overflow-hidden px-6 py-20 md:px-10 md:py-28 ${
          isLightPaper ? 'bg-parchment text-ink' : 'bg-forest text-cream'
        }`}
      >
        {/* Grabado botánico sutil en el margen con parallax lento */}
        <motion.div
          aria-hidden="true"
          style={{ y: engravingY }}
          className={`pointer-events-none absolute top-1/2 hidden -translate-y-1/2 select-none lg:block ${
            index === 0
              ? '-left-10 text-gold/[0.08]'
              : index === 1
                ? '-right-8 text-sage/[0.18]'
                : '-left-8 text-gold/[0.08]'
          }`}
        >
          {index === 1 ? (
            <EucalyptusEngraving className="h-[26rem] w-auto" />
          ) : (
            <MeadowEngraving className="h-[22rem] w-auto" />
          )}
        </motion.div>

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-14 lg:gap-20">
            <div
              className={`relative pt-12 md:col-span-6 md:pl-8 lg:pl-12 ${
                section.imageOnLeft ? 'md:order-2' : ''
              }`}
            >
              <motion.span
                aria-hidden="true"
                style={{ y: numberY }}
                className={`pointer-events-none absolute -top-6 left-0 select-none font-display text-[115px] italic leading-none tabular-nums md:-left-4 md:-top-12 md:text-[172px] ${
                  isLightPaper ? 'text-ochre/[0.15]' : 'text-gold/[0.13]'
                }`}
              >
                {section.number}
              </motion.span>

              <motion.div
                initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className={`h-[1.5px] w-9 shrink-0 ${
                      isLightPaper ? 'bg-ochre/80' : 'bg-gold/85'
                    }`}
                  />
                  <span
                    className={`font-display text-sm italic tracking-wide sm:text-base ${
                      isLightPaper ? 'text-ochre' : 'text-gold'
                    }`}
                  >
                    {section.eyebrow}
                  </span>
                </div>

                <h2
                  className={`mb-5 mt-3.5 font-display text-3xl font-normal leading-[1.16] tracking-[-0.02em] sm:text-4xl md:text-[2.85rem] ${
                    isLightPaper ? 'text-ink' : 'text-white'
                  }`}
                >
                  {section.titleLines.map((line, lineIndex) => (
                    <span
                      key={line}
                      className={`block ${
                        lineIndex === 1
                          ? isLightPaper
                            ? 'italic text-ink/90'
                            : 'italic text-cream/95'
                          : ''
                      }`}
                    >
                      {line}
                    </span>
                  ))}
                </h2>

                <p
                  className={`mb-7 max-w-xl text-[15px] leading-[1.9] ${
                    isLightPaper ? 'text-ink/80' : 'text-cream/85'
                  }`}
                >
                  {section.body}
                </p>

                <button
                  type="button"
                  onClick={() => onOpen(section)}
                  className={`group inline-flex items-center gap-2.5 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 ${
                    isLightPaper
                      ? 'border-ink/30 bg-ivory text-ink hover:border-ink hover:bg-ink hover:text-cream focus-visible:outline-ink'
                      : 'border-gold/40 bg-gold/[0.06] text-gold hover:border-gold hover:bg-gold hover:text-action-ink focus-visible:outline-gold'
                  }`}
                >
                  <span>{section.cta.label}</span>
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  />
                </button>
              </motion.div>
            </div>

            <motion.figure
              className={`relative md:col-span-6 ${section.imageOnLeft ? 'md:order-1' : ''}`}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            >
              {isArchedPortrait ? (
                <div className="relative mx-auto max-w-md md:max-w-none">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -inset-2.5 rounded-t-[196px] rounded-b-[26px] border border-gold/20 sm:-inset-3"
                  />
                  <div className="group relative overflow-hidden rounded-t-[188px] rounded-b-[20px] shadow-[0_24px_56px_rgba(0,0,0,0.45)] ring-1 ring-cream/15">
                    <SafeImage
                      src={section.image.src}
                      alt={section.image.alt}
                      className="aspect-[4/5] w-full"
                      imageClassName="object-cover sepia-[0.05] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                </div>
              ) : (
                <div className="relative mx-auto max-w-md rounded-[28px] border border-ink/12 bg-ivory p-3 shadow-[0_24px_56px_rgba(23,38,27,0.16)] sm:p-3.5 md:max-w-none">
                  <div className="group overflow-hidden rounded-[20px] ring-1 ring-ink/10">
                    <SafeImage
                      src={section.image.src}
                      alt={section.image.alt}
                      className="aspect-[4/5] w-full"
                      imageClassName="object-cover sepia-[0.04] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                </div>
              )}

              {section.image.caption && (
                <figcaption
                  className={`mt-4 flex items-center justify-center gap-2 font-display text-xs italic md:justify-start ${
                    isLightPaper ? 'text-ink/65' : 'text-cream/60'
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`h-1.5 w-1.5 rounded-full ${
                      isLightPaper ? 'bg-ochre/75' : 'bg-gold/70'
                    }`}
                  />
                  <span>{section.image.caption}</span>
                </figcaption>
              )}
            </motion.figure>
          </div>
        </div>
      </section>

      {isLightPaper && (
        <div className="bg-parchment">
          <HorizonDivider fillClass="text-forest" />
        </div>
      )}
    </div>
  )
}

export default function EditorialSections() {
  const { editorialSections } = siteConfig
  const [active, setActive] = useState<EditorialSection | null>(null)

  return (
    <>
      <div className="relative z-10">
        {editorialSections.map((section, index) => (
          <EditorialBlock key={section.id} section={section} index={index} onOpen={setActive} />
        ))}
      </div>
      <DetailDrawer section={active} onClose={() => setActive(null)} />
    </>
  )
}
