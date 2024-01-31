const Hero = () => {
	return (
		<main
			id='home'
			className="lg:bg-[url('../assets/bakgrnd.png')] w-full lg:h-[50rem] bg-center bg-no-repeat"
		>
			<div className='h-full w-full pt-20 flex items-center justify-center'>
				<div className='lg:w-10/12 2xl:max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 content-center px-4'>
					<div className='flex items-center '>
						<div className='text-center md:text-left mb-5 text-3xl'>
							<p className='font-bold my-2'>Hi, my name is</p>
							<h1 className='text-5xl lg:text-7xl text-blue-400 font-bold'>
								Kaushik Baidya
							</h1>
							<h3 className='my-10 text-2xl'>
								I’m a Front-End designer and developer specializing in building
								(and occasionally designing) exceptional digital experiences.
								Currently, I’m focused on building responsive full-stack web
								applications.
							</h3>
							<button className='bg-blue-500 text-white px-3 py-2 rounded text-lg'>
								Contact me
							</button>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Hero;
