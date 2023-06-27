import Links from './Links'

function ContainerProjects({ children, select, number, imgSrc, title, links }) {
  return (
    <div
      className={`${
        number.includes(select) === true
          ? 'transform translate-x-0 relative '
          : 'transform -translate-x-[1400px] absolute'
      } group w-80 h-72   flex flex-col  justify-between items-center m-2 text-transparent  text-center rounded-md bg-slate-200    border-slate-600
       shadow-md shadow-cyan-800 dark:opacity-90 border-2 dark:border-zinc-200 dark:shadow-cyan-500  first-letter:hover:text-slate-800 bg-transparent transition-all duration-1000 overflow-hidden `}
    >
      <div className="bg-slate-200/90 cursor-pointer rounded-md flex gap-1 items-center w-auto z-40 absolute right-1 top-1 shadow-sm shadow-slate-500 group-hover:shadow-slate-700 ">
        <Links links={links} />
      </div>
      <img
        src={imgSrc}
        alt="calculator"
        className="absolute h-[100%] m-center object-cover r"
      />

      <h4
        className="group-hover:transform
        group-hover:translate-y-10 text-2xl group-hover:text-rose-800 transition-all group-hover:duration-700 font-bold z-20

        "
      >
        {title}
      </h4>
      {children}
      <div className=" absolute bg-transparent w-full h-full group-hover:bg-slate-200 group-hover:bg-opacity-80 transition-all rounded-md"></div>
    </div>
  )
}

export default ContainerProjects
