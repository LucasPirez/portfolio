// Tipos personalizados del proyecto

export interface Translation {
  presentation: {
    subTitle: string;
    about: string;
  };
  download: string;
  projects: {
    title: string;
    [key: string]: any;
  };
  about: {
    title: string;
    [key: string]: any;
  };
  footer: {
    [key: string]: any;
  };
  [key: string]: any;
}

export interface TranslationContextType {
  text: Translation;
  handleLanguaje: (language: string) => void;
  currentPage: string;
  selectCurrentPage: (page: string) => void;
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
