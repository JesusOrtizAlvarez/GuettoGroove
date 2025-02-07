/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        foreground: '#FFFFFF',
        primary: {
          DEFAULT: '#F300FF',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#333333',
          foreground: '#FFFFFF',
        },
        muted: {
          DEFAULT: '#111111',
          foreground: '#888888',
        },
        accent: {
          DEFAULT: '#FF0000',
          foreground: '#000000',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'text-slide': 'text-slide 12s linear infinite',
      },
      keyframes: {
        'text-slide': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [],
};