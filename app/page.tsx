"use client";
import React, { useState, useEffect } from "react";
import AboutMyself from "./components/aboutMyself";
import Contact from "./components/contact";
import Hero from "./components/hero";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import Projects from "./components/projects";
import MyExperience from "./components/myExperience";
import Skills from "./components/skills";

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
			<MyExperience />
			<Skills />
			<Projects />
			<Contact />
			{showBackToTop && (
				<button
					onClick={scrollToTop}
					className="fixed bottom-4 right-4 bg-blue-500 border-2 border-blue-500 hover:bg-gray-900 hover:border-blue-500 text-white p-2 rounded-full"
				>
					<MdKeyboardDoubleArrowUp size={25} />
				</button>
			)}
		</main>
	);
};

export default Home;
