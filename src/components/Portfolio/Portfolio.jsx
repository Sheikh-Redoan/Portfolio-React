import React, { useState, useEffect, useRef } from "react";
import PortfolioTittleIcon from "../../assets/PortfolioTittleIcon.png";
import profileslide1 from "../../assets/profileslide1.png";
import icon from "../../assets/arrowIcon.png";
import uiux from "../../assets/Blog.jpg";
import uiux1 from "../../assets/Blog1.jpg";
import uiux2 from "../../assets/Blog2.jpg";
import uiux3 from "../../assets/Blog3.jpg";
import developmen1 from "../../assets/Development1.jpg";
import development2 from "../../assets/Development2.jpg";
import development3 from "../../assets/Development3.jpg";
import Graphics1 from "../../assets/Graphics1.jpg";
import Graphics2 from "../../assets/Graphics2.jpg";
import Graphics3 from "../../assets/Graphics3.jpg";
import Graphics4 from "../../assets/Graphics4.jpg";
import Webdesign1 from "../../assets/Webdesign1.jpg";
import Webdesign2 from "../../assets/Webdesign2.jpg";
import Webdesign3 from "../../assets/Webdesign3.jpg";

const Portfolio = ({ className, id }) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const mixitupRef = useRef(null);
  
  // Initialize all projects data
  const allProjects = [
    {
      imgsrc: profileslide1,
      tittle: "Elegant Dining Website",
      pera: "This website was designed for a fine-dining restaurant, combining aesthetics with user experience for a sleek online presence.",
      link: "#",
      category: "web-design"
    },
    {
      imgsrc: uiux,
      tittle: "Tech Blog Platform",
      pera: "A dynamic platform built for a tech blog, focusing on modern design and seamless functionality for content creators.",
      link: "#",
      category: "ui-ux"
    },
    {
      imgsrc: uiux1,
      tittle: "Lifestyle Blog Portal",
      pera: "A lifestyle blog that blends vibrant visuals with a clean interface, allowing for a smooth reading experience.",
      link: "#",
      category: "ui-ux"
    },
    {
      imgsrc: uiux2,
      tittle: "Foodie Blog Hub",
      pera: "An interactive food blog featuring recipes, restaurant reviews, and culinary tips, designed with a creative touch.",
      link: "#",
      category: "ui-ux"
    },
    {
      imgsrc: uiux3,
      tittle: "Health & Wellness Blog",
      pera: "A health-focused blog that emphasizes wellness and mindfulness, created with a calming and user-friendly layout.",
      link: "#",
      category: "ui-ux"
    },
    {
      imgsrc: developmen1,
      tittle: "E-Commerce Website Development",
      pera: "A fully responsive e-commerce platform offering a seamless shopping experience with a focus on easy navigation.",
      link: "#",
      category: "development"
    },
    {
      imgsrc: development2,
      tittle: "Business Portfolio Website",
      pera: "This project is a professional portfolio for a business, showcasing key services with a modern, sophisticated design.",
      link: "#",
      category: "development"
    },
    {
      imgsrc: development3,
      tittle: "Digital Marketing Agency Site",
      pera: "Designed for a digital marketing agency, this website highlights their services, case studies, and client testimonials.",
      link: "#",
      category: "development"
    },
    {
      imgsrc: Graphics1,
      tittle: "Logo & Branding Design",
      pera: "A creative branding project for a startup, featuring logo design and cohesive brand elements that reflect the company's identity.",
      link: "#",
      category: "graphics"
    },
    {
      imgsrc: Graphics2,
      tittle: "Business Card & Stationery Design",
      pera: "A set of business cards and stationery designed to complement a company's branding, offering a sleek, professional look.",
      link: "#",
      category: "graphics"
    },
    {
      imgsrc: Graphics3,
      tittle: "Social Media Graphics",
      pera: "Social media graphics designed to capture attention and engage audiences with vibrant visuals and bold typography.",
      link: "#",
      category: "graphics"
    },
    {
      imgsrc: Graphics4,
      tittle: "Product Packaging Design",
      pera: "A product packaging design that combines functionality and creativity, ensuring an impactful presentation on store shelves.",
      link: "#",
      category: "graphics"
    },
    {
      imgsrc: Webdesign1,
      tittle: "Restaurant Web Design",
      pera: "This website for a restaurant features an elegant design with a focus on the dining experience and easy menu browsing.",
      link: "#",
      category: "web-design"
    },
    {
      imgsrc: Webdesign2,
      tittle: "Creative Portfolio Design",
      pera: "A personal portfolio website designed for a creative professional, showcasing their work and services with a clean, minimalistic style.",
      link: "#",
      category: "web-design"
    },
    {
      imgsrc: Webdesign3,
      tittle: "Travel Agency Website",
      pera: "A travel agency website designed to inspire wanderlust, offering user-friendly booking options and stunning visuals of destinations.",
      link: "#",
      category: "web-design"
    },
  ];

  useEffect(() => {
    // Dynamically import mixitup only on client side
    if (typeof window !== 'undefined') {
      import('mixitup').then((mixitup) => {
        if (mixitupRef.current) {
          mixitup.default(mixitupRef.current, {
            selectors: {
              target: '.mix'
            },
            animation: {
              duration: 300,
              effects: 'fade scale(0.5)',
              easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)'
            },
            load: {
              filter: 'all'
            }
          });
        }
      });
    }
  }, []);

  const handleFilter = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div id={`${id}`} className={`bg-[#040404] ${className}`}>
      <div>
        <h3 className="font-dm text-[24px] md:text-[30px] font-bold bg-gradient-to-b from-[#1A5AA4] to-[#07D3F3] text-transparent bg-clip-text flex justify-center items-center gap-2 md:gap-[12px]">
          My Portfolio{" "}
          <img
            src={PortfolioTittleIcon}
            alt="Portfolio Icon"
            className="w-6 md:w-auto"
          />
        </h3>
        <h2 className="text-white text-[40px] md:text-[70px] not-italic font-bold leading-[1.2] capitalize font-roboto text-center mt-6 md:mt-[35px]">
          Review my{" "}
          <span className="font-roboto font-bold leading-normal bg-gradient-to-r from-[#126BA2] to-[#FFF] text-transparent bg-clip-text capitalize">
            All
          </span>{" "}
          projects
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-[50px] pt-8 md:pt-[65px] pb-12 md:pb-[95px] px-4">
          <button
            onClick={() => handleFilter('all')}
            className={`border rounded-[50px] border-solid border-[#5142FC] py-2 px-4 md:py-[14px] md:px-[36px] text-white text-base md:text-xl not-italic font-bold leading-[1.2] ${activeFilter === 'all' ? 'bg-[#5142FC]' : 'bg-[#041118]'} font-dm cursor-pointer hover:bg-[#5142FC] transition-colors duration-300`}
            data-filter="all"
          >
            All
          </button>
          <button
            onClick={() => handleFilter('web-design')}
            className={`border rounded-[50px] border-solid border-[#5142FC] py-2 px-4 md:py-[14px] md:px-[36px] text-white text-base md:text-xl not-italic font-bold leading-[1.2] ${activeFilter === 'web-design' ? 'bg-[#5142FC]' : 'bg-[#041118]'} font-dm cursor-pointer hover:bg-[#5142FC] transition-colors duration-300`}
            data-filter=".web-design"
          >
            Web Design
          </button>
          <button
            onClick={() => handleFilter('graphics')}
            className={`border rounded-[50px] border-solid border-[#5142FC] py-2 px-4 md:py-[14px] md:px-[36px] text-white text-base md:text-xl not-italic font-bold leading-[1.2] ${activeFilter === 'graphics' ? 'bg-[#5142FC]' : 'bg-[#041118]'} font-dm cursor-pointer hover:bg-[#5142FC] transition-colors duration-300`}
            data-filter=".graphics"
          >
            Graphics
          </button>
          <button
            onClick={() => handleFilter('ui-ux')}
            className={`border rounded-[50px] border-solid border-[#5142FC] py-2 px-4 md:py-[14px] md:px-[36px] text-white text-base md:text-xl not-italic font-bold leading-[1.2] ${activeFilter === 'ui-ux' ? 'bg-[#5142FC]' : 'bg-[#041118]'} font-dm cursor-pointer hover:bg-[#5142FC] transition-colors duration-300`}
            data-filter=".ui-ux"
          >
            UI/UX
          </button>
          <button
            onClick={() => handleFilter('development')}
            className={`border rounded-[50px] border-solid border-[#5142FC] py-2 px-4 md:py-[14px] md:px-[36px] text-white text-base md:text-xl not-italic font-bold leading-[1.2] ${activeFilter === 'development' ? 'bg-[#5142FC]' : 'bg-[#041118]'} font-dm cursor-pointer hover:bg-[#5142FC] transition-colors duration-300`}
            data-filter=".development"
          >
            Development
          </button>
        </div>
      </div>
      
      <div className="px-4 md:px-0 container mx-auto">
        <div ref={mixitupRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-6">
          {allProjects.map((project, index) => (
            <div 
              key={index} 
              className={`mix ${project.category}`}
              data-order={index + 1}
            >
              <div className="p-2 md:p-[6px] border border-solid border-[#5142FC] bg-[#040a0d] w-full h-[400px] md:h-[450px] rounded-[10px] mx-auto flex flex-col justify-between">
                <div className="h-[150px] md:h-[200px] overflow-hidden">
                  <img
                    className="rounded-[10px_10px_0_0] object-cover w-full h-full"
                    src={project.imgsrc}
                    alt={project.tittle}
                  />
                </div>
                <div className="mt-4 mb-4 md:mt-[22px] relative px-2 md:px-0">
                  <h4 className="text-white text-[20px] md:text-[25px] not-italic font-medium leading-[1.2] font-dm mb-2 md:mb-[12px]">
                    {project.tittle}
                  </h4>
                  <p className="text-white text-base md:text-lg not-italic font-normal leading-[1.4] font-dm line-clamp-3 overflow-hidden">
  {project.pera}
</p>
                  <a
                    className="py-2 px-4 md:py-[8px] md:px-[21px] text-white font-dm text-base md:text-[18px] font-bold leading-normal flex gap-1 md:gap-[7px] justify-center items-center rounded-[50px] border border-[#282CAF] bg-[#041118] md:w-[176px] group mt-3 md:mt-[13px] bottom-2 md:bottom-[6px] hover:bg-[#282CAF] transition-colors duration-300"
                    href={project.link}
                  >
                    View work
                    <img
                      className="w-3 md:w-[15px] ml-2 md:ml-[10px] transform transition-transform duration-300 ease-in-out group-hover:rotate-[45deg]"
                      src={icon}
                      alt="icon"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;