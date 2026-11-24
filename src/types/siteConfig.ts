export type IconName =
  | 'heart'
  | 'hand-heart'
  | 'home'
  | 'stethoscope'
  | 'sparkles'
  | 'users'
  | 'package'
  | 'megaphone'
  | 'instagram'
  | 'link'
  | 'menu'
  | 'x'
  | 'chevron-down'
  | 'external-link'
  | 'arrow-right'
  | 'message-circle'
  | 'calendar'

export interface NavLink {
  label: string
  href: string
}

export interface NavbarContent {
  brandName: string
  brandAriaLabel: string
  links: NavLink[]
  action: { label: string; href: string; icon: IconName }
  menuOpenLabel: string
  menuCloseLabel: string
}

export interface HeroRailLink {
  label: string
  href: string
  icon: IconName
}

export interface ProgressStop {
  label: string
  targetId: string
}

export interface HeroContent {
  id: string
  eyebrow: string
  titleLines: [string, string]
  scrollCueLabel: string
  scrollTargetId: string
  actions: NavLink[]
  image: { src: string; alt: string; priority: boolean }
  socialRail: { label: string; links: HeroRailLink[] }
  progressRail: { label: string; stops: ProgressStop[] }
}

export interface DrawerStep {
  label: string
  description: string
}

export interface DrawerGalleryItem {
  before: { src: string; alt: string }
  after: { src: string; alt: string }
  caption: string
}

export interface EditorialDrawer {
  title: string
  intro: string
  closeLabel: string
  beforeLabel?: string
  afterLabel?: string
  kind: 'steps' | 'gallery' | 'actions'
  steps?: DrawerStep[]
  gallery?: DrawerGalleryItem[]
  actions?: NavLink[]
}

export interface EditorialSection {
  id: string
  number: string
  eyebrow: string
  titleLines: [string, string]
  body: string
  cta: NavLink
  image: { src: string; alt: string; caption?: string }
  imageOnLeft?: boolean
  drawer: EditorialDrawer
}

export interface DonationBoardContent {
  id: string
  eyebrow: string
  titleLines: [string, string]
  body: string
  ctaLabel: string
  ctaHref: string
  ctaNote: string
  boardEyebrow: string
  updatedLabel: string
  raisedLabel: string
  raisedAmount: number
  goalLabel: string
  goalAmount: number
  remainingPrefix: string
  completedMessage: string
  nextGoalEyebrow: string
  nextGoalTitle: string
  nextGoalDescription: string
}

export interface HelpWayCard {
  id: string
  eyebrow: string
  title: string
  description: string
  ctaLabel: string
  href: string
  icon: IconName
}

export interface OtherWaysContent {
  id: string
  eyebrow: string
  title: string
  body: string
  cards: HelpWayCard[]
}

export interface FaqItem {
  id: string
  question: string
  answer: string
}

export interface FaqContent {
  id: string
  eyebrow: string
  titleLines: [string, string]
  body: string
  contactNote: string
  contactCtaLabel: string
  contactCtaHref: string
  items: FaqItem[]
}

export interface FooterContent {
  id: string
  brandName: string
  purpose: string
  locationLine: string
  aboutTitle: string
  aboutLinks: NavLink[]
  helpTitle: string
  helpLinks: NavLink[]
  copyrightText: string
}

export interface SeoContent {
  title: string
  description: string
  ogTitle: string
  ogDescription: string
  ogImage: string
  themeColor: string
  locale: string
}

export interface SiteConfig {
  site: { name: string; location: string; motto: string }
  seo: SeoContent
  navbar: NavbarContent
  hero: HeroContent
  editorialSections: EditorialSection[]
  donationBoard: DonationBoardContent
  otherWays: OtherWaysContent
  faq: FaqContent
  footer: FooterContent
}
