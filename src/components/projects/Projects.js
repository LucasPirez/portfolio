import { useState, useContext, useRef } from 'react'
import cap from '../../images/captura-calculator.jpeg'
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
  const { text } = useContext(TranslationContext)
  const [select, setSelect] = useState(1)
  const [close, setClose] = useState(false)
  const [modalSelect, setmodalSelect] = useState(null)
  const ref = useRef()

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
      className="relative flex flex-col  max-w-[1500px] m-auto min-h-[100vh] items-center border-t-2 border-t-cyan-700  pt-[10vh]  background_black bg-zinc-200 shadow-md shadow-zinc-400 z-10 -mt-[10vh] md:mt-0"
    >
      <>
        <h3 className="lg:text-6xl sm:text-4xl text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-bl from-cyan-500 to-cyan-800 mb-10 dark:from-cyan-300 dark:text-myRose/60">
          {text.projects}
        </h3>
        <ProjectsTecnologies onSelect={onSelect} select={select} text={text} />
        <div className="flex flex-col items-center relative h-[75vh] overflow-y-scroll   sm:overflow-y-auto sm:h-auto md:w-[90vw] w-[95vw] scroll_style">
          <div
            ref={ref}
            className="flex w-full relative  justify-center flex-wrap container max-w-[1180px] gap-[0.5vw] "
          >
            <ContainerProjects
              select={select}
              number={[1, 2]}
              imgSrc={tw}
              title="Reactjs"
              links={text.modal['tweeter']}
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
              number={[1, 2, 4]}
              imgSrc={cryptoMain}
              title="Reactjs/.Net"
              links={text.modal['cryptoTracker']}
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
              links={text.modal['mobileCryptoTracker']}
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
              links={text.modal['calculator']}
            >
              <ButtonRead
                handleClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  handleClick('calculator')
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
    </div>
  )
}
