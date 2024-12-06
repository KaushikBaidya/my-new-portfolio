"use client";
import React, { useState, useEffect } from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import Hero from "./homeComponents/hero";
import AboutMyself from "./homeComponents/aboutMyself";
import Experience from "./homeComponents/experience";
import Skills from "./homeComponents/skills";
import Projects from "./homeComponents/projects";
import Contact from "./homeComponents/contact";

const Home = () => {
	const [showBackToTop, setShowBackToTop] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY || window.pageYOffset;

			const halfwayPoint = window.innerHeight / 2;

			setShowBackToTop(scrollY > halfwayPoint);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<main className="overflow-x-hidden bg-gradient-to-b from-[#050816] to-gray-900">
			<Hero />
			<AboutMyself />
			<Experience />
			<Skills />
			<Projects />
			<Contact />
			{showBackToTop && (
				<button
					onClick={scrollToTop}
					className="fixed bottom-4 right-4 bg-primary border-2 border-primary hover:bg-gray-900 hover:border-primary text-white p-2 rounded-full"
				>
					<MdKeyboardDoubleArrowUp size={25} />
				</button>
			)}
		</main>
	);
};

export default Home;
