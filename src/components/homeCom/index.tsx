import AboutSection from "./aboutSection";
import HeroSection from "./heroSection";
import Topbar from "./navbar";
import Services from "./servicesSection";

const HomeCom = () => {
  return (
    <div>
      <Topbar />
      <HeroSection />
      <AboutSection />
      <Services />
    </div>
  );
};

export default HomeCom;
