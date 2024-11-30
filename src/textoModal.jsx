import {
  cryptoCoin,
  cryptoMain,
  cryptoMobile,
  speedyHome,
  speedyRoom,
  speedyWinner,
  tweeter1,
  tweeter2,
  tweeter3,
  tweeter4,
  AddStudent,
  Configuration,
  Debts,
  PaidFee,
} from './images';

const images = {
  tweeter: [tweeter1, tweeter2, tweeter3, tweeter4],
  typingGame: [speedyRoom, speedyHome, speedyWinner],
  cryptoTracker: [cryptoMain, cryptoCoin, cryptoMobile],
  institute: [AddStudent, Configuration, Debts, PaidFee],
};

export const modalEN = {
  typingGame: {
    title: 'SpeedyType',
    description:
      'SpeedyType is a real-time web application designed to improve typing skills through friendly competitions with normal or code text. The application allows users to create and join rooms to participate in typing competitions. It uses SignalR for real-time communication between the server and the clients, ensuring a smooth and reactive experience. The application is built with a React frontend and a .NET backend.',
    images: images.typingGame,
    repositorie: 'https://github.com/LucasPirez/KeyboardWarrior',
    deploy: 'https://speedytype-gamma.vercel.app/',
  },
  tweeter: {
    title: 'Social Network ',
    description:
      'Minimalist social network inspired by twitter features, made with Nextjs and firebase, with authentication system using Google or GitHub, chat with new message notification, ability to upload images, comments and views of posts made by author and likes.',
    images: images.tweeter,
    repositorie: 'https://github.com/LucasPirez/noClon-tweeter',
    deploy: 'https://mynext-app.web.app',
  },
  cryptoTracker: {
    title: 'Crypto Tracker',
    description:
      "This cryptocurrency application was developed using the CoinGecko API in Nextjs and the backend in .NET, which makes it highly reliable and efficient in terms of performance. The application features a search system for cryptocurrencies available in the API, and a cryptocurrency price alert system where users receive notifications via email. In addition, it offers detailed candlestick and line charts, which provide a complete overview of the performance of different coins over time. But that's not all, the application also takes full advantage of all the information provided by the CoinGecko API, offering a wide variety of relevant data for each coin, such as its price, market capitalization, transaction volume and more.",
    images: images.cryptoTracker,
    repositorie: 'https://github.com/LucasPirez/cryptomonedas-app',
    deploy: '',
  },
  institute: {
    title: 'Instite App',
    description:
      'This desktop and web application, developed for a client in .Net and Blazor/razor, has functionalities such as student control. Register student tutors. Course configuration, prices, discounts, etc. Register payments of students adding a configurable discount if you have siblings, the application generates the registration of several payments in a single action if necessary, generation of debtors with the possibility of settling debt with the corresponding percentage of overdue month.',
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
          Contactame para que compitamos.
        </span>
      </>
    ),

    images: images.typingGame,
    repositorie: 'https://github.com/LucasPirez/KeyboardWarrior',
    deploy: 'https://speedytype-gamma.vercel.app',
  },
  tweeter: {
    title: 'Red Social',
    description:
      'Red social minimalista con inspiracion en funcionalidades de twitter, realizada con Nextjs y firebase, cuenta con sistema de autenticacion utilizando Google o GitHub, chat con aviso de nuevo mensaje, posibilidad de subir imagenes, comentarios y vistas de publicaciones realizadas segun autor Y likes.',
    images: images.tweeter,
    repositorie: 'https://github.com/LucasPirez/noClon-tweeter',
    deploy: 'https://mynext-app.web.app/',
  },
  cryptoTracker: {
    title: 'Crypto Tracker',
    description:
      'Esta aplicación de criptomonedas fue desarrollada utilizando la API de CoinGecko en Nextjs y el backend en .NET, lo que la hace altamente confiable y eficiente en términos de rendimiento. La aplicación cuenta con un sistema de búsqueda de las criptomonedas disponibles en la API, y un sistema de alerta de precios de criptomonedas donde usuarios  reciben notificaciones via email. Además, ofrece gráficos detallados de velas y lineales, que proporcionan una visión  completa del rendimiento de las distintas monedas en el tiempo. Pero eso no es todo, la aplicación también aprovecha al máximo toda la información proporcionada por la API de CoinGecko, ofreciendo una amplia variedad de datos relevantes para cada moneda, como su precio, capitalización de mercado, volumen de transacciones y más.',
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
