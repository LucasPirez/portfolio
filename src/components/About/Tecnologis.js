import { useContext } from 'react'
import style from './tecnologies.module.css'
import {
  Css3,
  Html,
  Reactjs,
  TypeScript,
  Javascript,
  Java
} from '../../icons/IconsTecnologies'
import TranslationContext from '../../TraslationContext'

const Tecnologies = () => {
  const { text, currentPage } = useContext(TranslationContext)

  return (
    <div className="h-full animate-[startRight_1.2s_ease-out]">
      <div className={style.cuadrado1}>
        <div className={style.cuadrado}></div>
      </div>
      <h3 className="text-center lg:text-6xl sm:text-4xl text-3xl  font-bold bg-clip-text text-transparent bg-gradient-to-bl from-slate-500 to-slate-800  m-4 dark:from-cyan-400 dark:to-cyan-600">
        {text.tecnologies}
      </h3>
      <div className="p-1">
        <ul
          className={` ${style.tecnologi} grid xl:block grid-cols-2 sm:grid-cols-4  transition-all
        text-center lg:w-[700px] xl:w-[300px] h-auto   sm:text-lg text-xs sm:p-2  p-1   rounded `}
        >
          <li
            className={`${style.a} ${
              currentPage !== 'about' ? style.pausarAnimacion : ''
            }  dark:shadow-xl dark:shadow-slate-700 `}
          >
            <Html /> HTML
          </li>
          <li
            className={`${style.b} ${
              currentPage !== 'about' ? style.pausarAnimacion : ''
            } dark:shadow-xl dark:shadow-slate-700`}
          >
            <Css3 />
            CSS:
          </li>
          <li
            className={`${style.c} ${
              currentPage !== 'about' ? style.pausarAnimacion : ''
            } dark:shadow-xl dark:shadow-slate-700`}
          >
            <Javascript />
            Javsascript
          </li>
          <li
            className={`${style.d} ${
              currentPage !== 'about' ? style.pausarAnimacion : ''
            } dark:shadow-xl dark:shadow-slate-700`}
          >
            <TypeScript /> TypeScript
          </li>
          <li
            className={`${style.d} ${
              currentPage !== 'about' ? style.pausarAnimacion : ''
            } dark:shadow-xl dark:shadow-slate-700`}
          >
            <Java /> Java
          </li>

          <li
            className={`${style.e} ${
              currentPage !== 'about' ? style.pausarAnimacion : ''
            } dark:shadow-xl dark:shadow-slate-700`}
          >
            <Reactjs /> React
          </li>
          <li
            className={`${style.f} ${
              currentPage !== 'about' ? style.pausarAnimacion : ''
            } dark:shadow-xl dark:shadow-slate-700`}
          >
            <Reactjs /> React Native
          </li>
          <li
            className={`${style.g} ${
              currentPage !== 'about' ? style.pausarAnimacion : ''
            } dark:shadow-xl dark:shadow-slate-700`}
          >
            Express
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Tecnologies
