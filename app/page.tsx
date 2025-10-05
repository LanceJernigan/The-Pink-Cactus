import Featurette from "@/components/featurette";
import Hero from "@/components/hero";
import { client } from "@/sanity/client";
import imageUrlBuilder from "@/sanity/imageUrlBuilder";
import styles from "./page.module.css";

const CONTENT_QUERY = `*[_type == "home"][0]`;

const options = { next: { revalidate: 30 } };

export default async function Home() {
	const content = await client.fetch<{
		hero: { slogan: string };
		featurettes: {
			title: string;
			content: string;
			image: { asset: { _ref: string }; alt?: string };
			link?: { url: string; text: string; newTab?: boolean };
		}[];
	}>(CONTENT_QUERY, {}, options);

	return (
		<>
			<Hero slogan={content.hero.slogan} />
			<section className={styles.featurettes}>
				{content.featurettes.map((featurette, i) => {
					const splitContent = featurette.content
						.split("\n")
						.filter((p: string) => p.trim() !== "");
					return (
						<Featurette
							key={i}
							title={featurette.title}
							image={{
								src: imageUrlBuilder(featurette.image).width(600).url() || "",
								alt: featurette.image.alt || "",
							}}
							link={featurette.link}
							reverse={i % 2 === 1}
						>
							{splitContent.map((paragraph: string, j: number) => (
								<p key={j}>{paragraph}</p>
							))}
						</Featurette>
					);
				})}
			</section>
		</>
	);
}
