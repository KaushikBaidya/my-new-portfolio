"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import Image from "next/image";
import PortfolioLogo from "@/assets/logo.png";
import { Link as ScrollLink } from "react-scroll";
import { RiMenu5Line } from "react-icons/ri";
import { navItems } from "@/lib/data";

const Navbar: React.FC = () => {
	const navContainerRef = useRef<HTMLDivElement | null>(null);
	const { y: currentScrollY } = useWindowScroll();
	const [isNavVisible, setIsNavVisible] = useState<boolean>(true);
	const [lastScrollY, setLastScrollY] = useState<number>(0);
	const [navbarOpen, setNavbarOpen] = useState<boolean>(false);

	useEffect(() => {
		if (navContainerRef.current) {
			if (currentScrollY === 0) {
				setIsNavVisible(true);
				navContainerRef.current.classList.remove("floating-nav");
			} else if (currentScrollY > lastScrollY) {
				setIsNavVisible(false);
				navContainerRef.current.classList.add("floating-nav");
			} else if (currentScrollY < lastScrollY) {
				setIsNavVisible(true);
				navContainerRef.current.classList.add("floating-nav");
			}
		}
		setLastScrollY(currentScrollY);
	}, [currentScrollY, lastScrollY]);

	useEffect(() => {
		if (navContainerRef.current) {
			gsap.to(navContainerRef.current, {
				y: isNavVisible ? 0 : -100,
				opacity: isNavVisible ? 1 : 0,
				duration: 0.2,
			});
		}
	}, [isNavVisible]);

	return (
		<div
			ref={navContainerRef}
			className="fixed inset-x-0 top-4 z-50 h-20 border-none transition-all duration-75 sm:inset-x-6"
		>
			<header className="absolute top-1/2 w-full -translate-y-1/2">
				<nav className="flex size-full items-center justify-between p-4">
					<div className="w-full flex items-center justify-between gap-7">
						<Image
							src={PortfolioLogo}
							alt="logo"
							className="w-14"
							width={100}
							height={100}
						/>
						<div>
							<button
								className="text-violet-500 cursor-pointer text-xl px-3 py-1 block lg:hidden"
								type="button"
								onClick={() => setNavbarOpen(!navbarOpen)}
							>
								<RiMenu5Line size={25} className="" />
							</button>
						</div>
					</div>
					<div className="flex items-center h-full">
						<div
							className={`lg:flex flex-grow ${
								navbarOpen ? "block bg-slate-900" : "hidden"
							} absolute lg:static lg:w-auto w-full left-0 top-full lg:top-auto `}
						>
							{navItems.map((item) => (
								<ScrollLink
									key={item}
									to={`${item.toLocaleLowerCase()}`}
									spy={true}
									smooth={true}
									offset={-70}
									duration={500}
									onClick={() => setNavbarOpen(false)}
									className="block lg:inline-block px-4 py-2 text-blue-50 cursor-pointer nav-hover-btn"
								>
									{item}
								</ScrollLink>
							))}
						</div>
					</div>
				</nav>
			</header>
		</div>
	);
};

export default Navbar;
