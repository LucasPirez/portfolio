import { useState, useContext, useRef } from 'react';
import speedyGame from '../../images/typing-game/speedy-room.png';
import twitter from '../../images/tweeter1.webp';
import cryptoMain from '../../images/cripto/img-crypto-main.webp';
import mobileCrypto from '../../images/cripto/mobile-table.webp';
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
      <>
        <Title text={text.projects} />
        <ProjectsTecnologies
          onSelect={onSelect}
          select={select}
          text={text}
        />
        <div className="flex flex-col items-center relative h-[75vh] overflow-y-scroll   sm:overflow-y-auto sm:h-auto md:w-[90vw] w-[95vw] scroll_style">
          <div
            ref={ref}
            className="flex w-full relative  justify-center flex-wrap container max-w-[1180px] gap-[0.5vw] "
          >
            <ContainerProjects
              select={select}
              number={[2]}
              imgSrc={twitter}
              title="Reactjs"
              links={text.modal['tweeter']}
            >
              <ButtonRead
                handleClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleClick('tweeter');
                }}
              />
            </ContainerProjects>
            <ContainerProjects
              select={select}
              number={[2, 4]}
              imgSrc={cryptoMain}
              title="Reactjs/.Net"
              links={text.modal['cryptoTracker']}
            >
              <ButtonRead
                handleClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleClick('cryptoTracker');
                }}
              />
            </ContainerProjects>
            <ContainerProjects
              select={select}
              number={[3]}
              imgSrc={mobileCrypto}
              title="React Native"
              links={text.modal['mobileCryptoTracker']}
            >
              <ButtonRead
                handleClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleClick('mobileCryptoTracker');
                }}
              />
            </ContainerProjects>
            <ContainerProjects
              select={select}
              number={[2, 4]}
              imgSrc={speedyGame}
              title=".NET/Reactjs"
              links={text.modal['typingGame']}
            >
              <ButtonRead
                handleClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleClick('typingGame');
                }}
              />
            </ContainerProjects>
          </div>

          {close && (
            <ModalPortal>
              <ModalChildren
                modalSelect={modalSelect}
                outside={outside}
              />
            </ModalPortal>
          )}
        </div>
      </>
    </div>
  );
}
