module.exports = {
  darkMode: ['class', '[data-mode="dark"]'],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
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
        }
      },

      animation: {
        aniRot: 'rot 3s linear infinite'
      }
    }
  }
}
