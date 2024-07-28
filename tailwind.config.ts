import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': { 'min': '640px', 'max': '767px'},
      'md': { 'min': '768px', 'max': '1023px'},
      'lg': { 'min': '1024px', 'max': '1279px'},
      'xl': { 'min': '1280px', 'max': '1535px'},
      '2xl': { 'min': '1536px'},
    },
    extend: {
      colors: {
        'guardsman-red': '#CF0000',
      },
      fontFamily: {
        'plus-jakarta-sans': ['Plus Jakarta Sans', 'sans-serif'],
      },
      spacing: {
        'custom-table-height': 'calc(100% - 112px)',
      }
    },
  },
  plugins: [],
};
export default config;
