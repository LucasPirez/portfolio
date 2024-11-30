import { useState, useContext, useRef } from 'react';
import speedyGame from '../../images/typing-game/speedy-room.png';
import {
  tweeter1 as twitter,
  cryptoMain,
  AddStudent,
} from '../../images';
import ProjectsTecnologies from './ProjectsTecnologies';
import ContainerProjects from './ContainerProjects';
import TranslationContext from '../../TraslationContext';
import Title from '../util/Title';
import {
  tecnologiesTyping,
  tecnlogoiesCryptoTracker,
  tecnologiesAppInstitute,
  grinpoolTecnologies,
} from '../../tecnologies-per-project';

export default function Projects() {
  const { text } = useContext(TranslationContext);
  const [select, setSelect] = useState(1);
  const ref = useRef();

  const onSelect = (i) => {
    setSelect(i);
  };

  return (
    <div
      id="portfolio"
      className="relative flex flex-col  max-w-[1500px] m-auto min-h-[100vh] items-center border-t-2 border-t-myDarkLightBlue/70 background_black  pt-[10vh] dark:bg-myBgDark   bg-myBgLight shadow-md shadow-zinc-400 z-10 -mt-[10vh] md:mt-0"
    >
      <Title text={text.projects} />
      <ProjectsTecnologies
        onSelect={onSelect}
        select={select}
        text={text}
      />
      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 justify-items-center flex-wrap container max-w-[1180px] gap-4 py-3 h-auto md:w-[90vw] w-[95vw] px-4 "
      >
        <ContainerProjects
          select={select}
          number={[3]}
          imgSrc={speedyGame}
          title="Typing Game"
          links={text.modal['typingGame']}
          description={text.modal['typingGame'].description}
          tecnologies={tecnologiesTyping}
        />
        <ContainerProjects
          select={select}
          number={[3]}
          imgSrc={cryptoMain}
          title="Crypto Tracker"
          links={text.modal['cryptoTracker']}
          description={text.modal['cryptoTracker'].description}
          tecnologies={tecnlogoiesCryptoTracker}
        />
        <ContainerProjects
          select={select}
          number={[2]}
          imgSrc={AddStudent}
          title="Institute App"
          links={text.modal['institute']}
          description={text.modal['institute'].description}
          tecnologies={tecnologiesAppInstitute}
        />

        <ContainerProjects
          select={select}
          number={[]}
          imgSrc={twitter}
          title="Twitter clon"
          links={text.modal['tweeter']}
          description={text.modal['tweeter'].description}
          tecnologies={grinpoolTecnologies}
        />
      </div>
    </div>
  );
}
