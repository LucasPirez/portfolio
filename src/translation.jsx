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
          <strong className="text-myLightRed dark:text-myDarkRed/90">
            Full Stack Developer
          </strong>{' '}
          focused on problem solving, providing solid and scalable
          solutions. I have hands-on experience in various projects
          and have specialized in{' '}
          <strong className="text-myLightPurple dark:text-purple/90">
            React.js{' '}
          </strong>{' '}
          and{' '}
          <strong className="text-myLightPurple dark:text-purple/90">
            .NET
          </strong>
          . Currently, I am looking for a job where I can demonstrate
          my determination and skills.
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
          <strong className="text-myLightRed dark:text-myDarkRed/90">
            Desarrollador Full Stack
          </strong>{' '}
          enfocado en la resolución de problemas, proporcionando
          soluciones sólidas y escalables. Tengo experiencia práctica
          en diversos proyectos y me he especializado en{' '}
          <strong className="text-myLightPurple dark:text-purple/90">
            React.js{' '}
          </strong>{' '}
          y{' '}
          <strong className="text-myLightPurple dark:text-purple/90">
            .NET
          </strong>
          . Actualmente, estoy en búsqueda de un trabajo donde pueda
          demostrar mi determinación y habilidades.
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
