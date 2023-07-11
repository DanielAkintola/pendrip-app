/** @type {import('tailwindcss').Config} */

export default {
    mode: "jit",
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "features-pattern":
                    "url('./src/assets/images/hero-illustration.png')",
            },
        },
    },
    plugins: [],
};
