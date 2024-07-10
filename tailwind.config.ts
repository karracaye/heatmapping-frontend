import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'custom': '63.00% 37.00%'
        },
        gridTemplateRows: {
        'customrow': '330px 170px'
        },
    },
  },
  plugins: [],
};
export default config;
