# Páginas apartadas (28-09-2026)

Código y páginas que salieron del sitio por la decisión de **no publicar nada
que aluda a precios** hasta que la política comercial esté decidida:

- `app/precios/` — la página de precios (tarjetas del catálogo + matriz).
- `app/comparar/` — el índice de comparativas y `[rival]` (Cloudbeds, Little
  Hotelier, Amenitiz, Mews). Se apartaron enteras porque su argumento central
  era el precio publicado, la permanencia y la comisión.

Sus textos siguen en `src/i18n/dict/*.ts` (`precios`, `comparar`, `plans`) y
sus rutas viejas redirigen con 308 (`LEGACY_ROUTES` en `src/i18n/routes.ts`).
Para volver a publicarlas: mover las carpetas a `src/app/[lang]/`, restaurar
las rutas en `routes.ts` y los enlaces en `nav.ts`, y revisar el copy.

`tsconfig.json` excluye esta carpeta del chequeo de tipos.
