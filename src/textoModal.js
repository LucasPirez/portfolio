import calcImage2 from './images/captura-calculator2.jpeg'
import calcImage3 from './images/captura-calculator 3.jpeg'
import tweeter1 from './images/tweeter1.webp'
import tweeter2 from './images/tweeter2.webp'
import tweeter3 from './images/tweeter3.webp'
import tweeter4 from './images/tweeter4.webp'
import cryptoMain from './images/cripto/img-crypto-main.webp'
import cryptoMobile from './images/cripto/img-crypto-mobile.webp'
import cryptoCoin from './images/cripto/img-cypto-coin.webp'
import imgGym from './images/img-django.webp'
import mobileChart from './images/cripto/mobile-chart.webp'
import mobileChartLineal from './images/cripto/mobile-chartLineal.webp'
import mobilecrypto from './images/cripto/mobile-crypto.webp'
import mobileTable from './images/cripto/mobile-table.webp'

const images = {
  tweeter: [tweeter1, tweeter2, tweeter3, tweeter4],
  calculator: [calcImage2, calcImage3],
  cryptoTracker: [cryptoMain, cryptoCoin, cryptoMobile],
  gymApp: [imgGym],
  mobile: [mobileChart, mobileChartLineal, mobileTable, mobilecrypto]
}

export const modalEN = {
  calculator: {
    title: 'Calculator',
    description:
      'App realized with React Native and TypeScript, utilizaiting context for theme dark and operation history',
    images: images.calculator,
    repositorie: 'https://github.com/LucasPirez/expo-calculator-darkMode',
    deploy: ''
  },
  hotel: {
    title: 'Hotel App',
    description:
      'The application I have developed in Java is an efficient and easy to use tool for keeping guest records in a hotel. Although the graphical interface was provided to me, I developed an efficient and easy to use app for keeping guest records in a hotel. With its complete functionalities and its ability to store and query data in a secure and reliable way, this application is an excellent choice to improve guest management in any hotel',
    videos: '',
    images: images.gymApp,
    repositorie: 'https://github.com/LucasPirez/hotel-challenge-alura',
    deploy: ''
  },
  tweeter: {
    title: 'Social Network ',
    description:
      'Minimalist social network inspired by twitter features, made with Nextjs and firebase, has authentication system, chat, ability to upload images, comments and views of publications made by author and likes.',
    images: images.tweeter,
    repositorie: 'https://github.com/LucasPirez/noClon-tweeter',
    deploy: 'https://mynext-app.web.app/'
  },
  cryptoTracker: {
    title: 'Crypto Tracker',
    description:
      'Application of cryptocurrencies, was made with the API of CoinGecko and Nextjs, has a search system of cryptocurrencies available in the api, a candlestick and linear graph and other information provided by the api.',
    images: images.cryptoTracker,
    repositorie: 'https://github.com/LucasPirez/cryptomonedas-app',
    deploy: ''
  },
  mobileCryptoTracker: {
    title: 'Mobile Crypto Tracker',
    description:
      'Native cryptocurrency application for mobile phones, made in React Native is still under development, for the moment has favorites and graphics. ',
    images: images.mobile,
    repositorie: 'https://github.com/LucasPirez/mobile-CryptoTracker',
    deploy: ''
  }
}

export const modalES = {
  calculator: {
    title: 'Calculadora',
    description:
      'App realizada con React Native y TypeScript, utilizando context para la implementacion de modo nocturno y con historial de operaciones',

    images: images.calculator,
    repositorie: 'https://github.com/LucasPirez/expo-calculator-darkMode',
    deploy: ''
  },
  hotel: {
    title: 'Hotel App',
    description:
      'La aplicación que he desarrollado en Java es una herramienta eficiente y fácil de usar para llevar registros de huéspedes en un hotel. A pesar de que la interfaz gráfica me fue proporcionada, desarrole una app  eficiente y fácil de usar para llevar registros de huéspedes en un hotel. Con sus funcionalidades completas y su capacidad de almacenar y consultar datos de manera segura y confiable, esta aplicación es una excelente opción para mejorar la gestión de huéspedes en cualquier hotel.',
    videos: '',
    images: images.gymApp,
    repositorie: 'https://github.com/LucasPirez/hotel-challenge-alura',
    deploy: ''
  },
  tweeter: {
    title: 'Red Social',
    description:
      'Red social minimalista con inspiracion en funcionalidades de twitter, realizada con Nextjs y firebase, cuenta con sistema de autenticacion, chat, posibilidad de subir imagenes, comentarios y vistas de publicaciones realizadas segun autor Y likes.',
    images: images.tweeter,
    repositorie: 'https://github.com/LucasPirez/noClon-tweeter',
    deploy: 'https://mynext-app.web.app/'
  },
  cryptoTracker: {
    title: 'Crypto Tracker',
    description:
      'Aplicacion de criptomonedas, se realizo con la API de CoinGecko y Nextjs, cuenta con un sistema de busqueda de las criptomonedas disponibles en la api, un grafico de velas y linear y demas informacion proporcionada por la api.',
    images: images.cryptoTracker,
    repositorie: 'https://github.com/LucasPirez/cryptomonedas-app',
    deploy: ''
  },
  mobileCryptoTracker: {
    title: 'Mobile Crypto Tracker',
    description:
      'Aplicacion de criptomonedas para moviles nativo, realizada en React Native aun se encuentra en desarrollo, por el momento tiene favoritos y los graficos.',
    images: images.mobile,
    repositorie: 'https://github.com/LucasPirez/mobile-CryptoTracker',
    deploy: ''
  }
}
