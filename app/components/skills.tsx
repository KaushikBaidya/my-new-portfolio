"use client";

import { skillsData } from "@/lib/data";
import SkillElement from "./skill-element";

import { motion } from "framer-motion";
import { slideIn } from "@/lib/motion";
import useInView from "@/lib/useInView";

const Skills = () => {
	const isInView = useInView("skills", { threshold: 0.1 });
	return (
		<section id="skills" className="w-full pt-20">
			<motion.div
				variants={slideIn("down", "tween", 0.2, 1)}
				initial="hidden"
				animate={isInView ? "show" : "hidden"}
			>
				<div className="max-w-[1000px] mx-auto p-5 flex flex-col justify-center w-full h-full">
					<div className="w-full flex flex-wrap justify-around gap-14 text-center py-8">
						{skillsData.map((item, index) => (
							<div key={index}>
								<SkillElement name={item.name} imageUrl={item.imageUrl} />
							</div>
						))}
					</div>
				</div>
			</motion.div>
		</section>
	);
};

export default Skills;
