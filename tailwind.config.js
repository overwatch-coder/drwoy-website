module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'black-shade': 'linear-gradient(180deg, #302E2E 0%, #242323 9%, #292424 68%, #312E2E 100%)',
      },
      colors: {
        'primary': '#4D106B',
        'secondary': '#7C15AC',
        'light': '#ffff',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '2.2rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

