import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Art from "./pages/art/Art";
import Home from "./pages/home/Home";
/* import About from "./pages/About"; */
import Lenis from "@studio-freight/lenis";
import Navbar from "./components/Navbar";
import ScrollReset from "./components/ScrollReset";
import { FaCircleChevronUp } from "react-icons/fa6";
const App = () => {
  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="app" style={{ position: "relative" }}>
      <BrowserRouter>
        <ScrollReset />
        <Navbar />
        <FaCircleChevronUp
          onClick={() => ScrollToTop()}
          className="scroll-top-button"
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/art" element={<Art />} />
          {/*   <Route path="/about" element={<About />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
