const TECNOLOGIES = ['all', 'Reactjs', 'React Native', 'Java']

function ProjectsTecnologies({ onSelect, select, text }) {
  return (
    <div className="flex flex-col relative  h-[10vh] w-[90%] lg:w-[65vw] md:w-[720px] animate-[startRight_1.2s_ease-out]  text-base  sm:text-xl md:text-2xl dark:text-slate-200 bg-transparent ">
      <div
        className={`${
          select === 1
            ? 'ml-[12%]'
            : select === 2
            ? 'ml-[36%]'
            : select === 3
            ? 'ml-[61%]'
            : select === 4
            ? 'ml-[86%]'
            : ''
        } w-0 h-0 transition-all duration-300 ease-linear border-l-[8px] border-t-[16px] border-r-[8px] border-t-rose-600 border-r-transparent border-l-transparent mb-1
         `}
      ></div>
      <div className="w-full h-full flex">
        {TECNOLOGIES.map((u, i) => (
          <div
            onClick={(e) => {
              e.preventDefault()
              onSelect(i + 1)
            }}
            className="w-[25%] h-fit text-center hover:scale-110 transform cursor-pointer transition-all"
          >
            {u === 'all' ? <p>{text[u]}</p> : <p>{u}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectsTecnologies
