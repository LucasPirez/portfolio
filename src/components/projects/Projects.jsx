import { useState, useContext, useRef } from 'react';
import speedyGame from '../../images/typing-game/speedy-room.png';
import {
  tweeter1 as twitter,
  cryptoMain,
  AddStudent,
} from '../../images';
import ModalChildren from './ModalChildren';
import { ModalPortal } from './ModalPortal';
import ProjectsTecnologies from './ProjectsTecnologies';
import ButtonRead from './ButtonRead';
import ContainerProjects from './ContainerProjects';
import TranslationContext from '../../TraslationContext';
import Title from '../util/Title';

export default function Projects() {
  const { text } = useContext(TranslationContext);
  const [select, setSelect] = useState(1);
  const [close, setClose] = useState(false);
  const [modalSelect, setModalSelect] = useState(null);
  const ref = useRef();

  const outside = (e) => {
    setClose(false);
    e && e.stopPropagation();
  };

  const onSelect = (i) => {
    setSelect(i);
  };
  const handleClick = (strModal) => {
    setModalSelect(strModal);
    setClose(true);
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
      <div className="flex justify-center relative h-[75vh] overflow-y-scroll   sm:overflow-y-auto sm:h-auto md:w-[90vw] w-[95vw] scroll_style">
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 items-center w-full grid-flow-row relative flex-wrap container max-w-[1180px] gap-[1rem]"
        >
          <ContainerProjects
            select={select}
            number={[3]}
            imgSrc={speedyGame}
            title=".NET/React"
            links={text.modal['typingGame']}
          />
          <ContainerProjects
            select={select}
            number={[3]}
            imgSrc={cryptoMain}
            title=".Net/React"
            links={text.modal['cryptoTracker']}
          />
          <ContainerProjects
            select={select}
            number={[2]}
            imgSrc={AddStudent}
            title="Institute App"
            links={text.modal['institute']}
          />

          <ContainerProjects
            select={select}
            number={[]}
            imgSrc={twitter}
            title="Reactjs"
            links={text.modal['tweeter']}
          />
        </div>
      </div>
    </div>
  );
}
