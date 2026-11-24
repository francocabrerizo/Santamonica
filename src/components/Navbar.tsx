import { createElement, useEffect, useState } from 'react'
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from 'framer-motion'
import { siteConfig } from '../data/siteConfig'
import { getIcon } from '../utils/icons'

const mobileMenuId = 'nav-mobile-menu'
const MenuIcon = getIcon('menu')
const CloseIcon = getIcon('x')

export default function Navbar() {
  const { navbar } = siteConfig
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hovered, setHovered] = useState<string | null>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const onScroll = () => {
      const nextScrolled = window.scrollY > 40
      setScrolled(nextScrolled)
      if (nextScrolled) {
        setIsMenuOpen(false)
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  const hasGlassShell = scrolled || isMenuOpen
  const isActionExternal = navbar.action.href.startsWith('http')

  return (
    <motion.header
      initial={false}
      animate={
        hasGlassShell
          ? {
              top: scrolled ? 14 : 10,
              backgroundColor: isMenuOpen ? 'rgba(18, 30, 21, 0.94)' : 'rgba(18, 30, 21, 0.78)',
              borderColor: 'rgba(255, 255, 255, 0.12)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.38)',
            }
          : {
              top: 0,
              backgroundColor: 'rgba(18, 30, 21, 0)',
              borderColor: 'rgba(255, 255, 255, 0)',
              boxShadow: '0 0 0 rgba(0, 0, 0, 0)',
            }
      }
      transition={reduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 260, damping: 30 }}
      className={`fixed inset-x-0 z-40 mx-auto w-[calc(100%-1.5rem)] max-w-6xl border px-4 text-white transition-[border-radius,padding] duration-300 md:px-6 ${
        isMenuOpen
          ? 'rounded-3xl py-3.5 backdrop-blur-xl'
          : scrolled
            ? 'rounded-full py-3 backdrop-blur-xl'
            : 'rounded-full py-5'
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        <a
          href={`#${siteConfig.hero.id}`}
          onClick={() => setIsMenuOpen(false)}
          aria-label={navbar.brandAriaLabel}
          className="font-display text-sm uppercase tracking-[0.14em] text-white no-underline drop-shadow-[0_1px_8px_rgba(0,0,0,0.45)] transition-colors duration-300 hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold md:text-lg"
        >
          {navbar.brandName}
        </a>

        <LayoutGroup id="nav-links">
          <nav
            aria-label={navbar.brandAriaLabel}
            className="hidden items-center gap-1 md:flex"
            onMouseLeave={() => setHovered(null)}
          >
            {navbar.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onMouseEnter={() => setHovered(link.href)}
                className="relative rounded-full px-4 py-2 text-sm font-medium tracking-wide text-white/90 no-underline drop-shadow-[0_1px_6px_rgba(0,0,0,0.45)] transition-colors duration-300 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                {hovered === link.href && (
                  <motion.span
                    layoutId="nav-hover"
                    className="absolute inset-0 rounded-full bg-white/12"
                    transition={
                      reduceMotion
                        ? { duration: 0 }
                        : { type: 'spring', stiffness: 420, damping: 32 }
                    }
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            ))}
          </nav>
        </LayoutGroup>

        <div className="flex items-center gap-2">
          <a
            href={navbar.action.href}
            target={isActionExternal ? '_blank' : undefined}
            rel={isActionExternal ? 'noreferrer' : undefined}
            onClick={() => setIsMenuOpen(false)}
            className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-[#121E15]/45 px-3.5 py-2 text-xs font-semibold tracking-wide text-gold no-underline backdrop-blur-md transition-colors duration-300 hover:border-gold hover:bg-gold/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold md:px-4 md:text-sm"
          >
            {createElement(getIcon(navbar.action.icon), {
              'aria-hidden': true,
              className: 'h-3.5 w-3.5 md:h-4 md:w-4',
            })}
            <span>{navbar.action.label}</span>
          </a>

          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls={mobileMenuId}
            aria-label={isMenuOpen ? navbar.menuCloseLabel : navbar.menuOpenLabel}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#121E15]/45 text-white backdrop-blur-md transition hover:border-gold/50 hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold md:hidden"
          >
            {isMenuOpen ? (
              <CloseIcon aria-hidden="true" className="h-5 w-5" />
            ) : (
              <MenuIcon aria-hidden="true" className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isMenuOpen && (
          <motion.nav
            id={mobileMenuId}
            aria-label={navbar.brandAriaLabel}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={
              reduceMotion ? { duration: 0 } : { duration: 0.25, ease: [0.22, 1, 0.36, 1] }
            }
            className="overflow-hidden md:hidden"
          >
            <ul className="mt-3 space-y-1 border-t border-white/10 pt-3">
              {navbar.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-xl px-3 py-3 text-sm font-medium tracking-wide text-white/90 no-underline transition-colors duration-200 hover:bg-white/8 hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
