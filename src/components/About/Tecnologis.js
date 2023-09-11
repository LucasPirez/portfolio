import { useContext } from 'react'
import style from './tecnologies.module.css'
import Express, {
  Css3,
  Html,
  Reactjs,
  TypeScript,
  Javascript,
  Java
} from '../../icons/IconsTecnologies'
import TranslationContext from '../../TraslationContext'

const Tecnologies = () => {
  const { text } = useContext(TranslationContext)

  const arrCompontents = [
    { style: style.a, component: <Html />, text: 'HTML' },
    { style: style.b, component: <Css3 />, text: 'CSS:' },
    { style: style.c, component: <Javascript />, text: 'JavaScript' },
    { style: style.d, component: <TypeScript />, text: 'TypeScript' },
    { style: style.e, component: <Java />, text: 'Java' },
    { style: style.f, component: <Reactjs />, text: 'React' },
    { style: style.f, component: <Reactjs />, text: 'React Native' },
    { style: style.g, component: <Express />, text: 'Express' }
  ]

  return (
    <div
      className="h-full animate-[startRight_1.2s_ease-out]"
      title="tecnologies"
    >
      <div className={style.cuadrado1}>
        <div className={style.cuadrado}></div>
      </div>
      <h3 className="text-center lg:text-6xl sm:text-4xl text-3xl  font-bold bg-clip-text text-transparent  m-4 dark:text-myCyanDark/80 text-myBgBlue">
        {text.tecnologies}
      </h3>
      <div className="p-1">
        <ul
          className={` ${style.tecnologi} grid xl:block grid-cols-2 sm:grid-cols-4  transition-all
        text-center lg:w-[700px] xl:w-[300px] h-auto   sm:text-lg text-xs sm:p-2  p-1   rounded `}
        >
          {arrCompontents.map((tecnology) => (
            <li
              key={tecnology.text + Math.random()}
              className={`${tecnology.style} flex items-center pl-[4%]  dark:shadow-xl dark:shadow-myBgDark/60 dark:bg-[#0099ff70] border-2 dark:border-[#0099ff50] border-dashed border-myBgDark/70 text-myRose dark:text-gray-200 lg:text-xl jus `}
            >
              <span className="scale-75 lg:scale-100">
                {tecnology.component}
              </span>
              <span className="w-full">{tecnology.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Tecnologies
