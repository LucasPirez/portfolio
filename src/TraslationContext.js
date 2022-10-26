import { createContext, useState } from "react";
import { recursos, translation } from "./translation";

const TranslationContext = createContext();

const initialValue = "en";

const TraslationProvider = ({ children }) => {
  const [languaje, setLanguaje] = useState(initialValue);
  const [text, setText] = useState(translation[languaje]);

  const handleLanguaje = (e) => {
    setText(translation[e]);
  };

  const data = { text, handleLanguaje, languaje };

  return (
    <TranslationContext.Provider value={data}>
      {children}
    </TranslationContext.Provider>
  );
};

export { TraslationProvider };
export default TranslationContext;
