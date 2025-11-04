import arrow from '../../icons/arrow-90.svg';
import git from '../../icons/433-github.svg';
import Form from './Form';
import linked from '../../icons/353417.svg';
import curriculum from '../../icons/icons8-curriculum-64.png';
import curriculumPDF from '../../images/cv.pdf';
import GmailIcon from '../../icons/GmailIcon';

function Footer() {
  const clasNameIcons =
    'sm:w-14 sm:h-14 w-10 h-10 m-4  lg:m-0 transition-transform hover:scale-110 ';

  return (
    <section
      id="footer"
      className=" h-auto min-h-[400px] dark:bg-myBgDark mt-7"
    >
      <div className="-translate-y-5 ">
        <div className="w-[100%]  h-[5vw]  relative  ">
          <div className=" absolute  left-0 top-0 pb-1  border-l-[51vw] border-r-[51vw] border-t-[5vw] border-t-transparent border-r-transparent border-l-myBgBlue dark:border-l-myBgBlue"></div>
          <div className=" absolute right-0 top-0 pb-1   border-l-[49vw] border-r-[49vw] border-t-[5vw] border-t-transparent border-l-transparent border-r-myBgBlue dark:border-r-myBgBlue"></div>
        </div>
        <div className="w-full bg-myBgBlue">
          <div className="md:flex   h-auto items-center  justify-between pb-4 -mb-5 custom-container">
            <div className=" m-auto flex flex-1 items-center flex-col max-w-[500px] ">
              <Form />
            </div>

            <a
              href="#home"
              tn
              className="flex  flex-col items-center justify-center lg:flex-1 flex-0 min-w-[120px]  animate-bounce h-12 mt-7"
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
            <div className=" flex flex-1  my-10  justify-between max-w-[500px] m-auto">
              <a
                href="https://github.com/LucasPirez"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={git}
                  alt="git"
                  className={`${clasNameIcons} bg-slate-100 rounded-full  `}
                />
              </a>

              <a
                href="https://www.linkedin.com/in/lucas-pirez-8553b222b/"
                target="_blank"
                alt="linkedin"
                rel="noreferrer"
              >
                <img src={linked} alt="" className={clasNameIcons} />
              </a>

              <a
                href="mailto:lucaspirez42@gmail.com"
                className={clasNameIcons}
                title="Send Email"
              >
                <GmailIcon />
              </a>
              <a
                href={curriculumPDF}
                target="_blank"
                alt="linkedin"
                rel="noreferrer"
                className={clasNameIcons}
              >
                <img src={curriculum} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full min-h-10 border-t-[1.5px] border-rose-700 bg-slate-900 text-center text-xs text-rose-100 p-b">
        <p>Author LUCAS D. PIREZ GALLO</p>
        <p>2024</p>
      </div>
    </section>
  );
}

export default Footer;
