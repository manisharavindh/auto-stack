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
                bbt: {
                    black: "#0A0A0A",
                    charcoal: "#1A1A1A", // Darker for depth
                    red: "#DC2626", // Crimson Red
                    silver: "#C0C0C0", // Metallic Silver
                },
            },
            fontFamily: {
                sans: ["var(--font-roboto)", "sans-serif"],
                heading: ["var(--font-montserrat)", "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;
