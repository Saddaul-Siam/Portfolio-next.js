import Image from "next/image";
import React from "react";
import footerImg from "../img/wave1.svg";
import footerShape1 from "../img/footer-shape1.png";
import footerShape2 from "../img/footer-shape2.png";

const Footer = () => {
  return (
    <footer className="pt-[90] relative">
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
    </footer>
  );
};

export default Footer;
