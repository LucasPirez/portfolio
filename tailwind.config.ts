import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class', '[data-mode="dark"]'],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        myBgDark: '#1d1e27',
        myBgDarkSecondary: '#282936',
        myBgLight: '#d1d5db',
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
        myDarkPurple: '#a78ce7',
        myDarkRed: '#eb9a9c',
        myLightPurple: '#8B5CF6',
        myLightLightGreen: '#a1c30d',
        myLightGreen: '#29c76f',
        myLightBlue: '#5486f3',
        myLightOrange: '#ff9f42',
        myLightCyan: '#3ec9d6',
        myLightRed: '#ea5455',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground':
            'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground':
            'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        back: {
          '0%': { opacity: '0' },
          '100%': { backgopacityround: '1' },
        },
        wiggle: {
          '0%': { transform: 'translate(0,-300px)' },
          '100%': { transform: 'translate(0,0)' },
        },
        wiggleMedia: {
          '0%': { transform: 'translate(100px,0)' },
          '100%': { transform: 'translate(0,0)' },
        },

        opacity: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },

        outProjects: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '30%': { transform: 'scale(0)', opacity: '0' },
          '100%': {
            position: 'absolute',
            transform: 'scale(0)',
            opacity: '0',
          },
        },
        inProjects: {
          '0%': { transform: 'scale(0)', position: 'absolute' },
          '50%': { transform: 'scale(0)' },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
            position: 'relative',
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 0 5px rgba(155, 202, 255, 0.5)',
          },
          '50%': {
            boxShadow:
              '0 0 20px rgba(155, 202, 255, 0.8), 0 0 30px rgba(155, 202, 255, 0.6)',
          },
        },
      },

      animation: {
        aniRot: 'rot 3s linear infinite',
        'fade-in-up': 'fade-in-up 0.3s ease-out',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      animationDelay: {
        75: '75ms',
        100: '100ms',
        150: '150ms',
        200: '200ms',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config;
