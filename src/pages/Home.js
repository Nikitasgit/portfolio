import HomeMain from "../components/HomeMain";
import HomeSecondPart from "../components/HomeSecondPart";
import HomeThirdPart from "../components/HomeThirdPart";
import HomeFourthPart from "../components/HomeFourthPart";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home">
      <HomeMain />
      <HomeSecondPart />
      <HomeThirdPart />
      <HomeFourthPart />
      <Footer />
    </div>
  );
};

export default Home;
