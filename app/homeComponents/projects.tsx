import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { projectsData } from "@/lib/data";
import Tilt from "react-parallax-tilt";
import Image from "next/image";

const Projects = () => {
	return (
		<section id="projects" className=" text-white py-20">
			<div className="lg:w-10/12 2xl:max-w-6xl mx-auto sm:px-4 lg:px-0">
				{/* Header Section */}
				<div className="m-5 space-y-4">
					<p className="capitalize text-lg text-sky-500">my work</p>
					<h1 className="text-3xl lg:text-5xl font-semibold hero-font uppercase">
						Projects <span className="text-sky-500">.</span>{" "}
					</h1>
					<div className="max-w-3xl">
						<p className="text-lg leading-relaxed py-4 text-gray-300">
							Below are some of the projects I've worked on, showcasing my
							skills and creativity in web development. Each project is a unique
							challenge, demonstrating my ability to use cutting-edge
							technologies to build engaging and functional websites.
						</p>
					</div>
				</div>

				{/* First Project Highlight */}
				<div className="mx-5 mb-16">
					<Tilt className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-500 border-2 border-transparent hover:border-secondary ">
						<div
							className="relative w-full h-96 rounded-lg"
							style={{
								backgroundImage: `url(${
									projectsData[0]?.image?.src || "/default-image.jpg"
								})`,
								backgroundSize: "cover",
								backgroundPosition: "center",
								filter: "brightness(0.85)",
							}}
						>
							<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
							<div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 py-6">
								<h2 className="text-5xl font-extrabold">
									{projectsData[0].title}
								</h2>
								<p className="text-lg mt-4 max-w-xl">
									{projectsData[0].description}
								</p>
								<a
									href={projectsData[0].link}
									target="_blank"
									rel="noopener noreferrer"
									className="mt-8 py-3 px-8 bg-primary text-white rounded-lg text-xl font-semibold transition-transform duration-300 hover:scale-110"
								>
									View Project
								</a>
							</div>
						</div>
					</Tilt>
				</div>

				{/* Other Projects */}
				<div className="mx-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{projectsData.slice(1).map((project) => (
						<div
							key={project.id}
							className="p-4 rounded-lg shadow-lg bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 hover:shadow-xl transition-all duration-500"
						>
							<div className="relative">
								<Image
									src={project.image?.src || "/default-image.jpg"}
									alt={project.title}
									width={500}
									height={300}
									className="w-full h-56 object-cover rounded-lg"
								/>
								<div className="absolute inset-0 bg-opacity-30 rounded-lg hover:bg-opacity-40 transition-all duration-300 pointer-events-none"></div>

								<div className="mt-4">
									<h3 className="text-xl font-bold text-white">
										{project.title}
									</h3>
									<p className="text-gray-300 mt-2 text-sm mb-2">
										{project.description}
									</p>
									<a
										href={project.link}
										target="_blank"
										rel="noopener noreferrer"
										className="project-hover-btn"
									>
										View Project
									</a>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* GitHub Link */}
				<a
					href="https://github.com/KaushikBaidya"
					target="_blank"
					rel="noopener noreferrer"
					className="w-fit mx-auto flex items-center justify-center gap-4 mt-16 border border-transparent hover:border-b-sky-500 transition duration-300 ease-in-out py-2 text-xl font-semibold text-sky-500"
				>
					<p>Repositories on GitHub</p>
					<AiFillGithub size={24} />
				</a>
			</div>
		</section>
	);
};

export default Projects;
