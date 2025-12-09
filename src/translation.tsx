import { modalEN, modalES } from './projects-description-text';
import React from 'react';
import type { Project } from '@/types/index';

type Header = {
  home: string;
  about: string;
  portfolio: string;
  contact: string;
};

type Presentation = {
  title: string;
  subTitle: string;
  button: string;
  about: string;
};

type Contact = {
  name: string;
  email: string;
  message: string;
  submit: string;
  errorDescription: {
    valueMissing: string;
    typeMismatch: string;
  };
};

export type Translation = {
  buttonProjects: string;
  tecnologies: string;
  projects: string;
  download: string;
  theme: string;
  light: string;
  dark: string;
  default: string;
  about: () => React.ReactNode;
  all: string;
  header: Header;
  presentation: Presentation;
  contact: Contact;
  modal: Record<string, string>;
  projectDescription: Record<string, Project>;
  deploy: string;
  repositorie: string;
};

export const recursos = {
  projects: {
    title: {
      ReactNative: 'React Native',
      Django: 'Django',
      React: 'React-Js',
    },
  },
};

export const translation: Record<string, Translation> = {
  en: {
    buttonProjects: 'Read More',
    tecnologies: 'TECHNOLOGIES',
    projects: 'Projects',
    download: 'Download',
    theme: 'Theme',
    light: 'Light',
    dark: 'Dark',
    default: 'default',
    all: 'All',
    header: {
      home: 'Home',
      about: 'About',
      portfolio: 'Projects',
      contact: 'Contact',
    },
    presentation: {
      title: '',
      subTitle: 'Backend Developer with Full Stack experience',
      button: 'View my work.',
      about:
        'Resolute and proactive, always focused on providing effective solutions to achieve the expected results.',
    },
    contact: {
      name: 'Name',
      email: 'Email',
      message: 'Message',
      submit: 'Submit',
      errorDescription: {
        valueMissing: 'This field cannot be empty',
        typeMismatch: 'The field is incorrect',
      },
    },
    modal: { hola: 'hola' },
    deploy: 'View Deploy',
    repositorie: 'View Repository',
    projectDescription: modalEN,
    about: () => (
      <>
        <p className="mb-3">
          <span>&#8226;</span>Over a year of experience in web
          application development, with a strong focus on backend and
          building scalable, efficient solutions.
        </p>
        <p className="mb-3">
          <span>&#8226; </span>
          Specialized in development with .NET (C#), Node.js, and
          TypeScript, applying clean architecture principles and best
          development practices to ensure maintainability and
          performance.
        </p>
        <p className="mb-3">
          <span>&#8226; </span>I also have experience with React.js
          for creating modern and dynamic interfaces, seamlessly
          integrating the frontend with the backend.
        </p>{' '}
        <p className="mb-3">
          <span>&#8226; </span>
          Currently developing full stack applications focused on
          scalability and code quality. I'm looking to join a team
          where I can continue growing professionally, contribute
          impactful technical solutions, and help achieve project
          success with commitment and innovation.
        </p>
      </>
    ),
  },

  es: {
    buttonProjects: 'Ver Mas',
    tecnologies: 'TECNOLOGIAS',
    projects: 'Proyectos',
    download: 'Descargar',
    theme: 'Tema',
    light: 'Claro',
    dark: 'Oscuro',
    default: 'Predeterminado',
    all: 'Todos',
    header: {
      home: 'Inicio',
      about: 'Sobre Mí',
      portfolio: 'Projectos',
      contact: 'Contacto',
    },
    projectDescription: modalES,
    presentation: {
      title: '',
      subTitle: 'Desarrollador Backend con experiencia Full Stack',
      button: 'ver mis proyectos.',
      about:
        'Resolutivo y proactivo, siempre enfocado en aportar soluciones efectivas para alcanzar los resultados esperados.',
    },
    contact: {
      name: 'Nombre',
      email: 'Email',
      message: 'Mensaje',
      submit: 'Enviar',
      errorDescription: {
        valueMissing: 'Este Campo no puede estar vacio',
        typeMismatch: 'El campo es incorrecto',
      },
    },
    modal: { hola: 'hola' },
    deploy: 'Ver Despliegue',
    repositorie: 'Ver Repositorio',
    about: () => (
      <>
        <p className="mb-3">
          <span>&#8226;</span> Más de un año de experiencia en el
          desarrollo de aplicaciones web, con un enfoque sólido en el
          backend y la construcción de soluciones escalables y
          eficientes.
        </p>
        <p className="mb-3">
          <span>&#8226; </span>
          Mi especialización se centra en el desarrollo con .NET con
          C#, Node.js y TypeScript, aplicando principios de
          arquitectura limpia y buenas prácticas de desarrollo para
          garantizar mantenibilidad y rendimiento.
        </p>
        <p className="mb-3">
          <span>&#8226; </span>
          También cuento con experiencia en React.js para la creación
          de interfaces modernas y dinámicas, integrando de forma
          fluida el frontend con el backend.
        </p>
        <p className="mb-3">
          <span>&#8226; </span>
          Actualmente desarrollo aplicaciones full stack orientadas a
          la escalabilidad y la calidad del código. Busco integrarme a
          un equipo donde pueda seguir creciendo profesionalmente,
          aportar soluciones técnicas de impacto y contribuir al éxito
          del proyecto con compromiso e innovación.
        </p>
      </>
    ),
  },
};
