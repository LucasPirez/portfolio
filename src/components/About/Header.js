import { useInsertionEffect } from "../../hooks/useIntersection";
import { useContext } from "react";
import TranslationContext from "../../TraslationContext";

export default function Header({ navName, nav, setNav }) {
  const { text, handleLanguaje } = useContext(TranslationContext);

  const [containerRef, visible, animationStart] = useInsertionEffect({
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  return (
    <div
      ref={containerRef}
      className="w-full h-[10vh] sticky top-0 z-10 bg-transparent"
    >
      {animationStart && (
        <header
          className={`${
            nav !== false
              ? " h-[130px] bg-slate-800 w-full"
              : "h-[10vh] bg-transparent sm:bg-slate-800 w-full"
          } flex  transition-all  justify-end sm:[10vh] w-full  items-center z-10 `}
        >
          <ul
            className={` ${
              nav === false ? "hidden" : "flex"
            } transition-all flex-col right-4 space-y-2 sm:relative sm:flex sm:flex-row sm:space-y-0 text-white m-3 sm:m-6 sm:space-x-5 text-sm sm:text-xl`}
          >
            <li>
              <a
                href="#home"
                // onClick={() => setLink("Home")}
                className={` ${
                  navName === "home" ? "text-cyan-500" : "text-gray-200"
                } 
                flex  transition-all transform -translate-y-1  hover:transform-none sm:animate-[wiggle_2.5s_ease-in-out] animate-[wiggleMedia_1.2s_ease-in-out] `}
              >
                {text.header.home}
              </a>
            </li>
            <li>
              <a
                href="#about"
                // onClick={() => setLink("about")}
                className={` ${
                  navName === "about" ? "text-cyan-500" : "text-gray-200"
                } flex  transition-all transform -translate-y-1 hover:transform-none sm:animate-[wiggle_2s_ease-in-out] animate-[wiggleMedia_0.9s_ease-in-out]`}
              >
                {text.header.about}
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                // onClick={() => setLink("portfolio")}
                className={`${
                  navName === "projects" ? "text-cyan-500" : "text-gray-200"
                } flex transition-all transform -translate-y-1  hover:transform-none sm:animate-[wiggle_1.56s_ease-in-out] animate-[wiggleMedia_0.6s_ease-in-out]`}
              >
                {text.header.portfolio}
              </a>
            </li>
            <li></li>
            <li>
              <a
                href="#footer"
                // onClick={() => setLink("footer")}
                className={`${
                  navName === "footer" ? "text-cyan-500" : "text-gray-200"
                } flex transition-all transform -translate-y-1  hover:transform-none sm:animate-[wiggle_1s_linear] animate-[wiggleMedia_0.3s_ease-in-out]`}
              >
                {text.header.contact}
              </a>
            </li>
          </ul>
          <div
            className={`${
              nav === false ? "flex" : "hidden "
            } text-slate-200 sm:hidden mr-4 flex-col justify-center space-y-[6px] cursor-pointer h-auto
          `}
            onClick={() => setNav(true)}
          >
            <span className="h-[2px] w-6 ms:bg-slate-100  bg-slate-800"></span>
            <span className="h-px w-6 ms:bg-slate-100 bg-slate-800"> </span>
            <span className="h-[2px] w-6 ms:bg-slate-100 bg-slate-800"></span>
          </div>
        </header>
      )}
    </div>
  );
}
