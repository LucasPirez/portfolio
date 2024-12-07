import { useContext } from 'react';
import style from './tecnologies.module.css';
import TranslationContext from '../../TraslationContext';
import TechStack from '../projects/card/TechStack';
import { primaryTecnologies } from '../../tecnologies-per-project';

const Tecnologies = () => {
  const { text } = useContext(TranslationContext);

  return (
    <div
      className="h-full animate-[startRight_1.2s_ease-out] flex-1 bg-transparent border-[1px] border-myDarkPurple/40 rounded-lg px-5 py-3  
      dark:shadow-[inset_0_0px_60px_0px_rgba(0,0,0)] shadow-[inset_0_0px_20px_0px_rgba(0,0,0,0.3)]"
      title="tecnologies"
    >
      <div className={style.cuadrado1}>
        <div className={style.cuadrado}></div>
      </div>
      <h3 className="text-right lg:text-4xl sm:text-2xl text-xl   font-bold bg-clip-text dark:text-gray-300 text-gray-50 custom-text mb-3 ">
        {text.tecnologies}
      </h3>
      <ul
        className={` ${style.tecnologi} grid grid-cols-2 transition-all  place-self-end h-auto w-[280px] gap-2 opacity-80 `}
      >
        {primaryTecnologies.map((tecnology) => (
          <>
            <li>
              <TechStack
                Component={tecnology.icon}
                tecnologie={tecnology.tecnologie}
                color={tecnology.color}
                colorIcon={tecnology.colorIcon}
                className="w-32 justify-center gap-3 px-1 mt-7 hover:scale-105 bg-myBgDark"
              />
            </li>
            {/* <li
              key={tecnology.text + Math.random()}
              className={`${tecnology.style} flex items-center pl-[4%]   dark:bg-myDarkLightBlue/60 bg-gray-200 border-[1px] border-myLightBlue/30 text-myBgDarkSecondary dark:text-gray-100 lg:text-lg`}
            >
              <span className="scale-75 lg:scale-100 ">
                {tecnology.component}
              </span>
              <span className="w-full">{tecnology.text}</span>
            </li> */}
          </>
        ))}
      </ul>
    </div>
  );
};

export default Tecnologies;
