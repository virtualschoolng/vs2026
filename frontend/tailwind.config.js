/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#008751',        // Nigerian Green
        'primary-hover': '#006B3E',  // Darker Nigerian Green
        'secondary': '#FCD116',      // Nigerian Yellow
        'accent': '#E03C31',        // Nigerian Red
        'accent-hover': '#B82F28',  // Darker Nigerian Red
        'background': '#F5F5F5',    // Light Neutral
        'surface': '#FFFFFF',       // For cards
        'text': '#222222',          // Charcoal
        'text-light': '#555555',   // Lighter Gray for secondary text
        'border': '#E5E7EB',        // Border color
        'white': '#FFFFFF',
        'whatsapp': '#25D366',      // WhatsApp Green
      },
      fontFamily: {
        headline: ['Poppins', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
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
