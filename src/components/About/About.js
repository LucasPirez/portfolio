import React, { useContext, useEffect } from "react";
import AbuotDescrip from "./AbuotDescrip";
import { useInsertionEffect } from "../../hooks/useIntersection";
import TranslationContext from "../../TraslationContext";
import linked from "../../images/perfil.jpeg";
import Tecnologies from "./Tecnologis";

function About({ setNavName }) {
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
        className="relative max-w-[1500px] m-auto h-auto min-h-screen flex flex-col xl:flex-row items-center lg:justify-around mt-10 "
      >
        {animationStart && (
          <>
            <h3 className="absolute top-0 lg:text-6xl sm:text-4xl text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-bl from-cyan-500 to-[#f09a9a] mb-10  animate-[startRight_1.2s_ease-out]">
              {text.header.about}
            </h3>

            <div className="mt-12 lg:mt-0 center h-auto md:w-[92%] xl:w-[65%] flex flex-col justify-center items-center  animate-[startLeft_1.2s_ease-out] xl:self-start xl:mt-20">
              <div className="flex flex-col md:flex-row items-center  ">
                <img
                  src={linked}
                  alt="perfil"
                  className="w-[300px] h-[300px] rounded-full m-10"
                />

                <p className="mt-3 min-w-[350px] h-auto lg:w-[50%] lg:ml-4 w-[60%] text-center mb-8">
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
