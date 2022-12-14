import { useState, useEffect } from "react";
import { useContext } from "react";
import ReactPlayer from "react-player";
import TranslationContext from "../../TraslationContext";
import ButtonModal from "./ButtonModal";

export default function ModalChildren({ modalSelect, inside, outside }) {
  const [carousel, setCarousel] = useState(0);
  const { text, handleLanguaje } = useContext(TranslationContext);
  // const [selectText, setSelectText] = useState(text.modal[modalSelect]);
  const {
    images: img,
    videos: vid,
    title,
    description,
    repositorie,
    deploy,
  } = text.modal[modalSelect];
  const [images, setImages] = useState([]);
  const [video, setVideo] = useState(undefined);
  const [long, setLong] = useState(null);

  console.log(text.modal);

  useEffect(() => {
    console.log("hea");
    setImages(img);
    setVideo(vid);

    video !== undefined ? setLong(images.length + 1) : setLong(images.length);
  }, [text.modal[modalSelect], images]);

  console.log(carousel);
  return (
    <div
      id="divModal"
      className="fixed flex justify-center  top-2  w-[100%] h-auto bg-transparent animate-[back_0.4s_linear] z-10 "
    >
      <div
        onClick={inside}
        className="max-w-[800px] md:h-[700px] h-auto border-2 rounded opacity-78 relative text-red-50 bg-white dark:bg-zinc-900 "
      >
        <div className="flex  w-[100%] md:h-[70%] h-[45vh] bg-slate-400 relative dark:opacity-80">
          {images &&
            images.map((u, i) =>
              carousel === i ? (
                <div
                  key={i}
                  className="w-[100%] h-[100%] animate-[back_0.4s_linear]  overflow-hidden absolute top-0"
                >
                  <img
                    src={u}
                    alt="Modal-images"
                    className="h-[100%] mx-auto"
                  />
                </div>
              ) : (
                ""
              )
            )}
          {video && carousel === long - 1 ? (
            <>
              <p className="mt-[30%] ml-[40%]  absolute ">Cargando...</p>
              <ReactPlayer url={video} width="100%" height="100%" />
            </>
          ) : (
            ""
          )}
        </div>
        <ButtonModal
          carousel={carousel}
          setCarousel={setCarousel}
          long={long}
        />
        <div className="absolute w-[100%] md:top-[67%] top-[44vh] z-30  m-auto flex justify-center items-center space-x-2">
          {images &&
            images.map((u, i) => (
              <div
                key={i}
                className={`${
                  carousel === i
                    ? "bg-rose-600 w-[8px] h-[8px]"
                    : "bg-slate-500 w-[6px] h-[6px]"
                }  rounded-full `}
              ></div>
            ))}
        </div>
        <div className="md:h-auto h-auto  ">
          <h4 className="text-center text-3xl   mt-1  text-black dark:text-slate-200">
            {title}
          </h4>
          <div className="md:h-auto sm:h-[23vh] overflow-y-auto sm:pb-0 pb-[10vh]    h-[32vh]">
            <p className="p-4 pl-7 text-black dark:text-slate-200">
              {description}
            </p>
          </div>

          <div className="flex flex-row justify-between items-end bg  absolute w-[100%] bottom-2 ">
            <div className="flex">
              <a
                target="_black"
                href={repositorie}
                className=" p-1 sm:px-3 px-1 rounded cursor-pointer hover:bg-cyan-500  border-2 border-cyan-700 bg-cyan-700 dark:bg-cyan-700 dark:hover:text-slate-900 active:scale-95 sm:ml-4 dark:text-slate-200 
                ml-2 transition-all duration-200 sm:text-base text-sm"
              >
                {text.repositorie}
              </a>
              {deploy && (
                <a
                  target="_black"
                  href={deploy}
                  className=" p-1 sm:px-3 px-1 rounded cursor-pointer hover:bg-cyan-500  border-2 border-cyan-700 bg-cyan-700 active:scale-95 sm:ml-4 dark:hover:text-slate-900 dark:text-slate-200
                ml-2 transition-all duration-200 sm:text-base text-sm"
                >
                  {text.deploy}
                </a>
              )}
            </div>
            <button
              onClick={outside}
              className=" bottom-2  text-3xl mr-3  px-2 border-2 rounded border-cyan-400 text-cyan-800 hover:bg-cyan-700 transition-all opacity-80 duration-200 hover:text-cyan-300 hover:border-white dark:text-slate-200"
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
