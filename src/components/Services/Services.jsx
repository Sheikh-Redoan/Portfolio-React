import React from "react";
import ServiceLogo1 from '../../assets/ServiceLogo1.png'
import ServiceLogo2 from '../../assets/ServiceLogo2.png'
import ServiceLogo3 from '../../assets/ServiceLogo3.png'
import ServiceLogo4 from '../../assets/ServiceLogo4.png'
import ServiceLogo5 from '../../assets/ServiceLogo5.png'
import ServiceLogo6 from '../../assets/ServiceLogo6.png'

import Container from "../Container/Container";

const Services = ({ className }) => {
  return (
    <div className={`bg-[#040404] ${className}`}>
      <Container>
        <div className="flex justify-center">
          <h2 className="text-white text-[40px] md:text-[60px] not-italic font-bold leading-[1.2] capitalize mb-4 md:mb-[30px] max-sm:flex max-sm:gap-[10px]">
            My 
            <span className="font-roboto font-bold leading-normal bg-gradient-to-r from-[#126BA2] to-[#FFF] text-transparent bg-clip-text capitalize block md:inline">
              Services
            </span>
          </h2>
        </div>
        <div className="border border-solid border-[#5142FC] bg-[#040a0d] p-4 md:p-[24px] grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-[20px]">
          <div className="w-full min-h-[131px] flex-shrink-0 bg-gradient-to-b from-[#041017] via-[#040C11] to-[#040C11] border-[#032796] border p-4 md:p-[20px]">
            <div className="flex justify-between">
              <h4 className="text-white text-[16px] md:text-[20px] not-italic font-medium leading-[1.2] font-dm">
                UI/UX Design{" "}
              </h4>
              <div className="flex-shrink-0 bg-[#1e2c3485] border-[#302796] border w-8 h-8 md:w-[40px] md:h-[40px] flex justify-center items-center">
                <img src={ServiceLogo1} alt="" className="w-4 md:w-auto" />
              </div>
            </div>
            <p className="text-white text-[12px] md:text-[13px] not-italic font-normal leading-[1.4] font-dm my-2 md:my-[10px]">I create digital products with unique ideas use Figma</p>
            <a className="text-[#A4A4A4] text-[12px] md:text-[13px] not-italic font-normal leading-[1.4] font-dm" href="#">30 Projects</a>
          </div>
          <div className="w-full min-h-[131px] flex-shrink-0 bg-gradient-to-b from-[#041017] via-[#040C11] to-[#040C11] border-[#032796] border p-4 md:p-[20px]">
            <div className="flex justify-between">
              <h4 className="text-white text-[16px] md:text-[20px] not-italic font-medium leading-[1.2] font-dm">
              Branding
              </h4>
              <div className="flex-shrink-0 bg-[#1e2c3485] border-[#302796] border w-8 h-8 md:w-[40px] md:h-[40px] flex justify-center items-center">
                <img src={ServiceLogo2} alt="" className="w-4 md:w-auto" />
              </div>
            </div>
            <p className="text-white text-[12px] md:text-[13px] not-italic font-normal leading-[1.4] font-dm my-2 md:my-[10px]">The best privacy policy online network.</p>
            <a className="text-[#A4A4A4] text-[12px] md:text-[13px] not-italic font-normal leading-[1.4] font-dm" href="#">88 Projects</a>
          </div>
          <div className="w-full min-h-[131px] flex-shrink-0 bg-gradient-to-b from-[#041017] via-[#040C11] to-[#040C11] border-[#032796] border p-4 md:p-[20px]">
            <div className="flex justify-between">
              <h4 className="text-white text-[16px] md:text-[20px] not-italic font-medium leading-[1.2] font-dm">
              Development
              </h4>
              <div className="flex-shrink-0 bg-[#1e2c3485] border-[#302796] border w-8 h-8 md:w-[40px] md:h-[40px] flex justify-center items-center">
                <img src={ServiceLogo3} alt="" className="w-4 md:w-auto" />
              </div>
            </div>
            <p className="text-white text-[12px] md:text-[13px] not-italic font-normal leading-[1.4] font-dm my-2 md:my-[10px]">I build website go live with Framer, Webflow</p>
            <a className="text-[#A4A4A4] text-[12px] md:text-[13px] not-italic font-normal leading-[1.4] font-dm" href="#">126 Projects</a>
          </div>
          <div className="w-full min-h-[131px] flex-shrink-0 bg-gradient-to-b from-[#041017] via-[#040C11] to-[#040C11] border-[#032796] border p-4 md:p-[20px]">
            <div className="flex justify-between">
              <h4 className="text-white text-[16px] md:text-[20px] not-italic font-medium leading-[1.2] font-dm">
              Cloud Services
              </h4>
              <div className="flex-shrink-0 bg-[#1e2c3485] border-[#302796] border w-8 h-8 md:w-[40px] md:h-[40px] flex justify-center items-center">
                <img src={ServiceLogo4} alt="" className="w-4 md:w-auto" />
              </div>
            </div>
            <p className="text-white text-[12px] md:text-[13px] not-italic font-normal leading-[1.4] font-dm my-2 md:my-[10px]">The best privacy policy online network.</p>
            <a className="text-[#A4A4A4] text-[12px] md:text-[13px] not-italic font-normal leading-[1.4] font-dm" href="#">56 Projects</a>
          </div>
          <div className="w-full min-h-[131px] flex-shrink-0 bg-gradient-to-b from-[#041017] via-[#040C11] to-[#040C11] border-[#032796] border p-4 md:p-[20px]">
            <div className="flex justify-between">
              <h4 className="text-white text-[16px] md:text-[20px] not-italic font-medium leading-[1.2] font-dm">
              Graphics Design
              </h4>
              <div className="flex-shrink-0 bg-[#1e2c3485] border-[#302796] border w-8 h-8 md:w-[40px] md:h-[40px] flex justify-center items-center">
                <img src={ServiceLogo5} alt="" className="w-4 md:w-auto" />
              </div>
            </div>
            <p className="text-white text-[12px] md:text-[13px] not-italic font-normal leading-[1.4] font-dm my-2 md:my-[10px]">I build different types of banners for different platforms.</p>
            <a className="text-[#A4A4A4] text-[12px] md:text-[13px] not-italic font-normal leading-[1.4] font-dm" href="#">120 Projects</a>
          </div>
          <div className="w-full min-h-[131px] flex-shrink-0 bg-gradient-to-b from-[#041017] via-[#040C11] to-[#040C11] border-[#032796] border p-4 md:p-[20px]">
            <div className="flex justify-between">
              <h4 className="text-white text-[16px] md:text-[20px] not-italic font-medium leading-[1.2] font-dm">
              Network Security
              </h4>
              <div className="flex-shrink-0 bg-[#1e2c3485] border-[#302796] border w-8 h-8 md:w-[40px] md:h-[40px] flex justify-center items-center">
                <img src={ServiceLogo6} alt="" className="w-4 md:w-auto" />
              </div>
            </div>
            <p className="text-white text-[12px] md:text-[13px] not-italic font-normal leading-[1.4] font-dm my-2 md:my-[10px]">The best privacy policy online network.</p>
            <a className="text-[#A4A4A4] text-[12px] md:text-[13px] not-italic font-normal leading-[1.4] font-dm" href="#">13 Projects</a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;
