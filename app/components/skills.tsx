import React from "react";

import { skillsData } from "@/lib/data";
import SkillElement from "./skill-element";

const Skills = () => {
	return (
		<section className="w-full pt-20">
			<div className="max-w-[1000px] mx-auto p-5 flex flex-col justify-center w-full h-full">
				<div className="w-full flex flex-wrap justify-around gap-14 text-center py-8">
					{skillsData.map((item, index) => (
						<div key={index}>
							<SkillElement name={item.name} imageUrl={item.imageUrl} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;
