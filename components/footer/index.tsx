import Instagram from "@/icons/instagram";
import styles from "./footer.module.css";
import Tiktok from "@/icons/tiktok";
import Pin from "@/icons/pin";

const Footer = () => (
	<footer className={styles.component}>
		<div className={styles.wrapper}>
			<ul className={styles.social}>
				<li>
					<a
						href="https://www.instagram.com/thepinkcactusknox/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Instagram />
					</a>
				</li>
				<li>
					<a
						href="https://www.instagram.com/thepinkcactusknox/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Tiktok />
					</a>
				</li>
			</ul>
			<p>
				<Pin />
				1147 Sevier Ave, Knoxville, TN 37920
			</p>
			<p>© {new Date().getFullYear()} The Pink Cactus LLC</p>
		</div>
	</footer>
);

export default Footer;
