import React, { useContext } from 'react'
import TranslationContext from '../../TraslationContext'
function ButtonRead({ handleClick }) {
  const { text } = useContext(TranslationContext)

  return (
    <button
      className="md:w-40 font-semibold  md:py-2 md:px-4 
      md:text-md py-1 w-32 text-base rounded group-hover:bg-gradient-to-b to-cyan-500   from-cyan-800 group-hover:-translate-y-16 hover:scale-105 duration-300 z-20 group-hover:text-white transition-all "
      onClick={handleClick}
    >
      {text.buttonProjects}
    </button>
  )
}

export default ButtonRead

//
