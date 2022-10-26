import React, { useContext, useEffect } from "react";
import TranslationContext from "../../TraslationContext";
import Animation from "./Animation";
import ArrowDown from "../../icons/ArrowDown";
import { useInsertionEffect } from "../../hooks/useIntersection";

// const Animation = lazy(() => import("./Animation"));

function Home({ setNavName, navName }) {
  const { text, handleLanguaje } = useContext(TranslationContext);
  const [containerRef, visible, nameCurrent] = useInsertionEffect({
    root: null,
    rootMargin: "0px",
    threshold: 0.4,
  });

  useEffect(() => {
    visible && setNavName(nameCurrent);
  }, [visible, setNavName, nameCurrent]);

  return (
    <div
      ref={containerRef}
      id="home"
      title="home"
      className=" flex h-[100vh] w-full items-center justify-center overflow-x-hidden "
    >
      <Animation visible={visible} />

      <div>
        <select
          className=" fixed top-[0.50rem] left-4 m-4 text-xs md:text-base cursor-pointer rounded- p-1 rounded hover:border-2 bg-slate-700 border-cyan-700 text-slate-200 z-20"
          onChange={(e) => handleLanguaje(e.target.value)}
        >
          <option value="en">English</option>
          <option value="es">Espanol</option>
        </select>
      </div>
      <div className=" text-slate-100  text-lg sm:text-3xl md:text-5xl text-center  font-mono z-10">
        <h3 className=" text-slate-300">
          {text.presentation.title}
          <strong className="text-rose-600"> Lucas Pirez.</strong>
        </h3>
        <h4>{text.presentation.subTitle}</h4>

        <a
          href="#about"
          className={`group relative inline-flex
          border-[2px] border-cyan-700 p-1 mt-4 text-sm md:text-lg md:p-2 lg:text-xl lg:p-3 lg:mt-8 rounded-md hover:bg-cyan-600 bg-slate-800 hover:border-cyan-800 transition  ease-out duration-300 `}
        >
          {text.presentation.button}
          <span className="group-hover:animate-bounce">
            <ArrowDown />
          </span>
        </a>
      </div>
    </div>
  );
}

export default Home;
