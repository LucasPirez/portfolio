import React from 'react'
import ArrowLeft from '../../icons/ArrowLeft'
import ArrowRight from '../../icons/ArrowRight'

function ButtonModal({ carousel, setCarousel, long }) {
  return (
    <div className="absolute  w-[100%] h-[10%]  md:top-[60%] top-[36vh] ">
      <button
        onClick={() => setCarousel(carousel - 1)}
        className={`hover:opacity-70 transition-all bottom-0  absolute left-0  bg-transparent p-2 ${
          carousel >= 1 ? 'scale-1' : 'scale-0'
        }`}
      >
        <ArrowLeft />
      </button>
      <button
        onClick={() => setCarousel(carousel + 1)}
        className={`hover:opacity-70 transition-all bottom-0 absolute right-0  bg-transparent p-2 ${
          carousel < long - 1 ? 'scale-1' : 'scale-0'
        }`}
      >
        <ArrowRight />
      </button>
    </div>
  )
}

export default ButtonModal
