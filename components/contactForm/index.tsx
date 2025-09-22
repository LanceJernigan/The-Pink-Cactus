import Button from "@/components/button";
import styles from "./contactForm.module.css";
import Email from "@/icons/email";
import Phone from "@/icons/phone";
import Compass from "@/icons/compass";

const ContactForm = () => (
	<section className={styles.component}>
		<div className={styles.wrapper}>
			<header className={styles.header}>
				<h1>Contact Us</h1>
				<p>
					We would love to hear from you! Please fill out the form below to get
					in touch.
				</p>
			</header>
			<div className={styles.content}>
				<form
					name="contact"
					className={styles.form}
				>
					<div className={styles.fields}>
						<label htmlFor="name">
							Name:
							<input
								type="text"
								id="name"
								name="name"
								required
							/>
						</label>
						<label htmlFor="email">
							Email:
							<input
								type="text"
								id="email"
								name="email"
								required
							/>
						</label>
						<label htmlFor="message">
							Message:
							<textarea
								id="message"
								name="message"
							/>
						</label>
					</div>
					<Button>Send</Button>
				</form>
				<div className={styles.info}>
					<h2>Other ways to get connected</h2>
					<ul className={styles.list}>
						<li className={styles.infoItem}>
							<a
								href="https://maps.app.goo.gl/VucVjQdptAMiT3ba8"
								target="_blank"
							>
								<Compass />
								Directions
							</a>
						</li>
						<li className={styles.infoItem}>
							<a href="mailto:thepinkcactusknox@gmail.com">
								<Email />
								Email
							</a>
						</li>
						<li className={styles.infoItem}>
							<a href="tel:(865) 437-3293">
								<Phone />
								Call
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
);

export default ContactForm;
