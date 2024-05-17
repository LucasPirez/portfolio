import React, { useContext } from 'react'
import style from './AboutDescrip.module.css'
import TranslationContext from '../../TraslationContext'

function AbuotDescrip() {
  const { text } = useContext(TranslationContext)

  const styleContent = {
    contenedor: ` ${style.des} dark:text-slate-200  shadow-zinc-500  dark:hover:shadow-myDarkLightBlue/50 shadow-md hover:shadow-myLightCyan/50 dark:bg-myBgDarkSecondary bg-[#fefefe] `,
    title: `${style.titleDescription} dark:text-purple/90 text-myLightPurple`,
    hr: `${style.limit}  opacity-80`,
    text: ''
  }

  const arrTexts = [
    [text.about.description1.title, text.about.description1.description],
    [text.about.description2.title, text.about.description2.description],
    [text.about.description3.title, text.about.description3.description],
    [text.about.description4.title, text.about.description4.description]
  ]

  return (
    <div className={style.containerDes}>
      {arrTexts.map(([title, descripcion], index) => (
        <div
          key={title}
          className={
            styleContent.contenedor + ' ' + style['description' + (index + 1)]
          }
        >
          <h2 className={styleContent.title}>{title}</h2>
          <hr className={styleContent.hr} />
          <p className="text-center">{descripcion}</p>
        </div>
      ))}
    </div>
  )
}

export default AbuotDescrip
