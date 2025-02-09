import React from 'react';
import Container from '../Container/Container';
import logo from "../../assets/LOGO.png";
import { Link } from "react-scroll";

const Footer = ({ className }) => {
  return (
    <div className={`${className} bg-[#041118] relative overflow-y-hidden py-10`}>
      <Container className="flex flex-col items-center">
        {/* Logo and Brand Name */}
        <div className="flex justify-center items-center gap-[15px] mb-8">
          <img className="w-[46px] h-[75px]" src={logo} alt="Logo" />
          <h3 className="text-transparent bg-gradient-to-r from-[#1F64B9] to-[#06E0FA] bg-clip-text font-roboto text-[25px] font-bold leading-normal">
            Sheikh Redoan
          </h3>
        </div>

        {/* Navigation Links */}
        <div className="mb-8">
          <ul className="flex flex-wrap justify-center gap-6">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="text-white text-lg font-bold hover:text-[#06E0FA] cursor-pointer transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="text-white text-lg font-bold hover:text-[#06E0FA] cursor-pointer transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="services"
                smooth={true}
                duration={500}
                className="text-white text-lg font-bold hover:text-[#06E0FA] cursor-pointer transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="text-white text-lg font-bold hover:text-[#06E0FA] cursor-pointer transition-colors"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="blog"
                smooth={true}
                duration={500}
                className="text-white text-lg font-bold hover:text-[#06E0FA] cursor-pointer transition-colors"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Copyright Text */}
        <p className="text-white text-xl not-italic font-bold leading-[normal] font-dm mt-[20px] text-center">
          © All rights reserved by{" "}
          <span className="text-transparent bg-gradient-to-r from-[#1F64B9] to-[#06E0FA] bg-clip-text font-roboto">
            Sheikh Redoan Ahmed
          </span>
        </p>
      </Container>
    </div>
  );
};

export default Footer;