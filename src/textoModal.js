import calcImage2 from './images/captura-calculator2.jpeg';
import calcImage3 from './images/captura-calculator 3.jpeg';
import tweeter1 from './images/tweeter1.webp';
import tweeter2 from './images/tweeter2.webp';
import tweeter3 from './images/tweeter3.webp';
import tweeter4 from './images/tweeter4.webp';
import cryptoMain from './images/cripto/img-crypto-main.webp';
import cryptoMobile from './images/cripto/img-crypto-mobile.webp';
import cryptoCoin from './images/cripto/img-cypto-coin.webp';

import mobileChart from './images/cripto/mobile-chart.webp';
import mobileChartLineal from './images/cripto/mobile-chartLineal.webp';
import mobilecrypto from './images/cripto/mobile-crypto.webp';
import mobileTable from './images/cripto/mobile-table.webp';

const images = {
  tweeter: [tweeter1, tweeter2, tweeter3, tweeter4],
  calculator: [calcImage2, calcImage3],
  cryptoTracker: [cryptoMain, cryptoCoin, cryptoMobile],
  mobile: [mobileChart, mobileChartLineal, mobileTable, mobilecrypto],
};

export const modalEN = {
  calculator: {
    title: 'Calculator',
    description:
      'This application is made with React Native and TypeScript, with the ability to run on multiple platforms, it stands out for the implementation of night mode, which allows users to enjoy a visually adaptive experience, it also has a transaction history functionality that allows users to review the operations performed. All this is achieved through the use of context.',
    images: images.calculator,
    repositorie:
      'https://github.com/LucasPirez/expo-calculator-darkMode',
    deploy: '',
  },
  tweeter: {
    title: 'Social Network ',
    description:
      'Minimalist social network inspired by twitter features, made with Nextjs and firebase, with authentication system using Google or GitHub, chat with new message notification, ability to upload images, comments and views of posts made by author and likes.',
    images: images.tweeter,
    repositorie: 'https://github.com/LucasPirez/noClon-tweeter',
    deploy: 'https://mynext-app.web.app/',
  },
  cryptoTracker: {
    title: 'Crypto Tracker',
    description:
      "This cryptocurrency application was developed using the CoinGecko API in Nextjs and the backend in .NET, which makes it highly reliable and efficient in terms of performance. The application features a search system for cryptocurrencies available in the API, and a cryptocurrency price alert system where users receive notifications via email. In addition, it offers detailed candlestick and line charts, which provide a complete overview of the performance of different coins over time. But that's not all, the application also takes full advantage of all the information provided by the CoinGecko API, offering a wide variety of relevant data for each coin, such as its price, market capitalization, transaction volume and more.",
    images: images.cryptoTracker,
    repositorie: 'https://github.com/LucasPirez/cryptomonedas-app',
    deploy: '',
  },
  mobileCryptoTracker: {
    title: 'Mobile Crypto Tracker',
    description:
      'This native cryptocurrency mobile app, developed in React Native, is currently under development and already has some interesting functionalities. One of the features is the ability to add cryptocurrencies to a list of favorites, making it easier to track and manage coins. In addition, the application also offers detailed charts allowing the user to visualize the performance of different cryptocurrencies over time.  However, I look forward to adding other attractive and useful features for the user.',
    images: images.mobile,
    repositorie: 'https://github.com/LucasPirez/mobile-CryptoTracker',
    deploy: '',
  },
};

export const modalES = {
  calculator: {
    title: 'Calculadora',
    description:
      'Esta aplicación esta realizada con React Native y TypeScript, contando con la capacidad para ejecutarse en múltiples plataformas, se destaca por la implementación del modo nocturno, que permite a los usuarios disfrutar de una experiencia visualmente adaptable, también cuenta con una funcionalidad de historial de operaciones permitiendo a los usuarios revisar las operaciones realizadas. Todo esto se logra gracias al uso de context.',

    images: images.calculator,
    repositorie:
      'https://github.com/LucasPirez/expo-calculator-darkMode',
    deploy: '',
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
  mobileCryptoTracker: {
    title: 'Mobile Crypto Tracker',
    description:
      'Esta aplicación móvil nativa de criptomonedas, desarrollada en React Native, está actualmente en proceso de desarrollo y ya cuenta con algunas funcionalidades interesantes. Una de las características es la posibilidad de agregar criptomonedas a una lista de favoritos,facilitando el seguimiento y la gestión de las monedas. Además, la aplicación también ofrece gráficos detallados permitiendole al usuario visualizar el rendimiento de las distintas criptomonedas en el tiempo.  Sin embargo, espero poder agregarle otras caracteriscas atractivas y utiles para el usuario.',
    images: images.mobile,
    repositorie: 'https://github.com/LucasPirez/mobile-CryptoTracker',
    deploy: '',
  },
};
