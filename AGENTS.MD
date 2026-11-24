# AGENTS.md — Predio de Caballos Santa Mónica

## Contexto del proyecto
Landing page institucional y de captación de aportes para **Predio de Caballos Santa Mónica** (Mar del Plata, Buenos Aires, Argentina), ONG dedicada al rescate, rehabilitación y cuidado permanente de caballos bajo el lema *"Amor, libertad y bienestar animal"*.

## Stack obligatorio
- **Framework:** Vite + React + TypeScript + Tailwind CSS v4 (build estático listo para deploy en Cloudflare Pages).
- **Animación y scroll:** `framer-motion` + `lenis` (respetando siempre `prefers-reduced-motion`).
- **Iconos:** `lucide-react`.
- **Fuentes (Google Fonts):** `Fraunces` (títulos/display editorial y logo) + `Plus Jakarta Sans` (cuerpo, UI, eyebrows y botones).
- **Idioma:** Todo el copy visible debe estar en **español rioplatense** cálido, humano y digno (cero "Lorem ipsum", cero texto en inglés en la UI).

## Reglas de arquitectura (Innegociables)
1. **Desacoplamiento total de contenido:** Todo texto editable, eyebrow, titular, párrafo, métrica, historia de caballo (Antes/Después), monto de donación con equivalencia, Alias/CBU, enlace externo, campaña de insumos, FAQ, etiqueta ARIA, toast, copyright y ruta de imagen DEBE vivir exclusivamente en `src/data/siteConfig.ts`. Ningún componente puede hardcodear datos de la ONG.
2. **Estructura modular:** Componentes separados dentro de `src/components/` (`Atmosphere`, `SmoothScroll`, `Navbar`, `Hero`, `ImpactBar`, `EditorialSections`, `HerdSection`, `DonationImpact`, `HelpAndFaq`, `Footer`, `SafeImage`).
3. **Imágenes seguras:** Usar `SafeImage` con `aspect-ratio` fijo, `object-cover` y `loading="lazy"` (excepto el Hero, que lleva carga prioritaria). Mantener `public/images/` y fallback editorial limpio si falta una foto.

## Dirección de arte y tokens (Editorial oscuro cinematográfico)
- **Estética:** Editorial oscura, cinematográfica y sobria; fotos protagonistas, mucho aire vertical, grano editorial sutil (`opacity-[0.03]`) y halos radiales muy suaves en verde salvia (`#6E9456`). Prohibido el sensacionalismo, colores neón y estética genérica SaaS.
- **Paleta oficial (definida en `src/index.css`):**
  - Fondo principal continuo: `#121E15` (`bg-forest`).
  - Texto principal: `#FFFFFF`; texto secundario: `text-white/80`; texto terciario/copyright: `text-white/50`.
  - Acento editorial (dorado arena): `#D8C57E` (`text-gold` / `bg-gold`) para líneas, eyebrows en mayúsculas con `tracking-[0.25em]`, links `"conocer más →"` y títulos de columnas en el footer.
  - Acento CTA principal (verde vibrante): `#45D15A` (`bg-action`, hover `#37BC4B`) siempre con texto oscuro `#0E1A11` (`text-action-ink`) en negrita (contraste WCAG AA estricto).
  - Acento ambiental sutil: `#6E9456` (`bg-sage`) para halos radiales suaves.
  - Números decorativos monumentales (`01`, `02`, `03`): `text-white/10`, sans-serif bold, `text-[120px] md:text-[180px]`.
- **Accesibilidad:** Contraste mínimo WCAG AA. Nunca texto blanco sobre `#45D15A`; usar siempre `#0E1A11`. Acordeones y menús con `aria-expanded`, `aria-controls` y soporte completo de teclado.
- **Mobile-first:** Priorizar pantallas `375px` (tráfico principal desde Instagram). Cero overflow horizontal. Rieles laterales del Hero solo en desktop.

## Comandos de verificación
Antes de dar cualquier tarea por terminada, ejecutar y confirmar 0 errores y 0 warnings:
- Typecheck: `npx tsc --noEmit`
- Lint: `npm run lint`
- Build de producción: `npm run build`

## Convenciones de trabajo
- Leer `docs/SPEC_LANDING.md` antes de crear o modificar secciones.
- Mantener actualizado `docs/CONTENT_GUIDE.md` cuando cambie la estructura de `src/data/siteConfig.ts`.
- No instalar frameworks de UI pesados innecesarios (evitar MUI o Bootstrap).
