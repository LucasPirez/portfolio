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
          <span>&#8226;</span> More than a year of experience in web
          application development, highlighting a strong backend bias.
        </p>
        <p className="mb-3">
          {' '}
          <span>&#8226; </span>
          My main focus is to create scalable, robust and
          problem-oriented solutions using modern technologies such as{' '}
          <strong className="text-myLightPurple dark:text-purple/90">
            React.js
          </strong>
          {' and '}
          <strong className="text-myLightPurple dark:text-purple/90">
            .NET.
          </strong>
        </p>
        <p className="mb-3">
          <span>&#8226; </span>
          Currently, I am developing full stack applications that
          integrate good development practices and scalable
          architecture. I am excited to join a company where I can
          apply my skills, continue to grow professionally and
          contribute to the achievement of the team's goals with an
          innovative and committed approach.
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
          desarrollo de aplicaciones web, destacando una sólida
          inclinación hacia el backend.
        </p>
        <p className="mb-3">
          {' '}
          <span>&#8226; </span>
          Mi enfoque principal es crear soluciones escalables,
          robustas y orientadas a resolver problemas mediante
          tecnologías modernas como{' '}
          <strong className="text-myLightPurple dark:text-purple/90">
            React.js
          </strong>
          {' y '}
          <strong className="text-myLightPurple dark:text-purple/90">
            .NET.
          </strong>
        </p>
        <p className="mb-3">
          <span>&#8226; </span>
          Actualmente, estoy desarrollando aplicaciones full stack que
          integran buenas prácticas de desarrollo y arquitectura
          escalable. Estoy entusiasmado por unirme a una empresa donde
          pueda aplicar mis habilidades, seguir creciendo
          profesionalmente y contribuir al logro de los objetivos del
          equipo con un enfoque innovador y comprometido.
        </p>
      </>
    ),
  },
};
