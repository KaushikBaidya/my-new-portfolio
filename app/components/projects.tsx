import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

type Props = {};

const Projects = (props: Props) => {
	return (
		<section id='projects'>
			<div className='lg:w-10/12 2xl:max-w-6xl mx-auto sm:px-4 lg:px-0 py-20'>
				<div className='my-5'>
					<h1 className='text-3xl font-semibold'>
						Projects <span className='text-blue-500 text-5xl'>.</span>{' '}
					</h1>
				</div>
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
					<div className='border border-red-500 rounded p-6 grid gap-6'>
						<h3 className='text-2xl font-semibold'>RealEstate</h3>
						<p className='text-lg'>
							This is a real estate web site, built with react, nextjs, chkara
							ui.
						</p>

						<a
							className='w-fit text-lg font-semibold text-red-500 border border-transparent hover:border-b-red-500 transition duration-300 ease-in-out'
							href='https://realstate01.vercel.app/'
							target='_blank'
							rel='noopener noreferrer'
						>
							View project
						</a>
					</div>
					<div className='border border-green-500 rounded p-6 grid gap-6'>
						<h3 className='text-2xl font-semibold'>Brilliant</h3>
						<p className='text-lg'>
							A online education platform, built with nextjs, tailwind.
							(ongoing)
						</p>
						<a
							className='w-fit text-lg font-semibold text-green-500 border border-transparent hover:border-b-green-500 transition duration-300 ease-in-out'
							href='https://brilliant-learning.vercel.app/'
							target='_blank'
							rel='noopener noreferrer'
						>
							View project
						</a>
					</div>
					<div className='border border-violet-500 rounded p-6 grid gap-6'>
						<h3 className='text-2xl font-semibold'>To Do </h3>
						<p className='text-lg'>
							Same old to do app built with react, tailwind and context api
						</p>
						<a
							className='w-fit text-lg font-semibold text-violet-500 border border-transparent hover:border-b-violet-500 transition duration-300 ease-in-out'
							href='https://todolist-theta-green.vercel.app/'
							target='_blank'
							rel='noopener noreferrer'
						>
							View project
						</a>
					</div>
				</div>
				<a href=''>
					<div className='w-fit mx-auto flex items-center justify-center gap-4 mt-16 border border-transparent hover:border-b-sky-500 transition duration-300 ease-in-out py-2 text-xl font-semibold text-sky-500'>
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
