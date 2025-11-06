// Tipos personalizados del proyecto

export interface Translation {
  presentation: {
    subTitle: string;
    about: string;
  };
  download: string;
  projects: string;
  about: {
    title: string;
    [key: string]: any;
  };
  contact: {
    [key: string]: any;
  };
  [key: string]: any;
}

export interface AnimationController {
  home: boolean;
  about: boolean;
  projects: boolean;
  footer: boolean;
}

export interface TranslationContextType {
  text: Translation;
  handleLanguaje: (language: 'en' | 'es') => void;
  languaje: 'es' | 'en';
  currentPage: string;
  selectCurrentPage: (page: string) => void;
  animationStart: AnimationController;
  width: number;
}

export interface CustomErrorType extends Error {
  status?: number;
}

export interface QAResponse {
  answer: string;
}

export interface QuestionData {
  question: string;
}
