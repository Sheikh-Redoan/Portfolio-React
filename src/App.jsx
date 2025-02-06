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
        <Navbar className="fixed top-0 left-0 w-full z-[9999]" />
        <Banner />
        <SkillSlider className="sticky top-0 z-[5] max-sm:relative" />
        <About className="sticky top-0 z-[11] pt-[140px] pb-[70px] max-sm:relative" />
        <Services className=" sticky top-0 z-[12] pt-[70px] pb-[70px] max-sm:relative" />
        <Portfolio className="relative top-0 z-[13] pt-[70px] pb-[70px] overflow-x-hidden max-sm:relative" />
        <Review className='sticky top-0 z-[14] pt-[70px] pb-[70px] max-sm:relative'></Review>
        <Blogs className='sticky top-0 z-[15] pt-[40px] pb-[40px] max-sm:relative'></Blogs>
        <Contact className='relative top-0 z-[16] pt-[70px] pb-[70px] max-sm:relative'></Contact>
        <Footer className='relative top-0 z-[16] pt-[70px] pb-[70px] max-sm:relative'></Footer>
      </div>
    </>
  );
}

export default App;
