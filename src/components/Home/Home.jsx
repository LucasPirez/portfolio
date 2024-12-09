import React, { useContext, lazy, Suspense, useState } from 'react';
import TranslationContext from '../../TraslationContext';
import ArrowDown from '../../icons/ArrowDown';
import Theme from '../About/Theme';
import linked from '../../images/perfil.png';
import curriculumPDF from '../../images/cv.pdf';
import { buttonPrimary } from '../util/classButtons';

const Animation = lazy(() => import('./Animation'));

function Home() {
  const { text, handleLanguaje, currentPage, width } = useContext(
    TranslationContext
  );
  const [changeTheme, setChangeTheme] = useState('');

  return (
    <>
      <div className="absolute w-full h-[100vh] bg-slate-800 dark:bg-myBgDark -z-20"></div>

      <section
        id="home"
        className=" relative flex flex-col sm:h-[100vh] h-screen overflow-hidden  w-full items-center  overflow-x-hidden bg-transparent"
      >
        <Suspense fallback="">
          {width > 500 && (
            <Animation
              visible={currentPage}
              changeTheme={changeTheme}
            />
          )}
        </Suspense>
        <div className="fixed top-[0.50rem]  left-4 m-4 z-30 md:flex">
          <select
            className="text-xs md:text-base bg-myDarkLightBlue rounded-2xl px-2 border-2cursor-pointer p-1  hover:scale-105 transition-all duration-300 mr-2 mb-2 dark:border-myDarkLightBlue dark:text-gray-900 h-8"
            onChange={(e) => handleLanguaje(e.target.value)}
          >
            <option value="en">English</option>
            <option value="es">Espanol</option>
          </select>
          <Theme setChangeTheme={setChangeTheme} />
        </div>
        <div className="flex items-center  justify-around xl:justify-center xl:gap-44 max-h-[100hv] sm:h-[70%] h-[60%]   flex-wrap text-slate-100 dark:text-slate-300 w-full text-xl sm:text-3xl md:text-5xl px-6  z-10  relative mt-16 md:mt-0">
          <div
            className="  sm:w-[350px] w-[280px] xl:w-[430px]  lg:mt-0  overflow-hidden flex justify-center z-10    "
            style={{
              borderRadius: '65% 35% 65% 35% / 28% 69% 31% 72%',
            }}
          >
            <img
              src={linked}
              alt="perfil"
              className=" opacity-100 mt-2 -mb-2  object-cover "
              style={
                {
                  // filter: 'drop-shadow(#86e0e760 0rem 0rem  5px)',
                }
              }
            />
          </div>
          <div className="">
            <h3 className="sm:text-4xl text-3xl md:text-4xl xl:text-5xl font-semibold text-gray-300">
              Lucas Pirez Gallo
            </h3>
            <h4 className=" sm:text-3xl text-2xl md:text-3xl xl:text-3xl dark:text-rose-500/80 text-[#d73542]">
              {text.presentation.subTitle}
            </h4>
            <p className="text-sm  md:text-base max-w-[400px] mt-2 ">
              {text.presentation.about}
            </p>
            <div className="  mt-4 sm:mt-4 lg:mt-4 w-[300px] h-16 z-40">
              <a href={curriculumPDF} download="Cv-LucasPirez.pdf">
                <span className="text-sm border-2 border-myDarkPurple/20 md:text-xl rounded-full px-6 bg-myBgDark py-2 cursor-pointer hover:scale-105 hover:text-white hover:bg-myDarkPurple/50 duration-300">
                  {text.download} CV
                </span>
              </a>
            </div>
          </div>
        </div>
        <a
          href="#portfolio"
          className={`group inline-flex ${buttonPrimary} absolute sm:bottom-10 bottom-40 z-40 `}
        >
          <span className="animate-bounce scale-90 sm:scale-110  ">
            <ArrowDown />
          </span>
        </a>
        <div className="absolute top-[40%] left-0 w-full h-full bg-gradient-to-t from-black to-transparent "></div>
      </section>
    </>
  );
}

export default Home;
