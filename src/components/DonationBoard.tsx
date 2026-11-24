import { useRef } from 'react'
import { ExternalLink, HandHeart, Target } from 'lucide-react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { siteConfig } from '../data/siteConfig'
import { EucalyptusEngraving, HorizonDivider } from './BotanicalOrnament'

function formatArs(value: number): string {
  return `$${value.toLocaleString('es-AR')}`
}

export default function DonationBoard() {
  const { donationBoard } = siteConfig
  const reduceMotion = useReducedMotion()
  const sectionRef = useRef<HTMLElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const engravingY = useTransform(
    scrollYProgress,
    [0, 1],
    [reduceMotion ? 0 : -24, reduceMotion ? 0 : 28],
  )

  const safeGoal = Math.max(donationBoard.goalAmount, 1)
  const rawPercent = Math.round((donationBoard.raisedAmount / safeGoal) * 100)
  const clampedPercent = Math.min(Math.max(rawPercent, 0), 100)
  const remaining = Math.max(donationBoard.goalAmount - donationBoard.raisedAmount, 0)

  return (
    <div className="relative z-10 bg-forest">
      <HorizonDivider fillClass="text-forest-soft" />

      <section
        ref={sectionRef}
        id={donationBoard.id}
        className="relative scroll-mt-24 overflow-hidden bg-forest-soft px-6 py-16 text-cream md:px-10 md:py-24"
      >
        <motion.div
          aria-hidden="true"
          style={{ y: engravingY }}
          className="pointer-events-none absolute -left-12 top-1/2 hidden -translate-y-1/2 select-none text-gold/[0.08] lg:block"
        >
          <EucalyptusEngraving className="h-[24rem] w-auto" />
        </motion.div>

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Izquierda: Invitación + Botón principal a Mercado Pago */}
            <motion.div
              initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5"
            >
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="h-[1.5px] w-9 shrink-0 bg-gold/85" />
                <span className="font-display text-sm italic tracking-wide text-gold sm:text-base">
                  {donationBoard.eyebrow}
                </span>
              </div>

              <h2 className="mt-3.5 font-display text-3xl font-normal leading-[1.16] tracking-[-0.02em] text-white sm:text-4xl">
                {donationBoard.titleLines.map((line, index) => (
                  <span
                    key={line}
                    className={`block ${index === 1 ? 'italic text-cream/95' : ''}`}
                  >
                    {line}
                  </span>
                ))}
              </h2>

              <p className="mt-4 max-w-md text-[15px] leading-[1.85] text-cream/85">
                {donationBoard.body}
              </p>

              <div className="mt-7">
                <motion.a
                  href={donationBoard.ctaHref}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2.5 rounded-full bg-action px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-action-ink no-underline shadow-[0_10px_24px_rgba(0,0,0,0.28)] transition-colors duration-200 hover:bg-action-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <HandHeart className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{donationBoard.ctaLabel}</span>
                  <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                </motion.a>
                <p className="mt-3 text-xs leading-relaxed text-cream/60">
                  {donationBoard.ctaNote}
                </p>
              </div>
            </motion.div>

            {/* Derecha: Tablero clásico en papel crema cálido con tinta verde bosque */}
            <motion.div
              initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.75,
                delay: reduceMotion ? 0 : 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="lg:col-span-7"
            >
              <div className="rounded-[28px] bg-parchment p-3 text-ink shadow-[0_24px_60px_rgba(0,0,0,0.36)] ring-1 ring-gold/40 sm:p-4">
                <div className="rounded-[20px] border border-ink/15 p-5 sm:p-7">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-ink/12 pb-4">
                    <span className="font-display text-sm font-medium italic text-ochre sm:text-base">
                      {donationBoard.boardEyebrow}
                    </span>
                    <span className="rounded-full bg-ink/[0.06] px-3 py-1 text-xs font-medium text-ink/70">
                      {donationBoard.updatedLabel}
                    </span>
                  </div>

                  <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/60">
                        {donationBoard.raisedLabel}
                      </p>
                      <p className="mt-1.5 font-display text-4xl font-medium text-ink tabular-nums sm:text-5xl">
                        {formatArs(donationBoard.raisedAmount)}
                      </p>
                    </div>

                    <div className="text-left sm:text-right">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/55">
                        {donationBoard.goalLabel}
                      </p>
                      <div className="mt-1.5 flex items-baseline gap-2.5 sm:justify-end">
                        <span className="font-display text-2xl font-medium text-ochre tabular-nums">
                          {formatArs(donationBoard.goalAmount)}
                        </span>
                        <span className="rounded-full bg-[#246936]/12 px-2.5 py-0.5 text-xs font-bold text-[#1E5B2E] tabular-nums">
                          {clampedPercent}%
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Barra de progreso orgánica */}
                  <div className="mt-6">
                    <div
                      role="progressbar"
                      aria-label={donationBoard.nextGoalTitle}
                      aria-valuenow={clampedPercent}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      className="h-3.5 w-full overflow-hidden rounded-full bg-ink/10 p-0.5"
                    >
                      <motion.div
                        initial={{ width: reduceMotion ? `${clampedPercent}%` : '0%' }}
                        whileInView={{ width: `${clampedPercent}%` }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: reduceMotion ? 0 : 1, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full rounded-full bg-gradient-to-r from-[#2D7A3E] to-[#45D15A]"
                      />
                    </div>
                    <p className="mt-2.5 text-xs font-medium text-ink/70">
                      {remaining > 0
                        ? `${donationBoard.remainingPrefix} ${formatArs(remaining)}`
                        : donationBoard.completedMessage}
                    </p>
                  </div>

                  {/* Próximo objetivo a cumplir */}
                  <div className="mt-6 rounded-2xl border border-ink/12 bg-[#EAE2D0]/75 p-5">
                    <div className="flex items-start gap-3.5">
                      <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ochre/30 bg-parchment text-ochre">
                        <Target className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="font-display text-xs font-medium italic text-ochre">
                          {donationBoard.nextGoalEyebrow}
                        </p>
                        <h3 className="mt-1 font-display text-xl font-medium text-ink">
                          {donationBoard.nextGoalTitle}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-ink/80">
                          {donationBoard.nextGoalDescription}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
