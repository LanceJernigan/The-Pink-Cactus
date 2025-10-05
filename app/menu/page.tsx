import MenuItems from "@/components/menuItems";
import { client } from "@/sanity/client";
import styles from "./page.module.css";

const MENU_ITEMS_QUERY = `*[_type == "menuItems"]{ category, name, price, variations, description }`;
const MENU_ITEM_CATEGORIES_QUERY = `*[_type == "menuItemCategory"] | order(order asc){
  _id, title 
}`;

const options = { next: { revalidate: 30 } };

export default async function Menu() {
	const menuItems = await client.fetch<
		{
			category: { _ref: string };
			name: string;
			price: number;
			variations?: string[];
			description?: string;
		}[]
	>(MENU_ITEMS_QUERY, {}, options);
	const menuItemCategories = await client.fetch<
		{ title: string; _id: string }[]
	>(MENU_ITEM_CATEGORIES_QUERY, {}, options);
	const mergedMenuItems = menuItemCategories.map((category) => ({
		...category,
		items: menuItems.filter((item) => item.category._ref === category._id),
	}));

	return (
		<>
			<section className={styles.menuItems}>
				{mergedMenuItems.map(({ title, items }) => (
					<MenuItems
						items={items}
						title={title}
						key={title}
					/>
				))}
			</section>
		</>
	);
}
