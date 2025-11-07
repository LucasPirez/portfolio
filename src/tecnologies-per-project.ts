import { JSX, SVGProps } from 'react';
import {
  Net,
  Css3,
  Html,
  Reactjs,
  TypeScript,
  Javascript,
  CSharp,
  PostgreSQL,
  SQL,
  Blazor,
  NestJs,
  Docker,
} from './icons/IconsTecnologies';

export const tecnologiesTyping = [
  {
    icon: Reactjs,
    tecnologie: 'React',
    color: '#61dbfb',
    colorIcon: '#61dbfb',
  },
  {
    icon: TypeScript,
    tecnologie: 'TypeScript',
    color: '#2d79c7',
    colorIcon: '',
  },
  { icon: Net, tecnologie: '.NET', color: '#C715ee', colorIcon: '' },
  {
    icon: CSharp,
    tecnologie: 'C#',
    color: 'lightgreen',
    colorIcon: '',
  },
];

export const tecnlogoiesCryptoTracker = [
  {
    icon: Reactjs,
    tecnologie: 'React',
    color: '#61dbfb',
    colorIcon: '#61dbfb',
  },
  {
    icon: Javascript,
    tecnologie: 'Javascript',
    color: 'yellow',
    colorIcon: '',
  },
  { icon: Net, tecnologie: '.NET', color: '#C715ee', colorIcon: '' },
  {
    icon: CSharp,
    tecnologie: 'C#',
    color: 'lightgreen',
    colorIcon: '',
  },
  {
    icon: SQL,
    tecnologie: 'SqlServer',
    color: 'cyan',
    colorIcon: '',
  },
];

export const tecnologiesAppInstitute = [
  { icon: Net, tecnologie: '.NET', color: '#C715ee', colorIcon: '' },
  {
    icon: CSharp,
    tecnologie: 'C#',
    color: 'lightgreen',
    colorIcon: '',
  },
  {
    icon: Blazor,
    tecnologie: 'Blazor',
    color: '#eee',
    colorIcon: '',
  },
  {
    icon: PostgreSQL,
    tecnologie: 'PostgreSQL',
    color: 'lightBlue',
    colorIcon: '',
  },
];

export const grinpoolTecnologies = [
  {
    icon: Reactjs,
    tecnologie: 'React',
    color: '#61dbfb',
    colorIcon: '#61dbfb',
  },
  {
    icon: TypeScript,
    tecnologie: 'TypeScript',
    color: '#2d79c7',
    colorIcon: '',
  },
  {
    icon: NestJs,
    tecnologie: 'NestJs',
    color: '#FF0000',
    colorIcon: '',
  },
  {
    icon: PostgreSQL,
    tecnologie: 'PostgreSQL',
    color: 'lightBlue',
    colorIcon: '',
  },
];

export const primaryTecnologies = [
  { icon: Net, tecnologie: '.NET', color: '#C715ee', colorIcon: '' },
  {
    icon: CSharp,
    tecnologie: 'C#',
    color: 'lightgreen',
    colorIcon: '',
  },
  {
    icon: Reactjs,
    tecnologie: 'React',
    color: '#61dbfb',
    colorIcon: '#61dbfb',
  },
  {
    icon: TypeScript,
    tecnologie: 'TypeScript',
    color: '#2d79c7',
    colorIcon: '',
  },
  {
    icon: Javascript,
    tecnologie: 'Javascript',
    color: 'yellow',
    colorIcon: '',
  },
  {
    icon: Html,
    tecnologie: 'HTML',
    color: 'orange',
    colorIcon: '',
  },
  {
    icon: Css3,
    tecnologie: 'Css',
    color: 'lightskyblue',
    colorIcon: '',
  },
  {
    icon: NestJs,
    tecnologie: 'NestJs',
    color: '#FF0000',
    colorIcon: '',
  },
  {
    icon: PostgreSQL,
    tecnologie: 'PostgreSQL',
    color: 'lightBlue',
    colorIcon: '',
  },
  {
    icon: Docker,
    tecnologie: 'Docker',
    color: '#1388c7',
    colorIcon: '',
  },
];

type TechnologyInfo = {
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  color: string;
  colorIcon: string;
  name: string;
};

export type TechnologiesKey =
  | 'React'
  | 'TypeScript'
  | '.NET'
  | 'CSharp'
  | 'Javascript'
  | 'SqlServer'
  | 'Blazor'
  | 'PostgreSQL'
  | 'NestJs'
  | 'HTML'
  | 'Css'
  | 'Docker';

export const technologies: Record<TechnologiesKey, TechnologyInfo> = {
  React: {
    name: 'React',
    icon: Reactjs,
    color: '#61dbfb',
    colorIcon: '#61dbfb',
  },
  TypeScript: {
    name: 'TypeScript',
    icon: TypeScript,
    color: '#2d79c7',
    colorIcon: '',
  },
  '.NET': {
    name: '.NET',
    icon: Net,
    color: '#C715ee',
    colorIcon: '',
  },
  CSharp: {
    name: 'C#',
    icon: CSharp,
    color: 'lightgreen',
    colorIcon: '',
  },
  Javascript: {
    name: 'Javascript',
    icon: Javascript,
    color: 'yellow',
    colorIcon: '',
  },
  SqlServer: {
    icon: SQL,
    name: 'SqlServer',
    color: 'cyan',
    colorIcon: '',
  },
  Blazor: {
    name: 'Blazor',
    icon: Blazor,
    color: '#eee',
    colorIcon: '',
  },
  PostgreSQL: {
    name: 'PostgreSQL',
    icon: PostgreSQL,
    color: 'lightBlue',
    colorIcon: '',
  },
  NestJs: {
    name: 'NestJs',
    icon: NestJs,
    color: '#FF0000',
    colorIcon: '',
  },
  HTML: {
    name: 'HTML',
    icon: Html,
    color: 'orange',
    colorIcon: '',
  },
  Css: {
    icon: Css3,
    name: 'Css',
    color: 'lightskyblue',
    colorIcon: '',
  },
  Docker: {
    name: 'Docker',
    icon: Docker,
    color: '#1388c7',
    colorIcon: '',
  },
};
