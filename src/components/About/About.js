import React, { useContext } from 'react'
import AbuotDescrip from './AbuotDescrip'
import TranslationContext from '../../TraslationContext'
import linked from '../../images/perfil.png'
import Tecnologies from './Tecnologis'

function About() {
  const { text } = useContext(TranslationContext)

  return (
    <>
      <section
        id="about"
        className="relative max-w-[1500px] m-auto h-auto min-h-[100vh] flex flex-col xl:flex-row items-center lg:justify-around dark:bg-myBgDark background_black shadow-lg dark:shadow-zinc-400 pt-[16vh] mt-[-10vh] md:mt-0 bg-zinc-200 md:pt-[13vh]"
      >
        <>
          <h3 className="absolute top-[10vh] lg:text-6xl sm:text-4xl text-3xl  font-bold bg-clip-text text-transparent bg-gradient-to-bl from-cyan-500 to-[#f09a9a] dark:text-myRose/60 mb-10">
            {text.header.about}
          </h3>

          <div className="mt-12 lg:mt-0 center h-auto md:w-[92%] xl:w-[65%] flex flex-col justify-center items-center xl:self-start xl:mt-20 ">
            <div className="flex flex-col md:flex-row items-center  ">
              <div
                className="w-[350px]  m-10 rounded-t-full rounded-b-md shadow-lg  shadow-myBgBlue bg-gradient-to-t from-[#06b6d460]
                  to-zinc-200 bg-opacity-90 dark:from-cyan-900 dark:to-myBgDark dark:opacity-90"
              >
                <img src={linked} alt="perfil" className="pl-2 opacity-100" />
              </div>

              <p
                className="mt-3 min-w-[350px] lg:w-[50%] lg:ml-4 w-[60%] text-center mb-8 dark:text-[#eaf1eb] md:text-xl  "
                style={{ lineHeight: '2.3rem' }}
              >
                {text.about.about}
              </p>
            </div>

            <AbuotDescrip />
          </div>
          <Tecnologies />
        </>
      </section>
    </>
  )
}

export default About
