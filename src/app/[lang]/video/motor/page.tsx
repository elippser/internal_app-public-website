import { tourPage } from "@/components/video-tours/server";

/** El video de `/producto/motor` (mudo). Todo el armado vive en `video-tours/`. */
const { generateMetadata, Page } = tourPage("motor");

export { generateMetadata };
export default Page;
