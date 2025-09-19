import FlowerIcon from "@/icons/flower";
import styles from "./header.module.css";
import Link from "next/link";
// import LogoText from "@/icons/logoText";

const Header = () => {
	return (
		<header className={styles.component}>
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
