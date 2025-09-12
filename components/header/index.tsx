import FlowerIcon from "@/icons/flower";
import styles from "./header.module.css";
import Link from "next/link";

const Header = () => {
	return (
		<header className={styles.component}>
			<div className={styles.wrapper}>
				<Link
					href="/"
					className={styles.logo}
				>
					<FlowerIcon />
				</Link>
			</div>
		</header>
	);
};

export default Header;
