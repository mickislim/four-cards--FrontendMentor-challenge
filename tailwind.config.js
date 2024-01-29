/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        sm: '375px',
        lg: '1440px', 
      },
      colors: {
        // Primary colors
        primaryRed: 'hsl(0, 78%, 62%)',
        primaryCyan: 'hsl(180, 62%, 55%)',
        primaryOrange: 'hsl(34, 97%, 64%)',
        primaryBlue: 'hsl(212, 86%, 64%)',

        // Neutral
        VeryDarkBlue: 'hsl(234, 12%, 34%)',
        GrayishBlue: 'hsl(229, 6%, 66%)',
        VeryLightGray: 'hsl(0, 0%, 98%)',
      },
      fontFamily: {
        custom: ['Poppins', 'sans'],
      },
      fontSize: {
        'base': '1.7rem',
        'text-sm': '0.8rem',
        'text-lg': '1.5rem',
      },
    },
  },
  plugins: [],
};