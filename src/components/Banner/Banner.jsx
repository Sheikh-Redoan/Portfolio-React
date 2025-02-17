import React, { useEffect, useRef } from 'react';
import bannerShap from "../../assets/banner-line-shape.png";
import hand from "../../assets/hand.gif";
import myImage from "../../assets/myimage.png";
import curverArrow from "../../assets/curvedArrow.png";
import icon from "../../assets/arrowIcon.png";
import Navbar from "../Navbar/Navbar";
import Container from "../Container/Container";
import { FaArrowRight } from "react-icons/fa";

// TextScramble Class
class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#________';
    this.update = this.update.bind(this);
  }

  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => (this.resolve = resolve));
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }

  update() {
    let output = '';
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }

  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

const Banner = ({id}) => {
  const textRef = useRef(null);

  useEffect(() => {
    const phrases = ['Sheikh Redoan', 'Frontend Developer'];
    const el = textRef.current;
    const fx = new TextScramble(el);

    let counter = 0;
    const next = () => {
      fx.setText(phrases[counter]).then(() => {
        setTimeout(next, 800);
      });
      counter = (counter + 1) % phrases.length;
    };

    next();
  }, []);

  return (
    <div id={`${id}`} className="relative bg-[#040404] h-screen z-[1] overflow-hidden">
      {/* Background Shape */}
      <img
        className="w-full h-[100%] absolute top-0 left-0 z-[-1] object-cover"
        src={bannerShap}
        alt="Banner Background"
      />

      <Container className="pt-[132px] max-sm:pt-[80px]">
        <div className="flex justify-between items-center relative flex-wrap max-sm:flex-col-reverse max-sm:relative">
          {/* Left Section (Text Content) */}
          <div className="mt-[101px] max-sm:mt-[20px] max-sm:text-center">
            <h2 className="flex flex-wrap items-center text-white font-roboto text-[40px] sm:text-[50px] md:text-[70px] font-bold leading-normal max-w-[588px] max-sm:flex max-sm:justify-center">
              HELLO I
              <span className="bg-gradient-to-b from-[#296CE0] to-[#02EAFD] bg-clip-text text-transparent font-rock text-[50px] sm:text-[60px] md:text-[80px] font-normal leading-normal">
                ’
              </span>
              M <img className="w-[50px] sm:w-[60px] md:w-[84px] ml-[10px] sm:ml-[20px] md:ml-[30px]" src={hand} alt="Hand Wave" />
            </h2>
              <span className="font-roboto text-[40px] sm:text-[50px] md:text-[70px] font-bold leading-normal max-w-[588px] max-sm:flex max-sm:justify-center text-white" ref={textRef}></span>
            <p className="text-white text-[16px] sm:text-[18px] md:text-[22px] not-italic font-medium leading-[normal] font-dm mt-[30px] sm:mt-[40px] md:mt-[64px] mb-[20px] sm:mb-[30px] md:mb-[49px] max-w-[532px] max-sm:mx-auto">
              I focus on making Websites. Providing you the best creative & eye-catching website designs.
            </p>
            <a
              className="py-[10px] sm:py-[12px] md:py-[14px] px-[30px] sm:px-[40px] md:px-[44px] text-white font-dm text-[16px] sm:text-[18px] md:text-[20px] font-bold leading-normal flex gap-[7px] justify-center items-center rounded-[50px] border border-[#282CAF] bg-[#041118] w-[200px] sm:w-[220px] md:w-[230px] mx-auto sm:mx-0 group"
              href="#"
            >
              My Works
              <img
                className="w-[16px] sm:w-[18px] md:w-[20px] ml-[8px] sm:ml-[10px] transform transition-transform duration-300 ease-in-out group-hover:rotate-[45deg]"
                src={icon}
                alt="Arrow Icon"
              />
            </a>

            {/* Add the CSS for the animation */}
            <style>
              {`
                .dud {
                  color: #757575;
                }
              `}
            </style>
          </div>

          {/* Curved Arrow (Hidden on Mobile) */}
          <img
            className="absolute top-[40px] left-[560px] max-sm:hidden"
            src={curverArrow}
            alt="Curved Arrow"
          />

          {/* Right Section (Image) */}
          <div className="flex justify-center items-center mt-[40px] sm:mt-0 max-sm:absolute max-sm:top-[50%] max-sm:left-[50%] max-sm:translate-x-[-50%] max-sm:translate-y-[-50%] max-sm:z-[-1] max-sm:opacity-[.5]">
            <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[533px] md:h-[533px] rounded-[50%] bg-gradient-to-b from-[rgba(217,217,217,0)] via-[rgba(115,115,115,0.19)] to-[rgba(115,115,115,0.19)] flex justify-center items-start overflow-hidden">
              <img
                className="w-full h-full object-cover filter grayscale"
                src={myImage}
                alt="Sheikh Redoan"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;