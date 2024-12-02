import {
  cryptoCoin,
  cryptoMain,
  cryptoMobile,
  speedyHome,
  speedyRoom,
  speedyWinner,
  tweeter1,
  AddStudent,
  Configuration,
  Debts,
  PaidFee,
} from './images';

const images = {
  tweeter: [tweeter1],
  typingGame: [speedyRoom, speedyHome, speedyWinner],
  cryptoTracker: [cryptoMain, cryptoCoin, cryptoMobile],
  institute: [AddStudent, Configuration, Debts, PaidFee],
};

export const modalEN = {
  typingGame: {
    title: 'SpeedyType',
    description: () => (
      <>
        Real-time typing game, with normal text and javascript text,
        built using WebSockets.{' '}
        <span style={{ color: '#ea5455', fontWeight: 'semibold' }}>
          Contact me and let's compete!.
        </span>
      </>
    ),
    images: images.typingGame,
    repositorie: 'https://github.com/LucasPirez/KeyboardWarrior',
    deploy: 'https://speedytype-gamma.vercel.app/',
  },
  tweeter: {
    title: 'Dental clinic',
    description:
      'Allows employees and doctors to add new patients and employees, complete medical histories, record benefits, schedule appointments and generate reports.',
    images: images.tweeter,
    repositorie: 'https://github.com/FooTalent/team-1',
    deploy: 'https://foo-talent-private.vercel.app',
  },
  cryptoTracker: {
    title: 'Crypto Tracker',
    description:
      'Application to offer an intuitive and efficient experience in tracking your favorite cryptocurrencies, with dynamic charts and configurable price alerts.',
    images: images.cryptoTracker,
    repositorie: 'https://github.com/LucasPirez/cryptomonedas-app',
    deploy: '',
  },
  institute: {
    title: 'Instite App',
    description: () => (
      <>
        Desktop and web application.{' '}
        <span style={{ color: '#ea5455', fontWeight: 'semibold' }}>
          Currently used by the client
        </span>{' '}
        to register tutors, students, configure courses, prices,
        discounts, etc.
      </>
    ),
    images: images.institute,
    repositorie: '',
    deploy: '',
  },
};

export const modalES = {
  typingGame: {
    title: 'SpeedyType',
    description: () => (
      <>
        Juego te typing en tiempo real, con texto normal y texto en
        javascript, construida usando WebSockets.{' '}
        <span style={{ color: '#ea5455', fontWeight: 'semibold' }}>
          ¡Contáctame y compitamos!.
        </span>
      </>
    ),

    images: images.typingGame,
    repositorie: 'https://github.com/LucasPirez/KeyboardWarrior',
    deploy: 'https://speedytype-gamma.vercel.app',
  },
  tweeter: {
    title: 'Clinica odontologica',
    description:
      'Permite a empleados y doctores agregar nuevos pacientes y empleados, completar historias médicas, registrar prestaciones, agendar turnos y generar reportes.',
    images: images.tweeter,
    repositorie: 'https://github.com/LucasPirez/noClon-tweeter',
    deploy: 'https://mynext-app.web.app/',
  },
  cryptoTracker: {
    title: 'Crypto Tracker',
    description:
      'Aplicacion para ofrecer una experiencia intuitiva y eficiente en el seguimiento de tus criptomonedas favoritas, con graficos dinamicos y alertas de precios configurables.',
    images: images.cryptoTracker,
    repositorie: 'https://github.com/LucasPirez/cryptomonedas-app',
    deploy: '',
  },
  institute: {
    title: 'App de instituto',
    description: () => (
      <>
        Aplicación de escritorio y web.{' '}
        <span style={{ color: '#ea5455', fontWeight: 'semibold' }}>
          Actualmente utilizada por el cliente
        </span>{' '}
        permite registrar tutores, estudiantes, configuracion de
        cursos, precios, descuentos, etc.
      </>
    ),
    images: images.institute,
    repositorie: '',
    deploy: '',
  },
};
