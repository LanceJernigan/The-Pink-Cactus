import Instagram from "@/icons/instagram";
import styles from "./footer.module.css";
import Facebook from "@/icons/facebook";
import Pin from "@/icons/pin";
import { client } from "@/sanity/client";

const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0]`;

const Footer = async () => {
	const data = await client.fetch<{
		contact: { address: string };
		social: { instagram: string; facebook: string };
		copyright: string;
	}>(SITE_SETTINGS_QUERY, {}, { next: { revalidate: 30 } });

	return (
		<footer className={styles.component}>
			<div className={styles.wrapper}>
				<ul className={styles.social}>
					<li>
						<a
							href={data.social.instagram}
							target="_blank"
							rel="noopener noreferrer"
						>
							<Instagram />
						</a>
					</li>
					<li>
						<a
							href={data.social.facebook}
							target="_blank"
							rel="noopener noreferrer"
						>
							<Facebook />
						</a>
					</li>
				</ul>
				<p>
					<Pin />
					{data.contact.address}
				</p>
				<p>
					© {new Date().getFullYear()} {data.copyright}
				</p>
			</div>
		</footer>
	);
};

export default Footer;
