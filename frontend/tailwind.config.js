/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1DBF73',        // Emerald Green
        'primary-hover': '#159D5B',  // Darker Green
        'secondary': '#0F1E3C',      // Deep Navy Blue
        'accent': '#00B4F0',        // Sky Blue
        'accent-hover': '#009AD1',  // Darker Sky Blue
        'background': '#F8F9FB',    // Light Gray / Off-White
        'surface': '#FFFFFF',       // For cards
        'text': '#222222',          // Charcoal
        'text-light': '#555555',   // Lighter Gray for secondary text
        'border': '#E5E7EB',        // Border color
        'white': '#FFFFFF',
        'whatsapp': '#25D366',      // WhatsApp Green
      },
      fontFamily: {
        headline: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'button': '8px',
        'card': '16px',
      },
      boxShadow: {
        'card': '0 4px 12px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 8px 20px rgba(0, 0, 0, 0.08)',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        scroll: 'scroll 30s linear infinite',
      },
    },
  },
  plugins: [],
}
