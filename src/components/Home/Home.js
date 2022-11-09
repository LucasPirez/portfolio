import React, { useContext, useEffect, lazy, Suspense } from "react";
import TranslationContext from "../../TraslationContext";
import ArrowDown from "../../icons/ArrowDown";
import { useInsertionEffect } from "../../hooks/useIntersection";
import useWidth from "../../hooks/useWidth";
import Theme from "../About/Theme";

const Animation = lazy(() => import("./Animation"));

function Home({ setNavName, navName, nav }) {
  const { width } = useWidth();
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
    <>
      <div className="absolute w-full h-[100vh] bg-slate-800 dark:bg-zinc-900 -z-20"></div>
      <div
        ref={containerRef}
        id="home"
        title="home"
        className=" flex h-[100vh]   w-full items-center justify-center overflow-x-hidden bg-transparent"
      >
        <Suspense fallback="">
          {width > 700 && <Animation visible={visible} />}
        </Suspense>
        <div className="fixed top-[0.50rem]  left-4 m-4 z-20 md:flex ">
          <select
            className="text-xs md:text-base bg-zinc-900 rounded-2xl px-2 border-2 border-cyan-700 cursor-pointer p-1  hover:border-2  hover:scale-105 transition-all duration-300 hover:border-cyan-700 text-slate-200  mr-2 mb-2 dark:hover:border-cyan-700 dark:text-slate-200 h-8"
            onChange={(e) => handleLanguaje(e.target.value)}
          >
            <option value="en">English</option>
            <option value="es">Espanol</option>
          </select>
          <Theme nav={nav} />
        </div>
        <div className=" text-slate-100 dark:text-slate-300  text-lg sm:text-3xl md:text-5xl text-center  font-mono z-10">
          <h3 className=" text-slate-300 dark:text-slate-300">
            {text.presentation.title}
            <strong className="text-rose-600 dark:text-rose-600">
              Lucas Pirez.
            </strong>
          </h3>
          <h4>{text.presentation.subTitle}</h4>

          <a
            href="#about"
            className={`group relative inline-flex
          border-[2px] border-cyan-700 p-2 mt-4 text-sm md:text-lg  lg:text-xl lg:p-3 lg:mt-8 rounded-md hover:bg-cyan-600 bg-slate-800  hover:border-cyan-800 transition  ease-out duration-300 dark:bg-zinc-800 dark:border-cyan-600 dark:hover:bg-cyan-800`}
          >
            {text.presentation.button}
            <span className="group-hover:animate-bounce">
              <ArrowDown />
            </span>
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
