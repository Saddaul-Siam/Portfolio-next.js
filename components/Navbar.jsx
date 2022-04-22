import React, { useState } from "react";
import Toggle from "./Toggle";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  React.useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 80) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", changeBackground);
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
      href: "#",
      label: "Protfolio",
    },
    {
      href: "#aboutMe",
      label: "Testimonial",
    },
  ];
  return (
    <nav
      className={`w-full fixed top-0 left-0 dark:text-white ${
        scroll ? "dark:bg-gray-900/80 bg-white/80 shadow-sm" : "bg-transparent"
      } backdrop-blur-md py-2 z-[1000]`}
    >
      <div className="md:flex items-center justify-between py-4 px-7 md:px-0 md:container mx-auto">
        <div className="font-bold text-2xl cursor-pointer flex items-center dark:text-white">
          Saddaul Siam
          <span className="pl-5">
            <Toggle />
          </span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? "x" : "="}
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
          <button className="button ml-32">Contact</button>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
