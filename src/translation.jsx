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
      subTitle: 'Backend Developer with Full Stack Experience',
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
            <span>&#8226;</span> Over a year of experience in web
            application development, with a strong focus on backend
            and building scalable, efficient solutions.
          </p>
          <p className="mb-3">
            <span>&#8226; </span>
            Specialized in development with .NET, Node.js, and
            TypeScript, applying clean architecture principles and
            best development practices to ensure maintainability and
            performance.
          </p>
          <p className="mb-3">
            <span>&#8226; </span>I also have experience with React.js
            for creating modern and dynamic interfaces, seamlessly
            integrating the frontend with the backend.
          </p>
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
      subTitle: 'Desarrollador Backend con Experiencia Full Stack',
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
            desarrollo de aplicaciones web, con un enfoque sólido en
            el backend y la construcción de soluciones escalables y
            eficientes.
          </p>
          <p className="mb-3">
            {' '}
            <span>&#8226; </span>
            Mi especialización se centra en el desarrollo con .NET,
            Node.js y TypeScript, aplicando principios de arquitectura
            limpia y buenas prácticas de desarrollo para garantizar
            mantenibilidad y rendimiento.
          </p>
          <p className="mb-3">
            {' '}
            <span>&#8226; </span>
            También cuento con experiencia en React.js para la
            creación de interfaces modernas y dinámicas, integrando de
            forma fluida el frontend con el backend.
          </p>

          <p className="mb-3">
            <span>&#8226; </span>
            Actualmente desarrollo aplicaciones full stack orientadas
            a la escalabilidad y la calidad del código. Busco
            integrarme a un equipo donde pueda seguir creciendo
            profesionalmente, aportar soluciones técnicas de impacto y
            contribuir al éxito del proyecto con compromiso e
            innovación.
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
