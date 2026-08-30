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
src/middleware.ts             prefija el idioma y traduce el slug de la URL
src/i18n/
  config.ts                   los cinco idiomas
  routes.ts                   el mapa de rutas con su slug por idioma
  get-dictionary.ts           carga el diccionario del idioma activo
  params.ts                   estrecha el `lang` de los params a un Locale
  dict/{es,en,pt,fr,de}.ts    TODO el texto del sitio
src/app/
  globals.css                 el sistema de diseño: tokens y primitivas
  sitemap.ts / robots.ts      se arman solos desde `i18n/routes.ts`
  [lang]/
    layout.tsx                <html lang>, header, footer, metadata, pixels
    page.tsx                  la home
    <ruta>/page.tsx           cada página, con la carpeta EN CASTELLANO
    <ruta>/<x>.module.css     lo que es exclusivo de esa página
    monax.css                 el hero del template original (sólo la home)
    not-found.tsx             404
    opengraph-image.tsx       la imagen de compartir, generada en el build
src/components/
  site/                       el chrome y las piezas reutilizables
  plans/                      precios y comparativa, contra el catálogo real
  LeadForm.tsx                captura de leads contra el API interno
  Pixels.tsx                  GA4 / Google Ads / GTM / Meta, solo en producción
public/
  llms.txt                    el sitio también es legible por un agente
  icon.svg                    favicon que sigue el tema del navegador
```

Una página **es** una carpeta, y la carpeta va **en castellano**: la página de
Bookfer IA vive en `src/app/[lang]/producto/ia/page.tsx` aunque en inglés se
sirva como `/en/platform/ai`. No hay una tabla de páginas en ningún lado.

## Los cinco idiomas

Español, inglés, portugués, francés y alemán — los mismos cinco que habla la
plataforma. Todas las rutas van prefijadas (`/es/…`, `/en/…`), sin excepción
para el castellano: así la home no queda viva en dos URLs compitiendo entre sí
en el índice.

**Las URLs también están traducidas.** Hay dos formas de nombrar cada página:

- La **ruta interna**, la carpeta real, siempre en castellano: `/producto/ia`.
  Es lo que ve Next, lo que ve el panel en su árbol de archivos y lo que se
  escribe en el código.
- El **slug público**, uno por idioma: `/en/platform/ai`, `/de/plattform/ki`.

`src/i18n/routes.ts` es la tabla que las une, y el `middleware` es la bisagra:
reescribe el slug público a la carpeta real —la barra de direcciones no cambia,
Next sirve la misma página estática— y redirige cuando alguien entra con el slug
de otro idioma, para no tener la misma página viva en dos URLs.

Al agregar una página: carpeta en castellano, fila en `routes.ts`, y los cinco
slugs escritos a mano. No hay traducción automática de rutas: un slug es
contenido de SEO, no una cadena más.

### Dónde va cada texto

Ni una palabra traducible vive en un `.tsx`. Todo está en `src/i18n/dict/*.ts`,
y la **forma la define `es.ts`**: los otros cuatro se declaran `: Dictionary`,
así que olvidarse una clave es un error de compilación y no un texto en español
apareciendo en la versión alemana.

Dentro de un string hay una micro-sintaxis mínima que resuelve `RichText`:
`**negrita**`, `` `código` `` y `[texto](/ruta)` —con la ruta interna, que se
traduce sola—. En un titular, `*palabra*` sale en el serif itálico verde.

La única excepción es `[lang]/not-found.tsx`: un `not-found` de Next no recibe
`params`, así que lleva sus seis strings adentro y saca el idioma del pathname.

### El mapa de navegación

`src/components/site/nav.ts` tiene la ESTRUCTURA —qué entra en el mega menú y en
el pie, y en qué orden— sin una sola palabra: las etiquetas se buscan por clave
en el diccionario. Lo consumen el header, el cajón móvil y el pie; el
`sitemap.xml` sale de `routes.ts` y multiplica cada ruta por los cinco idiomas,
con sus `alternates` para que el buscador sepa que son la misma página.

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
| `NEXT_PUBLIC_INTERNAL_API_URL` | API de internal-laupser: ahí postea `LeadForm` y de ahí salen los planes |
| `NEXT_PUBLIC_SITE_URL` | Base pública, para `canonical`, OG y `sitemap.xml` |
| `NEXT_PUBLIC_APP_URL` | El PMS. Todos los CTA de "empezar" e "ingresar" apuntan ahí |

La preferencia de idioma se guarda en la cookie `bookfer_lang` (un año). Es la
única cookie propia del sitio público y está declarada en la política de
cookies; la lee el `middleware` para no devolver a alguien al idioma equivocado.

En Coolify los tres van como variables **buildtime**: si no, quedan sin valor
en el bundle.

## Precios

`components/plans/` lee `GET /public/plans` del API interno **desde el
servidor** (no hay CORS que configurar y el HTML sale con los precios adentro,
que es lo que indexa Google). Se revalida cada 5 minutos, así que cambiar un
precio en **Planes** del panel se ve en el sitio sin deploy.

Son dos componentes sobre la misma llamada (`plansApi.ts`): las tarjetas
(`PlansMkt`) y la comparativa producto × plan (`PlansMatrix`). Si la comparativa
muestra un tilde donde no corresponde, **el problema está en los datos del
plan**, no en la tabla.

## Captura de leads

`LeadForm` postea desde el navegador a `POST /public/mkt/leads`. El API interno
tiene que aceptar el origen del sitio: hay una allowlist en
`internal-laupser/api/src/index.ts` que ya incluye `bookfer.com`,
`www.bookfer.com` y `localhost:6300`, ampliable con `PUBLIC_SITE_ORIGINS`.

## Pixels

Solo se montan cuando `NODE_ENV === "production"`. En dev el sitio se ve desde
el iframe del panel mientras alguien edita, y esas visitas ensuciarían las
métricas — es la misma regla que tenía el render viejo con `?preview=1`.

## Verificar antes de publicar

```
npx tsc --noEmit
BUILD_DIST_DIR=.next-verify npx next build   # no pisa el .next del dev server
```

El build de verificación toca `tsconfig.json` para agregar sus tipos: revertirlo
antes de commitear (`git checkout -- tsconfig.json`).
