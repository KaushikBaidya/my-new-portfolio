"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import Image from "next/image";
import PortfolioLogo from "@/assets/logo.png";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

const navItems = ["Home", "About", "Experience", "Projects", "Contact"];

const Navbar: React.FC = () => {
	const navContainerRef = useRef<HTMLDivElement | null>(null);

	const { y: currentScrollY } = useWindowScroll();
	const [isNavVisible, setIsNavVisible] = useState<boolean>(true);
	const [lastScrollY, setLastScrollY] = useState<number>(0);

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
			className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-75 sm:inset-x-6"
		>
			<header className="absolute top-1/2 w-full -translate-y-1/2">
				<nav className="flex size-full items-center justify-between p-4">
					<div className="flex items-center gap-7">
						<Image src={PortfolioLogo} alt="logo" width={50} height={50} />
					</div>
					<div className="flex items-center h-full">
						<div className="hidden md:block">
							{navItems.map((item) => (
								<a
									key={item}
									href={`#${item.toLocaleLowerCase()}`}
									className="nav-hover-btn"
								>
									{item}
								</a>
							))}
						</div>
					</div>
				</nav>
			</header>
		</div>
	);
};

export default Navbar;
