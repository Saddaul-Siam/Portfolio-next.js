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
    <footer className="relative mt-[45rem] md:mt-10 lg:mt-0">
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
        <div className="absolute bottom-0 left-0 animate-pulse opacity-100 duration-[5000]">
          <Image className="absolute" height="300" src={footerShape2} alt="" />
        </div>
      </div>
      <div className="absolute top-2/3 left-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center space-y-2 md:space-y-5">
        <div className="flex space-x-5 md:space-x-10">
          <a
            href="https://github.com/Saddaul-Siam"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare className="cursor-pointer text-lg text-white hover:text-black sm:text-xl md:text-3xl lg:text-4xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/saddaul-siam/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="cursor-pointer text-lg text-white hover:text-blue-500 sm:text-xl md:text-3xl lg:text-4xl" />
          </a>
          <a
            href="https://www.facebook.com/saddaulsiam"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare className="cursor-pointer text-lg text-white hover:text-blue-700 sm:text-xl md:text-3xl lg:text-4xl" />
          </a>
          <a
            href="https://www.instagram.com/saddaul.siam/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagramSquare className="cursor-pointer text-lg text-white hover:text-pink-600 sm:text-xl md:text-3xl lg:text-4xl" />
          </a>
        </div>
        <h4 className="text-slate-00 text-xs md:text-xl">
          Develop by{" "}
          <a className="text-rose900 underline decoration-sky-500">
            Saddaul Siam
          </a>
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
