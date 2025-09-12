import Flower from "@/icons/flower";
import styles from "./menuItems.module.css";
import { MenuItemsProps } from "./types";

const MenuItems = ({ items, title }: MenuItemsProps) => (
	<section className={styles.component}>
		<div className={styles.wrapper}>
			<header className={styles.header}>
				<Flower />
				<h2 className={styles.title}>{title}</h2>
			</header>
			<ul className={styles.list}>
				{items.map((item, index) => (
					<li
						className={styles.listItem}
						key={index}
					>
						<article>
							<h3 className={styles.itemTitle}>{item.name}</h3>
							<p className={styles.itemDescription}>{item.description}</p>
							<p className={styles.itemPrice}>${item.price}</p>
						</article>
					</li>
				))}
			</ul>
		</div>
	</section>
);

export default MenuItems;
