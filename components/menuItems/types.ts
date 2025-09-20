export type MenuItemsProps = {
	items: {
		name: string;
		description?: string;
		price: number;
		variations?: string[];
	}[];
	title: string;
};
