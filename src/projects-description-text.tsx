import {
  // cryptoCoin,
  cryptoMain,
  // cryptoMobile,
  speedyHome,
  // speedyRoom,
  // speedyWinner,
  tweeter1,
  AddStudent,
  // Configuration,
  // Debts,
  // PaidFee,
} from './images';
import { Project } from './types';

export const ProjectsKeys = [
  'typingGame',
  'clinicDental',
  'cryptoTracker',
  'institute',
] as const;

type ProjectsKeysKeys = (typeof ProjectsKeys)[number];

export const modalEN: Record<ProjectsKeysKeys, Project> = {
  typingGame: {
    id: '643d070f-b4e6-401c-9426-6bdefa13d35f',
    shortDescription: '',
    features: [''],
    tags: ['.NET', 'CSharp', 'React', 'TypeScript'],
    title: 'SpeedyType',
    description: (
      <>
        Real-time typing game, with normal text and javascript text,
        built using WebSockets.{' '}
        <span style={{ color: '#ea5455', fontWeight: 'semibold' }}>
          Contact me and let's compete!.
        </span>
      </>
    ),
    image: speedyHome,
    githubUrl: 'https://github.com/LucasPirez/KeyboardWarrior',
    demoUrl: 'https://keyboard-warrior-omega.vercel.app/',
  },

  clinicDental: {
    id: '6a1d2f79-c5de-4b9c-a29a-2b0df6e8e401',
    shortDescription: '',
    features: [''],
    tags: [
      'NestJs',
      'TypeScript',
      'React',
      'PostgreSQL',
      'HTML',
      'Css',
      'Docker',
    ],
    title: 'Dental clinic',
    description: (
      <>
        Allows employees and doctors to add new patients and
        employees, complete medical histories, record benefits,
        schedule appointments and generate reports.
      </>
    ),
    image: tweeter1,
    githubUrl: 'https://github.com/FooTalent/team-1',
    demoUrl: 'https://foo-talent-private.vercel.app',
  },

  cryptoTracker: {
    id: '17d44f25-0f2e-480f-bb31-feb7a33e54d8',
    shortDescription: '',
    features: [''],
    tags: ['Blazor', '.NET', 'CSharp', 'PostgreSQL'],
    title: 'Crypto Tracker',
    description: (
      <>
        Application to offer an intuitive and efficient experience in
        tracking your favorite cryptocurrencies, with dynamic charts
        and configurable price alerts.
      </>
    ),
    image: cryptoMain,
    githubUrl: 'https://github.com/LucasPirez/cryptomonedas-app',
    demoUrl: '',
  },

  institute: {
    id: '9d5b52e8-97e5-4e1c-bd1b-5cb15cc6717f',
    shortDescription: '',
    features: [''],
    tags: ['.NET', 'CSharp', 'Blazor', 'PostgreSQL'],
    title: 'Institute App',
    description: (
      <>
        Desktop and web application.{' '}
        <span style={{ color: '#ea5455', fontWeight: 'semibold' }}>
          Currently used by the client
        </span>{' '}
        to register tutors, students, configure courses, prices,
        discounts, etc.
      </>
    ),
    image: AddStudent,
    githubUrl: '',
    demoUrl: '',
  },
};

export const modalES: Record<ProjectsKeysKeys, Project> = {
  typingGame: {
    id: '543d070f-b4e6-401c-9426-6bdefa13d35f',
    shortDescription: '',
    features: [''],
    tags: ['.NET', 'CSharp', 'React', 'TypeScript'],
    title: 'SpeedyType',
    description: (
      <>
        Juego de typing en tiempo real, con texto normal y texto en
        javascript, construido usando WebSockets.{' '}
        <span style={{ color: '#ea5455', fontWeight: 'semibold' }}>
          ¡Contáctame y compitamos!.
        </span>
      </>
    ),
    image: speedyHome,
    githubUrl: 'https://github.com/LucasPirez/KeyboardWarrior',
    demoUrl: 'https://keyboard-warrior-omega.vercel.app/#/login',
  },

  clinicDental: {
    id: '4f3b12a9-7ce7-45d3-96c0-8f8a4b3b0e94',
    shortDescription: '',
    features: [''],
    tags: [
      'NestJs',
      'TypeScript',
      'React',
      'PostgreSQL',
      'HTML',
      'Css',
      'Docker',
    ],
    title: 'Clínica odontológica',
    description: (
      <>
        Permite a empleados y doctores agregar nuevos pacientes y
        empleados, completar historias médicas, registrar
        prestaciones, agendar turnos y generar reportes.
      </>
    ),
    image: tweeter1,
    githubUrl: 'https://github.com/LucasPirez/noClon-tweeter',
    demoUrl: 'https://mynext-app.web.app/',
  },

  cryptoTracker: {
    id: 'f8b1cb7b-5d6c-4933-bd25-8db4a68d0f37',
    shortDescription: '',
    features: [''],
    tags: ['Blazor', '.NET', 'CSharp', 'PostgreSQL'],
    title: 'Crypto Tracker',
    description: (
      <>
        Aplicación para ofrecer una experiencia intuitiva y eficiente
        en el seguimiento de tus criptomonedas favoritas, con gráficos
        dinámicos y alertas de precios configurables.
      </>
    ),
    image: cryptoMain,
    githubUrl: 'https://github.com/LucasPirez/cryptomonedas-app',
    demoUrl: '',
  },

  institute: {
    id: '1df1c1ea-2c1d-4d74-8a6b-89a0eec70a2e',
    shortDescription: '',
    features: [''],
    tags: ['.NET', 'CSharp', 'Blazor', 'PostgreSQL'],
    title: 'App de instituto',
    description: (
      <>
        Aplicación de escritorio y web.{' '}
        <span style={{ color: '#ea5455', fontWeight: 'semibold' }}>
          Actualmente utilizada por el cliente
        </span>{' '}
        permite registrar tutores, estudiantes, configuración de
        cursos, precios, descuentos, etc.
      </>
    ),
    image: AddStudent,
    githubUrl: '',
    demoUrl: '',
  },
};
