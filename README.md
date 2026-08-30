# mkt-renderer

El sitio público de bookfer. Next 16 (App Router), sin CMS: **el contenido es el
código de este repo**.

```
npm install
npm run dev      # http://localhost:6300
```

Desde la raíz del monorepo lo levanta `npm run dev` con el resto de las apps, o
`npm run dev:mkt` junto al panel interno.

## Quién edita esto

Dos caminos, el mismo filesystem:

- **Marketing › Sitio** del panel interno (`internal-laupser`). Es un editor
  sobre este repo: árbol de archivos, Monaco, vista previa apuntando al dev
  server de acá. "Nueva página" crea la carpeta con su `page.tsx`.
- **Tu editor de siempre.** Es un repo Next normal.

El panel escribe archivos de verdad, así que los dos caminos terminan en el
mismo commit. El API interno necesita ver este directorio: en el monorepo lo
resuelve solo, en un deploy separado hay que montarlo y apuntar
`MKT_PROJECT_DIR`.

## Cómo llega a producción

El sitio se sirve desde **Coolify** (VPS propio), buildeado **desde este repo en
GitHub**: `elippser/internal_app-public-website`, rama `master`. `bookfer.com` y
`www.bookfer.com` son registros A al VPS.

Guardar un archivo —desde el panel o desde tu editor— **no publica nada**:
escribe el working tree y ahí queda. Publicar es commit + push + build, y el
push por sí solo tampoco alcanza, porque la app de Coolify no tiene webhook: el
build se pide por su API.

Las dos formas de hacer esos tres pasos:

- **Marketing › Sitio › Publicar** en el panel interno. Lista qué archivos se
  suben, commitea con tu usuario, pushea y dispara el build mostrando en qué
  etapa va. Necesita `MKT_COOLIFY_APP_UUID` en el `.env` del API interno.
- **A mano:** `git push` y después disparar el deploy en Coolify.

## Estructura

```
site.config.json              config del sitio entero (SEO, pixels, tipografías)
src/app/
  layout.tsx                  <html>, metadata por defecto, pixels, fuentes
  page.tsx                    la home
  globals.css                 CSS global del sitio
  <ruta>/page.tsx             cada página nueva
  not-found.tsx               404
src/components/
  Pixels.tsx                  GA4 / Google Ads / GTM / Meta, solo en producción
  LeadForm.tsx                captura de leads contra el API interno
  <X>Scripts.tsx              carga librerías de CDN y dispara el JS heredado
  <x>.animation.js            JS heredado de la página, sin portar a TS
```

Una página **es** una carpeta: `/precios` vive en `src/app/precios/page.tsx`. No
hay una tabla de páginas en ningún lado.

## Config del sitio

`site.config.json` es la fuente de verdad de lo que aplica a todo el sitio:
nombre, idioma, SEO por defecto, favicon, pixels del navegador, preconnect y
hojas de estilo remotas. Lo lee `src/lib/siteConfig.ts` y lo edita el panel
desde **Ajustes**.

Lo único que NO está acá es el **token de la Conversions API de Meta**: es un
secreto server-side y se queda en la base del API interno, que es quien manda
los eventos.

## Variables de entorno

Copiar `example.env` a `.env.local`.

| Variable | Para qué |
|---|---|
| `NEXT_PUBLIC_INTERNAL_API_URL` | API de internal-laupser: ahí postea `LeadForm` |
| `NEXT_PUBLIC_SITE_URL` | Base pública, para `canonical` y OG |

## Pixels

Solo se montan cuando `NODE_ENV === "production"`. En dev el sitio se ve desde
el iframe del panel mientras alguien edita, y esas visitas ensuciarían las
métricas — es la misma regla que tenía el render viejo con `?preview=1`.

## De dónde viene esto

Antes el sitio vivía en Mongo (`mkt_sites` / `mkt_pages`): tres campos de texto
—html, css, js— por página, editados en un Monaco de tres pestañas, y un
`buildHtmlDocument` en el API que armaba el documento a mano en cada request.

`internal-laupser/api` tiene el script que hizo el pasaje:

```
npm run migrate:mkt-next -- --dry   # muestra qué escribiría
npm run migrate:mkt-next            # escribe
```

Convierte el HTML a JSX de verdad (`class` → `className`, atributos de SVG a
camelCase, comentarios, tags autocerrados), manda el CSS a `globals.css` y deja
el JS heredado en un `.js` aparte que dispara un componente cliente. No toca
Mongo: el sitio viejo sigue sirviéndose en `/s/:slug` del API interno hasta que
se lo despublique a mano.

El markup migrado todavía es un bloque largo en `page.tsx`. Partirlo en
componentes de `src/components` es el siguiente paso natural, no un requisito
para que ande.
