import { useState, useEffect } from "react";
import Image from "next/image";
import NavLogo from "../public/assets/Whitelogoword.svg";
import { Link } from "react-scroll";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("rgba(14, 8, 5,0)");
  const [linkColor, setLinkColor] = useState("#FAEDF0");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleNavBg = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
        setNavBg("#0e0805");
      } else {
        setShadow(false);
        setNavBg("rgba(14, 8, 5,0)");
      }
    };
    window.addEventListener("scroll", handleNavBg);
  }, []);

  function sendMail() {
    window.open("mailto:ivre.globals@gmail.com");
  }

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-lg shadow-grey-700 z-[100] ease-in-out duration-300"
          : "fixed w-full h-20 z-[100] ease-in-out duration-300"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16">
        <Image
          className="text-cwhite translate-y-[-6px]"
          src={NavLogo}
          width={200}
          height={50}
        />
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <li className="ml-10 text-m text-[#ffffff] uppercase">
              <div className="relative group cursor-pointer">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Home
                </Link>
                <span className="absolute top-[24px] left-0 h-[2px] w-0 rounded-full bg-darkbeige group-hover:w-full duration-[.2s] ease-in"></span>
              </div>
            </li>

            <li className="ml-10 text-m text-[#ffffff] uppercase">
              <div className="relative group cursor-pointer">
                <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  Services
                </Link>
                <span className="absolute top-[24px] left-0 h-[2px] w-0 rounded-full bg-darkbeige group-hover:w-full duration-[.2s] ease-in"></span>
              </div>
            </li>

            <li className="ml-10 text-m text-[#ffffff] uppercase">
              <div className="relative group cursor-pointer">
                <Link
                  to="gallery"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  Gallery
                </Link>
                <span className="absolute top-[24px] left-0 h-[2px] w-0 rounded-full bg-darkbeige group-hover:w-full duration-[.2s] ease-in"></span>
              </div>
            </li>

            <li className="ml-10 text-m text-[#ffffff] uppercase">
              <div className="relative group cursor-pointer">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  About
                </Link>
                <span className="absolute top-[24px] left-0 h-[2px] w-0 rounded-full bg-darkbeige group-hover:w-full duration-[.2s] ease-in"></span>
              </div>
            </li>

            <li className="ml-10 text-m text-[#ffffff] uppercase">
              <div className="relative group cursor-pointer">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Contact
                </Link>
                <span className="absolute top-[24px] left-0 h-[2px] w-0 rounded-full bg-darkbeige group-hover:w-full duration-[.2s] ease-in"></span>
              </div>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className="md:hidden"
          >
            <AiOutlineMenu
              size={25}
              className="text-white/[0.6] hover:scale-105 duration-150 ease-in cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen text-white/[0.6] bg-black p-10 ease-in duration-500 z-50"
              : "fixed left-[-4000px] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="scrollbar-hide">
            <div className="flex w-full items-center justify-between">
              <Image src={NavLogo} width={120} height={50} alt="/" />
              <div
                onClick={handleNav}
                className="rounded-full shadow-md bg-transparent border-2 border-darkbeige shadow-[#121212] p-3 cursor-pointer hover:bg-darkbeige hover:scale-105 duration-300 ease-in"
              >
                <AiOutlineClose className="text-cwhite" />
              </div>
            </div>
            <div className="border-b border-cwhite/[0.87] my-4">
              <p className="w-[85%] md:w-[90%] py-4 text-cwhite">
                &#34;Pouring spirit into the soul&#34;
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase text-cwhite text-l">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:text-beige cursor-pointer"
                >
                  Home
                </li>
              </Link>
              <Link
                to="services"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:text-beige cursor-pointer"
                >
                  Services
                </li>
              </Link>
              <Link
                to="gallery"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:text-beige cursor-pointer"
                >
                  Gallery
                </li>
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:text-beige cursor-pointer"
                >
                  About
                </li>
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-75}
                duration={500}
              >
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:text-beige cursor-pointer"
                >
                  Contact
                </li>
              </Link>
            </ul>

            <div className="py-8 flex flex-row space-x-[50px] items-center lg:pl-[50px]">
              <a href="https://www.instagram.com/ivre.lb/">
                <BsInstagram className="w-[25px] h-[25px] text-cwhite/[0.8] hover:text-[#FE59D7] duration-150 ease-in cursor-pointer" />
              </a>

              {/* <a>
              <FaTiktok className="w-[25px] h-[25px] text-cwhite/[0.8] hover:text-[#30E1FF] duration-150 ease-in cursor-pointer" />
            </a> */}

              <a href="https://api.whatsapp.com/send?phone=96171699860">
                <BsWhatsapp className="w-[25px] h-[25px] text-cwhite/[0.8] hover:text-[#39D700] duration-150 ease-in cursor-pointer" />
              </a>

              <a>
                <AiOutlineMail
                  onClick={sendMail}
                  className="w-[25px] h-[25px] text-cwhite/[0.8] hover:text-[#EB4236] duration-150 ease-in cursor-pointer"
                />
              </a>
            </div>
            <div className="pt-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
