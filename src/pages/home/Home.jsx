import Hero from "../home/components/Hero";
import Projects from "../home/components/Projects";
import squid from "../../assets/images/calamar.png";
import huppe from "../../assets/images/gallery/huppe-fascie.png";
import ScrollingSection from "./components/ScrollingSection";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div className="home">
      <div className="imgs-bg">
        <img className="squid" src={squid} alt="background squid" />
        <img className="huppe" src={huppe} alt="background bird" />
      </div>
      <Hero />
      <Projects />
      <ScrollingSection />
      <Footer />
    </div>
  );
};

export default Home;
