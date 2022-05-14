import React, { useState } from "react";
import Image from "next/image";

import Toggle from "./subCompo/Toggle";
import { CgDetailsMore } from "react-icons/cg";
import { MdOutlineClose } from "react-icons/md";
import logo from "../img/logo.png";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(null);
  const [scrollUp, setScrollUp] = useState(null);
  const [scrollDown, setScrollDown] = useState(null);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });

    let lastScroll = 0;
    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        setScrollDown(false);
        return;
      } else if (currentScroll > lastScroll) {
        if (lastScroll > 250) {
          setScrollUp(false);
          setScrollDown(true);
        }
      } else if (currentScroll < lastScroll) {
        setScrollUp(true);
        setScrollDown(false);
      }
      lastScroll = currentScroll;
    });
  }, []);
  const NavLinks = [
    {
      href: "#",
      label: "Home",
    },
    {
      href: "#services",
      label: "Services",
    },
    {
      href: "#skills",
      label: "Experience",
    },
    {
      href: "#aboutMe",
      label: "About",
    },
    {
      href: "#portfolio",
      label: "Portfolio",
    },
    {
      href: "#contact",
      label: "contact",
    },
  ];
  return (
    <nav
      className={`w-full fixed top-0 left-0 dark:text-white ${
        scroll ? "dark:bg-gray-900/80 bg-white/50 shadow-sm" : "bg-transparent"
      } backdrop-blur-md py-2 z-[1000] ${scrollDown ? "hidden" : ""}${
        scrollUp ? "block" : ""
      }`}
    >
      <div className="md:flex items-center justify-between py-4 mx-5 xl:mx-20 2xl:container 2xl:mx-auto">
        <div className="font-bold text-2xl cursor-pointer flex items-center dark:text-white">
          <Image src={logo} height="50" width="50"alt="" />

          <span className="pl-10">
            <Toggle />
          </span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? <MdOutlineClose /> : <CgDetailsMore />}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open
              ? "top-16 dark:bg-gray-900 bg-white"
              : "top-[-490px] bg-transparent"
          }`}
        >
          {NavLinks.map((link) => (
            <li key={link.label} className="md:ml-8 text-xl md:my-0 my-7 ">
              <a
                href={link.href}
                className="text-gray-900 dark:text-white dark:hover:text-orange-400 hover:text-orange-400 duration-500"
              >
                {link.label}
              </a>
            </li>
          ))}
          <button className="button md:ml-5 lg:ml-32">Contact</button>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
