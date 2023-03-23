import React, { useContext, lazy, Suspense } from 'react'
import TranslationContext from '../../TraslationContext'
import ArrowDown from '../../icons/ArrowDown'
import Theme from '../About/Theme'
import GmailIcon from '../../icons/GmailIcon'

const Animation = lazy(() => import('./Animation'))

function Home() {
  const { text, handleLanguaje, currentPage, width } =
    useContext(TranslationContext)

  return (
    <>
      <div className="absolute w-full h-[100vh] bg-slate-800 dark:bg-zinc-900 -z-20"></div>
      <section
        id="home"
        className=" flex h-[100vh]   w-full items-center justify-center overflow-x-hidden bg-transparent"
      >
        <Suspense fallback="">
          {width > 700 && <Animation visible={currentPage} />}
        </Suspense>
        <div className="fixed top-[0.50rem]  left-4 m-4 z-20 md:flex">
          <select
            className="text-xs md:text-base bg-zinc-900 rounded-2xl px-2 border-2 border-cyan-700 cursor-pointer p-1  hover:border-2  hover:scale-105 transition-all duration-300 hover:border-cyan-700 text-slate-200  mr-2 mb-2 dark:hover:border-cyan-700 dark:text-slate-200 h-8"
            onChange={(e) => handleLanguaje(e.target.value)}
          >
            <option value="en">English</option>
            <option value="es">Espanol</option>
          </select>
          <Theme />
        </div>
        <div className=" text-slate-100 dark:text-slate-300  text-lg sm:text-3xl md:text-5xl text-center  font-mono z-10 ">
          <h3 className=" text-slate-300 dark:text-slate-300">
            {text.presentation.title}
            <strong className="text-rose-600">Lucas Pirez.</strong>
          </h3>
          <h4>{text.presentation.subTitle}</h4>
          <div className="flex justify-center m-auto mt-4 lg:mt-8 relative w-[300px]  ">
            <a
              href="#about"
              className={`group relative inline-flex
              border-[2px] border-cyan-700 p-2 items-center  text-sm md:text-lg  lg:text-xl lg:p-3  rounded-md hover:bg-cyan-600 bg-slate-800  hover:border-cyan-800 transition  ease-out duration-300 dark:bg-zinc-800 dark:border-cyan-600 dark:hover:bg-cyan-800`}
            >
              {text.presentation.button}
              <span className="group-hover:animate-bounce scale-90 sm:scale-110">
                <ArrowDown />
              </span>
            </a>
            <a
              href="mailto:lucaspirez42@gmail.com"
              className="group flex items-center rounded-md px-1  scale-[0.85] md:scale-[.95] lg:scale-110 hover:scale-105 md:hover:scale-110 lg:hover:scale-125 transition duration-500"
              title="Send Email"
            >
              <span>
                <GmailIcon className="scale-75" />
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
