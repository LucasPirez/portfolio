import { useContext, useRef } from 'react';
import speedyGame from '../../images/typing-game/speedy-room.png';
import {
  tweeter1 as twitter,
  cryptoMain,
  AddStudent,
} from '../../images';
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
  const ref = useRef();

  return (
    <div
      id="portfolio"
      className="relative flex flex-col m-auto  custom-container items-center  pt-[100px] z-10 -mt-[10vh] md:mt-0 "
    >
      <Title text={text.projects} />
      <div
        ref={ref}
        className="w-full grid grid-cols-1 sm:grid-cols-2 justify-items-center flex-wrap gap-4 lg:gap-7 lg:gap-x-11 py-3 h-auto "
      >
        <ContainerProjects
          imgSrc={speedyGame}
          text={text.modal['typingGame']}
          tecnologies={tecnologiesTyping}
        />

        <ContainerProjects
          imgSrc={AddStudent}
          text={text.modal['institute']}
          tecnologies={tecnologiesAppInstitute}
        />

        <ContainerProjects
          imgSrc={twitter}
          text={text.modal['tweeter']}
          tecnologies={grinpoolTecnologies}
        />
        <ContainerProjects
          imgSrc={cryptoMain}
          text={text.modal['cryptoTracker']}
          tecnologies={tecnlogoiesCryptoTracker}
        />
      </div>
    </div>
  );
}
