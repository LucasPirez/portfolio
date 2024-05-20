import { useState, useEffect } from 'react';
import { useContext } from 'react';
import ReactPlayer from 'react-player';
import useClick from '../../hooks/useClick';
import TranslationContext from '../../TraslationContext';
import ButtonModal from './ButtonModal';

export default function ModalChildren({ modalSelect, outside }) {
  const [carousel, setCarousel] = useState(0);
  const { text } = useContext(TranslationContext);
  const ref = useClick(outside);

  const {
    images: img,
    videos: vid,
    title,
    description,
    repositorie,
    deploy,
  } = text.modal[modalSelect];
  const [long, setLong] = useState(null);

  useEffect(() => {
    vid !== undefined ? setLong(img.length + 1) : setLong(img.length);
  }, [vid, img]);

  return (
    <div
      id="divModal"
      className="fixed flex justify-center  top-0  w-full h-auto bg-transparent animate-[back_0.4s_linear] z-20 "
    >
      <div
        ref={ref}
        className="max-w-[800px] max-h-[700px] h-[85vh] border-2 rounded-md opacity-78 relative text-red-50 bg-myBgLight dark:bg-myBgDark "
      >
        <div className="flex justify-center  w-[100%] sm:h-[68%] h-[52%] bg-slate-400 relative dark:opacity-80 overflow-hidden">
          {img &&
            img.map(
              (u, i) =>
                carousel === i && (
                  <img
                    key={i}
                    src={u}
                    alt="Modal-images"
                    className="h-[100%] animate-[back_0.4s_linear]   absolute top-0 object-cover"
                  />
                )
            )}
          {vid && carousel === long - 1 && (
            <>
              <p className="mt-[30%] ml-[40%]  absolute">
                Cargando...
              </p>
              <ReactPlayer url={vid} width="100%" height="100%" />
            </>
          )}
        </div>
        <ButtonModal
          carousel={carousel}
          setCarousel={setCarousel}
          long={long}
        />
        <div className="absolute w-[100%] sm:top-[65%] top-[48.5%] z-30  m-auto flex justify-center items-center space-x-2 ">
          {img &&
            img.map((u, i) => (
              <div
                key={i}
                className={`${
                  carousel === i
                    ? 'bg-rose-600 w-[8px] h-[8px]'
                    : 'bg-slate-500 w-[6px] h-[6px]'
                }  rounded-full `}
              ></div>
            ))}
        </div>
        <div className="h-[48%] sm:h-[32%] relative border-t-[1px] dark:border-myDarkRed border-myBgDark">
          <h4 className="text-center sm:text-3xl text-xl block   mt-1  text-black  dark:text-slate-200 font-bold ">
            {title}
          </h4>

          <div className="overflow-y-auto h-[88%]  sm:h-[80%]  scroll_style ">
            <p className=" pl-7 relative  mt-2 text-black dark:text-slate-200 ">
              {description}
            </p>

            <div className="flex flex-row justify-between items-end  w-[100%] bottom-2 pb-2 mt-4">
              <div className="flex">
                <a
                  target="_black"
                  href={repositorie}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  className=" p-2 sm:px-3 px-1 rounded cursor-pointer 
                  ml-2 transition-all duration-200 sm:text-base text-sm bg-myLightCyan dark:bg-myDarkLightBlue text-myBgDarkSecondary hover:opacity-80 "
                >
                  {text.repositorie}
                </a>
                {deploy && (
                  <a
                    target="_black"
                    href={deploy}
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    className=" p-2 sm:px-3 px-1 rounded cursor-pointer 
                  ml-2 transition-all duration-200 sm:text-base text-sm bg-myLightCyan dark:bg-myDarkLightBlue text-myBgDarkSecondary hover:opacity-80 "
                  >
                    {text.deploy}
                  </a>
                )}
              </div>
              <button
                onClick={outside}
                className=" bottom-2  text-3xl mr-3  px-2  rounded 
                dark:bg-myDarkRed dark:text-myBgDark bg-myLightRed text-myBgLight hover:scale-105
                "
              >
                X
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
