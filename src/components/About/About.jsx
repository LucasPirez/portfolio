import React, { useContext } from 'react';
import AbuotDescrip from './AbuotDescrip';
import TranslationContext from '../../TraslationContext';
import linked from '../../images/perfil.png';
import Tecnologies from './Tecnologis';
import Title from '../util/Title';

function About() {
  const { text } = useContext(TranslationContext);

  return (
    <>
      <section
        id="about"
        className="relative max-w-[1500px] m-auto h-auto min-h-[100vh] lg:min-h-[130vh] xl:min-h-[100vh] flex flex-col xl:flex-row items-center lg:justify-around background_black bg-myBgLight  dark:bg-myBgDark background_black shadow-lg dark:shadow-zinc-400  md:mt-0 bg-myb md:pt-[10vh] pb-36 box-content -mb-36 "
      >
        <>
          <Title
            text={text.header.about}
            className={'absolute md:top-[100px] top-[30px] '}
          />
          <div className="mt-12 lg:mt-0 center h-auto md:w-[92%] xl:w-[65%] flex flex-col justify-center items-center xl:self-start xl:mt-20 ">
            <div className="flex flex-col lg:flex-row items-center  ">
              <div
                className=" w-[280px] h-[280px] m-10 lg:mt-0  overflow-hidden flex justify-center z-10 shadow-lg  shadow-myBgBlue/50 bg-gradient-to-t 
                bg-opacity-90 from-cyan-900/30 to-myBgDark/30  dark:from-cyan-900/70 dark:to-myBgDark/70"
                style={{
                  borderRadius: '65% 35% 65% 35% / 28% 69% 31% 72%',
                }}
              >
                <img
                  src={linked}
                  alt="perfil"
                  className=" opacity-100 mt-2 -mb-2  object-cover"
                />
              </div>

              <p
                className="mt-3 min-w-[350px] lg:w-[50%] lg:ml-4 w-[60%] text-center mb-8 dark:text-[#eaf1eb] md:text-xl  "
                style={{ lineHeight: '2.3rem' }}
              >
                {text.about.about()}
              </p>
            </div>

            <AbuotDescrip />
          </div>
          <Tecnologies />
        </>
      </section>
    </>
  );
}

export default About;
