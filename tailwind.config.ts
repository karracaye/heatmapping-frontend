import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'plus-jakarta-sans': [ 'Plus Jakarta Sans', 'sans-serif' ]
            },
            colors: {
                'guardsman-red': '#CF0000',
            },
            keyframes: {
                loading: {
                    from: { width: '0' },
                    to: { width: '100%' },
                },
            },
        },
    },
    plugins: [],
}

export default config;
