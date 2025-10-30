import Menu from "@/icons/menu";
import styles from "./navigation.module.css";
import { useState } from "react";
import Link from "next/link";
import Button from "../button";
import Instagram from "@/icons/instagram";
import Facebook from "@/icons/facebook";

const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);

		document.body.style.overflow = isOpen ? "auto" : "hidden";
	};

	return (
		<>
			<button
				className={styles.trigger}
				onClick={handleClick}
			>
				<Menu />
			</button>
			<section
				className={styles.component}
				data-isopen={isOpen}
				onClick={handleClick}
			>
				<div className={styles.wrapper}>
					<ul className={styles.links}>
						<li>
							<Link href="/">Home</Link>
						</li>
						<li>
							<Link href="/menu">Menu</Link>
						</li>
						<li>
							<Link href="/faqs">FAQs</Link>
						</li>
						<li>
							<Link href="/contact">Contact</Link>
						</li>
						<li>
							<Button
								onClick={() =>
									window.open(
										"https://tables.toasttab.com/restaurants/2c7effac-599a-429d-8dc5-eeb2554d6531/findTime",
										"_blank",
									)
								}
								raised
							>
								Book Room
							</Button>
						</li>
						<li>
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
										href="http://www.facebook.com/thepinkcactusknox"
										target="_blank"
										rel="noopener noreferrer"
									>
										<Facebook />
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</section>
		</>
	);
};

export default Navigation;
