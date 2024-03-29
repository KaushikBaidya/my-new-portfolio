'use client';
import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import PortfolioLogo from '@/assets/logo.png';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

export default function Navbar() {
	const [navbarOpen, setNavbarOpen] = useState(false);
	const [bgColor, setBgColor] = useState(false);

	useEffect(() => {
		const changeColor = () => {
			if (window.scrollY >= 70) {
				setBgColor(true);
			} else {
				setBgColor(false);
			}
		};
		window.addEventListener('scroll', changeColor);
	}, []);

	return (
		<nav
			className={
				'fixed w-full text-sm text-white ' +
				(bgColor
					? 'bg-[#111827] backdrop-blur-sm shadow-sm transition duration-200 ease-in'
					: 'bg-[#111827] backdrop-blur-sm')
			}
		>
			<div className='lg:w-10/12 2xl:max-w-6xl mx-auto flex flex-wrap items-center justify-between z-50 py-2'>
				<div className='w-full flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
					<Link href='/'>
						<div className='w-20 cursor-pointer text-blue-500'>
							<Image src={PortfolioLogo} alt='logo' width={50} height={50} />
						</div>
					</Link>
					<button
						className='text-blue-500 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
						type='button'
						onClick={() => setNavbarOpen(!navbarOpen)}
					>
						<FaBars size={25} className='mr-3' />
					</button>
				</div>
				<div
					className={
						'lg:flex flex-grow items-center py-3 ' +
						(navbarOpen ? 'flex' : ' hidden')
					}
				>
					<ul className='flex flex-col lg:flex-row list-none lg:ml-auto text-base'>
						<li className='px-4 border-transparent border-b-2 hover:border-blue-600 py-2 font-normal cursor-pointer'>
							<ScrollLink
								to='home'
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								onClick={() => setNavbarOpen(!navbarOpen)}
							>
								Home
							</ScrollLink>
						</li>
						<li className='px-4 border-transparent border-b-2 hover:border-blue-600 py-2 font-normal cursor-pointer'>
							<ScrollLink
								to='about'
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								onClick={() => setNavbarOpen(!navbarOpen)}
							>
								About
							</ScrollLink>
						</li>
						<li className='px-4 border-transparent border-b-2 hover:border-blue-600 py-2 font-normal cursor-pointer'>
							<ScrollLink
								to='exp'
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								onClick={() => setNavbarOpen(!navbarOpen)}
							>
								Experience
							</ScrollLink>
						</li>
						<li className='px-4 border-transparent border-b-2 hover:border-blue-600 py-2 font-normal cursor-pointer'>
							<ScrollLink
								to='projects'
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								onClick={() => setNavbarOpen(!navbarOpen)}
							>
								Projects
							</ScrollLink>
						</li>

						<li className='px-4 border-transparent border-b-2 hover:border-blue-600 py-2 font-normal cursor-pointer'>
							<ScrollLink
								to='contact'
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								onClick={() => setNavbarOpen(!navbarOpen)}
							>
								Contact
							</ScrollLink>
						</li>

						<li className='flex items-center px-4 py-1 border border-blue-600 bg-blue-600 mx-2 rounded-full hover:bg-transparent cursor-pointer text-white'>
							<a
								href='https://drive.google.com/file/d/1adSIMWxKUhQ3ZAfkulBNtptiw56ECJ2l/view?usp=sharing'
								target='_blank'
							>
								<span onClick={() => setNavbarOpen(!navbarOpen)}>
									Download resume
								</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
