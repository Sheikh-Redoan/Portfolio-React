import React from "react";
import { useState, useRef, useEffect } from "react";
import Container from "../Container/Container";
import Serviceicon from "../../assets/serviceicon.png";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import reviewlogo1 from '../../assets/reviewlogo1.png'
import reviewlogo2 from '../../assets/reviewlogo2.png'
import reviewlogo1client from '../../assets/reviewlogo1client.png'
import reviewlogo2client from '../../assets/reviewlogo2client.png'
import servicebgshap from '../../assets/servicebgshap.png'
import { TiStarFullOutline } from "react-icons/ti";



const Review = ({ className }) => {
  const trackRef = useRef(null);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const clients = [{logo: reviewlogo1, profile: reviewlogo1client, pera: '"I was blown away by the user-friendliness of Web Services. The demo made it easy to see how it can benefit my business."', name: "William C. Means", projects: '13 Projects' },
    {logo: reviewlogo2, profile: reviewlogo2client, pera: '"I felt confident in making a decision after seeing the demo.And the final product was unbelievable."', name: 'Gary F. Berg', projects: '13 Projects' },{logo: reviewlogo1, profile: reviewlogo1client, pera: '"I was blown away by the user-friendliness of Web Services. The demo made it easy to see how it can benefit my business."', name: "William C. Means", projects: '13 Projects' },
    {logo: reviewlogo2, profile: reviewlogo2client, pera: '"I felt confident in making a decision after seeing the demo.And the final product was unbelievable."', name: 'Gary F. Berg', projects: '13 Projects' },{logo: reviewlogo1, profile: reviewlogo1client, pera: '"I was blown away by the user-friendliness of Web Services. The demo made it easy to see how it can benefit my business."', name: "William C. Means", projects: '13 Projects' },
    {logo: reviewlogo2, profile: reviewlogo2client, pera: '"I felt confident in making a decision after seeing the demo.And the final product was unbelievable."', name: 'Gary F. Berg', projects: '13 Projects' },]

  const handlePrev = () => {
    if (!trackRef.current) return;
    const track = trackRef.current;
    track.scrollTo({
      left: track.scrollLeft - track.firstElementChild.offsetWidth,
      behavior: "smooth",
    });
  };

  const handleNext = () => {
    if (!trackRef.current) return;
    const track = trackRef.current;
    track.scrollTo({
      left: track.scrollLeft + track.firstElementChild.offsetWidth,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (!trackRef.current) return;
    const track = trackRef.current;
    const maxScroll = track.scrollWidth - track.clientWidth;

    setIsPrevDisabled(track.scrollLeft <= 0);
    setIsNextDisabled(track.scrollLeft >= maxScroll);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    track.addEventListener("scroll", handleScroll);
    return () => track.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${className} bg-[#040404] relative overflow-y-hidden h-screen flex justify-center items-center`}>
      <Container className="flex flex-wrap">
        <div className="w-[660px]">
          <h1 className="text-[60px] not-italic font-bold leading-[normal] capitalize font-roboto  bg-gradient-to-r from-[#126BA2] to-[#FFF] text-transparent bg-clip-text flex items-center justify-center gap-[24px] mb-[35px]">
            My Client's Stories <img src={Serviceicon} alt="" />
          </h1>
          <p className="text-white text-[25px] not-italic font-medium leading-[normal] max-w-[535px] mb-[40px] font-dm">
            Empowering people in new a digital journey with my super services
          </p>

          <div>
            <button
              onClick={handlePrev}
              disabled={isPrevDisabled}
              className={`mr-2 ${isPrevDisabled ? "opacity-50" : ""}`}
            >
              <MdOutlineKeyboardDoubleArrowLeft  className="text-[40px] text-[#017EBC]"/>
            </button>
            <button
              onClick={handleNext}
              disabled={isNextDisabled}
              className={isNextDisabled ? "opacity-50" : ""}
            >
              <MdOutlineKeyboardDoubleArrowRight className="text-[40px] text-[#017EBC]" />
            </button>
          </div>
        </div>
        <div className="w-[660px]">
          <div
            ref={trackRef}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth px-4 -mr-4 
          [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {clients.map((num) => (
              <div
                key={num}
                className="flex-none w-[51%] min-w-[15rem] px-4 snap-start snap-always justify-center items-center overflow-hidden"
              >
                <div className="flex items-center justify-start mx-[10px] mr-[20px] w-full aspect-square rounded-lg bg-[#6c5ce7] text-[#a29bfe] text-3xl font-bold h-[406px] flex-shrink-0 bg-gradient-to-b from-[#041017] via-[#040C11] to-[#040C11] border-[#032796] border p-[14px] flex-col ">
                    <div>
                        <div className="flex justify-between items-center mb-[57px]">
                            <img src={num.logo} alt="" className="w-[150px]" />
                            <img src={num.profile} alt="" className="w-[80px] rounded-[20px_20px_20px_170px] overflow-hidden" />
                        </div>
                        <div>
                            <div className="flex gap-[2px] mb-[15px]">
                            <TiStarFullOutline className="text-[#6c5ce7] text-[20px]" />
                            <TiStarFullOutline className="text-[#6c5ce7] text-[20px]" />
                            <TiStarFullOutline className="text-[#6c5ce7] text-[20px]" />
                            <TiStarFullOutline className="text-[#6c5ce7] text-[20px]" />
                            <TiStarFullOutline className="text-[#6c5ce7] text-[20px]" />
                            </div>
                            <p className="text-white text-lg not-italic font-medium leading-[normal] font-dm">
                            {num.pera}
                            </p>
                            <h4 className="text-white text-lg not-italic font-bold leading-[normal] font-dm mt-[20px] mb-[10px]">{num.name}</h4>
                            <p className="text-[#A4A4A4] text-lg not-italic font-normal leading-[normal] underline decoration-solid decoration-auto underline-offset-auto font-dm">{num.projects}</p>
                        </div>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <img src={servicebgshap} alt="" className="absolute top-[50%] right-0 translate-y-[-50%] z-[-1]" />
    </div>
  );
};

export default Review;
