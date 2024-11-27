/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
          colors: {
            primary: "#0E2439",
            darkmode: "#242424",
          },
        },
      },
    plugins: [],
    darkMode: 'selector',
};