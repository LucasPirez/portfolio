import { useState, useContext } from 'react'
import cap from '../../images/captura-calculator.jpeg'
import imgGym from '../../images/img-django.webp'
import tw from '../../images/tweeter1.webp'
import cryptoMain from '../../images/cripto/img-crypto-main.webp'
import mobileCrypto from '../../images/cripto/mobile-table.webp'
import ModalChildren from './ModalChildren'
import { ModalPortal } from './ModalPortal'
import ProjectsTecnologies from './ProjectsTecnologies'
import ButtonRead from './ButtonRead'
import ContainerProjects from './ContainerProjects'
import TranslationContext from '../../TraslationContext'

export default function Projects() {
  const { text, animationStart, width } = useContext(TranslationContext)
  const [select, setSelect] = useState(1)
  const [close, setClose] = useState(false)
  const [modalSelect, setmodalSelect] = useState(null)

  const outside = (e) => {
    setClose(false)
    e && e.stopPropagation()
  }

  const onSelect = (i) => {
    setSelect(i)
  }
  const handleClick = (strModal) => {
    setmodalSelect(strModal)
    setClose(true)
  }

  return (
    <div
      id="portfolio"
      className="relative flex flex-col  max-w-[1500px] m-auto h-[100vh] items-center border-t-2 border-t-cyan-700  pt-[10vh]  background_black bg-zinc-200 shadow-lg shadow-zinc-400 pb-36 box-content -mb-36 "
    >
      {(animationStart.projects === true || width < 600) && (
        <>
          <h3 className="lg:text-6xl sm:text-4xl text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-bl from-cyan-500 to-cyan-800 mb-10 animate-[startLeft_1.2s_ease-out] dark:from-cyan-300 dark:to-[#a09a9a]">
            {text.projects}
          </h3>
          <ProjectsTecnologies
            onSelect={onSelect}
            select={select}
            text={text}
          />
          <div className="flex flex-col items-center relative h-[75vh] overflow-y-scroll   sm:overflow-y-auto sm:h-auto lg:w-[85vw] md:w-[80vw] w-[95vw] animate-[opacity_2s_linear] scroll-modifier ">
            <div className="flex w-full relative  justify-center flex-wrap container max-w-[1180px] gap-[1.5vw]">
              <ContainerProjects
                select={select}
                number={[1, 2]}
                imgSrc={tw}
                title="Reactjs"
              >
                <ButtonRead
                  handleClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    handleClick('tweeter')
                  }}
                />
              </ContainerProjects>
              <ContainerProjects
                select={select}
                number={[1, 2]}
                imgSrc={cryptoMain}
                title="Reactjs"
              >
                <ButtonRead
                  handleClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    handleClick('cryptoTracker')
                  }}
                />
              </ContainerProjects>
              <ContainerProjects
                select={select}
                number={[1, 3]}
                imgSrc={mobileCrypto}
                title="React Native"
              >
                <ButtonRead
                  handleClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    handleClick('mobileCryptoTracker')
                  }}
                />
              </ContainerProjects>
              <ContainerProjects
                select={select}
                number={[1, 3]}
                imgSrc={cap}
                title="React Native"
              >
                <ButtonRead
                  handleClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    handleClick('calculator')
                  }}
                />
              </ContainerProjects>
              <ContainerProjects
                select={select}
                number={[1, 4]}
                imgSrc={imgGym}
                title="Hotel App"
              >
                <ButtonRead
                  handleClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    handleClick('hotel')
                  }}
                />
              </ContainerProjects>
            </div>

            {close && (
              <ModalPortal>
                <ModalChildren modalSelect={modalSelect} outside={outside} />
              </ModalPortal>
            )}
          </div>
        </>
      )}
    </div>
  )
}
