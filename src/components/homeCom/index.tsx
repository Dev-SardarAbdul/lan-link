import AboutSection from "./aboutSection";
import Contact from "./contact";
import Footer from "./footer";
import HeroSection from "./heroSection";
import LetsTalk from "./letsTalkSection";
import Topbar from "./navbar";
import Services from "./servicesSection";
import WorkingProcess from "./workingProcess";
import { useEffect, useState } from "react";
import MainLoader from "./loader";

const HomeCom = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);

  return (
    <div>
      {loader && <MainLoader />}
      {!loader && (
        <>
          <Topbar />
          <HeroSection />
          <AboutSection />
          <Services />
          <LetsTalk />
          <WorkingProcess />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
};

export default HomeCom;
