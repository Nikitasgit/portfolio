import HomeMain from "../components/HomeMain";
import HomeSecondPart from "../components/HomeSecondPart";
import HomeThirdPart from "../components/HomeThirdPart";
import HomeFourthPart from "../components/HomeFourthPart";
import Footer from "../components/Footer";
import squid from "../assets/images/calamar.png";
import huppe from "../assets/images/huppe-fascie.png";

const Home = () => {
  return (
    <div className="home">
      <div className="imgs-bg">
        <img className="squid" src={squid} alt="" />
        <img className="huppe" src={huppe} alt="" />
      </div>
      <HomeMain />
      <HomeSecondPart />
      <HomeThirdPart />
      {/*       <HomeFourthPart /> */}
      <Footer />
    </div>
  );
};

export default Home;
