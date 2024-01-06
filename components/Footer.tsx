import Image from "next/image";
import React from "react";
import PortfolioLogo from "@/assets/logo.png";
// import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4 text-center bg-gray-800">
      <div className="flex flex-col items-center">
        <Image src={PortfolioLogo} alt="logo" width={100} height={100} />
      </div>
      <ul className="py-5 flex justify-center gap-2 lg:gap-5">
        <li>Home</li>
        <li>About</li>
        <li>
          <a className="scroll-smooth" href="#exp">
            Experience
          </a>{" "}
        </li>
        <li>Blogs</li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="flex items-center justify-center w-40 h-1 bg-gray-400 mx-auto rounded"></div>
      <p className="mt-2 text-sm">
        &copy; Copyright {currentYear}, All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
