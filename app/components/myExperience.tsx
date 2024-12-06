"use client";

import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { VerticalElement } from "./vertical-element";
import Skills from "./skills";

export default function Experience() {
	const { ref } = useSectionInView("Experience");
	return (
		<section id="experience" ref={ref} className="">
			<div className="lg:w-10/12 2xl:max-w-6xl mx-auto sm:px-4 lg:px-0 py-20">
				<div className="pb-16 text-center space-y-4">
					<p className="capitalize text-lg text-primary">
						What I have done so far
					</p>
					<h1 className="text-5xl font-semibold hero-font uppercase ">
						Work Experience <span className="text-primary text-5xl">.</span>
					</h1>
				</div>
				<div className="my-10">
					<VerticalTimeline lineColor="">
						{experiencesData.map((item, index) => {
							return (
								<React.Fragment key={index}>
									<VerticalElement
										title={item.title}
										description={item.description}
										company={item.company}
										date={item.date}
										icon={item.icon}
									/>
								</React.Fragment>
							);
						})}
					</VerticalTimeline>
				</div>
				<Skills />
			</div>
		</section>
	);
}
