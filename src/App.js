import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Art from "./pages/Art";
import Home from "./pages/Home";
import About from "./pages/About";

/* import Lenis from "@studio-freight/lenis"; */
import Navbar from "./components/Navbar";

const App = () => {
  /*  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []); */

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/art" element={<Art />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
