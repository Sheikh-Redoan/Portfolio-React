import React from "react";
import Container from "../Container/Container";
import blog01 from "../../assets/blog01.jpg";
import blog02 from "../../assets/blod2.jpg";
import blog03 from "../../assets/blod3.jpg";
import { FaCalendarAlt } from "react-icons/fa";
import { IoChatbubblesSharp } from "react-icons/io5";
import { FaArrowCircleRight } from "react-icons/fa";

const Blogs = ({ className }) => {
  return (
    <div
      className={`${className} bg-[#040404] relative overflow-y-hidden h-screen `}
    >
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-[50px] not-italic font-bold leading-[normal] capitalize font-roboto  bg-gradient-to-r from-[#126BA2] to-[#FFF] text-transparent bg-clip-text">
        Recent Blogs
        </h1>
        <p className="text-white text-center text-[20px] not-italic font-medium leading-[normal] mt-[20px] mb-[20px] max-w-[878px] mx-auto">
          We put your ideas and thus your wishes in the form of a unique web
          project that inspires you and you customers.
        </p>
      </div>
      <Container className="flex gap-[24px] justify-center">
        <div className="flex items-center justify-start  w-[548px] aspect-square rounded-[25px] overflow-hidden bg-[#6c5ce7] text-[#a29bfe] text-3xl font-bold h-[515px] flex-shrink-0 bg-gradient-to-b from-[#041017] via-[#040C11] to-[#040C11] border-[#032796] border flex-col relative">
          <img src={blog01} alt="" className="w-full h-[395px] object-cover" />
          <div className="w-full bg-[#041118] h-[120px] pt-[15px] px-[25px] pb-[25px]">
            <div className="flex gap-[14px]">
              <p className="text-white text-lg not-italic font-normal leading-[normal] font-dm flex">
                <FaCalendarAlt className="text-[#017EBC] text-[20px] mr-[15px]" />{" "}
                may 10, 2024
              </p>
              <p className="text-white text-lg not-italic font-normal leading-[normal] font-dm flex">
                <IoChatbubblesSharp className="text-[#017EBC] text-[20px] mr-[15px]" />{" "}
                No Comments
              </p>
            </div>
            <div className="flex justify-between mt-[20px] items-center">
              <h4 className="text-white text-[25px] not-italic font-medium leading-[normal] font-dm">
                The services provide for design.
              </h4>
              <FaArrowCircleRight className="text-[#017EBC] text-[30px]" />
            </div>
            <p className="text-white text-xl not-italic font-bold leading-[normal] font-dm px-[43px] py-[14px] bg-[#041118] rounded-[50px] absolute top-[25px] left-[25px]">
              Design
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[23px]">
          <div className="flex items-center justify-start w-[548px] aspect-square rounded-[25px] overflow-hidden bg-[#6c5ce7] text-[#a29bfe] text-3xl font-bold h-[245px] flex-shrink-0 bg-gradient-to-b from-[#041017] via-[#040C11] to-[#040C11] border-[#032796] border flex-col relative">
            <img
              src={blog02}
              alt=""
              className="w-full h-[150px] object-cover"
            />
            <div className="w-full bg-[#041118] h-[100px] pt-[10px] px-[25px] pb-[10px]">
              <div className="flex gap-[14px]">
                <p className="text-white text-lg not-italic font-normal leading-[normal] font-dm flex">
                  <FaCalendarAlt className="text-[#017EBC] text-[20px] mr-[15px]" />{" "}
                  may 10, 2024
                </p>
                <p className="text-white text-lg not-italic font-normal leading-[normal] font-dm flex">
                  <IoChatbubblesSharp className="text-[#017EBC] text-[20px] mr-[15px]" />{" "}
                  No Comments
                </p>
              </div>
              <div className="flex justify-between mt-[20px] items-center">
                <h4 className="text-white text-[25px] not-italic font-medium leading-[normal] font-dm">
                Digital Marketo to Their New Office.
                </h4>
                <FaArrowCircleRight className="text-[#017EBC] text-[30px]" />
              </div>
              <p className="text-white text-xl not-italic font-bold leading-[normal] font-dm px-[43px] py-[14px] bg-[#041118] rounded-[50px] absolute top-[25px] left-[25px]">
              Technology
              </p>
            </div>
          </div>
          <div className="flex items-center justify-start  w-[548px] aspect-square rounded-[25px] overflow-hidden bg-[#6c5ce7] text-[#a29bfe] text-3xl font-bold h-[245px] flex-shrink-0 bg-gradient-to-b from-[#041017] via-[#040C11] to-[#040C11] border-[#032796] border flex-col relative">
            <img
              src={blog03}
              alt=""
              className="w-full h-[150px] object-cover"
            />
            <div className="w-full bg-[#041118] h-[100px] pt-[10px] px-[25px] pb-[10px]">
              <div className="flex gap-[14px]">
                <p className="text-white text-lg not-italic font-normal leading-[normal] font-dm flex">
                  <FaCalendarAlt className="text-[#017EBC] text-[20px] mr-[15px]" />{" "}
                  may 10, 2024
                </p>
                <p className="text-white text-lg not-italic font-normal leading-[normal] font-dm flex">
                  <IoChatbubblesSharp className="text-[#017EBC] text-[20px] mr-[15px]" />{" "}
                  No Comments
                </p>
              </div>
              <div className="flex justify-between mt-[20px] items-center">
                <h4 className="text-white text-[25px] not-italic font-medium leading-[normal] font-dm">
                The Role of Development in Modern...
                </h4>
                <FaArrowCircleRight className="text-[#017EBC] text-[30px]" />
              </div>
              <p className="text-white text-xl not-italic font-bold leading-[normal] font-dm px-[43px] py-[14px] bg-[#041118] rounded-[50px] absolute top-[25px] left-[25px]">
              Development
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Blogs;
