import { siteConfig } from '../data/siteConfig'
import type { NavLink } from '../types/siteConfig'
import { SanctuarySeal } from './BotanicalOrnament'

const currentYear = new Date().getFullYear()

function LinkColumn({ title, links }: { title: string; links: NavLink[] }) {
  return (
    <div className="md:col-span-3">
      <h2 className="font-display text-base italic text-gold">{title}</h2>
      <ul className="mt-5 space-y-3.5">
        {links.map((link) => {
          const external = link.href.startsWith('http')

          return (
            <li key={link.href + link.label}>
              <a
                href={link.href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noreferrer' : undefined}
                className="text-sm text-cream/80 no-underline transition-colors duration-200 hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                {link.label}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default function Footer() {
  const { footer } = siteConfig

  return (
    <footer
      id={footer.id}
      className="relative z-10 scroll-mt-20 border-t border-gold/15 bg-forest-deep px-6 pb-16 pt-16 text-cream md:px-10 md:pb-20 md:pt-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="flex flex-col justify-between md:col-span-6">
            <div>
              <div className="flex items-center gap-4">
                <SanctuarySeal className="h-12 w-12 shrink-0" />
                <div>
                  <p className="font-display text-2xl uppercase tracking-[0.12em] text-white sm:text-3xl">
                    {footer.brandName}
                  </p>
                  <p className="mt-0.5 font-display text-xs italic text-gold/85">
                    {footer.locationLine}
                  </p>
                </div>
              </div>
              <p className="mt-6 max-w-md text-sm leading-[1.85] text-cream/80">{footer.purpose}</p>
            </div>
            <p className="mt-10 text-xs leading-relaxed text-cream/45 md:mt-14">
              © {currentYear} {footer.copyrightText}
            </p>
          </div>

          <LinkColumn title={footer.aboutTitle} links={footer.aboutLinks} />
          <LinkColumn title={footer.helpTitle} links={footer.helpLinks} />
        </div>
      </div>
    </footer>
  )
}
