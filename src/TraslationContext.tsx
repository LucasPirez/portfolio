import {
  createContext,
  useState,
  ReactNode,
  useContext,
} from 'react';
import useWidth from './hooks/useWidth';
import { translation } from './translation';
import { TranslationContextType, AnimationController } from './types';

const TranslationContext = createContext<
  TranslationContextType | undefined
>(undefined);
const initialValue = 'es';
const animationControler: AnimationController = {
  home: false,
  about: false,
  projects: false,
  footer: false,
};

interface TraslationProviderProps {
  children: ReactNode;
}

const TraslationProvider = ({
  children,
}: TraslationProviderProps) => {
  const [languaje] = useState<'es' | 'en'>(initialValue);
  const [text, setText] = useState(translation[languaje]);
  const [currentPage, setCurrentPage] = useState('home');
  const [animationStart, setAnimationStart] = useState(
    animationControler
  );
  const { width } = useWidth();

  const selectCurrentPage = (value: string) => {
    if (value !== 'noIntersecting') {
      setCurrentPage(value);
      setAnimationStart((animationStart) => {
        return {
          ...animationStart,
          [value]: true,
        };
      });
    }
  };

  const handleLanguaje = (e: 'en' | 'es') => {
    setText(translation[e]);
  };

  const data = {
    text,
    handleLanguaje,
    languaje,
    currentPage,
    selectCurrentPage,
    animationStart,
    width,
  };

  return (
    <TranslationContext.Provider value={data}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTraslation = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error(
      'useTraslation must be used within a TraslationProvider'
    );
  }
  return context;
};

export { TraslationProvider };
export default TranslationContext;
