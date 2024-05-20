import { useContext, useEffect, useState } from 'react';
import TranslationContext from '../../TraslationContext';

export default function Header() {
  const [nav, setNav] = useState(false);
  const { text, currentPage, animationStart, width } = useContext(
    TranslationContext
  );

  const changeNav = () => {
    setNav(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);

    return () => {
      window.removeEventListener('scroll', changeNav);
    };
  }, []);

  return (
    <div className="w-full h-[10vh] fixed  sm:sticky top-0 z-20 bg-transparent">
      <header
        className={`${
          nav !== false
            ? ' h-[160px] bg-myBgBlue w-full'
            : 'h-[10vh] bg-transparent md:bg-myBgBlue w-full dark:md:bg-myBgDark  '
        } flex  transition-all  justify-end md:[10vh] w-full  items-center z-10 `}
      >
        {(animationStart.projects === true || width < 600) && (
          <ul
            className={` ${
              nav === false ? 'hidden' : 'flex'
            } transition-all flex-col right-4 space-y-2 md:relative md:flex md:flex-row md:space-y-0  m-3 md:m-6 md:space-x-5 text-md md:text-2xl`}
          >
            <li>
              <a
                href="#home"
                className={`${currentPage === 'home' ? 'text-purple' : 'text-gray-200'} 
                flex  transition-all transform -translate-y-1  hover:transform-none md:animate-[wiggle_2.5s_ease-in-out] animate-[wiggleMedia_1s_ease-in-out] `}
              >
                {text.header.home}
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className={`${
                  currentPage === 'projects'
                    ? 'text-purple'
                    : 'text-gray-200'
                } flex transition-all transform -translate-y-1 hover:transform-none md:animate-[wiggle_2s_ease-in-out] animate-[wiggleMedia_0.7s_ease-in-out]`}
              >
                {text.header.portfolio}
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={` ${
                  currentPage === 'about'
                    ? 'text-purple'
                    : 'text-gray-200'
                } flex transition-all transform -translate-y-1  hover:transform-none md:animate-[wiggle_1.56s_ease-in-out] animate-[wiggleMedia_0.4s_ease-in-out] `}
              >
                {text.header.about}
              </a>
            </li>
            <li></li>
            <li>
              <a
                href="#footer"
                className={`${
                  currentPage === 'footer'
                    ? 'text-purple'
                    : 'text-gray-200'
                } flex transition-all transform -translate-y-1  hover:transform-none md:animate-[wiggle_1s_linear] animate-[wiggleMedia_0.1s_ease-in-out]`}
              >
                {text.header.contact}
              </a>
            </li>
            <li>
              {nav && (
                <button
                  onClick={() => setNav(false)}
                  className=" px-3 border-[1px] text-xs rounded border-cyan-400  hover:bg-cyan-700 transition-all opacity-80 duration-200 hover:text-cyan-300 hover:border-white dark:text-slate-200"
                >
                  x
                </button>
              )}
            </li>
          </ul>
        )}

        <div
          className={`${
            nav === false ? 'flex' : 'hidden '
          } text-slate-200 md:hidden mr-4 flex-col justify-center space-y-[6px] cursor-pointer h-auto border-2 border-cyan-800 p-1 rounded-sm  
          `}
          onClick={() => setNav(true)}
        >
          <span className="h-[2px] w-6 ms:bg-slate-100  bg-slate-800  dark:bg-slate-200"></span>
          <span className="h-px w-6 ms:bg-slate-100 bg-slate-800 dark:bg-slate-200">
            {' '}
          </span>
          <span className="h-[2px] w-6 ms:bg-slate-100 bg-slate-800 dark:bg-slate-200"></span>
        </div>
      </header>
    </div>
  );
}
