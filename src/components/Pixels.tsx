import Script from "next/script";
import { siteConfig } from "@/lib/siteConfig";

/**
 * Pixels de marketing del navegador.
 *
 * Solo se montan en producción: en dev el sitio se ve desde el iframe del
 * panel interno mientras alguien edita, y esas visitas ensuciarían las
 * métricas. Es la misma regla que tenía el render viejo con `?preview=1`.
 *
 * La mitad server-side (Meta CAPI) no vive acá: la dispara el API interno con
 * el token que nunca baja al navegador.
 */
export default function Pixels() {
  if (process.env.NODE_ENV !== "production") return null;

  const { metaPixelId, ga4MeasurementId, googleAdsConversionId, gtmContainerId } =
    siteConfig.pixels;

  // gtag lo comparten GA4 y Google Ads: se carga una vez y después cada uno
  // manda su propio `config`.
  const gtagId = ga4MeasurementId || googleAdsConversionId;

  return (
    <>
      {gtagId && (
        <>
          <Script
            id="gtag-src"
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${gtagId}`}
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());${
              ga4MeasurementId ? `gtag('config','${ga4MeasurementId}');` : ""
            }${
              googleAdsConversionId
                ? `gtag('config','${googleAdsConversionId}');`
                : ""
            }`}
          </Script>
        </>
      )}

      {gtmContainerId && (
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmContainerId}');`}
        </Script>
      )}

      {metaPixelId && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${metaPixelId}');fbq('track','PageView');`}
        </Script>
      )}
    </>
  );
}
