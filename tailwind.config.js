/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#8B5CF6',
          dark: '#A78BFA'
        },
        background: {
          light: '#F9FAFB',
          dark: '#1F2937'
        },
        surface: {
          light: '#FFFFFF',
          dark: '#374151'
        }
      }
    }
  }
}
