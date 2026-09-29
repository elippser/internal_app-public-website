import { tourPage } from "@/components/video-tours/server";

/** El video de `/producto/marketing` (mudo). Todo el armado vive en `video-tours/`. */
const { generateMetadata, Page } = tourPage("marketing");

export { generateMetadata };
export default Page;
