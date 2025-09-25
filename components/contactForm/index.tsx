"use client";

import Button from "@/components/button";
import styles from "./contactForm.module.css";
import Email from "@/icons/email";
import Phone from "@/icons/phone";
import Compass from "@/icons/compass";
import Cross from "@/icons/cross";
import { useState } from "react";
import Check from "@/icons/check";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validations = {
	name: (value: string) => !!value.length,
	email: (value: string) => emailRegex.test(value),
	message: (value: string) => !!value.length,
};

const testValues = ({
	name,
	email,
	message,
}: {
	name: string;
	email: string;
	message: string;
}) => ({
	name: validations.name(name) ? "" : "You must enter a name.",
	email: validations.email(email) ? "" : "You must enter a valid email.",
	message: validations.message(message)
		? ""
		: "You must enter a valid message.",
});

const ContactForm = () => {
	const [status, setStatus] = useState("new");
	const [fields, setFields] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [errors, setErrors] = useState({
		name: "You must enter a name.",
		email: "You must enter a valid email.",
		message: "You must enter a valid message.",
	});
	const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();
		setStatus("submitting");

		const res = await fetch("/api/sendContact", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(fields),
		});

		if (res.ok) {
			setStatus("submitted");
		} else {
			setStatus("error");
		}
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setErrors(
			testValues({
				...fields,
				[e.target.name]: e.target.value,
			}),
		);
		setFields({
			...fields,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<section className={styles.component}>
			<div className={styles.wrapper}>
				<header className={styles.header}>
					<h1>Contact Us</h1>
					<p>
						We would love to hear from you! Please fill out the form below to
						get in touch.
					</p>
				</header>
				<div className={styles.content}>
					{(status === "new" || status === "submitting") && (
						<form
							name="contact"
							onSubmit={handleSubmit}
							className={styles.form}
							data-submitting={status === "submitting"}
						>
							<div className={styles.fields}>
								<label htmlFor="name">
									Name:
									<input
										type="text"
										id="name"
										name="name"
										onChange={handleChange}
										value={fields.name}
										required
									/>
								</label>
								<label htmlFor="email">
									Email:
									<input
										type="text"
										id="email"
										name="email"
										onChange={handleChange}
										value={fields.email}
										required
									/>
								</label>
								<label htmlFor="message">
									Message:
									<textarea
										id="message"
										name="message"
										onChange={handleChange}
										value={fields.message}
									/>
								</label>
							</div>
							<Button
								type="submit"
								disabled={
									status === "submitting" ||
									!!errors.name.length ||
									!!errors.email.length ||
									!!errors.message.length
								}
							>
								Send
							</Button>
						</form>
					)}
					{(status === "submitted" || status === "error") && (
						<div className={styles.message}>
							{status === "submitted" && (
								<>
									<Check />
									<h2>Thank you for reaching out!</h2>
								</>
							)}
							{status === "error" && (
								<>
									<Cross />
									<h2>
										There was an error submitting your form, please try again
										later.
									</h2>
								</>
							)}
						</div>
					)}
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
};

export default ContactForm;
