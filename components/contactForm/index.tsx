"use client";

import Button from "@/components/button";
import styles from "./contactForm.module.css";
import Email from "@/icons/email";
import Phone from "@/icons/phone";
import Compass from "@/icons/compass";
import Cross from "@/icons/cross";
import { useState } from "react";
import Check from "@/icons/check";
import { ContactFormProps } from "./types";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^(?:\d{10}|(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4})$/;

const validations = {
	firstName: (value: string) => !!value.length,
	lastName: (value: string) => !!value.length,
	phone: (value: string) => phoneRegex.test(value),
	email: (value: string) => emailRegex.test(value),
	message: (value: string) => !!value.length,
};

const testValues = ({
	firstName,
	lastName,
	phone,
	email,
	message,
}: {
	firstName: string;
	lastName: string;
	phone: string;
	email: string;
	message: string;
}) => ({
	firstName: validations.firstName(firstName)
		? ""
		: "You must enter a first name.",
	lastName: validations.lastName(lastName) ? "" : "You must enter a last name.",
	phone: validations.phone(phone) ? "" : "You must enter a valid phone number.",
	email: validations.email(email) ? "" : "You must enter a valid email.",
	message: validations.message(message)
		? ""
		: "You must enter a valid message.",
});

const ContactForm = ({ phone, email, mapLink }: ContactFormProps) => {
	const [status, setStatus] = useState("new");
	const [fields, setFields] = useState({
		firstName: "",
		lastName: "",
		phone: "",
		email: "",
		message: "",
	});
	const [errors, setErrors] = useState({
		firstName: "You must enter a first name.",
		lastName: "You must enter a last name.",
		phone: "You must enter a valid phone number.",
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
								<label htmlFor="firstName">
									First Name:
									<input
										type="text"
										id="firstName"
										name="firstName"
										onChange={handleChange}
										value={fields.firstName}
										required
									/>
								</label>
								<label htmlFor="lastName">
									Last Name:
									<input
										type="text"
										id="lastName"
										name="lastName"
										onChange={handleChange}
										value={fields.lastName}
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
								<label htmlFor="email">
									Phone:
									<input
										type="text"
										id="phone"
										name="phone"
										onChange={handleChange}
										value={fields.phone}
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
									!!errors.firstName.length ||
									!!errors.lastName.length ||
									!!errors.phone.length ||
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
									href={mapLink}
									target="_blank"
								>
									<Compass />
									Directions
								</a>
							</li>
							<li className={styles.infoItem}>
								<a href={`mailto:${email}`}>
									<Email />
									Email
								</a>
							</li>
							<li className={styles.infoItem}>
								<a href={`tel:${phone}`}>
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
