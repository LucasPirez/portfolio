import arrow from '../../icons/arrow-90.svg'
import git from '../../icons/433-github.svg'
import Form from './Form'
import linked from '../../icons/353417.svg'
import curriculum from '../../icons/icons8-curriculum-64.png'
import curriculumPDF from '../../images/cv.pdf'

function Footer() {
  return (
    <section
      id="footer"
      className="w-full  h-auto min-h-[400px] dark:bg-myBgDark"
    >
      <div className="w-[100%]  h-[5vw]  relative ">
        <div className=" absolute  left-0 top-0 pb-1  border-l-[51vw] border-r-[51vw] border-t-[5vw] border-t-transparent border-r-transparent border-l-myBgBlue dark:border-l-myBgBlue"></div>
        <div className=" absolute right-0 top-0 pb-1   border-l-[49vw] border-r-[49vw] border-t-[5vw] border-t-transparent border-l-transparent border-r-myBgBlue dark:border-r-myBgBlue"></div>
      </div>
      <div className="flex px-4 lg:flex-row flex-col relative w-full  h-auto bg-myBgBlue dark:bg-myBgBlue items-center  lg:justify-around pb-4">
        <>
          <div className="sm:flex-1 flex-0 m-auto flexitems-center flex-col xl:ml-16 w-full">
            <Form />
          </div>

          <a
            href="#home"
            tn
            className="flex flex-col items-centere flex-1 sm:w-12 animate-bounce h-12"
            alt="arrow"
          >
            <img
              src={arrow}
              alt="arrow"
              className="  sm:w-8 sm:h-8 w-6 h-6 m-auto mt-4 invert "
            />
            <img
              src={arrow}
              alt="arrow"
              className="  sm:w-8 sm:h-8 w-6 h-6 m-auto invert"
            />
          </a>
          <div className=" flex flex-1 p-5 m-10 sm:m-0 justify-around">
            <a
              href="https://github.com/LucasPirez"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={git}
                alt="git"
                className="sm:w-14 sm:h-14 w-10 h-10 m-4  lg:m-0 bg-slate-100 rounded-full block transition-transform hover:scale-110 "
              />
            </a>

            <a
              href="https://www.linkedin.com/in/lucas-pirez-8553b222b/"
              target="_blank"
              alt="linkedin"
              rel="noreferrer"
            >
              <img
                src={linked}
                alt=""
                className="sm:w-14 sm:h-14 w-10 h-10 m-4  lg:m-0 block transition-transform hover:scale-110 "
              />
            </a>
            <a
              href={curriculumPDF}
              target="_blank"
              alt="linkedin"
              rel="noreferrer"
            >
              <img
                src={curriculum}
                alt=""
                className="sm:w-14 sm:h-14 w-10 h-10 block m-4  lg:m-0 transition-transform hover:scale-110 "
              />
            </a>
          </div>
        </>
      </div>
      <div className="w-full min-h-10 border-t-[1.5px] border-rose-700 bg-slate-900 text-center text-xs text-rose-100">
        <p>Author LUCAS D. PIREZ GALLO</p>
        <p>2022</p>
      </div>
    </section>
  )
}

export default Footer
