import type { Metadata } from "next";
import { Oxygen } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// const inter = Inter({ subsets: ["latin"] });
const oxygen = Oxygen({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: "300",
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
      <body className={`${oxygen.variable} font-sans bg-gray-900 text-white`}>
        <Navbar />
        <main className={`${oxygen.variable} font-sans`}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
