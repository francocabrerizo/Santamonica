# Guía de edición de contenido — Predio de Caballos Santa Mónica

Toda la información visible de la página (textos, secciones 01/02/03, preguntas frecuentes, enlaces y fotos) se edita en un **único archivo**:

`src/data/siteConfig.ts`

---

## 1. Editar las 3 secciones principales (`01`, `02`, `03`)
Buscá el bloque `editorialSections` dentro de `src/data/siteConfig.ts`:
- **Sección `01`:** A qué nos dedicamos (rescate y cuidado).
- **Sección `02`:** Qué es el voluntariado.
- **Sección `03`:** Jornadas especiales que se realizan en el predio.

En cada una podés editar `eyebrow`, `titleLines` (las dos líneas del título), `body` (el texto principal), `image.caption` (pie de foto) y `drawer` (lo que se abre al hacer clic en *"conocer más →"*).

## 2. Editar las Preguntas Frecuentes (FAQ)
Buscá el bloque `faq.items` en `src/data/siteConfig.ts`:
- Editá `question` y `answer` de cada ítem, o copiá un objeto `{ id, question, answer }` para sumar una nueva pregunta.

## 3. Actualizar el tablero de recaudación y el link de Mercado Pago
Buscá el bloque `donationBoard` en `src/data/siteConfig.ts`:
- **`ctaHref`:** pegá acá tu link directo de Mercado Pago.
- **`raisedAmount`:** monto recaudado hasta hoy (solo números, sin puntos ni signo `$`).
- **`goalAmount`:** monto total del objetivo actual (el porcentaje y lo que falta se calculan solos).
- **`nextGoalTitle` y `nextGoalDescription`:** nombre y descripción del próximo objetivo a cumplir.
- **`updatedLabel`:** fecha o texto corto de última actualización.

## 4. Cambiar enlaces de Donaciones, Apadrinamiento o Contacto
- **Botones principales del Hero (`Voluntariado`, `Donaciones`, `Apadrina`):** editá `hero.actions`.
- **Menú superior y botón `Contacto`:** editá `navbar.links` y `navbar.action`.
- **Bloque "No hace falta dinero para ser parte":** editá `otherWays`.

## 5. Cambiar fotos
1. Guardá la nueva foto en `public/images/` (`.webp` o `.jpg`, idealmente menor a `400 KB`).
2. Actualizá `src: '/images/nombre-del-archivo.webp'` y el texto descriptivo `alt` en `src/data/siteConfig.ts`.

## 6. Publicar cambios
Guardá `src/data/siteConfig.ts` y subí los cambios al repositorio para que se actualice el deploy automáticamente.
