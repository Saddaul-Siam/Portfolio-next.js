/* import React from "react";
import {
  Menu,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  MenuItem,
  Button,
  Slide,
  Zoom,
  Fab,
} from "@mui/material";
import { Menu as MenuIcon, KeyboardArrowUp } from "@mui/icons-material";
import PropTypes from "prop-types";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Link from "next/link";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#backToTop"
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

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

const Navbar = (props) => {
  const [scroll, setScroll] = React.useState(false);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {NavLinks.map(({ href, label }, i) => (
        <Link href={href} key={i} passHref>
          <MenuItem classNameName="px-8 hover:text-orange-400 font-lora text-lg">
            <p>{label}</p>
          </MenuItem>
        </Link>
      ))}
    </Menu>
  );
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

  return (
    <nav>
      <Box sx={{ flexGrow: 1 }} id="backToTop">
        <HideOnScroll {...props}>
          <AppBar
            classNameName={`${scroll ? "bg-white/30" : "bg-white"} ${
              scroll ? "dark:bg-gray-900/70" : "dark:bg-gray-900 "
            }backdrop-blur-md dark:text-white text-black shadow-none py-3`}
          >
            <Box classNameName="container mx-auto">
              <Toolbar classNameName="px-0">
                <Typography
                  noWrap
                  component="div"
                  classNameName="normal-case text-xl font-bold"
                >
                  Saddaul Siam
                </Typography>
                <Box classNameName="pl-5">
                  <Toggle />
                </Box>
                <Box sx={{ flexGrow: 5 }} />
                <Box sx={{ display: { xs: "none", md: "flex" } }}>
                  {NavLinks.map(({ href, label }, i) => (
                    <Link href={href} key={i} passHref>
                      <Typography
                        variant="body2"
                        classNameName="px-3 hover:text-orange-400 cursor-pointer font-lora text-lg"
                      >
                        {label}
                      </Typography>
                    </Link>
                  ))}
                </Box>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { xs: "none", md: "flex" } }}>
                  <Button color="inherit" classNameName="button">
                    Contact
                  </Button>
                </Box>
                <Box sx={{ display: { xs: "flex", md: "none" } }}>
                  <IconButton
                    size="large"
                    aria-label="show more"
                    aria-controls={mobileMenuId}
                    aria-haspopup="true"
                    onClick={handleMobileMenuOpen}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                </Box>
              </Toolbar>
            </Box>
          </AppBar>
        </HideOnScroll>
        {renderMobileMenu}
      </Box>
      <ScrollTop {...props}>
        <Fab
          color="primary"
          classNameName="hover:bg-orange-600 bg-orange-400"
          size="small"
          aria-label="scroll back to top"
        >
          <KeyboardArrowUp />
        </Fab>
      </ScrollTop>
    </nav>
  );
};
export default Navbar;
 */

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
        scroll ? "dark:bg-gray-900/80 bg-white/80" : "bg-transparent"
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
            <li key={link.label} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                // passHref
                href={link.href}
                className="text-gray-900 dark:text-white hover:text-orange-400 duration-500"
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
