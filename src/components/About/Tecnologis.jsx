import { useContext } from 'react';
import style from './tecnologies.module.css';
import {
  Net,
  Css3,
  Html,
  Reactjs,
  TypeScript,
  Javascript,
  CSharp,
  SQL,
} from '../../icons/IconsTecnologies';
import TranslationContext from '../../TraslationContext';

const Tecnologies = () => {
  const { text } = useContext(TranslationContext);

  const arrCompontents = [
    { style: style.g, component: <Net />, text: '.NET' },
    { style: style.e, component: <CSharp />, text: 'C#' },
    { style: style.f, component: <Reactjs />, text: 'React' },
    { style: style.d, component: <TypeScript />, text: 'TypeScript' },
    { style: style.c, component: <Javascript />, text: 'JavaScript' },
    { style: style.f, component: <SQL />, text: 'SQL' },
    { style: style.a, component: <Html />, text: 'HTML' },
    { style: style.b, component: <Css3 />, text: 'CSS:' },
  ];

  return (
    <div
      className="h-full animate-[startRight_1.2s_ease-out]"
      title="tecnologies"
    >
      <div className={style.cuadrado1}>
        <div className={style.cuadrado}></div>
      </div>
      <h3 className="text-center lg:text-6xl sm:text-4xl text-3xl  font-bold bg-clip-text  m-4 dark:text-purple/90  text-myLightPurple/60 custom-text">
        {text.tecnologies}
      </h3>
      <div className="p-1 pb-5 md:pb-3">
        <ul
          className={` ${style.tecnologi} grid xl:block grid-cols-2 sm:grid-cols-4  transition-all
        text-center lg:w-[700px] xl:w-[300px] h-auto   sm:text-lg text-xs sm:p-2  p-1   rounded `}
        >
          {arrCompontents.map((tecnology) => (
            <li
              key={tecnology.text + Math.random()}
              className={`${tecnology.style} flex items-center pl-[4%]   dark:bg-myDarkLightBlue/60 bg-myBgLightSecondary border-[1px] border-myLightBlue/30 text-myBgDarkSecondary dark:text-gray-100 lg:text-xl `}
            >
              <span className="scale-75 lg:scale-100 ">
                {tecnology.component}
              </span>
              <span className="w-full">{tecnology.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tecnologies;
