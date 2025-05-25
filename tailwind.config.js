

export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}", 
  ],
  theme: {
    
    extend: {
      colors: {
        primary: {
          DEFAULT: "#ffffff", // light mode
          dark: "#1f2937",    // dark mode
        },
        secondary: {
          DEFAULT: "#4b5563",
          dark: "#d1d5db",
        },
        container: {
          DEFAULT: "#f9fafb",
          dark: "#111827",
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

