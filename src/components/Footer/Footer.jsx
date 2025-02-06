import React from 'react'
import Container from '../Container/Container'
import logo from "../../assets/LOGO.png";

const Footer = ({className}) => {
  return (
    <div className={`${className} bg-[#041118] relative overflow-y-hidden`}>
        <Container className='flex flex-col items-center'>
            <div className="flex justify-center items-center gap-[15px]">
                        <img className=" w-[46px] h-[75px]" src={logo} alt="Logo" />
                        <h3 className="text-transparent bg-gradient-to-r from-[#1F64B9] to-[#06E0FA] bg-clip-text font-roboto text-[25px] font-bold leading-normal">
                          Sheikh Redoan
                        </h3>
            </div>
            <div>
            <ul className="flex gap-[28px]">
                <li className="text-white font-dm text-[20px] font-bold leading-normal"><a href="#">Home</a></li>
                <li className="text-[#909090] font-dm text-[20px] font-bold leading-normal hover:text-white"><a href="#">About</a></li>
                <li className="text-[#909090] font-dm text-[20px] font-bold leading-normal hover:text-white"><a href="#">Services</a></li>
                <li className="text-[#909090] font-dm text-[20px] font-bold leading-normal hover:text-white"><a href="#">Projects</a></li>
                <li className="text-[#909090] font-dm text-[20px] font-bold leading-normal hover:text-white"><a href="#">Blog</a></li>
            </ul>
          </div>
          <p className='text-white text-xl not-italic font-bold leading-[normal] font-dm mt-[20px]'>© All rights reserved by <span className='text-transparent bg-gradient-to-r from-[#1F64B9] to-[#06E0FA] bg-clip-text font-roboto '>Sheikh Redoan Ahmed</span></p>
        </Container>
    </div>
  )
}

export default Footer