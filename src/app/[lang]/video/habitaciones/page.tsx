import { tourPage } from "@/components/video-tours/server";

/** El video de `/producto/habitaciones` (mudo). Todo el armado vive en `video-tours/`. */
const { generateMetadata, Page } = tourPage("rooms");

export { generateMetadata };
export default Page;
