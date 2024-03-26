import React from 'react';

import HTML from '@/assets/html.png';
import CSS from '@/assets/css.png';
import JavaScript from '@/assets/javascript.png';
import ReactImage from '@/assets/react.png';
import FireBase from '@/assets/firebase.png';
import GitHub from '@/assets/github.png';
import Tailwind from '@/assets/tailwind.png';
import Mongo from '@/assets/mongo.png';
import Image from 'next/image';

const Skills = () => {
	return (
		<section className='w-full py-20'>
			<div className='max-w-[1000px] mx-auto p-5 flex flex-col justify-center w-full h-full'>
				<div className='text-center'>
					<p className='text-4xl font-semibold text-center py-2'>
						<span className='text-blue-400'>My</span>{' '}
						<span className='border-b-4 border-blue-400'>Skills</span>
					</p>
					<p className='py-4'>
						These are the technologies I&apos;ve worked with
					</p>
				</div>

				<div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<Image className='w-20 mx-auto' src={HTML} alt='HTML icon' />
						<p className='my-4'>HTML</p>
					</div>
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<Image className='w-20 mx-auto' src={CSS} alt='HTML icon' />
						<p className='my-4'>CSS</p>
					</div>
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<Image className='w-20 mx-auto' src={JavaScript} alt='HTML icon' />
						<p className='my-4'>JAVASCRIPT</p>
					</div>
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<Image className='w-20 mx-auto' src={ReactImage} alt='HTML icon' />
						<p className='my-4'>REACT</p>
					</div>
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<Image className='w-20 mx-auto' src={GitHub} alt='HTML icon' />
						<p className='my-4'>GITHUB</p>
					</div>
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<Image className='w-20 mx-auto' src={Mongo} alt='HTML icon' />
						<p className='my-4'>MONGO DB</p>
					</div>
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<Image className='w-20 mx-auto' src={Tailwind} alt='HTML icon' />
						<p className='my-4'>TailWind</p>
					</div>
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<Image className='w-20 mx-auto' src={FireBase} alt='HTML icon' />
						<p className='my-4'>FireBase</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
