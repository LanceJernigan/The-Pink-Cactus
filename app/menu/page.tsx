import MenuItems from "@/components/menuItems";
import { cocktails, shooters, arepas, flatbread } from "./data";
import styles from "./page.module.css";

export default function Menu() {
	return (
		<>
			<section className={styles.menuItems}>
				<MenuItems
					items={cocktails}
					title="Cocktails"
				/>
				<MenuItems
					items={shooters}
					title="Shooters"
				/>
				<MenuItems
					items={arepas}
					title="Arepas (order of 2)"
				/>
				<MenuItems
					items={flatbread}
					title="Flatbread"
				/>
			</section>
		</>
	);
}
