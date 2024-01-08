import Image from "next/image";
import React from "react";
import PortfolioLogo from "@/assets/logo.png";
import { IoIosMailOpen } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
// import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4 text-center bg-gray-800">
      <div className="flex items-center justify-center">
        <Image src={PortfolioLogo} alt="logo" width={100} height={100} />
      </div>
      <div className="py-5 flex flex-col items-center justify-center gap-2 lg:gap-5">
        <p className="uppercase font-semibold text-xl">Kaushik Baidya</p>
        <p className="flex justify-center items-center gap-4">
          <span className="text-blue-500 ">
            <IoIosMailOpen size={25} />
          </span>
          <span>kaushikbaidya4916@gmail.com</span>
        </p>
        <p className="flex justify-center items-center gap-4">
          <span className="text-blue-500 ">
            <FiPhoneCall size={25} />
          </span>
          <span>+880 1624 767207</span>
        </p>
      </div>
      <div className="flex items-center justify-center w-40 h-1 bg-gray-400 mx-auto rounded"></div>
      <p className="mt-2 text-sm">
        &copy; Copyright {currentYear}, All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
