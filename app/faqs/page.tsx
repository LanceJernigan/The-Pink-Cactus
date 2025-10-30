import { PortableTextBlock } from "@portabletext/types";
import FAQs from "@/components/faqs";
import { client } from "@/sanity/client";
import styles from "./page.module.css";

const FAQS_QUERY = `*[_type == "faqs"]|order(orderRank){ question, answer, content }`;

const options = { next: { revalidate: 30 } };

const FAQsPage = async () => {
	const faqs = await client.fetch<
		{ question: string; answer: PortableTextBlock[] }[]
	>(FAQS_QUERY, {}, options);

	return (
		<section className={styles.FAQs}>
			<FAQs questions={faqs} />
		</section>
	);
};

export default FAQsPage;
