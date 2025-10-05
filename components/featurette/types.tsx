export type FeaturetteProps = {
	title: string;
	children?: React.ReactNode;
	image: {
		src: string;
		alt: string;
	};
	link?: {
		url: string;
		text: string;
		newTab?: boolean;
	};
	reverse?: boolean;
};
