import Hero from "../home/components/Hero";
import Projects from "../home/components/Projects";
import squid from "../../assets/images/calamar.png";
import huppe from "../../assets/images/gallery/huppe-fascie.png";
import ScrollingSection from "./components/ScrollingSection";
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className="home">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Victor Leman - Portfolio</title>
        <meta
          name="description"
          content="Développeur Web fullstack à Marseille et en Haute-Corse. Javascript, React, NodeJs, Framer Motion, Redux Toolkit, ..."
        />
        <link rel="canonical" href="https://victorleman.netlify.app" />
      </Helmet>
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
