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
  REST: {
    name: 'REST',
    color: '#ff8c00',
    colorIcon: '',
  },
  EntityFramework: {
    name: 'EntityFramework',
    color: '#a8217a',
    colorIcon: '',
  },
  WebSockets: {
    name: 'WebSockets',
    color: '#008080',
    colorIcon: '',
  },
  SignalR: {
    name: 'SignalR',
    color: '#5c2d91',
    colorIcon: '',
  },
  'CI/CD': {
    name: 'CI/CD',
    color: '#ff1493',
    colorIcon: '',
  },
  Firebase: {
    name: 'Firebase',
    color: '#ffca28',
    colorIcon: '',
  },
  Git: {
    name: 'Git',
    color: '#f34f29',
    colorIcon: '',
  },
  GitHubActions: {
    name: 'GitHubActions',
    color: '#2088ff',
    colorIcon: '',
  },
  Vercel: {
    name: 'Vercel',
    color: '#000000',
    colorIcon: '',
  },
  DockerCompose: {
    name: 'DockerCompose',
    color: '#2496ed',
    colorIcon: '',
  },
  Heroku: {
    name: 'Heroku',
    color: '#6762a6',
    colorIcon: '',
  },
  Jest: {
    name: 'Jest',
    color: '#c21325',
    colorIcon: '',
  },
  xUnit: {
    name: 'xUnit',
    color: '#1d2d44',
    colorIcon: '',
  },
  TDD: {
    name: 'TDD',
    color: '#ff4500',
    colorIcon: '',
  },
  TailwindCSS: {
    name: 'TailwindCSS',
    color: '#38bdf8',
    colorIcon: '',
  },
  Express: {
    name: 'Express',
    color: '#00a5C9',
    colorIcon: '',
  },
  NodeJs: {
    name: 'NodeJs',
    color: '#68a063',
    colorIcon: '',
  },
  Redis: {
    name: 'Redis',
    color: '#dc382d',
    colorIcon: '',
  },
};
