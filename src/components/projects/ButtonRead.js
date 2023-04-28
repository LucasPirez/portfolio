import React, { useContext } from 'react'
import TranslationContext from '../../TraslationContext'
function ButtonRead({ handleClick }) {
  const { text } = useContext(TranslationContext)

  return (
    <div className="hover:bg-slate-50 w-fit h-fit group-hover:-translate-y-16 hover:scale-105  z-20 p-1 rounded transition">
      <button
        className="md:w-40 font-semibold  md:py-2 md:px-4 
      md:text-md py-1 w-32 text-base rounded group-hover:bg-gradient-to-b to-cyan-500 outline outline-1 hover:outline-2 group-hover:outline-cyan-800 outline-offset-2 from-cyan-800 hover:to-cyan-700 z-20 group-hover:text-white transition "
        onClick={handleClick}
      >
        {text.buttonProjects}
      </button>
    </div>
  )
}

export default ButtonRead

//
