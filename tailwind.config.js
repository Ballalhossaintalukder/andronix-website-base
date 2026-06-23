const colors = require('tailwindcss/colors')
module.exports = {
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
  purge: {
    options: {
      safelist: [
        '-rotate-3', 'rotate-2', '-rotate-3', 'rotate-3', 'from-violet', 'to-primary-500', 'bg-gradient-to-r', 'from-blue-700', 'to-blue-400', 'from-purple-700', 'to-pink-900', 'from-yellow-600', 'to-red-600',
        'bg-primary-400', 'bg-purple-600', 'text-teal-400', 'bg-blue-400', 'bg-purple-400', 'bg-green-400', 'bg-indigo-400', 'bg-pink-400', 'bg-yellow-400', 'bg-red-400', 'w-10', 'w-6', 'stroke-current',
        'text-primary-400', 'text-blue-400', 'text-purple-400', 'text-green-400', 'text-indigo-400', 'text-pink-400', 'text-red-400'
        , 'text-pink-400', 'text-indigo-400', 'text-blue-400', 'text-teal-400', 'text-primary-400', 'text-purple-400', 'text-green-400', 'text-cyan-400'
        , 'text-emerald-400', 'text-yellow-400', 'text-orange-400'
        , 'bg-green-500', 'bg-blue-500', 'bg-purple-500', 'bg-yellow-500', 'bg-orange-500', 'bg-opacity-10', 'bg-opacity-20'
        , 'bg-primary-600', 'bg-primary-500', 'bg-violet'
      ]
    }
  },
  theme: {
    extend: {
      screens: {
        'xxs': {'max': '350px'},
      },
      colors: {
        trueGray: colors.trueGray,
        cyan: colors.cyan,
        teal: {
          100: '#CCFBF1',
          200: '#99F6E4',
          300: '#5EEAD4',
          400: '#2DD4BF',
          500: '#14B8A6',
          600: '#0D9488',
          700: '#0F766E',
        },
        primary: {
          100: '#ffc592',
          200: '#ffb97c',
          300: '#ffae66',
          400: '#ff9d45',
          500: '#f57e16',
          600: '#d9660a',
          700: '#b9560a',
          800: '#974607',
        },
        gradient1: '#fc4a1a',
        gradient2: '#f7b733',
        gradient3: '#F27121',
        background: '#0e0f13',
        background2: '#17181d',
        violet: '#7C3AED',
        violet2: '#9B5CFF',
        card_background: '#1a1b20',
        card_background_accent: '#26272e',
        card_background_dark: '#0a0b0e',
        card_background2: '#202127'
      },
      backgroundImage: () => ({
        'landing-pattern': 'url(\'~assets/images/background/landing_bg.svg\')',
        'final-pattern': 'url(\'~assets/images/background/final_edited.svg\')',
        'triangle-pattern': 'url(\'~assets/images/background/triangle_background.svg\')',
        'circle-pattern': 'url(\'~assets/images/background/circle_background.svg\')',
        'rect-pattern': 'url(\'~assets/images/background/square_background.svg\')',
      }),
      fontFamily: {
        'sans': ['DM Sans', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        'head': ['DM Sans', 'system-ui', 'sans-serif']
      }
    }
  }
}
