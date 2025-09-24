import * as React from "react";
import { Html, Body, Tailwind, Text } from "@react-email/components";

interface EmailTemplateProps {
	name: string;
	email: string;
	message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
	email,
	name,
	message,
}) => {
	return (
		<Html>
			<Tailwind>
				<Body className="p-8">
					<Text className="text-lg font-bold">New Contact Submission</Text>
					<Text className="">Name: {name}</Text>
					<Text>Email: {email}</Text>
					<div className="whitespace-pre-wrap break-words">{message}</div>
				</Body>
			</Tailwind>
		</Html>
	);
};

export default EmailTemplate;
