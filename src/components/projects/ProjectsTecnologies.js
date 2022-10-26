function ProjectsTecnologies({ setSelect, select }) {
  return (
    <div className="flex flex-col relative  h-[10vh] w-[90%] lg:w-[65vw] md:w-[720px] animate-[startRight_1.2s_ease-out]  text-base  sm:text-xl md:text-2xl">
      <div
        className={`${
          select === 1
            ? "ml-[12%]"
            : select === 2
            ? "ml-[36%]"
            : select === 3
            ? "ml-[61%]"
            : select === 4
            ? "ml-[86%]"
            : ""
        } w-0 h-0 transition-all duration-300 ease-linear border-l-[8px] border-t-[16px] border-r-[8px]  border-t-rose-600 border-r-transparent border-l-transparent left-[18%] mb-1
         `}
      ></div>
      <div className="w-full h-full flex">
        <div
          onClick={() => setSelect(1)}
          className="w-[25%] h-fit  text-center hover:scale-110 transform cursor-pointer transition-all  "
        >
          <p>All</p>
        </div>
        <div
          onClick={() => setSelect(2)}
          className="w-[25%] h-fit text-center hover:scale-110 transform cursor-pointer transition-all   "
        >
          <p>Reactjs</p>
        </div>
        <div
          onClick={() => setSelect(3)}
          className="w-[25%] h-fit text-center hover:scale-110 transform cursor-pointer"
        >
          <p>React Native</p>
        </div>
        <div
          onClick={() => setSelect(4)}
          className="w-[25%] h-fit text-center hover:scale-110 transform cursor-pointer "
        >
          <p>Django</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectsTecnologies;
