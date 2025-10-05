import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

const wrappedBuilder = (source: SanityImageSource) =>
	imageUrlBuilder({
		projectId: process.env.SANITY_PROJECT_ID || "",
		dataset: "production",
	}).image(source);

export default wrappedBuilder;
