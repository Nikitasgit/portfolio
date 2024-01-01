import HomeMain from "../components/HomeMain";
import Navbar from "../components/Navbar";
import HomeSecondPart from "../components/HomeSecondPart";
import HomeThirdPart from "../components/HomeThirdPart";

import { useScroll, useTransform } from "framer-motion";

import HomeFourthPart from "../components/HomeFourthPart";
import HomeFifthPart from "../components/HomeFifthPart";
import Footer from "../components/Footer";

const Home = () => {
  const { scrollYProgress } = useScroll();
  //prends en parametre la valeur 0 à 1 par rapport à la longueur du scroll.
  const pathLength = scrollYProgress;
  const svgPath = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="home">
      <div className="shadow"></div>
      <Navbar />
      <HomeMain />
      <HomeSecondPart />
      {/*       <HomeThirdPart /> */}
      <HomeFourthPart />
      <HomeFifthPart />
      <Footer />
    </div>
  );
};

export default Home;
