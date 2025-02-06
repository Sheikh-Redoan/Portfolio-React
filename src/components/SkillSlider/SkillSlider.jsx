import React from "react";
import html from "../../assets/HTML5.png";
import css from "../../assets/CSS3.png";
import js from "../../assets/js.png";
import bootstrap from "../../assets/Bootstrap logo.png";
import jqueary from "../../assets/JQuery.png";
import sass from "../../assets/Sass.png";
import react from "../../assets/React.png";
import tailwind from "../../assets/tailwind.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "../Container/Container";
import Slider from "react-slick";

const SkillSlider = ({ className }) => {
  // Define the slider settings
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    className: "notes-slider",
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // Small Tablet
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480, // Mobile
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={`pt-[80px] sm:pt-[100px] md:pt-[140px] bg-[#040404] ${className}`}>
      <Container>
        <div className="px-[20px] sm:px-[30px] md:px-[44px] py-[15px] sm:py-[18px] md:py-[21px] border border-solid border-[#5142FC] bg-[#040a0e] rounded-lg">
          {/* Pass the settings directly to the Slider component */}
          <Slider {...settings}>
            {[
              { img: html, name: "HTML" },
              { img: css, name: "CSS" },
              { img: js, name: "JavaScript" },
              { img: bootstrap, name: "Bootstrap" },
              { img: jqueary, name: "Jquery" },
              { img: sass, name: "Sass" },
              { img: react, name: "React" },
              { img: tailwind, name: "Tailwind" },
            ].map((skill, index) => (
              <div key={index} className="px-[10px] sm:px-[15px] md:px-[25px]">
                <div className="border border-solid border-[#302796] py-[10px] sm:py-[15px] md:py-[19px] flex justify-center items-center bg-[#040a0e] gap-[6px] rounded-lg">
                  <img className="h-[20px] sm:h-[25px] md:h-[30px]" src={skill.img} alt={skill.name} />
                  <h4 className="text-white text-[14px] sm:text-[16px] md:text-xl not-italic font-bold leading-[normal] font-dm">
                    {skill.name}
                  </h4>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default SkillSlider;