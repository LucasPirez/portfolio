import React, { useContext, lazy, Suspense, useState } from 'react';
import TranslationContext from '../../TraslationContext';
import ArrowDown from '../../icons/ArrowDown';
import Theme from '../About/Theme';
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
        className=" relative flex flex-col sm:h-[100vh] h-[110vh]  w-full items-center justify-center overflow-x-hidden bg-transparent"
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
        <div className="text-slate-100 dark:text-slate-300  text-xl sm:text-3xl md:text-5xl  font-mono z-10 h-72 relative">
          <span className="text-sm sm:text-xl md:text-2xl opacity-80 ml-[10%] sm:m-0">
            {text.presentation.title}
          </span>

          <h3 className="font-semibold text-gray-300 mt-3 mb-3 ml-[10%] sm:m-0">
            Lucas Pirez Gallo.
          </h3>
          <h4 className="text-lg sm:text-2xl md:text-3xl ml-[10%] sm:m-0 dark:text-rose-500/80 text-[#d73542]">
            {text.presentation.subTitle}
          </h4>
          <div className="flex justify-center m-auto mt-4 lg:mt-8 w-[300px] h-16 ">
            <a href={curriculumPDF} download="Cv-LucasPirez.pdf">
              <span className="text-sm border-2 border-myDarkPurple/20 md:text-lg rounded-full px-6 bg-myBgDark py-2 cursor-pointer hover:scale-105 hover:text-white hover:bg-myDarkPurple/50 duration-300">
                {text.download} CV
              </span>
            </a>
          </div>
        </div>
        <a
          href="#portfolio"
          className={`group inline-flex ${buttonPrimary} h-11  absolute bottom-40`}
        >
          <span className="animate-bounce scale-90 sm:scale-110  ">
            <ArrowDown />
          </span>
        </a>
      </section>
    </>
  );
}

export default Home;
