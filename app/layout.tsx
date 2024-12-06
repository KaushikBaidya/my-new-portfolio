import type { Metadata } from "next";
import { Oxygen, Monda } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ActiveSectionContextProvider from "@/context/active-section-context";

// const inter = Inter({ subsets: ["latin"] });

const monda = Monda({
	subsets: ["latin"],
	variable: "--font-monda",
	weight: ["700"],
});

const oxygen = Oxygen({
	subsets: ["latin"],
	variable: "--font-oxygen",
	weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
	title: "Kaushik Baidya | Portfolio",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${oxygen.variable} ${monda.variable} bg-gray-900 text-white`}
			>
				{" "}
				<ActiveSectionContextProvider>
					<Navbar />
					<main className="">{children}</main>
					<Footer />
				</ActiveSectionContextProvider>
			</body>
		</html>
	);
}
