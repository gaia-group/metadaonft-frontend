// Because of compatibility with create-react-app we could not install
// Tailwind using PostCSS8. We should do what's necessary to get off of PostCSS7
// and then upgrade Tailwind + PostCSS.
// Using the instructions here: https://tailwindcss.com/docs/installation#post-css-7-compatibility-build
module.exports = {
  theme: {
    extend: {
      transitionProperty: {
        DEFAULT:
          'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, margin, padding, border, width, max-height',
        width: 'width',
        height: 'height',
        'max-h': 'max-height',
      },
      minWidth: {
        xs: '20rem',
      },
      minHeight: {
        20: '5rem',
      },
      maxHeight: {
        '3/4': '75%',
      },
      boxShadow: {
        hover: '0px 6px 16px rgba(0, 0, 0, 0.12)',
      },
      screens: {
        print: { raw: 'print' },
      },
      typography(theme) {
        return {
          DEFAULT: {
            css: {
              color: theme('colors.gray.800'),
              '[class~="lead"]': { color: theme('colors.gray.700') },
              a: {
                color: theme('colors.purple.500'),
                '&:hover': {
                  color: theme('colors.purple.400'),
                },
              },
              strong: { color: theme('colors.gray.900') },
              'ul > li::before': { backgroundColor: theme('colors.gray.800') },
              hr: { borderColor: theme('colors.gray.200') },
              blockquote: {
                color: theme('colors.gray.700'),
                borderLeftColor: theme('colors.gray.700'),
              },
              h1: { color: theme('colors.gray.900') },
              h2: { color: theme('colors.gray.900') },
              h3: { color: theme('colors.gray.900') },
              h4: { color: theme('colors.gray.900') },
              code: { color: theme('colors.gray.900') },
              'a code': { color: theme('colors.gray.900') },
              pre: {
                color: theme('colors.gray.800'),
                backgroundColor: theme('colors.gray.100'),
              },
              thead: {
                color: theme('colors.gray.900'),
                borderBottomColor: theme('colors.gray.100'),
              },
              'tbody tr': { borderBottomColor: theme('colors.gray.200') },
            },
          },
          dark: {
            css: {
              color: theme('colors.gray.200'),
              '[class~="lead"]': { color: theme('colors.gray.200') },
              a: {
                color: theme('colors.purple.500'),
                '&:hover': {
                  color: theme('colors.purple.400'),
                },
              },
              strong: { color: theme('colors.gray.100') },
              'ul > li::before': { backgroundColor: theme('colors.gray.200') },
              hr: { borderColor: theme('colors.gray.800') },
              blockquote: {
                color: theme('colors.gray.200'),
                borderLeftColor: theme('colors.gray.800'),
              },
              h1: { color: theme('colors.gray.100') },
              h2: { color: theme('colors.gray.200') },
              h3: { color: theme('colors.gray.200') },
              h4: { color: theme('colors.gray.200') },
              code: { color: theme('colors.gray.200') },
              'a code': { color: theme('colors.gray.200') },
              pre: {
                color: theme('colors.gray.200'),
                backgroundColor: theme('colors.gray.800'),
              },
              thead: {
                color: theme('colors.gray.100'),
                borderBottomColor: theme('colors.gray.800'),
              },
              'tbody tr': { borderBottomColor: theme('colors.gray.800') },
            },
          },
        }
      },
    },
  },
  variants: {
    extend: { typography: ['dark'] },
  },
  mode: 'jit',
  darkMode: 'media',
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
  purge: {
    content: ['./src/**/*.jsx', './src/**/*.html*'],
  },
}
