"use client";

import FlowerIcon from "@/icons/flower";
import styles from "./header.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
// import LogoText from "@/icons/logoText";

const Header = () => {
	const [hasScrolled, setHasScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setHasScrolled(true);
			} else {
				setHasScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll();

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header
			className={styles.component}
			data-scrolled={hasScrolled}
		>
			<div className={styles.wrapper}>
				<Link
					href="/"
					className={styles.logo}
				>
					<FlowerIcon />
					{/* <LogoText /> */}
				</Link>
			</div>
		</header>
	);
};

export default Header;
