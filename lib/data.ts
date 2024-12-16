import React from "react";
import { RiGraduationCapLine } from "react-icons/ri";
import { BiCodeAlt } from "react-icons/bi";
import { BsPersonWorkspace } from "react-icons/bs";
// import KovacsTrading from "^/public/KovacsTrading.jpg";
// import ClickGeneration from "^/public/ClickGeneration.jpg";
// import LaPecoraNera from "^/public/LaPecoraNera.jpg";

import Project1 from "@/assets/projects-image/Screenshot_1.png";
import Project2 from "@/assets/projects-image/Screenshot_2.png";
import Project3 from "@/assets/projects-image/Screenshot_3.png";
import Project4 from "@/assets/projects-image/Screenshot_4.png";

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

// export const navItems = [
// 	"Home",
// 	"About",
// 	"Experience",
// 	"Projects",
// 	"Contact",
// ] as const;

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
		name: "Experience",
		hash: "#experience",
	},
	{
		name: "Projects",
		hash: "#projects",
	},
	{
		name: "Contact",
		hash: "#contact",
	},
] as const;

export const experiencesData = [
	{
		title: "Frontend Developer (Intern)",
		company: "Chimbuk IT Ltd.",
		description:
			"I have worked here as a frontend developer intern and learned many different technologies.I maintained api responses and try to reduce api latency.",
		icon: React.createElement(BiCodeAlt),
		date: "Jul 2022 - Sep 2022",
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

export const projectsData = [
	{
		id: 1,
		title: "Animated Website",
		description:
			"A visually stunning, award-winning website built with Vite, GSAP, and Tailwind. It showcases my ability to create engaging animations and smooth transitions.",
		link: "https://ani-mated-web-site.netlify.app/",
		image: Project1,
	},
	{
		id: 2,
		title: "Brilliant",
		description:
			"An online education platform, built with Next.js and Tailwind. This ongoing project allows users to access various learning resources.",
		link: "https://brilliant-learning.vercel.app/",
		image: Project2,
	},
	{
		id: 3,
		title: "RealEstate",
		description:
			"A real estate website built with React, Next.js, and Chakra UI, allowing users to search and view properties with ease.",
		link: "https://realstate01.vercel.app/",
		image: Project3,
	},
	{
		id: 4,
		title: "To Do",
		description:
			"A simple to-do app built with React, Tailwind, and Context API to manage tasks with a clean and intuitive UI.",
		link: "https://todolist-theta-green.vercel.app/",
		image: Project4,
	},
];

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
