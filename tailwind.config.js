/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#211C6A",
        "primary-light-blue": "#59B4C3",
        "secondary-green": "#74E291",
        "secondary-yellow": "#EFF396",
      },
    },
  },
  plugins: [],
};
