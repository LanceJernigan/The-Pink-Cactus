import type { Metadata } from "next";
import { Gabarito } from "next/font/google";
import styles from "./layout.module.css";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/next";

const gabarito = Gabarito({
	variable: "--font-gabarito",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "The Pink Cactus",
	description: "Gather with friends, have fun, & celebrate the good life.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${gabarito.variable} ${styles.body}`}>
				<Analytics />
				<Header />
				<main className={styles.main}>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
