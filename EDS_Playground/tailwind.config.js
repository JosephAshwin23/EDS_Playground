const { tokens } = require('@adaptavant/eds-brands/setmore-black');
const { createPreset } = require('@adaptavant/eds-core/tailwind');
/** @type {import('tailwindcss').Config} */
(
    module.exports = {
        content: ['./src/**/*.{js,ts,jsx,tsx}', './node_modules/@adaptavant/eds-core/dist/**/*.{js,ts,jsx,tsx}'],
        theme: {
            extend: {},
        },
        presets: [createPreset(tokens)],
        plugins: [],
        corePlugins: {
            preflight: true // Removes the reset css from tailwindcss
        },
    }
);
