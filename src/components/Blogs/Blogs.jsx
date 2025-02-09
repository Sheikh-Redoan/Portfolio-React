import React from "react";
import Container from "../Container/Container";
import blog01 from "../../assets/blog01.jpg";
import blog02 from "../../assets/blod2.jpg";
import blog03 from "../../assets/blod3.jpg";
import { FaCalendarAlt } from "react-icons/fa";
import { IoChatbubblesSharp } from "react-icons/io5";
import { FaArrowCircleRight } from "react-icons/fa";

const Blogs = ({ className, id }) => {
  return (
    <div id={`${id}`}
      className={`${className} bg-[#040404] relative overflow-y-hidden min-h-screen py-10`}
    >
      <div className="flex justify-center items-center flex-col text-center px-4">
        <h1 className="text-4xl sm:text-5xl lg:text-[50px] not-italic font-bold leading-[normal] capitalize font-roboto bg-gradient-to-r from-[#126BA2] to-[#FFF] text-transparent bg-clip-text">
          Recent Blogs
        </h1>
        <p className="text-white text-base sm:text-lg lg:text-[20px] not-italic font-medium leading-[normal] mt-5 mb-10 max-w-[878px] mx-auto">
          We put your ideas and thus your wishes in the form of a unique web
          project that inspires you and your customers.
        </p>
      </div>
      <Container className="flex flex-col lg:flex-row gap-6 lg:gap-[24px] justify-center px-4">
        {/* Large Blog Card */}
        <div className="flex items-center justify-start w-full lg:w-[548px] aspect-square rounded-[25px] overflow-hidden bg-[#6c5ce7] text-[#a29bfe] text-3xl font-bold h-[400px] lg:h-[515px] flex-shrink-0 bg-gradient-to-b from-[#041017] via-[#040C11] to-[#040C11] border-[#032796] border flex-col relative">
          <img
            src={blog01}
            alt=""
            className="w-full h-[60%] lg:h-[395px] object-cover"
          />
          <div className="w-full bg-[#041118] h-[40%] lg:h-[120px] pt-[15px] px-[25px] pb-[25px]">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-[14px]">
              <p className="text-white text-sm sm:text-lg not-italic font-normal leading-[normal] font-dm flex items-center">
                <FaCalendarAlt className="text-[#017EBC] text-[20px] mr-[15px]" />{" "}
                May 10, 2024
              </p>
              <p className="text-white text-sm sm:text-lg not-italic font-normal leading-[normal] font-dm flex items-center">
                <IoChatbubblesSharp className="text-[#017EBC] text-[20px] mr-[15px]" />{" "}
                No Comments
              </p>
            </div>
            <div className="flex justify-between mt-[20px] items-center">
              <h4 className="text-white text-lg sm:text-xl lg:text-[25px] not-italic font-medium leading-[normal] font-dm">
                The services provide for design.
              </h4>
              <FaArrowCircleRight className="text-[#017EBC] text-[30px]" />
            </div>
            <p className="text-white text-sm sm:text-xl not-italic font-bold leading-[normal] font-dm px-[20px] sm:px-[43px] py-[10px] sm:py-[14px] bg-[#041118] rounded-[50px] absolute top-[15px] sm:top-[25px] left-[15px] sm:left-[25px]">
              Design
            </p>
          </div>
        </div>

        {/* Small Blog Cards */}
        <div className="flex flex-col gap-4 lg:gap-[23px] w-full lg:w-[548px]">
          <div className="flex items-center justify-start w-full aspect-square rounded-[25px] overflow-hidden bg-[#6c5ce7] text-[#a29bfe] text-3xl font-bold h-[200px] sm:h-[245px] flex-shrink-0 bg-gradient-to-b from-[#041017] via-[#040C11] to-[#040C11] border-[#032796] border flex-col relative max-sm:h-[300px]">
            <img
              src={blog02}
              alt=""
              className="w-full h-[60%] sm:h-[150px] object-cover"
            />
            <div className="w-full bg-[#041118] h-[40%] sm:h-[100px] pt-[10px] px-[25px] pb-[10px]">
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-[14px]">
                <p className="text-white text-sm sm:text-lg not-italic font-normal leading-[normal] font-dm flex items-center">
                  <FaCalendarAlt className="text-[#017EBC] text-[20px] mr-[15px]" />{" "}
                  May 10, 2024
                </p>
                <p className="text-white text-sm sm:text-lg not-italic font-normal leading-[normal] font-dm flex items-center">
                  <IoChatbubblesSharp className="text-[#017EBC] text-[20px] mr-[15px]" />{" "}
                  No Comments
                </p>
              </div>
              <div className="flex justify-between mt-[10px] sm:mt-[20px] items-center">
                <h4 className="text-white text-lg sm:text-xl lg:text-[25px] not-italic font-medium leading-[normal] font-dm">
                  Digital Marketo to Their New Office.
                </h4>
                <FaArrowCircleRight className="text-[#017EBC] text-[30px]" />
              </div>
              <p className="text-white text-sm sm:text-xl not-italic font-bold leading-[normal] font-dm px-[20px] sm:px-[43px] py-[10px] sm:py-[14px] bg-[#041118] rounded-[50px] absolute top-[15px] sm:top-[25px] left-[15px] sm:left-[25px]">
                Technology
              </p>
            </div>
          </div>

          <div className="flex items-center justify-start w-full aspect-square rounded-[25px] overflow-hidden bg-[#6c5ce7] text-[#a29bfe] text-3xl font-bold h-[200px] sm:h-[245px] flex-shrink-0 bg-gradient-to-b from-[#041017] via-[#040C11] to-[#040C11] border-[#032796] border flex-col relative max-sm:h-[300px]">
            <img
              src={blog03}
              alt=""
              className="w-full h-[60%] sm:h-[150px] object-cover"
            />
            <div className="w-full bg-[#041118] h-[40%] sm:h-[100px] pt-[10px] px-[25px] pb-[10px]">
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-[14px]">
                <p className="text-white text-sm sm:text-lg not-italic font-normal leading-[normal] font-dm flex items-center">
                  <FaCalendarAlt className="text-[#017EBC] text-[20px] mr-[15px]" />{" "}
                  May 10, 2024
                </p>
                <p className="text-white text-sm sm:text-lg not-italic font-normal leading-[normal] font-dm flex items-center">
                  <IoChatbubblesSharp className="text-[#017EBC] text-[20px] mr-[15px]" />{" "}
                  No Comments
                </p>
              </div>
              <div className="flex justify-between mt-[10px] sm:mt-[20px] items-center">
                <h4 className="text-white text-lg sm:text-xl lg:text-[25px] not-italic font-medium leading-[normal] font-dm">
                  The Role of Development in Modern...
                </h4>
                <FaArrowCircleRight className="text-[#017EBC] text-[30px]" />
              </div>
              <p className="text-white text-sm sm:text-xl not-italic font-bold leading-[normal] font-dm px-[20px] sm:px-[43px] py-[10px] sm:py-[14px] bg-[#041118] rounded-[50px] absolute top-[15px] sm:top-[25px] left-[15px] sm:left-[25px]">
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