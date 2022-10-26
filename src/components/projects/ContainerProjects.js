import { children } from "react";

function ContainerProjects({ children, select, number, imgSrc, title }) {
  return (
    <div
      className={`${
        number.includes(select) === true
          ? "transform translate-x-0 relative "
          : "transform -translate-x-[1400px] absolute left-0"
      } group w-80 h-72  flex justify-center items-center m-2  text-center bg-slate-200   transition-all duration-700 border-2 border-slate-500
      rounded-md  shadow-md shadow-cyan-800`}
    >
      <img
        src={imgSrc}
        alt="calculator"
        className="absolute h-[100%] m-center object-cover"
      />
      <div className="text-transparent group-hover:text-slate-800 flex flex-col justify-between items-center absolute bg-transparent w-full h-full hover:bg-white hover:bg-opacity-70 transition-all duration-150  ">
        <h4 className="group-hover:transform group-hover:translate-y-10 text-2xl group-hover:text-rose-700 transition-all group-hover:duration-700 font-bold">
          {title}
        </h4>
        {children}
      </div>
    </div>
  );
}

export default ContainerProjects;
