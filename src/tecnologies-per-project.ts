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
  icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  color: string;
  colorIcon: string;
  name: string;
};

export type TechnologiesKey =
  | 'React'
  | 'TypeScript'
  | 'DDD'
  | '.NET'
  | 'CSharp'
  | 'Javascript'
  | 'SqlServer'
  | 'Blazor'
  | 'PostgreSQL'
  | 'NestJs'
  | 'HTML'
  | 'Css'
  | 'Docker'
  | 'REST'
  | 'EntityFramework'
  | 'WebSockets'
  | 'SignalR'
  | 'Firebase'
  | 'Git'
  | 'GitHubActions'
  | 'Vercel'
  | 'DockerCompose'
  | 'Heroku'
  | 'CI/CD'
  | 'Jest'
  | 'xUnit'
  | 'TDD'
  | 'TailwindCSS'
  | 'Express'
  | 'NodeJs'
  | 'Redis';

export const technologies: Record<TechnologiesKey, TechnologyInfo> = {
  React: {
    name: 'React',
    icon: Reactjs,
    color: '#4fd4f5',
    colorIcon: '#4fd4f5',
  },
  TypeScript: {
    name: 'TypeScript',
    icon: TypeScript,
    color: '#3b82f6',
    colorIcon: '',
  },
  '.NET': {
    name: '.NET',
    icon: Net,
    color: '#a54dff',
    colorIcon: '',
  },
  CSharp: {
    name: 'C#',
    icon: CSharp,
    color: '#7fff8a',
    colorIcon: '',
  },
  Javascript: {
    name: 'Javascript',
    icon: Javascript,
    color: '#f5e342',
    colorIcon: '',
  },
  SqlServer: {
    icon: SQL,
    name: 'SqlServer',
    color: '#41e2f4',
    colorIcon: '',
  },
  Blazor: {
    name: 'Blazor',
    icon: Blazor,
    color: '#d7d4ff',
    colorIcon: '',
  },
  PostgreSQL: {
    name: 'PostgreSQL',
    icon: PostgreSQL,
    color: '#4ba3f7',
    colorIcon: '',
  },
  NestJs: {
    name: 'NestJs',
    icon: NestJs,
    color: '#ff4d4d',
    colorIcon: '',
  },
  HTML: {
    name: 'HTML',
    icon: Html,
    color: '#ff7b00',
    colorIcon: '',
  },
  Css: {
    icon: Css3,
    name: 'Css',
    color: '#57b9ff',
    colorIcon: '',
  },
  Docker: {
    name: 'Docker',
    icon: Docker,
    color: '#33b1ff',
    colorIcon: '',
  },
  REST: {
    name: 'REST',
    color: '#ffa733',
    colorIcon: '',
  },
  EntityFramework: {
    name: 'EntityFramework',
    color: '#d63fa6',
    colorIcon: '',
  },
  WebSockets: {
    name: 'WebSockets',
    color: '#00b3b3',
    colorIcon: '',
  },
  SignalR: {
    name: 'SignalR',
    color: '#7c4dff',
    colorIcon: '',
  },
  'CI/CD': {
    name: 'CI/CD',
    color: '#ff66cc',
    colorIcon: '',
  },
  Firebase: {
    name: 'Firebase',
    color: '#ffc933',
    colorIcon: '',
  },
  Git: {
    name: 'Git',
    color: '#f05a2b',
    colorIcon: '',
  },
  GitHubActions: {
    name: 'GitHubActions',
    color: '#3a9bff',
    colorIcon: '',
  },
  Vercel: {
    name: 'Vercel',
    color: '#e6e6e6',
    colorIcon: '',
  },
  DockerCompose: {
    name: 'DockerCompose',
    color: '#3ea6ff',
    colorIcon: '',
  },
  Heroku: {
    name: 'Heroku',
    color: '#8c6ee8',
    colorIcon: '',
  },
  Jest: {
    name: 'Jest',
    color: '#e83a3a',
    colorIcon: '',
  },
  xUnit: {
    name: 'xUnit',
    color: '#2a3b5d',
    colorIcon: '',
  },
  TDD: {
    name: 'TDD',
    color: '#ff7043',
    colorIcon: '',
  },
  DDD: {
    name: 'DDD',
    color: '#fa70a3',
    colorIcon: '',
  },
  TailwindCSS: {
    name: 'TailwindCSS',
    color: '#4fd4f5',
    colorIcon: '',
  },
  Express: {
    name: 'Express',
    color: '#33c4de',
    colorIcon: '',
  },
  NodeJs: {
    name: 'NodeJs',
    color: '#7ad97a',
    colorIcon: '',
  },
  Redis: {
    name: 'Redis',
    color: '#ff4b4b',
    colorIcon: '',
  },
};
