import ContactForm from "@/components/contactForm";
import { client } from "@/sanity/client";

const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0]`;

const Contact = async () => {
	const data = await client.fetch<{
		contact: { phone: string; email: string; mapLink: string };
	}>(SITE_SETTINGS_QUERY, {}, { next: { revalidate: 30 } });

	return (
		<>
			<ContactForm
				phone={data.contact.phone}
				email={data.contact.email}
				mapLink={data.contact.mapLink}
			/>
		</>
	);
};

export default Contact;
