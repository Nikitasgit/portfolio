import HomeMain from "../components/HomeMain";
import Navbar from "../components/Navbar";
import HomeSecondPart from "../components/HomeSecondPart";
import HomeFourthPart from "../components/HomeFourthPart";
import HomeFifthPart from "../components/HomeFifthPart";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home">
      <div className="shadow"></div>
      <Navbar />
      <HomeMain />
      <HomeSecondPart />
      <HomeFourthPart />
      <HomeFifthPart />
      <Footer />
    </div>
  );
};

export default Home;
