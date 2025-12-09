import { speedyHome, tweeter1, mechanic, motorbike } from './images';
import { TechnologiesKey } from './tecnologies-per-project';
import { Project } from './types';

export const ProjectsKeys = [
  'mechanicApp',
  'motorbikeShopBackend',
  'typingGame',
  'clinicDental',
] as const;

type ProjectsKeysKeys = (typeof ProjectsKeys)[number];

const projectsSharedData: Record<
  ProjectsKeysKeys,
  {
    image: string;
    githubUrl: string;
    demoUrl: string;
    tags: TechnologiesKey[];
  }
> = {
  mechanicApp: {
    image: mechanic,
    githubUrl: 'https://github.com/LucasPirez/garage-system',
    tags: [
      '.NET',
      'CSharp',
      'EntityFramework',
      'PostgreSQL',
      'React',
      'TypeScript',
      'Firebase',
      'TailwindCSS',
    ],
    demoUrl: '',
  },
  motorbikeShopBackend: {
    image: motorbike,
    githubUrl:
      'https://github.com/salvador-lopez/motorbike-shop-backend-nodejs',
    demoUrl: '',
    tags: [
      'Express',
      'TypeScript',
      'Redis',
      'TDD',
      'DDD',
      'NodeJs',
      'Docker',
      'Jest',
    ],
  },
  typingGame: {
    image: speedyHome,
    githubUrl: 'https://github.com/LucasPirez/KeyboardWarrior',
    demoUrl: 'https://keyboard-warrior-omega.vercel.app/',
    tags: [
      '.NET',
      'CSharp',
      'React',
      'TypeScript',
      'TailwindCSS',
      'WebSockets',
      'SignalR',
    ],
  },
  clinicDental: {
    image: tweeter1,
    githubUrl: 'https://github.com/FooTalent/team-1',
    demoUrl: 'https://foo-talent-private.vercel.app',
    tags: [
      'NestJs',
      'TypeScript',
      'React',
      'PostgreSQL',
      'HTML',
      'Css',
      'Docker',
    ],
  },
};

export const modalEN: Record<ProjectsKeysKeys, Project> = {
  mechanicApp: {
    id: '9d5b52e8-97e5-4e1c-bd1b-5cb15cc6717f',
    shortDescription:
      'Comprehensive management system for a mechanical workshop, developed with React and .NET using a relational database, designed to optimize administrative processes and ensure data integrity.',
    features: [
      'Customer and vehicle management modules',
      'Service orders and repair tracking',
      'Relational database with Entity Framework',
      'Data validation and exception handling layer',
      'Design based on Clean Architecture principles',
      'Authentication and authorization',
      'Optimized interface for mobile and desktop environments',
    ],
    title: 'Auto Workshop Management System',
    description: (
      <>
        Management application developed with .NET and React for a
        mechanical workshop, designed to streamline customer and
        vehicle management, handle repair orders, and centralize all
        operational processes. Built under clean architecture
        principles, Entity Framework, and PostgreSql, ensuring
        scalability, maintainability, and high data consistency across
        modules.
      </>
    ),
    ...projectsSharedData.mechanicApp,
  },
  motorbikeShopBackend: {
    id: '6a1d2f79-c5de-4b9c-a29a-2b0df6e8e401',
    shortDescription:
      'RESTful backend in Node.js for a motorcycle shop, developed in collaboration with a senior developer with 14 years of experience.',
    features: [
      'REST API for customer creation',
      'Relational database with TypeORM',
      'Data validation, error handling, and custom middlewares',
      'Test-driven development (TDD) with Jest and Supertest',
      'In-memory and Redis caching to improve performance',
      'Domain-Driven Design (DDD) and clean architecture',
      'Transactions to ensure data integrity',
    ],

    title: 'Motorbike Shop Backend',
    description: (
      <>
        Backend developed in Node.js and Express for a motorcycle
        shop, structured under Clean Architecture and Domain-Driven
        Design (DDD) principles. It includes caching with Redis and
        in-memory, transaction management to ensure data integrity,
        and a Test-Driven Development (TDD) approach using Jest.
        Additionally, it features a Makefile that simplifies test
        execution and environment variable configuration, optimizing
        the project's development and maintenance workflow.
      </>
    ),
    ...projectsSharedData.motorbikeShopBackend,
  },
  typingGame: {
    id: '643d070f-b4e6-401c-9426-6bdefa13d35f',
    shortDescription:
      'Real-time typing game, with normal text and javascript text, built using WebSockets.',
    features: [
      'Real-time connection via WebSockets / SignalR.',
      'Creation and joining of private or public rooms.',
      'Individual practice mode and competition mode between players.',
      'Precise synchronization of progress and results between users.',
      'Smooth and intuitive interface with speed and accuracy metrics.',
    ],
    title: 'SpeedyType',
    description: (
      <>It allows the creation of rooms to compete in real time.</>
    ),
    ...projectsSharedData.typingGame,
  },
  clinicDental: {
    id: '2c86fcfd-6233-4a9a-a4d6-54d30949ef74',
    shortDescription:
      'System for managing a dental clinic, where I mainly contributed to backend development.',
    features: [
      'Role-based authentication and authorization (administrator, dentist, receptionist).',
      'Patient appointment booking and management system.',
      'Treatment registration and tracking via interactive odontograph.',
      'User, patient, and treatment management from the administrative panel.',
      'Control of clinical history and status for each patient.',
      'Frontend and backend integration with secure and efficient APIs.',
    ],

    title: 'Dental clinic',
    description: (
      <>
        Allows employees and doctors to add new patients and
        employees, complete medical histories, record benefits,
        schedule appointments and generate reports.
      </>
    ),
    ...projectsSharedData.clinicDental,
  },
};

export const modalES: Record<ProjectsKeysKeys, Project> = {
  mechanicApp: {
    id: '1df1c1ea-2c1d-4d74-8a6b-89a0eec70a2e',
    shortDescription:
      'Sistema integral de gestión para un taller mecánico, desarrollado con React y .NET con una base de datos relacional, diseñado para optimizar los procesos administrativos y garantizar la integridad de los datos.',
    features: [
      'Módulos de gestión de clientes y vehículos',
      'Órdenes de servicio y seguimiento de reparaciones',
      'Base de datos relacional con Entity Framework',
      'Capa de validación de datos y manejo de excepciones',
      'Diseño basado en Clean Architecture',
      'Autenticación y autorización',
      'Interfaz optimizada para entornos móbiles y escritorio',
    ],
    title: 'Sistema de Gestión de Taller Mecánico',
    description: (
      <>
        Aplicación de gestión desarrollada con .NET y React para un
        taller mecánico, diseñada para agilizar la administración de
        clientes y vehículos, gestionar órdenes de reparación y
        centralizar todos los procesos operativos. Construida bajo
        principios de clean architecture asegurando escalabilidad,
        mantenibilidad y alta consistencia de datos entre los módulos.
      </>
    ),
    ...projectsSharedData.mechanicApp,
  },
  motorbikeShopBackend: {
    id: '6a1d2f79-c5de-4b9c-a29a-2b0df6e8e401',
    shortDescription:
      'Backend REST en Node.js para tienda de motocicletas, desarrollado en colaboración con un desarrollador senior con 14 años de experiencia.',
    features: [
      'API REST para creacion de clientes',
      'Base de datos relacional con TypeORM',
      'Validación de datos, manejo de errores y middlewares personalizados',
      'TDD (Test Driven Design) con Jest y supertest',
      'Cache en memoria y con Redis, para mejorar el rendimiento',
      'DDD (Domain Driven Design) y arquitectura limpia',
      'Transacciones para asegurar la integridad de los datos',
    ],

    title: 'Motorbike Shop Backend',
    description: (
      <>
        Backend desarrollado en Node.js y Express para una tienda de
        motocicletas, estructurado bajo principios de Clean
        Architecture y Domain-Driven Design (DDD). Incluye caché con
        Redis e in-memory, manejo de transacciones para garantizar la
        integridad de los datos y una implementación de TDD
        (Test-Driven Development) con Jest. Además, cuenta con un
        Makefile que facilita la ejecución de pruebas y la
        configuración de variables de entorno, optimizando el flujo de
        desarrollo y mantenimiento del proyecto.
      </>
    ),
    ...projectsSharedData.motorbikeShopBackend,
  },
  typingGame: {
    id: '543d070f-b4e6-401c-9426-6bdefa13d35f',
    shortDescription:
      'Juego de typing en tiempo real, con texto normal y texto en javascript, construido usando WebSockets.',
    features: [
      'Conexión en tiempo real mediante WebSockets / SignalR.',
      'Creación y unión de salas (rooms) privadas o públicas.',
      'Modo práctica individual y modo competencia entre jugadores.',
      'Sincronización precisa de progreso y resultados entre usuarios.',
      'Interfaz fluida e intuitiva con métricas de velocidad y precisión.',
    ],
    title: 'SpeedyType',
    description: (
      <>Permite la creacion de rooms para competir en tiempo real.</>
    ),
    ...projectsSharedData.typingGame,
  },
  clinicDental: {
    id: '4f3b12a9-7ce7-45d3-96c0-8f8a4b3b0e94',
    shortDescription:
      'Sistema de gestión para una clínica odontológica donde participe principalmente en el desarrollo del backend.',
    features: [
      'Autenticación y autorización basada en roles (administrador, odontólogo, recepcionista).',
      'Sistema de reservas y gestión de citas de pacientes.',
      'Registro y seguimiento de tratamientos mediante odontograma interactivo.',
      'Gestión de usuarios, pacientes y tratamientos desde panel administrativo.',
      'Control de historial clínico y estado de cada paciente.',
      'Integración entre frontend y backend con APIs seguras y eficientes.',
    ],
    title: 'Clínica odontológica',
    description: (
      <>
        Permite a empleados y doctores agregar nuevos pacientes y
        empleados, completar historias médicas, registrar
        prestaciones, agendar turnos y generar reportes.
      </>
    ),
    ...projectsSharedData.clinicDental,
  },
};
