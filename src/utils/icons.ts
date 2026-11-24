import {
  ArrowRight,
  Calendar,
  ChevronDown,
  ExternalLink,
  HandHeart,
  Heart,
  House,
  Link as LinkIcon,
  Megaphone,
  Menu,
  MessageCircle,
  Package,
  Sparkles,
  Stethoscope,
  Users,
  X,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { IconName } from '../types/siteConfig'

export const iconMap: Record<IconName, LucideIcon> = {
  heart: Heart,
  'hand-heart': HandHeart,
  home: House,
  stethoscope: Stethoscope,
  sparkles: Sparkles,
  users: Users,
  package: Package,
  megaphone: Megaphone,
  instagram: Heart, // Instagram uses dedicated authentic SVG glyph where rendered
  link: LinkIcon,
  menu: Menu,
  x: X,
  'chevron-down': ChevronDown,
  'external-link': ExternalLink,
  'arrow-right': ArrowRight,
  'message-circle': MessageCircle,
  calendar: Calendar,
}

export function getIcon(name: IconName): LucideIcon {
  return iconMap[name]
}
