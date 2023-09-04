module.exports = {
  darkMode: ['class', '[data-mode="dark"]'],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        myBgDark: '#212124',
        myBgBlue: '#25283d',
        myDarkText: '#f8f8f7',
        myRose: '#d73542',
        purple: '#3f3cbb',
        midnight: '#121063'
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
