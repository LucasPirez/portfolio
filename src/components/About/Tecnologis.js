import { useContext } from "react";
import style from "./tecnologies.module.css";
import {
  Css3,
  Django,
  Html,
  Reactjs,
  Python,
  Javascript,
} from "../../icons/IconsTecnologies";
import TranslationContext from "../../TraslationContext";

const Tecnologies = () => {
  const { text } = useContext(TranslationContext);

  return (
    <div className="h-full animate-[startRight_1.2s_ease-out]">
      <div className={style.cuadrado1}>
        <div className={style.cuadrado}></div>
      </div>
      <h3 className="text-center lg:text-6xl sm:text-4xl text-3xl  font-bold bg-clip-text text-transparent bg-gradient-to-bl from-slate-500 to-slate-800  m-4 dark:from-cyan-400 dark:to-cyan-600">
        {text.tecnologies}
      </h3>
      <div className="p-1 ">
        <ul
          className={` ${style.tecnologi} grid lg:block grid-cols-2 w
        -full sm:grid-cols-4  transition-all
        text-center md:w-[700px] lg:w-[300px] h-auto   sm:text-lg text-xs sm:p-2  p-1   rounded `}
        >
          <li className={`${style.a} dark:shadow-xl dark:shadow-slate-700`}>
            <Html /> HTML
          </li>
          <li className={`${style.b} dark:shadow-xl dark:shadow-slate-700`}>
            <Css3 />
            CSS:
          </li>
          <li className={`${style.c} dark:shadow-xl dark:shadow-slate-700`}>
            <Javascript />
            Javsascript
          </li>
          <li className={`${style.d} dark:shadow-xl dark:shadow-slate-700`}>
            <Python /> Python
          </li>

          <li className={`${style.d} dark:shadow-xl dark:shadow-slate-700`}>
            {" "}
            <Reactjs /> React
          </li>
          <li className={`${style.e} dark:shadow-xl dark:shadow-slate-700`}>
            {" "}
            <Reactjs /> React Native
          </li>
          <li className={`${style.f} dark:shadow-xl dark:shadow-slate-700`}>
            Express
          </li>
          <li className={`${style.g} dark:shadow-xl dark:shadow-slate-700`}>
            <Django />
            Django
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tecnologies;
