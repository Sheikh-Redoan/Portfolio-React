import React from "react";
import Container from "../Container/Container";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineCall } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { CiFacebook } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import contactbgshap from "../../assets/contactbgshap.png";

const Contact = ({ className,id }) => {
  return (
    <div 
    id={`${id}`}
      className={`${className} bg-[#040404] relative overflow-y-hidden min-h-screen py-10`}
    >
      <Container>
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-[50px] not-italic font-bold leading-[normal] capitalize font-roboto bg-gradient-to-r from-[#126BA2] to-[#FFF] text-transparent bg-clip-text text-center lg:text-left">
          Contact Info
        </h1>
        <p className="max-w-[535px] text-white text-lg sm:text-xl lg:text-[25px] not-italic font-medium leading-[normal] font-dm my-6 mx-auto lg:mx-0 text-center lg:text-left">
          Any help you want to improve your business website, we are always
          there for you.
        </p>

        {/* Contact Info and Form */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Contact Info */}
          <div className="w-full lg:w-auto">
            <div className="flex gap-4 sm:gap-[20px] items-center mb-6">
              <div className="bg-gradient-to-r from-[#126BA2] to-[#06D8F6] rounded-[10px] w-[50px] h-[50px] flex justify-center items-center">
                <MdOutlineEmail className="text-[25px] text-[#000]" />
              </div>
              <div className="flex flex-col">
                <p className="text-[#A4A4A4] text-sm sm:text-[15px] not-italic font-normal leading-[normal] underline decoration-solid decoration-auto underline-offset-auto font-dm">
                  MAIL US
                </p>
                <a
                  href="mailto:ssrabonher@gmail.com"
                  className="text-white text-sm sm:text-base not-italic font-medium leading-[normal] capitalize font-roboto"
                >
                  ssrabonher@gmail.com
                </a>
                <a
                  href="mailto:sheikhredoan99@gmail.com"
                  className="text-white text-sm sm:text-base not-italic font-medium leading-[normal] capitalize font-roboto"
                >
                  sheikhredoan99@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-4 sm:gap-[20px] items-center mb-6">
              <div className="bg-gradient-to-r from-[#126BA2] to-[#06D8F6] rounded-[10px] w-[50px] h-[50px] flex justify-center items-center">
                <MdOutlineCall className="text-[25px] text-[#000]" />
              </div>
              <div className="flex flex-col">
                <p className="text-[#A4A4A4] text-sm sm:text-[15px] not-italic font-normal leading-[normal] underline decoration-solid decoration-auto underline-offset-auto font-dm">
                  Contact Us
                </p>
                <a
                  href="tel:01736652304"
                  className="text-white text-sm sm:text-base not-italic font-medium leading-[normal] capitalize font-roboto"
                >
                  01736652304
                </a>
                <a
                  href="tel:01739266030"
                  className="text-white text-sm sm:text-base not-italic font-medium leading-[normal] capitalize font-roboto"
                >
                  01739266030
                </a>
              </div>
            </div>

            <div className="flex gap-4 sm:gap-[20px] items-center mb-6">
              <div className="bg-gradient-to-r from-[#126BA2] to-[#06D8F6] rounded-[10px] w-[50px] h-[50px] flex justify-center items-center">
                <IoLocationOutline className="text-[25px] text-[#000]" />
              </div>
              <div className="flex flex-col">
                <p className="text-[#A4A4A4] text-sm sm:text-[15px] not-italic font-normal leading-[normal] underline decoration-solid decoration-auto underline-offset-auto font-dm">
                  Location
                </p>
                <a
                  target="_blank"
                  href="https://maps.app.goo.gl/7Le9XfiWWvREWMvJ9"
                  className="text-white text-sm sm:text-base not-italic font-medium leading-[normal] capitalize font-roboto"
                >
                  Gazipur, Chakrabarti Bangladesh
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white text-lg sm:text-xl not-italic font-bold leading-[normal] capitalize font-roboto mb-6">
                Social Info
              </h3>
              <div className="flex gap-4 sm:gap-[25px]">
                <div className="bg-gradient-to-r from-[#126BA2] to-[#06D8F6] rounded-full w-[50px] h-[50px] flex justify-center items-center">
                  <a href="#">
                    <CiFacebook className="text-[25px] text-[#000]" />
                  </a>
                </div>
                <div className="bg-gradient-to-r from-[#126BA2] to-[#06D8F6] rounded-full w-[50px] h-[50px] flex justify-center items-center">
                  <a href="#">
                    <FaLinkedinIn className="text-[25px] text-[#000]" />
                  </a>
                </div>
                <div className="bg-gradient-to-r from-[#126BA2] to-[#06D8F6] rounded-full w-[50px] h-[50px] flex justify-center items-center">
                  <a href="#">
                    <FaXTwitter className="text-[25px] text-[#000]" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#041118] w-full lg:w-[772px] h-auto lg:h-[420px] rounded-[30px] p-6 sm:p-[25px] relative overflow-hidden z-[1]">
            <h2 className="text-xl sm:text-[25px] not-italic font-bold leading-[normal] capitalize font-roboto bg-gradient-to-r from-[#137BBA] from-[57.55%] to-white to-[99.98%] text-transparent bg-clip-text">
              Let’s work together.
            </h2>
            <input
              type="text"
              placeholder="Name *"
              className="w-full my-4 sm:my-[20px] rounded-[10px] px-4 sm:px-[15px] py-2 sm:py-[5px] bg-gradient-to-t from-[#041017cc] from-0% to-[#040c11cc] to-56% border-[1px] border-[#312d9f6c] text-[#fff] opacity-[.5]"
            />
            <input
              type="email"
              placeholder="Email *"
              className="w-full rounded-[10px] px-4 sm:px-[15px] py-2 sm:py-[5px] bg-gradient-to-t from-[#041017cc] from-0% to-[#040c11cc] to-56% border-[1px] border-[#312d9f6c] text-[#fff] opacity-[.5]"
            />
            <textarea
              placeholder="Message *"
              className="w-full my-4 sm:my-[20px] rounded-[10px] px-4 sm:px-[15px] py-2 sm:py-[5px] bg-gradient-to-t from-[#041017cc] from-0% to-[#040c11cc] to-56% h-[150px] border-[1px] border-[#312d9f3f] text-[#fff] opacity-[.5]"
            />
            <a
              href="#"
              className="text-white text-lg sm:text-xl not-italic font-medium leading-[normal] capitalize font-dm px-4 sm:px-[22px] py-2 sm:py-[14px] border-[1px] rounded-[10px] border-[#312d9f3f] inline-block"
            >
              Send Message
            </a>
            <img
              src={contactbgshap}
              alt=""
              className="absolute top-0 right-[25px] w-[25%] z-[-1]"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
