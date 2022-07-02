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
  ];
  return (
    <nav
      className={`fixed top-0 left-0 w-full transition-all duration-500 ease-in dark:text-white ${
        scroll ? "bg-white/50 shadow-sm dark:bg-gray-900/80" : "bg-transparent"
      } z-[1000] backdrop-blur-md ${scrollDown ? "hidden" : ""}${
        scrollUp ? "block" : ""
      }`}
    >
      <div className="mx-5 items-center justify-between py-4 md:flex xl:mx-20 2xl:container 2xl:mx-auto">
        <div className="flex cursor-pointer items-center text-2xl font-bold dark:text-white">
          <a href="#">
            <Image src={logo} height="50" width="50" alt="" />
          </a>
          <span className="pl-10">
            <Toggle />
          </span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer text-3xl md:hidden"
        >
          {open ? <MdOutlineClose /> : <CgDetailsMore />}
        </div>

        <ul
          className={`absolute left-0 w-full pb-12 pl-9 transition-all duration-500 ease-in md:static md:flex md:w-auto md:items-center md:pb-0 md:pl-0 ${
            open
              ? "top-16 bg-white dark:bg-gray-900"
              : "top-[-490px] bg-transparent"
          }`}
        >
          {NavLinks.map((link) => (
            <li key={link.label} className="my-7 text-xl md:my-0 md:ml-8 ">
              <a
                href={link.href}
                className="link link-underline link-underline-black text-gray-900 duration-500 hover:text-orange-400 dark:text-white dark:hover:text-orange-400"
              >
                {link.label}
              </a>
            </li>
          ))}
          <a href="#contact">
            <button className="button md:ml-5 lg:ml-32">Contact</button>
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
