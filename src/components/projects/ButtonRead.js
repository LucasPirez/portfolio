import React, { useContext } from 'react'
import TranslationContext from '../../TraslationContext'
function ButtonRead({ handleClick }) {
  const { text } = useContext(TranslationContext)

  return (
    <div className=" w-fit h-fit group-hover:-translate-y-16 hover:scale-105  z-20 p-1 rounded transition">
      {/* <button
        className="md:w-40 font-semibold  md:py-2 md:px-4 
      md:text-md py-1 w-32 text-base rounded group-hover:bg-myLightRed outline hover:outline-offset-1 outline-myLightbg/90  group-hover:outline-2 group-hover:text-myBgDarkSecondary/90 transition "
        onClick={handleClick}
      >
        {text.buttonProjects}
      </button> */}
      <button
        onClick={handleClick}
        className={`group relative 
               md:py-2 md:px-4   md:text-md py-1 w-32 text-base group-hover:outline-myDarkLightBlue p-2 items-center  outline hover:outline-offset-2 hover:outline-myDarkLightBlue rounded-md  transition-all duration-200 group-hover:bg-myDarkLightBlue hover:bg-myDarkLightBlue group-hover:text-black`}
      >
        {text.buttonProjects}
      </button>
    </div>
  )
}

export default ButtonRead
