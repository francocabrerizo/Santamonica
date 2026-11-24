import { createElement, useRef, useState } from 'react'
import { ArrowRight, Plus } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { siteConfig } from '../data/siteConfig'
import { getIcon } from '../utils/icons'
import {
  BotanicalSprig,
  EucalyptusEngraving,
  HorizonDivider,
  MeadowEngraving,
} from './BotanicalOrnament'

export default function HelpAndFaq() {
  const { otherWays, faq } = siteConfig
  const reduceMotion = useReducedMotion()
  const [openFaqId, setOpenFaqId] = useState<string | null>(faq.items[0]?.id ?? null)
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([])
  const helpRef = useRef<HTMLElement | null>(null)
  const faqRef = useRef<HTMLElement | null>(null)

  const { scrollYProgress: helpScroll } = useScroll({
    target: helpRef,
    offset: ['start end', 'end start'],
  })
  const helpEngravingY = useTransform(
    helpScroll,
    [0, 1],
    [reduceMotion ? 0 : -26, reduceMotion ? 0 : 28],
  )

  const { scrollYProgress: faqScroll } = useScroll({
    target: faqRef,
    offset: ['start end', 'end start'],
  })
  const faqEngravingY = useTransform(
    faqScroll,
    [0, 1],
    [reduceMotion ? 0 : -22, reduceMotion ? 0 : 24],
  )

  const handleFaqKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    const count = faq.items.length
    if (count === 0) return

    let nextIndex: number | null = null
    if (event.key === 'ArrowDown') {
      nextIndex = (index + 1) % count
    } else if (event.key === 'ArrowUp') {
      nextIndex = (index - 1 + count) % count
    } else if (event.key === 'Home') {
      nextIndex = 0
    } else if (event.key === 'End') {
      nextIndex = count - 1
    }

    if (nextIndex !== null) {
      event.preventDefault()
      triggerRefs.current[nextIndex]?.focus()
    }
  }

  return (
    <div className="relative z-10 bg-forest-soft">
      <HorizonDivider fillClass="text-sand" />

      {/* Otras formas de ayudar — capítulo luminoso en arena/papel lino cálido */}
      <section
        ref={helpRef}
        id={otherWays.id}
        className="relative scroll-mt-24 overflow-hidden bg-sand px-6 py-16 text-ink md:px-10 md:py-24"
      >
        {/* Grabados botánicos suaves en ambos márgenes */}
        <motion.div
          aria-hidden="true"
          style={{ y: helpEngravingY }}
          className="pointer-events-none absolute -left-10 top-12 hidden select-none text-sage/[0.16] lg:block"
        >
          <EucalyptusEngraving className="h-[22rem] w-auto" />
        </motion.div>
        <motion.div
          aria-hidden="true"
          style={{ y: helpEngravingY }}
          className="pointer-events-none absolute -right-10 bottom-6 hidden select-none text-ochre/[0.15] lg:block"
        >
          <MeadowEngraving className="h-[20rem] w-auto" />
        </motion.div>

        <div className="relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-2xl text-center"
          >
            <div className="flex justify-center">
              <BotanicalSprig className="h-5 w-28 text-ochre/75" />
            </div>

            <p className="mt-4 font-display text-sm italic tracking-wide text-ochre sm:text-base">
              {otherWays.eyebrow}
            </p>

            <h2 className="mt-3 font-display text-3xl font-normal leading-[1.16] tracking-[-0.02em] text-ink sm:text-4xl md:text-5xl">
              {otherWays.title}
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-[1.85] text-ink/80">
              {otherWays.body}
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-7 md:mt-14 md:grid-cols-3">
            {otherWays.cards.map((card, index) => {
              const external = card.href.startsWith('http')
              return (
                <motion.article
                  key={card.id}
                  initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.65,
                    delay: reduceMotion ? 0 : index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group rounded-[26px] border border-ink/12 bg-ivory p-2.5 shadow-[0_14px_34px_rgba(23,38,27,0.09)] transition-transform duration-300 hover:-translate-y-1 hover:border-ochre/40"
                >
                  <div className="flex h-full flex-col rounded-[20px] border border-ink/10 bg-parchment/45 p-6">
                    <div className="flex items-center gap-3.5">
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ochre/30 bg-ivory text-ochre">
                        {createElement(getIcon(card.icon), {
                          'aria-hidden': true,
                          className: 'h-5 w-5',
                        })}
                      </span>
                      <span className="font-display text-sm italic text-ochre">
                        {card.eyebrow}
                      </span>
                    </div>

                    <h3 className="mt-5 font-display text-2xl font-medium text-ink">{card.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-[1.85] text-ink/80">
                      {card.description}
                    </p>

                    <a
                      href={card.href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noreferrer' : undefined}
                      className="mt-6 inline-flex w-fit items-center gap-2 border-b border-ink/35 pb-1 text-sm font-semibold text-ink no-underline transition-colors hover:border-ochre hover:text-ochre focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                    >
                      <span>{card.ctaLabel}</span>
                      <ArrowRight
                        aria-hidden="true"
                        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </a>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      <div className="bg-sand">
        <HorizonDivider fillClass="text-forest" />
      </div>

      {/* Preguntas frecuentes — regreso cálido al verde bosque */}
      <section
        ref={faqRef}
        id={faq.id}
        className="relative scroll-mt-24 overflow-hidden bg-forest px-6 py-16 text-cream md:px-10 md:py-24"
      >
        <motion.div
          aria-hidden="true"
          style={{ y: faqEngravingY }}
          className="pointer-events-none absolute -right-12 bottom-6 hidden select-none text-gold/[0.07] lg:block"
        >
          <EucalyptusEngraving className="h-[22rem] w-auto" />
        </motion.div>

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="h-[1.5px] w-9 shrink-0 bg-gold/85" />
                <span className="font-display text-sm italic tracking-wide text-gold sm:text-base">
                  {faq.eyebrow}
                </span>
              </div>

              <h2 className="mt-3.5 font-display text-3xl font-normal leading-[1.16] tracking-[-0.02em] text-white sm:text-4xl">
                {faq.titleLines.map((line, index) => (
                  <span
                    key={line}
                    className={`block ${index === 1 ? 'italic text-cream/95' : ''}`}
                  >
                    {line}
                  </span>
                ))}
              </h2>

              <p className="mt-5 max-w-md text-[15px] leading-[1.85] text-cream/85">{faq.body}</p>

              <div className="mt-8 rounded-2xl border border-gold/18 bg-forest-soft/80 p-5">
                <p className="font-display text-sm italic leading-relaxed text-cream/80">
                  “{faq.contactNote}”
                </p>
                <a
                  href={faq.contactCtaHref}
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-3.5 inline-flex items-center gap-2 text-sm font-medium text-gold no-underline transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  <span>{faq.contactCtaLabel}</span>
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-[28px] border border-gold/18 bg-forest-soft/70 px-6 py-2 shadow-[0_18px_42px_rgba(0,0,0,0.22)] sm:px-8">
                <div className="divide-y divide-cream/10">
                  {faq.items.map((item, index) => {
                    const isOpen = openFaqId === item.id
                    const buttonId = `faq-trigger-${item.id}`
                    const panelId = `faq-panel-${item.id}`

                    return (
                      <div key={item.id} className="py-1">
                        <h3>
                          <button
                            ref={(node) => {
                              triggerRefs.current[index] = node
                            }}
                            id={buttonId}
                            type="button"
                            aria-expanded={isOpen}
                            aria-controls={panelId}
                            onClick={() => setOpenFaqId(isOpen ? null : item.id)}
                            onKeyDown={(event) => handleFaqKeyDown(event, index)}
                            className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                          >
                            <span className="font-display text-lg leading-snug text-white sm:text-xl">
                              {item.question}
                            </span>
                            <span
                              aria-hidden="true"
                              className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                                isOpen
                                  ? 'rotate-45 border-gold/65 bg-gold/15 text-gold'
                                  : 'border-cream/20 text-cream/75'
                              }`}
                            >
                              <Plus className="h-4 w-4" />
                            </span>
                          </button>
                        </h3>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              id={panelId}
                              role="region"
                              aria-labelledby={buttonId}
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={
                                reduceMotion
                                  ? { duration: 0 }
                                  : { duration: 0.28, ease: [0.22, 1, 0.36, 1] }
                              }
                              className="overflow-hidden"
                            >
                              <p className="pb-6 pr-6 text-sm leading-[1.85] text-cream/80">
                                {item.answer}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
