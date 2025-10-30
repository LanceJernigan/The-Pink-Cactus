import { PortableTextBlock } from "@portabletext/types";

export type FAQsProps = {
	questions: {
		question: string;
		answer: PortableTextBlock[];
	}[];
};
