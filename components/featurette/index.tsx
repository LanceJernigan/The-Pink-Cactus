import { FeaturetteProps } from "./types";
import styles from "./featurette.module.css";
import Image from "next/image";
import Flower from "@/icons/flower";
import Button from "@/components/button";

const Featurette = ({
	title,
	children,
	image,
	link,
	reverse = false,
}: FeaturetteProps) => (
	<section className={styles.component}>
		<div
			className={styles.wrapper}
			data-reverse={reverse}
		>
			<div className={styles.image}>
				<Image
					src={image.src}
					alt={image.alt}
					width={600}
					height={400}
				/>
			</div>
			<div className={styles.content}>
				<div className={styles.contentHeader}>
					<Flower />
					<h2 className={styles.title}>{title}</h2>
				</div>
				<div className={styles.children}>{children}</div>
				{link && link.url && link.text && (
					<div className={styles.link}>
						<Button
							href={link.url}
							newTab={link.newTab}
							raised
						>
							{link.text}
						</Button>
					</div>
				)}
			</div>
		</div>
	</section>
);

export default Featurette;
