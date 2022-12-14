import React, { useContext } from "react";
import TranslationContext from "../../TraslationContext";
function ButtonRead({ setmodalSelect, inside, strModal }) {
  const { text } = useContext(TranslationContext);
  const handleClick = (e) => {
    inside(e);
    setmodalSelect(strModal);
  };
  return (
    <button
      className=" group-hover:bg-slate-50  group-hover:bg-gradient-to-b to-cyan-500   from-cyan-800 group-hover:-translate-y-16 group-hover:text-white  group-hover:opacity-75  md:w-40 font-semibold  md:py-2 md:px-4 
      md:text-md py-1 w-32 text-base group-hover:hover:opacity-100 hover:scale-105 group-hover:hover:bg-slate-700   rounded  transition-all duration-300 "
      onClick={handleClick}
    >
      {text.buttonProjects}
    </button>
  );
}

export default ButtonRead;
