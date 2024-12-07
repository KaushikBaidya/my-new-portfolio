import React from "react";
import { RiGraduationCapLine } from "react-icons/ri";
import { BiCodeAlt } from "react-icons/bi";
import { BsPersonWorkspace } from "react-icons/bs";
// import KovacsTrading from "^/public/KovacsTrading.jpg";
// import ClickGeneration from "^/public/ClickGeneration.jpg";
// import LaPecoraNera from "^/public/LaPecoraNera.jpg";

import HTML from "@/assets/html.png";
import CSS from "@/assets/css.png";
import JavaScript from "@/assets/javascript.png";
import ReactImage from "@/assets/react.png";
import FireBase from "@/assets/firebase.png";
import GitHub from "@/assets/github.png";
import Tailwind from "@/assets/tailwind.png";
import Mongo from "@/assets/mongo.png";
import Node from "@/assets/node.png";
import Typescript from "@/assets/typescript.png";
import Framer from "@/assets/framer.webp";

export const navItems = [
	"Home",
	"About",
	"Experience",
	"Projects",
	"Contact",
] as const;

export const links = [
	{
		name: "Home",
		hash: "#home",
	},
	{
		name: "About",
		hash: "#about",
	},
	{
		name: "Projects",
		hash: "#projects",
	},
	{
		name: "Experience",
		hash: "#experience",
	},
	{
		name: "Contact",
		hash: "#contact",
	},
] as const;

export const experiencesData = [
	{
		title: "Graduatoin in CSE",
		company: "Ranada Prasad Shaha University",
		description:
			"Earned a degree from X University, gaining strong foundations in programming, algorithms, and software development.",
		icon: React.createElement(RiGraduationCapLine),
		date: "Jan 2016 - Jan 2021",
	},
	{
		title: "Frontend Developer (Intern)",
		company: "Chimbuk IT Ltd.",
		description:
			"I have worked here as a frontend developer intern and learned many different technologies.I maintained api responses and try to reduce api latency.",
		icon: React.createElement(BiCodeAlt),
		date: "Jul 2021 - Sep 2021",
	},
	{
		title: "Frontend - Full Stack Developer",
		company: "Chimbuk IT Ltd.",
		description:
			"I worked as a full stack developer at Chimbuk IT Ltd. I have worked on HR and Payroll management, ERP software system for school and college, Learning management software.",
		icon: React.createElement(BsPersonWorkspace),
		date: "Oct 2021 - July 2024",
	},
] as const;

// export const projectsData = [
// 	{
// 		title: "Kovacs Trading",
// 		description:
// 			"The platform that provides everything you need to become a successful trader.",
// 		tags: ["React", "Next.JS", "Tailwind CSS"],
// 		imageUrl: KovacsTrading,
// 		projectUrl: "https://kovacs-trading.robycodes.com/",
// 	},
// 	{
// 		title: "Click Generation",
// 		description:
// 			"A StartUp with the goal of evolving small Italian companies using the power of Internet.",
// 		tags: ["WordPress", "Elementor", "HTML", "CSS", "JavaScript"],
// 		imageUrl: ClickGeneration,
// 		projectUrl: "https://clickgeneration.it",
// 	},
// 	{
// 		title: "La Pecora Nera",
// 		description:
// 			"An inviting restaurant where you can savor the finest, locally sourced foods with animals and vegetables grown from within a close radius.",
// 		tags: ["WordPress", "Elementor", "HTML", "CSS", "JavaScript"],
// 		imageUrl: LaPecoraNera,
// 		projectUrl: "https://agriturismolapecoranera.com",
// 	},
// ] as const;

export const skillsData = [
	{ name: "HTML", imageUrl: HTML },
	{ name: "CSS", imageUrl: CSS },
	{ name: "JavaScript", imageUrl: JavaScript },
	{ name: "React", imageUrl: ReactImage },
	{ name: "Firebase", imageUrl: FireBase },
	{ name: "GitHub", imageUrl: GitHub },
	{ name: "Tailwind", imageUrl: Tailwind },
	{ name: "MongoDB", imageUrl: Mongo },
	{ name: "Node", imageUrl: Node },
	{ name: "TypeScript", imageUrl: Typescript },
	{ name: "Framer Motion", imageUrl: Framer },
] as const;
