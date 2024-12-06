import React from "react";

import { skillsData } from "@/lib/data";
import SkillElement from "./skill-element";

const Skills = () => {
	return (
		<section className="w-full py-20">
			<div className="max-w-[1000px] mx-auto p-5 flex flex-col justify-center w-full h-full">
				{/* <div className='text-center'>
					<p className='text-4xl font-semibold text-center py-2'>
						<span className='text-blue-400'>My</span>{' '}
						<span className='border-b-4 border-blue-400'>Skills</span>
					</p>
					<p className='py-4'>
						These are the technologies I&apos;ve worked with
					</p>
				</div> */}

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
