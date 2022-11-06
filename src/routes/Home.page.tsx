import { Outlet } from "react-router-dom";

import Footer from "../components/footer/footer.component";

import Hero from "../components/hero/hero.comp";
import Infobox1 from "../components/infobox1/infobox1.comp";
import Infobox2 from "../components/infobox2/infobox2.comp";
import FeaturesBox from "../components/features-box/features-box.comp";
import Contactbox from "../components/contactbox/contact-box.comp";
import Carousel from "../components/carousel/carousel.comp";

const Home = () => {
  return (
    <>
      <Outlet />
      <Hero />
      <Carousel />
      <Infobox1 />
      <Infobox2 />
      <FeaturesBox />
      <Contactbox />
      <Footer />
    </>
  );
};

export default Home;
