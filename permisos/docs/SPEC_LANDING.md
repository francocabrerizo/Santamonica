# SPEC — Landing Page Predio de Caballos Santa Mónica

## 1. Identidad y enlaces reales
- **Nombre:** Predio de Caballos Santa Mónica
- **Ubicación:** Mar del Plata, Buenos Aires, Argentina
- **Lema:** Amor, libertad y bienestar animal
- **Instagram:** https://www.instagram.com/caballos.santamonica/
- **Linktree:** https://linktr.ee/caballos.santamonica

## 2. Sistema visual (Editorial oscuro cinematográfico)
- **Fondo principal continuo:** `#121E15` en cuerpo, secciones y footer.
- **Texto:** `#FFFFFF` principal; `text-white/80` secundario; `text-white/50` terciario/copyright.
- **Acento editorial (dorado arena):** `#D8C57E` para líneas, eyebrows en mayúsculas con `tracking-[0.25em]`, links `"conocer más →"` y títulos de columnas del footer.
- **Acento CTA principal (verde vibrante):** `#45D15A` (hover `#37BC4B`) siempre con texto oscuro `#0E1A11` en negrita (WCAG AA).
- **Acento ambiental sutil:** `#6E9456` (verde salvia botánico) para halos radiales suaves + grano SVG global `opacity-[0.03]`.
- **Números decorativos monumentales (`01`, `02`, `03`):** `text-white/10`, sans-serif bold, `text-[120px] md:text-[180px]`.
- **Fuentes:** `Fraunces` para títulos y logo; `Plus Jakarta Sans` para cuerpo, UI, eyebrows y botones.
- **Fotos editoriales:** `aspect-[4/5]`, `object-cover`, `loading="lazy"` (excepto el Hero, con carga prioritaria).

## 3. Estructura de las 8 secciones
1. **Navbar:** transparente arriba → píldora flotante glassmorphism al scrollear. Logo a la izquierda, enlaces suaves sin subrayados por defecto al centro y acción `Donar` a la derecha. Menú móvil accesible (`aria-expanded`) con fondo oscuro traslúcido siempre legible.
2. **Hero 100vh unificado:** foto protagonista en `absolute inset-0 object-cover`, degradado `from-black/50 via-black/20 to-[#121E15]`, riel izquierdo vertical (`Seguinos` + iconos) y riel derecho indicador de progreso (`Inicio`, `01`, `02`, `03`) en desktop; titular editorial en 2 líneas, `deslizá ↓` y 3 botones píldora (`VOLUNTARIADO`, `DONACIONES`, `APADRINA`) visibles en el primer pantallazo.
3. **Barra de impacto editable:** 4 métricas configurables desde `siteConfig.ts` con contadores animados al entrar en viewport.
4. **Secciones editoriales Zig-Zag `01`, `02` y `03`:** `01` texto izq / foto der (`1 (2).png`), `02` foto izq (`1 (3).png`) / texto der, `03` texto izq / foto der (`1 (4).png`), con números gigantes detrás del encabezado y links `"conocer más →"` interactivos que abren un drawer editorial.
5. **La Manada (Antes / Después — `#manada`):** 3 a 4 historias de caballos editables desde `siteConfig.ts`, toggle interactivo Antes/Después por caballo, rasgos de personalidad y botón directo `Apadrinar / Amadrinar` que desplaza a `#donar` preseleccionando el modo mensual y el nombre del caballo.
6. **Módulo de Donación sin fricción (`#donar`):** selector **Aporte único** vs. **Apadriná mensual**, montos sugeridos seleccionables con anclaje de impacto tangible (fardos de pasto, medicación, herrado, veterinario) + monto libre, transferencia directa (Alias y CBU/CVU) con copiado en 1 clic + fallback + cambio de ícono a check + toast flotante (`"¡Alias copiado!"`), y botones configurables a Mercado Pago / Linktree.
7. **Otras formas de ayudar + Transparencia y FAQ (`#ayudar`, `#preguntas`):** 3 tarjetas accionables (Voluntariado presencial, Insumos y campañas de infraestructura como chapas/refugio, Difusión en redes), bloque de rendición de cuentas y acordeón FAQ accesible por clic y teclado (`aria-expanded`, `aria-controls`).
8. **Footer minimalista de 3 columnas:** sobre `#121E15`, marca + propósito + copyright a la izquierda; `Sobre el Predio` y `Cómo Ayudar` con títulos `#D8C57E` a la derecha.

## 4. Contenido y SEO
- Todo texto visible, CTA, métrica, historia, monto, Alias/CBU, FAQ, etiqueta ARIA y ruta de imagen vive exclusivamente en `src/data/siteConfig.ts`.
- `index.html`: `lang="es-AR"`, title, meta description, `og:title`, `og:description`, `og:image` y `theme-color` (`#121E15`).

## 5. Verificación
- `npx tsc --noEmit`
- `npm run lint`
- `npm run build`
