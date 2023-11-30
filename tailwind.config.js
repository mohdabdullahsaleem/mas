const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
    theme: {
        extend: {}
    },
    plugins: [
        plugin(function ({ addVariant }) {
            addVariant('optional', '&:optional')
            addVariant('group-optional', ':merge(.group):optional &')
            addVariant('peer-optional', ':merge(.peer):optional ~ &')
        })
    ]
}
