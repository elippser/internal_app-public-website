/**
 * Contrato de la vista pública de LinkHub (respuesta de
 * GET /api/v1/public/linkhub/by-slug/:slug — `toPublicView` en
 * pms-core/api/src/services/linkhubService.ts). Los bloques llegan filtrados
 * (activos + agenda) y ordenados server-side.
 *
 * Los enums se tipan laxos (string) a propósito: el renderer debe degradar con
 * elegancia ante valores futuros (fallbacks en theme.ts), no romper el build.
 */

export interface LinkhubTheme {
  templateId: string;
  mode: string;
  background: {
    type: string; // "solid" | "gradient" | "image" | "preset"
    color: string;
    gradient: { from: string; to: string; angle: number } | null;
    imageFileId?: string | null;
    imageUrl: string | null;
    overlayOpacity: number;
    presetId?: string | null;
  };
  buttonStyle: string; // fill | outline | shadow | soft | torn | wavy | hardshadow
  cornerStyle: string; // square | rounded | pill
  fontPreset: string; // sans | serif | display | mono | rounded | custom
  customFontFamily?: string | null;
  colors: {
    primary: string;
    text: string;
    buttonText: string;
  };
}

export interface PublicLinkhubBlock {
  blockId: string;
  type: string; // link | whatsapp | booking | reviews | text | gallery | video | map | contact | divider
  featured: boolean;
  title: string;
  subtitle: string | null;
  icon: string | null;
  thumbnailUrl: string | null;
  content: Record<string, any>;
}

export interface PublicLinkhubPage {
  /** Identidad estable de la página; con esto se reporta la analítica. */
  linkhubId: string;
  slug: string;
  /**
   * Propiedad dueña de la página: el bloque de reservas embebido abre su motor.
   * Opcional porque un API anterior no lo manda; sin él, el bloque cae al link.
   */
  propertyId?: string;
  profile: {
    displayName: string;
    bio: string;
    avatarUrl: string | null;
    /**
     * Recorte de la imagen: "circle" (foto), "square" (logo entero sobre
     * placa) o "free" (logo suelto). Opcional: un API anterior no lo manda y
     * equivale a círculo.
     */
    avatarShape?: string;
    verified: boolean;
  };
  socialLinks: { platform: string; url: string }[];
  theme: LinkhubTheme;
  blocks: PublicLinkhubBlock[];
  footer: { showWatermark: boolean };
  seo: {
    title: string;
    description: string;
    ogImageUrl: string | null;
  };
}
