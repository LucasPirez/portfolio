const TECNOLOGIES = ['all', '.Net/Blazor', '.Net/Reactjs'];

function ProjectsTecnologies({ onSelect, select, text }) {
  return (
    <div className="flex flex-col relative min-h-[80px] h-auto w-[90%] lg:w-[65vw] md:w-[720px] animate-[startRight_1.2s_ease-out]  text-base  sm:text-xl md:text-2xl dark:text-slate-200 bg-transparent ">
      <div
        className={`${
          select === 1
            ? 'ml-[16%]'
            : select === 2
              ? 'ml-[50%]'
              : select === 3
                ? 'ml-[81%]'
                : select === 4
                  ? 'ml-[86%]'
                  : ''
        } w-0 h-0 transition-all duration-300 ease-linear border-l-[8px] border-t-[16px] border-r-[8px] border-t-myLightPurple border-r-transparent border-l-transparent mb-1
         `}
      ></div>
      <div className="w-full h-full flex justify-around">
        {TECNOLOGIES.map((u, i) => (
          <div
            key={u + i}
            onClick={(e) => {
              e.preventDefault();
              onSelect(i + 1);
            }}
            className="w-[25%] h-fit text-center hover:scale-110 transform cursor-pointer transition-all sm:mb-0 mb-2 "
          >
            {u === 'all' ? <p>{text[u]}</p> : <p>{u}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsTecnologies;
