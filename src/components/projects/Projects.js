import { useState, useEffect, useContext } from 'react'
import cap from '../../images/captura-calculator.jpeg'
import imgGym from '../../images/img-django.webp'
import tw from '../../images/tweeter1.webp'
import cryptoMain from '../../images/cripto/img-crypto-main.webp'
import mobileCrypto from '../../images/cripto/mobile-table.webp'
import ModalChildren from './ModalChildren'
import { ModalPortal } from './ModalPortal'
import { useInsertionEffect } from '../../hooks/useIntersection'
import ProjectsTecnologies from './ProjectsTecnologies'
import ButtonRead from './ButtonRead'
import ContainerProjects from './ContainerProjects'
import useWidth from '../../hooks/useWidth'
import TranslationContext from '../../TraslationContext'

export default function Projects({ setNavName }) {
  const { text } = useContext(TranslationContext)
  const { width } = useWidth()
  const [select, setSelect] = useState(1)
  const [close, setClose] = useState(false)
  const [modalSelect, setmodalSelect] = useState(null)
  const [containerRef, visible, animationStart, nameCurrent] =
    useInsertionEffect({
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    })

  useEffect(() => {
    visible && setNavName(nameCurrent)
  }, [visible])

  const inside = (e) => {
    setClose(true)

    e.stopPropagation()
  }

  const outside = (e) => {
    setClose(false)
    e.stopPropagation()
  }

  return (
    <div
      id="portfolio"
      title="projects"
      className="relative flex flex-col  max-w-[1500px] m-auto h-[100vh] items-center border-t-2 border-t-cyan-700  pt-[10vh]  background_black bg-zinc-200 shadow-lg shadow-zinc-400 pb-36 box-content -mb-36"
      ref={containerRef}
    >
      {(animationStart || width < 600) && (
        <>
          <h3 className="lg:text-6xl sm:text-4xl text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-bl from-cyan-500 to-cyan-800 mb-10 animate-[startLeft_1.2s_ease-out] dark:from-cyan-300 dark:to-[#a09a9a]">
            {text.projects}
          </h3>
          <ProjectsTecnologies
            setSelect={setSelect}
            select={select}
            text={text}
          />
          <div
            onClick={outside}
            className="flex flex-col items-center relative h-[75vh] overflow-y-scroll   sm:overflow-y-auto sm:h-auto lg:w-[85vw] md:w-[80vw] w-[95vw] animate-[opacity_2s_linear]"
          >
            <div className="flex w-full relative  justify-center flex-wrap container max-w-[1180px] gap-[1.5vw]">
              <ContainerProjects
                select={select}
                number={[1, 2]}
                imgSrc={tw}
                title="Reactjs"
              >
                <ButtonRead
                  setmodalSelect={setmodalSelect}
                  inside={inside}
                  strModal="tweeter"
                />
              </ContainerProjects>
              <ContainerProjects
                select={select}
                number={[1, 2]}
                imgSrc={cryptoMain}
                title="Reactjs"
              >
                <ButtonRead
                  setmodalSelect={setmodalSelect}
                  inside={inside}
                  strModal="cryptoTracker"
                />
              </ContainerProjects>
              <ContainerProjects
                select={select}
                number={[1, 3]}
                imgSrc={mobileCrypto}
                title="React Native"
              >
                <ButtonRead
                  setmodalSelect={setmodalSelect}
                  inside={inside}
                  strModal="mobileCryptoTracker"
                />
              </ContainerProjects>
              <ContainerProjects
                select={select}
                number={[1, 3]}
                imgSrc={cap}
                title="React Native"
              >
                <ButtonRead
                  setmodalSelect={setmodalSelect}
                  inside={inside}
                  strModal="calculator"
                />
              </ContainerProjects>
              <ContainerProjects
                select={select}
                number={[1, 4]}
                imgSrc={imgGym}
                title="Django"
              >
                <ButtonRead
                  setmodalSelect={setmodalSelect}
                  inside={inside}
                  strModal="gymApp"
                />
              </ContainerProjects>
            </div>

            {close && (
              <ModalPortal>
                <ModalChildren
                  modalSelect={modalSelect}
                  inside={inside}
                  outside={outside}
                />
              </ModalPortal>
            )}
          </div>
        </>
      )}
    </div>
  )
}
