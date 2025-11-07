import { TechnologiesKey } from '@/tecnologies-per-project';
import { type Translation } from '../translation';
import { JSX } from 'react';

export interface AnimationController {
  home: boolean;
  about: boolean;
  projects: boolean;
  footer: boolean;
}

export interface TranslationContextType {
  text: Translation;
  handleLanguage: (language: 'en' | 'es') => void;
  language: 'es' | 'en';
  currentPage: string;
  selectCurrentPage: (page: string) => void;
  animationStart: AnimationController;
  width: number;
}

export interface Project {
  id: string;
  title: string;
  description: JSX.Element | string;
  shortDescription: string;
  image: string;
  tags: TechnologiesKey[];
  demoUrl?: string;
  githubUrl?: string;
  features: string[];
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
