import React, { useContext, useEffect } from "react";
import AbuotDescrip from "./AbuotDescrip";
import { useInsertionEffect } from "../../hooks/useIntersection";
import TranslationContext from "../../TraslationContext";
import linked from "../../images/perfil.png";
import Tecnologies from "./Tecnologis";
import useWidth from "../../hooks/useWidth";

function About({ setNavName }) {
  const { width } = useWidth();
  const { text } = useContext(TranslationContext);
  const [containerRef, visible, animationStart, nameCurrent] =
    useInsertionEffect({
      root: null,
      rootMargin: "0px",
      threshold: 0.4,
    });

  useEffect(() => {
    visible && setNavName(nameCurrent);
  }, [visible, nameCurrent, setNavName]);

  return (
    <>
      <div
        id="about"
        ref={containerRef}
        title="about"
        className="relative max-w-[1500px] m-auto h-auto min-h-[100vh] flex flex-col xl:flex-row items-center lg:justify-around dark:bg-zinc-900 shadow-lg dark:shadow-zinc-400 pt-[13vh] bg-zinc-200"
      >
        {(animationStart || width < 600) && (
          <>
            <h3 className="absolute top-[10vh] lg:text-6xl sm:text-4xl text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-bl from-cyan-500 to-[#f09a9a] dark:from-cyan-300 dark:to-[#a09a9a] mb-10  animate-[startRight_1.2s_ease-out]">
              {text.header.about}
            </h3>

            <div className="mt-12 lg:mt-0 center h-auto md:w-[92%] xl:w-[65%] flex flex-col justify-center items-center  animate-[startLeft_1.2s_ease-out] xl:self-start xl:mt-20">
              <div className="flex flex-col md:flex-row items-center  ">
                <div
                  className="w-[350px]  m-10 rounded-t-full rounded-b-md shadow-lg  shadow-zinc-500 bg-gradient-to-t from-cyan-500
                  to-[#f09a9a] bg-opacity-90 dark:from-cyan-300 dark:to-[#a09a9a] "
                >
                  <img src={linked} alt="perfil" className="pl-2" />
                </div>

                <p className="mt-3 min-w-[350px] h-auto lg:w-[50%] lg:ml-4 w-[60%] text-center mb-8 dark:text-slate-200 md:text-lg">
                  {text.about.about}
                </p>
              </div>

              <AbuotDescrip />
            </div>
            <Tecnologies />
          </>
        )}
      </div>
    </>
  );
}

export default About;
