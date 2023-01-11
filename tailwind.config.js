const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  experimental: {
    optimizeUniversalDefaults: true,
  },
  content: ['./pages/**/*.js*', './components/**/*.js*', './layouts/**/*.js*', './lib/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        '9/16': '56.25%',
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['LexieReadable', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          0: '#FBFFFF',
          100: '#E4FFFF',
          200: '#D2FFFF',
          300: '#C4FFFF',
          400: '#BAFAFF',
          500: '#8CBEC2',
          600: '#5F8286',
          700: '#334749',
          800: '#090C0D',
        },
        backupSecondary: {
          0: '#FAE2DC',
          100: '#F5C5B9',
          200: '#F1A997',
          300: '#EC8C74',
          400: '#E76F51',
          500: '#B95941',
          600: '#8B4331',
          700: '#5C2C20',
          800: '#2E1610',
        },
        secondary: {
          0: '#FFDCDD',
          100: '#FFCFCF',
          200: '#FFC7C5',
          300: '#FFC2BE',
          400: '#FFBFBA',
          500: '#C2918B',
          600: '#86645D',
          700: '#493732',
          800: '#0D0A08',
        },
        // gray: colors.neutral,
      },
      // variants: {
      //   extend: {
      //     typography: ['dark'],
      //   },
      // },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.secondary.800'),
            a: {
              color: theme('colors.secondary.600'),
              '&:hover': {
                color: `${theme('colors.secondary.700')} !important`,
              },
              code: { color: theme('colors.primary.400') },
            },
            h1: {
              color: theme('colors.secondary.900'),
            },
            h2: {
              color: theme('colors.secondary.900'),
            },
            h3: {
              color: theme('colors.secondary.900'),
            },
            'h4,h5,h6': {
              color: theme('colors.secondary.900'),
            },
            pre: {
              // Code blocks background
              backgroundColor: theme('colors.primary.600'),
            },
            code: {
              color: theme('colors.primary.400'),
              backgroundColor: theme('colors.secondary.200'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            details: {
              backgroundColor: theme('colors.secondary.100'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            hr: { borderColor: theme('colors.secondary.200') },
            'ol li::marker': {
              fontWeight: '600',
              color: theme('colors.secondary.500'),
            },
            'ul li::marker': {
              backgroundColor: theme('colors.secondary.500'),
            },
            strong: { color: theme('colors.secondary.600') },
            blockquote: {
              color: theme('colors.secondary.900'),
              borderLeftColor: theme('colors.secondary.200'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.primary.0'),
            a: {
              color: `${theme('colors.secondary.400')} !important`,
              '&:hover': {
                color: `${theme('colors.secondary.300')} !important`,
              },
              code: { color: theme('colors.secondary.400') },
            },
            h1: {
              color: theme('colors.primary.0'),
            },
            h2: {
              color: theme('colors.secondary.200'),
            },
            h3: {
              color: theme('colors.secondary.300'),
            },
            'h4,h5,h6': {
              color: theme('colors.secondary.100'),
            },
            pre: {
              // Code blocks background
              backgroundColor: theme('colors.primary.400'),
            },
            code: {
              color: theme('colors.secondary.400'),
              backgroundColor: theme('colors.primary.600'),
            },
            details: {
              backgroundColor: theme('colors.primary.600'),
            },
            hr: { borderColor: theme('colors.secondary.700') },
            'ol li::marker': {
              fontWeight: '600',
              color: theme('colors.secondary.400'),
            },
            'ul li::marker': {
              backgroundColor: theme('colors.secondary.400'),
            },
            strong: { color: theme('colors.secondary.100') },
            thead: {
              th: {
                color: theme('colors.secondary.100'),
              },
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.secondary.700'),
              },
            },
            blockquote: {
              color: theme('colors.secondary.100'),
              borderLeftColor: theme('colors.secondary.700'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tw-elements/dist/plugin'),
  ],
}
