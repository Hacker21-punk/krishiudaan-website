/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Original brand mappings for compatibility
        'ku-yellow': '#faa61e',
        'ku-dark': '#0b131e',
        'ku-black': '#060d15',
        'ku-grey': '#f8fafc',
        'ku-teal': '#0f3e2e',
        
        // Modern High-Precision Agri-Tech Palette
        agri: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#0d5c3a',
          900: '#064e3b',
          950: '#022c22',
        },
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#faa61e', // core Krishi Udaan amber
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        tech: {
          dark: '#080e15',
          navy: '#0f172a',
          card: '#131e2d',
          border: 'rgba(255, 255, 255, 0.08)',
          glow: 'rgba(16, 185, 129, 0.15)',
        }
      },
      fontFamily: {
        'jakarta': ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        'urbanist': ['"Urbanist"', 'system-ui', 'sans-serif'],
        'sans': ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'glow-agri': '0 0 35px -5px rgba(16, 185, 129, 0.25)',
        'glow-gold': '0 0 35px -5px rgba(250, 166, 30, 0.3)',
        'card-elevated': '0 20px 40px -15px rgba(0, 0, 0, 0.07), 0 0 0 1px rgba(0, 0, 0, 0.04)',
        'card-dark': '0 20px 40px -15px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.08)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        }
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
