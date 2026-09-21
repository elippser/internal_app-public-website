# Audios de la voz en off del video

Acá caen los archivos que se sueltan en las pistas del editor de
`/{lang}/video?edit=1`. Los escribe `src/app/api/video/vo/audio/route.ts` y los
sirve Next como estáticos, así que el video los reproduce sin pasar por ningún
API.

**Van commiteados.** Lo que está en la base es el montaje —qué archivo, en qué
pista, con cuánto silencio delante—, no los bytes: si un archivo no viaja con el
repo, el montaje queda apuntando a un 404. En Coolify el filesystem se pierde en
cada redeploy salvo que el servicio tenga un volumen, así que no alcanza con
subirlos desde el editor en producción.
