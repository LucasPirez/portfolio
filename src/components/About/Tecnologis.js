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
    <div className="h-full animate-[startRight_1.2s_ease-out] ">
      <div className={style.cuadrado1}>
        <div className={style.cuadrado}></div>
      </div>
      <h3 className="text-center lg:text-6xl sm:text-4xl text-3xl  font-bold bg-clip-text text-transparent bg-gradient-to-bl from-slate-500 to-slate-800  m-4">
        {text.tecnologies}
      </h3>
      <div className="p-1 ">
        <ul
          className={` ${style.tecnologi} grid lg:block grid-cols-2 w
        -full sm:grid-cols-4  transition-all
        text-center md:w-[700px] lg:w-[300px] h-auto   sm:text-lg text-xs sm:p-2  p-1   rounded `}
        >
          <li className={style.a}>
            <Html /> HTML
          </li>
          <li className={style.b}>
            <Css3 />
            CSS:
          </li>
          <li className={style.c}>
            <Javascript />
            Javsascript
          </li>
          <li className={style.d}>
            <Python /> Python
          </li>

          <li className={style.d}>
            {" "}
            <Reactjs /> React
          </li>
          <li className={style.e}>
            {" "}
            <Reactjs /> React Native
          </li>
          <li className={style.f}>Express</li>
          <li className={style.g}>
            <Django />
            Django
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tecnologies;
