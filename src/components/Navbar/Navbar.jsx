import React, { useState } from "react";
import Container from "../Container/Container";
import logo from "../../assets/LOGO.png";
import { IoIosCall } from "react-icons/io";

const Navbar = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={`${className}`}>
      <Container className="pt-[35px]">
        <div className="flex justify-between items-center px-[20px]">
          {/* Brand Logo and Name */}
          <div className="flex justify-center items-center gap-[15px]">
            <img className="w-[56px] h-[85px]" src={logo} alt="Logo" />
            <h3 className="text-transparent bg-gradient-to-r from-[#1F64B9] to-[#06E0FA] bg-clip-text font-roboto text-[24px] md:text-[30px] font-bold leading-normal">
              Sheikh Redoan
            </h3>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-[28px] items-center">
            <ul className="flex gap-[28px]">
              <li className="text-white font-dm text-[18px] md:text-[20px] font-bold leading-normal">
                <a href="#">Home</a>
              </li>
              <li className="text-[#909090] font-dm text-[18px] md:text-[20px] font-bold leading-normal hover:text-white">
                <a href="#">About</a>
              </li>
              <li className="text-[#909090] font-dm text-[18px] md:text-[20px] font-bold leading-normal hover:text-white">
                <a href="#">Services</a>
              </li>
              <li className="text-[#909090] font-dm text-[18px] md:text-[20px] font-bold leading-normal hover:text-white">
                <a href="#">Projects</a>
              </li>
              <li className="text-[#909090] font-dm text-[18px] md:text-[20px] font-bold leading-normal hover:text-white">
                <a href="#">Blog</a>
              </li>
            </ul>
            <a
              className="py-[10px] px-[30px] md:py-[14px] md:px-[44px] text-white font-dm text-[18px] md:text-[20px] font-bold leading-normal flex gap-[7px] justify-center items-center rounded-[50px] border border-[#282CAF] bg-[#041118]"
              href="#"
            >
              Contact <IoIosCall className="text-[20px] md:text-[25px] text-white" />
            </a>
          </div>

          {/* Mobile Toggler */}
          <div
            className={`md:hidden flex flex-col gap-1 cursor-pointer relative z-[99] ${
              isMenuOpen ? "bg-black" : "bg-transparent"
            } p-2 rounded-full`}
            onClick={toggleMenu}
          >
            <div
              className={`w-6 h-[2px] bg-white transition-transform duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-[2px] bg-white transition-transform duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></div>
          </div>
        </div>

        {/* Mobile Overlay Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-[#041118] z-50 flex flex-col items-center justify-center transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="text-center">
            <ul className="flex flex-col gap-8">
              <li>
                <a
                  href="#"
                  className="text-white text-4xl font-bold hover:text-[#06E0FA]"
                  onClick={closeMenu}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-4xl font-bold hover:text-[#06E0FA]"
                  onClick={closeMenu}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-4xl font-bold hover:text-[#06E0FA]"
                  onClick={closeMenu}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-4xl font-bold hover:text-[#06E0FA]"
                  onClick={closeMenu}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-4xl font-bold hover:text-[#06E0FA]"
                  onClick={closeMenu}
                >
                  Blog
                </a>
              </li>
            </ul>
            <a
              className="mt-8 py-[14px] px-[44px] text-white font-dm text-[20px] font-bold leading-normal flex gap-[7px] justify-center items-center rounded-[50px] border border-[#282CAF] bg-[#1F64B9]"
              href="#"
              onClick={closeMenu}
            >
              Contact <IoIosCall className="text-[25px] text-white" />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;