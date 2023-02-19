import { useState, useEffect, lazy, Suspense } from "react";
// import About from "./About/About";
import Projects from "./projects/Projects";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import Header from "./About/Header";

const About = lazy(() => import("./About/About"));

const Port = () => {
  const [navName, setNavName] = useState("home");

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
      <div className="w-full h-3 bg-transparent absolute "></div>
      <Home setNavName={setNavName} navName={navName} nav={nav} />
      <Header navName={navName} nav={nav} setNav={setNav} />
      <div className="bg-zinc-300 dark:bg-zinc-800 ">
        <Suspense fallback={<p>hola</p>}>
          <About setNavName={setNavName} />
        </Suspense>
        <Projects setNavName={setNavName} />
      </div>
      <Footer setNavName={setNavName} />
    </div>
  );
};

export default Port;
