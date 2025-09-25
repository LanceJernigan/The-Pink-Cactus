import type { Metadata } from "next";
import localFont from "next/font/local";
import styles from "./layout.module.css";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/next";

const milliffigh = localFont({
	src: "../public/assets/fonts/milliffigh.otf",
	variable: "--font-milliffigh",
});

const gladolia = localFont({
	src: "../public/assets/fonts/gladolia.otf",
	variable: "--font-gladolia",
});

const balney = localFont({
	src: "../public/assets/fonts/balney.otf",
	variable: "--font-balney",
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
			<body
				className={`${milliffigh.variable} ${gladolia.variable} ${balney.variable} ${styles.body}`}
			>
				<Analytics />
				<Header />
				<main className={styles.main}>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
