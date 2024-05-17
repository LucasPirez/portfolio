import Links from './Links'

function ContainerProjects({ children, select, number, imgSrc, title, links }) {
  return (
    <div
      className={`${
        number.includes(select) === true
          ? 'animate-[inProjects_0.8s_ease-in-out_forwards] '
          : 'animate-[outProjects_0.8s_ease-in-out_forwards] '
      } group w-72 h-72 2xl:w-[370px] 2xl:h-[380px]  flex flex-col  justify-between items-center m-2 text-transparent  text-center custom-rounded  bg-slate-200 
       shadow-lg dark:opacity-90  
       dark:shadow-gray-700 first-letter:hover:text-slate-800 bg-transparent  overflow-hidden  
   `}
    >
      <div className="bg-slate-200/90 cursor-pointer flex gap-1 rounded-md items-center w-auto z-40 absolute right-4 top-2 shadow-sm shadow-slate-500 group-hover:shadow-slate-700 ">
        <Links links={links} />
      </div>
      <img
        src={imgSrc}
        alt="calculator"
        className="absolute h-[100%] m-center object-cover "
      />

      <h4
        className="group-hover:transform
        group-hover:translate-y-10 text-2xl group-hover:text-myDarkLightBlue transition-all group-hover:duration-700 font-bold z-20

        "
      >
        {title}
      </h4>
      {children}
      <div
        className=" absolute bg-transparent w-full h-full group-hover:bg-myBgDarkSecondary group-hover:bg-opacity-80 transition-all dark:bg-myBgDark/10 border-[1px]
       custom-rounded "
      ></div>
    </div>
  )
}

export default ContainerProjects
