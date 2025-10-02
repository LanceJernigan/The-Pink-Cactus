"use client";

import { useState } from "react";
import styles from "./faqs.module.css";
import { FAQsProps } from "./types";

const FAQs = ({ questions }: FAQsProps) => {
	const [openedFAQ, setOpenedFAQ] = useState<number | null>(null);

	return (
		<section className={styles.component}>
			<div className={styles.wrapper}>
				<header className={styles.header}>
					<h1>Frequently Asked Questions</h1>
					<p>
						Have questions? We've got answers! Explore our FAQs below to find
						quick solutions and helpful information about our services.
					</p>
				</header>
				<ul className={styles.list}>
					{questions.map(({ question, answer }, i) => (
						<li
							className={styles.item}
							data-open={openedFAQ === i}
							key={i}
						>
							<button
								className={styles.question}
								onClick={() => setOpenedFAQ(openedFAQ === i ? null : i)}
								aria-expanded={openedFAQ === i}
								aria-controls={`faq-${i}-panel`}
							>
								<h2>{question}</h2>
							</button>
							<div
								className={styles.answer}
								role="region"
								aria-labelledby={`faq-${i}-button`}
								hidden
								id={`faq-${i}-panel`}
							>
								<p>{answer}</p>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default FAQs;
