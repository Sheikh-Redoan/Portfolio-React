import React from "react";
import Container from "../Container/Container";
import mypic from "../../assets/Mypic.jpg";
import arrow from "../../assets/arrow.gif";
import aboutIcon from "../../assets/abouticon.png";
import downloadIcon from "../../assets/DownloadIcon.png";
import listArrow from "../../assets/listArrow.png";

const About = ({ className }) => {
  return (
    <div className={`bg-[#040404] ${className}`}>
      <Container>
        <div className="flex flex-col lg:flex-row gap-[25px] justify-center items-center">
          {/* Image Section */}
          <div className="w-full lg:w-[423px] h-[400px] lg:h-[579px] shrink-0 rounded-[20px] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-[120px] lg:w-[170px] h-[120px] lg:h-[170px] shrink-0 rounded-[20px_0px] bg-[#040404] flex flex-col justify-center items-center">
              <svg
                className="absolute top-0 left-[100%]"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="29"
                viewBox="0 0 30 29"
                fill="none"
              >
                <path
                  d="M0 28.5V0H30C6.8 0 0.333333 19 0 28.5Z"
                  fill="#040404"
                />
              </svg>
              <h3 className="font-roboto text-[40px] lg:text-[60px] font-bold bg-gradient-to-b from-[#1A5AA4] to-[#07D3F3] text-transparent bg-clip-text">
                2+
              </h3>
              <h4 className="text-white text-center text-[14px] lg:text-xl not-italic font-bold leading-[normal] font-roboto max-w-[108px]">
                Years Of Experience
              </h4>
              <svg
                className="absolute top-[100%] left-[0]"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="29"
                viewBox="0 0 30 29"
                fill="none"
              >
                <path
                  d="M0 28.5V0H30C6.8 0 0.333333 19 0 28.5Z"
                  fill="#040404"
                />
              </svg>
            </div>
            <img
              className="w-full h-full object-cover"
              src={mypic}
              alt="My Picture"
            />
            <div className="absolute bottom-0 right-0 w-[120px] lg:w-[170px] h-[120px] lg:h-[170px] shrink-0 rounded-[20px_0px] bg-[#040404] flex flex-col justify-center items-center">
              <svg
                className="absolute bottom-[99%] right-0 rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="29"
                viewBox="0 0 30 29"
                fill="none"
              >
                <path
                  d="M0 28.5V0H30C6.8 0 0.333333 19 0 28.5Z"
                  fill="#040404"
                />
              </svg>
              <img className="rotate-90 w-[50px] lg:w-auto" src={arrow} alt="Arrow" />
              <svg
                className="absolute bottom-[0] right-[100%] rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="29"
                viewBox="0 0 30 29"
                fill="none"
              >
                <path
                  d="M0 28.5V0H30C6.8 0 0.333333 19 0 28.5Z"
                  fill="#040404"
                />
              </svg>
            </div>
          </div>

          {/* Text Section */}
          <div className="flex flex-col justify-start items-start max-w-full lg:max-w-[872px]">
            <h3 className="font-dm text-[24px] lg:text-[30px] font-bold bg-gradient-to-b from-[#1A5AA4] to-[#07D3F3] text-transparent bg-clip-text flex justify-center items-center gap-[12px]">
              About us <img className="w-[20px] lg:w-auto" src={aboutIcon} alt="About Icon" />
            </h3>

            <h1 className="text-white text-[36px] lg:text-6xl my-[20px] lg:my-[35px] font-roboto not-italic font-bold leading-[normal] capitalize">
              “Crafting eye catchy{" "}
              <span className="font-roboto text-[36px] lg:text-[60px] font-bold leading-normal bg-gradient-to-r from-[#126BA2] to-[#FFF] text-transparent bg-clip-text capitalize">
                websites
              </span>{" "}
              for your business.”
            </h1>
            <p className="text-white text-[16px] lg:text-[22px] not-italic font-medium leading-[normal] font-dm mb-[20px] lg:mb-[35px]">
              “I specialize in HTML, CSS, JavaScript, Sass, Jquery, Bootstrap. I
              will use this languages and craft you a costume made website for
              your business.”
            </p>
            <div className="flex flex-col lg:flex-row justify-center items-start gap-[20px] lg:gap-[70px]">
              <div className="flex flex-col justify-start items-start">
                {["Website Design", "Email Template", "Email Signature"].map(
                  (item, index) => (
                    <p
                      key={index}
                      className="text-white text-[16px] lg:text-[22px] not-italic font-medium leading-[normal] font-dm flex gap-[10px] lg:gap-[15px] justify-center items-center mb-[15px] lg:mb-[25px]"
                    >
                      <img className="w-[12px] lg:w-auto" src={listArrow} alt="List Arrow" />
                      {item}
                    </p>
                  )
                )}
              </div>
              <div className="flex flex-col justify-start items-start">
                {["Responsive Design", "UI/UX Design", "E-commerce Design"].map(
                  (item, index) => (
                    <p
                      key={index}
                      className="text-white text-[16px] lg:text-[22px] not-italic font-medium leading-[normal] font-dm flex gap-[10px] lg:gap-[15px] justify-center items-center mb-[15px] lg:mb-[25px]"
                    >
                      <img className="w-[12px] lg:w-auto" src={listArrow} alt="List Arrow" />
                      {item}
                    </p>
                  )
                )}
              </div>
            </div>
            <a
              className="border rounded-[50px] border-solid border-[#5142FC] bg-[#041118] text-white text-[16px] lg:text-xl not-italic font-bold leading-[normal] px-[20px] lg:px-[33px] py-[10px] lg:py-[14px] font-dm flex justify-center items-center gap-[9px] mt-[20px] lg:mt-0"
              href="#"
            >
              <img className="w-[16px] lg:w-auto" src={downloadIcon} alt="Download Icon" /> Download CV
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;