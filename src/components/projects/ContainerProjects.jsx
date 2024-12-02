import Links from './Links';
import TechStack from './card/TechStack';

function ContainerProjects({ imgSrc, text, tecnologies }) {
  const { title, description } = text;
  return (
    <article className=" flex justify-end flex-col rounded-lg relative bg-zinc-900 border-[1px] border-purple/40 w-[100%] max-w-[500px] h-[460px] overflow-hidden  dark:opacity-90 hover:opacity-100 transition-all duration-150 hover:scale-[1.03]  ">
      <Links links={text} />
      <img
        src={imgSrc}
        className=" absolute top-0 left-0 object-cover h-full from-transparent "
        alt="project"
      />

      <div className="h-full w-full bg-gradient-to-b dark:to-zinc-900 from-transparent absolute bottom-0 left-0 bg-slate-700/20 opacity-50 hover:opacity-30 "></div>
      <div className="z-20 pl-3 pr bg-myBgDarkSecondary ">
        <h3 className="text-xl font-semibold dark:text-myDarkPurple text-myLightPurple">
          {title}
        </h3>
        <p className=" text-slate-200 mb-2">
          {typeof description === 'string'
            ? description
            : description()}
        </p>
        <div
          className=" mb-1 flex flex-wrap gap-1 w-full text-sm
         h-auto"
        >
          {tecnologies?.map((e) => (
            <TechStack
              Component={e.icon}
              tecnologie={e.tecnologie}
              color={e.color}
              colorIcon={e.colorIcon}
            />
          ))}
        </div>
      </div>
    </article>
  );
}

export default ContainerProjects;
