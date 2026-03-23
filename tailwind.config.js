/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        royal: {
          50: '#eef2ff',
          100: '#e0e8ff',
          200: '#c7d4ff',
          300: '#9db3ff',
          400: '#6f8cff',
          500: '#4b67ff',
          600: '#2946d4',
          700: '#223aa9',
          800: '#1d3285',
          900: '#1a2d70'
        },
        magenta: {
          50: '#fef0fa',
          100: '#fde1f6',
          200: '#fcc3ee',
          300: '#f89adf',
          400: '#f267c9',
          500: '#e43cae',
          600: '#ca2f95',
          700: '#a72679',
          800: '#8a225f',
          900: '#711f4f'
        },
        charcoal: {
          50: '#f6f7f9',
          100: '#ebedf1',
          200: '#d9dde5',
          300: '#b8bfcd',
          400: '#929eb2',
          500: '#738098',
          600: '#5a667e',
          700: '#474f63',
          800: '#313646',
          900: '#1b1f2a'
        },
        brand: {
          blue: '#223aa9',
          pink: '#e43cae',
          white: '#ffffff',
          charcoal: '#1b1f2a'
        }
      },
      boxShadow: {
        soft: '0 14px 36px rgba(16, 24, 40, 0.09)',
        premium: '0 20px 46px rgba(34, 58, 169, 0.18)',
        glow: '0 0 0 1px rgba(228, 60, 174, 0.25), 0 18px 42px rgba(34, 58, 169, 0.28)'
      },
      backgroundImage: {
        'hero-brand':
          'radial-gradient(circle at 12% 18%, rgba(77, 103, 255, 0.34), transparent 36%), radial-gradient(circle at 86% 8%, rgba(228, 60, 174, 0.30), transparent 34%), linear-gradient(138deg, #0e1422 0%, #1b1f2a 42%, #223aa9 100%)',
        'section-soft':
          'radial-gradient(circle at 90% 8%, rgba(228, 60, 174, 0.08), transparent 36%), radial-gradient(circle at 8% 92%, rgba(77, 103, 255, 0.08), transparent 40%), linear-gradient(180deg, rgba(241, 245, 255, 0.75) 0%, rgba(248, 250, 253, 0.95) 100%)'
      }
    },
  },
  plugins: [],
}
