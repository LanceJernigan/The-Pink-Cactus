export type FeaturetteProps = {
	title: string;
	children?: React.ReactNode;

	image: {
		src: string;
		alt: string;
	};
	reverse?: boolean;
};
