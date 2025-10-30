import * as React from "react";
import { Html, Body, Tailwind, Text } from "@react-email/components";

interface EmailTemplateProps {
	firstName: string;
	lastName: string;
	phone: string;
	email: string;
	message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
	email,
	firstName,
	lastName,
	phone,
	message,
}) => {
	return (
		<Html>
			<Tailwind>
				<Body className="p-8">
					<Text className="text-lg font-bold">New Contact Submission</Text>
					<Text className="">
						Name: {firstName} {lastName}
					</Text>
					<Text>Email: {email}</Text>
					<Text>Phone: {phone}</Text>
					<div className="whitespace-pre-wrap break-words">{message}</div>
				</Body>
			</Tailwind>
		</Html>
	);
};

export default EmailTemplate;
