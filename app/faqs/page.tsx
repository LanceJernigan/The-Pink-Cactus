import FAQs from "@/components/faqs";
import data from "./data";
import styles from "./page.module.css";

const FAQsPage = () => (
	<section className={styles.FAQs}>
		<FAQs questions={data} />
	</section>
);

export default FAQsPage;
