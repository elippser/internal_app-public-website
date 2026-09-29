import { tourPage } from "@/components/video-tours/server";

/** El video de `/producto/revenue` (mudo). Todo el armado vive en `video-tours/`. */
const { generateMetadata, Page } = tourPage("revenue");

export { generateMetadata };
export default Page;
