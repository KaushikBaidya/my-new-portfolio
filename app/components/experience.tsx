"use client";
import { SetStateAction, useState } from "react";
import ChimbukIT from "./expContent/chimbuk";

const Experience = () => {
	const [activeTab, setActiveTab] = useState(1);

	const handleTabClick = (tabNumber: SetStateAction<number>) => {
		setActiveTab(tabNumber);
	};
	return (
		<main id="experience" className="bg-gray-800 py-20">
			<div className="lg:w-10/12 2xl:max-w-6xl mx-auto sm:px-4 lg:px-0">
				<div>
					<h1 className="text-3xl font-semibold">
						Experience <span className="text-blue-500 text-5xl">.</span>{" "}
					</h1>
				</div>

				<div className="flex flex-col md:flex-row text-white mt-10 h-full">
					<div className="bg-gray-950 md:w-1/4">
						<ul>
							<li
								className={`cursor-pointer p-5 ${
									activeTab === 1
										? "border-l-8 border-blue-500 text-white"
										: "bg-gray-950 border-l-8 border-gray-950"
								}`}
								onClick={() => handleTabClick(1)}
							>
								Chimbuk IT Ltd.
							</li>
						</ul>
					</div>

					<div className="p-4 md:w-3/4">{activeTab === 1 && <ChimbukIT />}</div>
				</div>
			</div>
		</main>
	);
};

export default Experience;
