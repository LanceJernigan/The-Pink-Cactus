"use client";

import Logo from "@/icons/logo";
import Button from "@/components/button";
import styles from "./hero.module.css";
import { redirect, RedirectType } from "next/navigation";
import Image from "next/image";

const Hero = () => {
	return (
		<section className={styles.component}>
			<div className={styles.wrapper}>
				<div className={styles.logo}>
					<Logo />
				</div>
				<div className={styles.content}>
					<header className={styles.contentHeader}>
						<h1>Gather with friends & celebrate the good life.</h1>
					</header>
					<div className={styles.buttons}>
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
						<Button
							variant="secondary"
							onClick={() => redirect("/menu", RedirectType.push)}
							raised
						>
							View Menu
						</Button>
					</div>
				</div>
			</div>
			<div className={styles.background}>
				<Image
					src="/assets/images/cacti.jpg"
					alt="Cacti"
					fill
					priority
				/>
			</div>
		</section>
	);
};

export default Hero;
