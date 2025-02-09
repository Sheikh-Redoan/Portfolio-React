import "./App.css";
import Banner from "./components/Banner/Banner";
import SkillSlider from "./components/SkillSlider/SkillSlider";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import Review from "./components/Review/Review";
import Blogs from "./components/Blogs/Blogs";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="relative bg-black">
        <Navbar className="fixed top-0 left-0 bg-[#0411181f] w-full z-[9999]" />
        <Banner id='home'/>
        <SkillSlider className="sticky top-0 z-[5] max-sm:relative" />
        <About id='about' className="sticky top-0 z-[11] pt-[140px] pb-[70px] max-sm:relative" />
        <Services id='services' className=" sticky top-0 z-[12] pt-[70px] pb-[70px] max-sm:relative" />
        <Portfolio id='projects' className="relative top-0 z-[13] pt-[70px] pb-[70px] overflow-x-hidden max-sm:relative max-sm:pt-[70px] max-sm:pb-[70px]" />
        <Review className='sticky top-0 z-[14] pt-[70px] pb-[70px]  max-sm:relative max-sm:h-auto'></Review>
        <Blogs id='blog' className='sticky top-0 z-[15] pt-[40px] pb-[40px] max-sm:relative'></Blogs>
        <Contact id='contact' className='relative top-0 z-[16] pt-[70px] pb-[70px] max-sm:relative'></Contact>
        <Footer className='relative top-0 z-[16] pt-[70px] pb-[70px] max-sm:relative'></Footer>
      </div>
    </>
  );
}

export default App;
