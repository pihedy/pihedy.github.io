/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'dark',
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                background: '#0c0917',
                primary: '#5B3FA3',
            },
        },
    },
    plugins: [],
}