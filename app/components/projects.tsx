import React from "react";
import { AiFillGithub } from "react-icons/ai";

type Props = {};

const Projects = (props: Props) => {
	return (
		<section id="projects">
			<div className="lg:w-10/12 2xl:max-w-6xl mx-auto sm:px-4 lg:px-0 py-20">
				<div className="my-5 space-y-4">
					<p className="capitalize text-lg text-primary">my work</p>
					<h1 className="text-5xl font-semibold hero-font uppercase">
						Projects <span className="text-primary text-5xl">.</span>{" "}
					</h1>
					<div className="max-w-3xl">
						<p className="text-lg leading-relaxed py-4">
							Following projects showcases my skills and experience through
							real-world examples of my work. Each project is briefly described
							with links to code repositories and live demos in it. It reflects
							my ability to solve complex problems, work with different
							technologies, and manage projects effectively.
						</p>
					</div>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
					<div className="border border-orange-500 rounded p-6 grid gap-6">
						<h3 className="text-2xl font-semibold">RealEstate</h3>
						<p className="text-lg">
							This is a real estate web site, built with react, nextjs, chkara
							ui.
						</p>

						<a
							className="project-hover-btn-one"
							href="https://realstate01.vercel.app/"
							target="_blank"
							rel="noopener noreferrer"
						>
							View project
						</a>
					</div>
					<div className="border border-green-500 rounded p-6 grid gap-6">
						<h3 className="text-2xl font-semibold">Brilliant</h3>
						<p className="text-lg">
							A online education platform, built with nextjs, tailwind.
							(ongoing)
						</p>
						<a
							className="project-hover-btn-two"
							href="https://brilliant-learning.vercel.app/"
							target="_blank"
							rel="noopener noreferrer"
						>
							View project
						</a>
					</div>
					<div className="border border-violet-500 rounded p-6 grid gap-6">
						<h3 className="text-2xl font-semibold">To Do </h3>
						<p className="text-lg">
							Same old to do app built with react, tailwind and context api
						</p>
						<a
							// className='w-fit text-lg font-semibold text-violet-500 border border-transparent hover:border-b-violet-500 transition duration-300 ease-in-out'
							className="project-hover-btn-three"
							href="https://todolist-theta-green.vercel.app/"
							target="_blank"
							rel="noopener noreferrer"
						>
							View project
						</a>
					</div>
				</div>
				<a
					href="https://github.com/KaushikBaidya"
					target="_blank"
					rel="noopener noreferrer"
				>
					<div className="w-fit mx-auto flex items-center justify-center gap-4 mt-16 border border-transparent hover:border-b-sky-500 transition duration-300 ease-in-out py-2 text-xl font-semibold text-sky-500">
						<p>Repositories on github </p>
						<span>
							<AiFillGithub />
						</span>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Projects;
