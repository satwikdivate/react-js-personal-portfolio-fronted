import AboutMe from "../AboutMe";
import Certification from "../Certification";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import Testimonial from "../Testimonials";
import WebSkills from "../WebSkills";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MySkills />
      <Certification/>
      {/* <WebSkills/> */}
      {/* <AboutMe /> */}
      <MyPortfolio />
   
      <ContactMe />
      <Footer />
    </>
  );
}
