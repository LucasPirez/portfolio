import React, { useContext } from 'react';
import TranslationContext from '../../TraslationContext';
import Tecnologies from './Tecnologis';
import Title from '../util/Title';

function About() {
  const { text } = useContext(TranslationContext);

  return (
    <>
      <section
        id="about"
        className="text-center min-h-[100vh] shadow-lg  md:mt-0 md:pt-[10vh] pb-36 -mb-36 custom-container"
      >
        <>
          <div className=" h-auto flex items-start  justify-between xl:self-start gap-20 ">
            <div
              className=" flex-2  dark:text-[#eaf1eb] bg-myBgDark border-myDarkPurple/40 border-2 p-7 rounded-lg  md:text-xl text-left text-gray-200 shadow-[inset_0_0px_60px_0px_rgba(0,0,0,0.7)]"
              style={{ lineHeight: '2.3rem' }}
            >
              <Title text={text.header.about} />
              {text.about.about()}
            </div>
            <Tecnologies />
          </div>
        </>
      </section>
    </>
  );
}

export default About;
