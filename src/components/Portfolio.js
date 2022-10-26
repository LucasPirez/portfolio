import { useState, useEffect, lazy, Suspense } from "react";
// import About from "./About/About";
import TranslationContext from "../TraslationContext";
import Projects from "./projects/Projects";
import { useInsertionEffect } from "../hooks/useIntersection";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import Header from "./About/Header";
import { getImages } from "../firebase/client";

const About = lazy(() => import("./About/About"));

const Port = () => {
  const [containerRef, visible, animationStart, nameCurrent] =
    useInsertionEffect({
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });
  const [navName, setNavName] = useState("home");
  // const [link, setLink] = useState(null);
  // const [width, setwidth] = useState(window.innerWidth);
  const [nav, setNav] = useState(false);

  const changeNav = () => {
    setNav(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);

    return () => {
      window.removeEventListener("scroll", changeNav);
    };
  }, []);

  return (
    <div
      className="scroll-smooth"
      onClick={() => (nav === true ? setNav(false) : "")}
    >
      <div className="w-full h-3 bg-transparent absolute"></div>
      <Home setNavName={setNavName} navName={navName} />
      <Header navName={navName} nav={nav} setNav={setNav} />
      <Suspense fallback={<p>hola</p>}>
        <About setNavName={setNavName} />
      </Suspense>
      <Projects setNavName={setNavName} />
      <Footer setNavName={setNavName} />
    </div>
  );
};

export default Port;
