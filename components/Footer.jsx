import Image from "next/image";
import React from "react";
import footerImg from "../img/wave1.svg";
import footerShape1 from "../img/footer-shape1.png";
import footerShape2 from "../img/footer-shape2.png";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pt-[90] relative">
      <div className="">
        <div className="relative">
          <Image
            className="opacity-80"
            layout="responsive"
            src={footerImg}
            alt=""
          />
        </div>
        <div className="absolute bottom-0 left-0 animate-pulse opacity-100">
          <Image className="absolute" height="300" src={footerShape1} alt="" />
        </div>
        <div className="absolute bottom-0 left-0 animate-pulse duration-[5000] opacity-100">
          <Image className="absolute" height="300" src={footerShape2} alt="" />
        </div>
      </div>
      <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center space-y-2 md:space-y-5">
        <div className="flex space-x-5 md:space-x-10">
          <FaGithubSquare className="text-white hover:text-black text-lg sm:text-xl md:text-3xl lg:text-4xl cursor-pointer" />
          <FaLinkedin className="text-white hover:text-blue-500 text-lg sm:text-xl md:text-3xl lg:text-4xl cursor-pointer" />
          <FaFacebookSquare className="text-white hover:text-blue-700 text-lg sm:text-xl md:text-3xl lg:text-4xl cursor-pointer" />
          <FaInstagramSquare className="text-white hover:text-pink-600 text-lg sm:text-xl md:text-3xl lg:text-4xl cursor-pointer" />
        </div>
        <h4 className="text-xs md:text-xl text-slate-00">
          Develop by{" "}
          <a className="underline decoration-sky-500 text-rose900">
            Saddaul Siam
          </a>
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
