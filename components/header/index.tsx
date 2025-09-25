"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import FlowerIcon from "@/icons/flower";
import Navigation from "@/components/navigation";
import styles from "./header.module.css";
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
				<Navigation />
			</div>
		</header>
	);
};

export default Header;
