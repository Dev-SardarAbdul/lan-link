import AboutSection from "./aboutSection";
import Contact from "./contact";
import Footer from "./footer";
import HeroSection from "./heroSection";
import LetsTalk from "./letsTalkSection";
import Topbar from "./navbar";
import Services from "./servicesSection";
import WorkingProcess from "./workingProcess";

const HomeCom = () => {
  return (
    <div>
      <Topbar />
      <HeroSection />
      <AboutSection />
      <Services />
      <LetsTalk />
      <WorkingProcess />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomeCom;
