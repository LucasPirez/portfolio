import React, { useContext } from "react";
import style from "./AboutDescrip.module.css";
import TranslationContext from "../../TraslationContext";

function AbuotDescrip() {
  const { text, handleLanguaje } = useContext(TranslationContext);

  return (
    <div className={style.containerDes}>
      <div className={`${style.description1} ${style.des}`}>
        <h2 className={style.titleDescription}>
          {text.about.description1.title}
        </h2>
        <hr className={style.limit} />
        <p>{text.about.description1.description}</p>
      </div>
      <div className={`${style.description2} ${style.des}`}>
        <h2 className={style.titleDescription}>
          {text.about.description2.title}
        </h2>
        <hr className={style.limit} />

        <p>{text.about.description2.description}</p>
      </div>
      <div className={`${style.description3} ${style.des}`}>
        <h2 className={style.titleDescription}>
          {text.about.description3.title}
        </h2>
        <hr className={style.limit} />

        <p>{text.about.description3.description}</p>
      </div>
      <div className={`${style.description4} ${style.des}`}>
        <h2 className={style.titleDescription}>
          {text.about.description4.title}
        </h2>
        <hr className={style.limit} />

        <p>{text.about.description4.description}</p>
      </div>
    </div>
  );
}

export default AbuotDescrip;

// ?    <div className="w-32 h-32 bg-red m-1">
// <div className="w-32 h-32 bg-white m-1">
//   <div className="w-32 h-32 bg-black m-1">
//     <div className="w-32 h-32 bg-red-800 m-1"></div>
