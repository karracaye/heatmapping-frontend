import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
<<<<<<< HEAD
      colors: {
        'guardsman-red': '#CF0000',
      },
=======
      gridTemplateColumns: {
        'custom': '63.00% 37.00%'
        },
        gridTemplateRows: {
        'customrow': '100% 45%'
        },
>>>>>>> 44e332d842b59ee72851e642d123bac2cdf4c148
    },
  },
  plugins: [],
};
export default config;
