import React from "react";
import ArrowLeft from "../../icons/ArrowLeft";
import ArrowRight from "../../icons/ArrowRight";

function ButtonModal({ carousel, setCarousel, long }) {
  return (
    <div className="absolute  w-[100%] h-[10%]  md:top-[60%] top-[36vh] ">
      {carousel >= 1 && (
        <button
          onClick={() => setCarousel(carousel - 1)}
          className=" hover:opacity-70 transition-all bottom-0 absolute left-0  bg-transparent p-2"
        >
          <ArrowLeft />
        </button>
      )}
      {carousel < long - 1 && (
        <button
          onClick={() => setCarousel(carousel + 1)}
          className="hover:opacity-70 transition-all bottom-0 absolute right-0  bg-transparent p-2"
        >
          <ArrowRight />
        </button>
      )}
    </div>
  );
}

export default ButtonModal;
