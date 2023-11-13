module.exports = {
  darkMode: ['class', '[data-mode="dark"]'],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        myBgDark: '#1d1e27',
        myBgDarkSecondary: '#282936',
        myBgLight: '#eff3f8',
        myBgLightSecondary: '#fefefe',
        myBgBlue: '#25283d',
        myDarkText: '#f8f8f7',
        myRose: '#d73542',
        myCyanDark: '#36aac8',
        myCyanLight: '#26a7d0',
        purple: '#b19df7',
        midnight: '#121063',
        myDarkLightCyan: '#86e0e7',
        myDarkGreen: '#93deac',
        myDarkLightBlue: '#9bcaff',
        myDarkLimonGreen: '#d4ea93',
        myDarkyellow: '#ffcf91',
        myDarkRed: '#eb9a9c',
        myLightPurple: '#8B5CF6',
        myLightLightGreen: '#a1c30d',
        myLightGreen: '#29c76f',
        myLightBlue: '#5486f3',
        myLightOrange: '#ff9f42',
        myLightCyan: '#3ec9d6',
        myLightRed: '#ea5455'
      },
      keyframes: {
        back: {
          '0%': { opacity: '0' },
          '100%': { backgopacityround: '1' }
        },
        wiggle: {
          '0%': { transform: 'translate(0,-300px)' },
          '100%': { transform: 'translate(0,0)' }
        },
        wiggleMedia: {
          '0%': { transform: 'translate(100px,0)' },
          '100%': { transform: 'translate(0,0)' }
        },

        opacity: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },

        outProjects: {
          '0%': { transform: 'scale(1)', opacity: 1 },
          '30%': { transform: 'scale(0)', opacity: 0 },
          '100%': { position: 'absolute', transform: 'scale(0)', opacity: 0 }
        },
        inProjects: {
          '0%': { transform: 'scale(0)', position: 'absolute' },
          '50%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)', opacity: 1, position: 'relative' }
        }
      },

      animation: {
        aniRot: 'rot 3s linear infinite'
      }
    }
  }
}
