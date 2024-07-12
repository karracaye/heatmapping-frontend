import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'guardsman-red': '#CF0000',
      },
      fontFamily: {
        'plus-jakarta-sans': ['Plus Jakarta Sans', 'sans-serif']
      },
      gridTemplateColumns: {
        'custom': '63.00% 37.00%'
      },
      gridTemplateRows: {
        'customrow': '100% 45%'
      },
    },
  },
  plugins: [],
};
export default config;
