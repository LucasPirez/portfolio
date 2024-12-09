import { modalEN, modalES } from './textoModal';

export const recursos = {
  projects: {
    title: {
      ReactNative: 'React Native',
      Django: 'Django',
      React: 'React-Js',
    },
  },
};

export const translation = {
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
      portfolio: 'Portfolio',
      contact: 'Contact',
    },
    presentation: {
      title: '',
      subTitle: 'Full Stack Developer',
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
    modal: modalEN,
    deploy: 'View Deploy',
    repositorie: 'View Repository',
    about: {
      about: () => (
        <>
          <p className="mb-3">
            <span>&#8226;</span> More than a year of experience in web
            application development, highlighting a strong backend
            bias.
          </p>
          <p className="mb-3">
            {' '}
            <span>&#8226; </span>
            My main focus is to create scalable, robust and
            problem-oriented solutions using modern technologies such
            as{' '}
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
      description1: {
        title: 'Problem Solver',
        description:
          'High capacity to provide efficient solutions to real-world challenges.',
      },
      description2: {
        title: 'Versatile',
        description:
          'Highly adaptable to new work environments without affecting my performance.',
      },
      description3: {
        title: 'Fast',
        description: 'fast designs without compromising quality',
      },
      description4: {
        title: 'Teamwork',
        description:
          "Willingness to actively participate in a common goal, subordinating personal interests to the team's objectives.",
      },
    },
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
      portfolio: 'Portafolio',
      contact: 'Contacto',
    },
    presentation: {
      title: '',
      subTitle: 'Desarrollador Full Stack',
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
    modal: modalES,
    deploy: 'Ver Despliegue',
    repositorie: 'Ver Repositorio',
    about: {
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
            Actualmente, estoy desarrollando aplicaciones full stack
            que integran buenas prácticas de desarrollo y arquitectura
            escalable. Estoy entusiasmado por unirme a una empresa
            donde pueda aplicar mis habilidades, seguir creciendo
            profesionalmente y contribuir al logro de los objetivos
            del equipo con un enfoque innovador y comprometido.
          </p>
        </>
      ),
      description1: {
        title: 'Solucionador de problemas',
        description:
          'Alta capacidad para dar soluciones eficientes a los retos del mundo real.',
      },
      description2: {
        title: 'Versatil',
        description:
          'Altamente adaptable a nuevos entornos de trabajo si afectar mi rendimiento.',
      },
      description3: {
        title: 'Rapido',
        description: 'diseños rapidos sin dejar de lado la calidad',
      },
      description4: {
        title: 'Trabajo en equipo',
        description:
          'Predisposicion a participar activamente en una meta común subordinando los intereses personales a los objetivos del equipo',
      },
    },
  },
};
