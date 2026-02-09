/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#37ca37',
        secondary: '#188bf6',
        brand: '#6239EC',
        brandDark: '#4A2BC2',
        brandLight: '#8B6DFF',
        dark: '#1C1041',
        light: '#F8F6FF',
        faqBg: '#F3F0FF',
        textMain: '#2A2A2A',
        textLight: '#555555',
        destructive: '#ff4444',
        'destructive-foreground': '#ffffff',
        card: 'rgba(255, 255, 255, 0.9)',
        'card-foreground': '#000000',
        popover: '#ffffff',
        'popover-foreground': '#000000',
        muted: '#f1f5f9',
        'muted-foreground': '#64748b',
        accent: '#f1f5f9',
        'accent-foreground': '#0f172a',
        input: '#e2e8f0',
        ring: '#6239EC',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        tool: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0,0,0,0.08)',
        'glow': '0 0 20px rgba(98, 57, 236, 0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" }
        }
      }
    }
  },
  plugins: [],
}