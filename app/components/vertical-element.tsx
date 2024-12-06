"use client";

import { useInView } from "react-intersection-observer";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { type VerticalElementType } from "@/lib/types";

const VerticalElement = ({
	title,
	description,
	company,
	date,
	icon,
}: VerticalElementType) => {
	// const { theme } = useTheme();
	const { ref, inView } = useInView({ threshold: 0.25, triggerOnce: true });

	return (
		<VerticalTimelineElement
			contentStyle={{
				background: "rgba(108, 109, 112, 0.249)",
				boxShadow: "none",
				border: "1px solid rgba(0, 0, 0, 0.05)",
				borderRadius: "1rem",
				textAlign: "left",
				padding: "1.3rem 2rem",
			}}
			contentArrowStyle={{
				borderRight: "0.4rem solid rgba(149, 59, 194, 0.889)",
			}}
			date={date}
			icon={icon}
			iconStyle={{
				background: "rgba(149, 59, 194, 0.889)",
				fontSize: "1.5rem",
			}}
			visible={inView}
		>
			<h3 className="!font-semibold !text-xl capitalize" ref={ref}>
				{title}
			</h3>
			<p className="!mt-2 !text-lg leading-normal text-gray-700 dark:text-white">
				{company}
			</p>
			<p className="!mt-2 !text-lg leading-normal text-gray-700 dark:text-white">
				{description}
			</p>
		</VerticalTimelineElement>
	);
};

export { VerticalElement };
