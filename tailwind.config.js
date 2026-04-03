/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Premium Portfolio Design System
        gold: {
          50: '#FFFDF7',
          100: '#FEF7E0',
          200: '#FCEBBF',
          300: '#F9D99F',
          400: '#F6C77F',
          500: '#C9A14A', // Primary gold
          600: '#A6853D',
          700: '#836931',
          800: '#664F25',
          900: '#493819',
        },
        // iOS AR Glasses Design System
        ios: {
          blue: '#0A84FF',
          green: '#34C759',
          orange: '#FF9500',
          red: '#FF3B30',
          pink: '#FF2D55',
          purple: '#A2845E',
          cyan: '#50B1C9',
        },
        neutral: {
          50: '#F9F9F9',
          100: '#F2F2F7',
          200: '#E5E5EA',
          300: '#D1D1D6',
          400: '#C7C7CC',
          500: '#EBEBF5',
          600: '#8E8E93',
          700: '#636366',
          800: '#48484A',
          900: '#1C1C1E',
          950: '#000000',
        },
        dark: {
          950: '#030303',
          900: '#0A0A0A',
          800: '#1A1A1A',
          700: '#2D2D2D',
        },
      },
      fontFamily: {
        'display': ['var(--font-display)', 'Georgia', 'serif'],
        'body': ['var(--font-sans)', 'system-ui', 'sans-serif'],
        'mono': ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'h1': '2rem',
        'h2': '1.75rem',
        'body': '1rem',
        'caption': '0.875rem',
      },
      backdropBlur: {
        sm: '4px',
        md: '12px',
        lg: '16px',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'glow': 'glow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(10, 132, 255, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(10, 132, 255, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(rgba(10, 132, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(10, 132, 255, 0.05) 1px, transparent 1px)',
      },
      boxShadow: {
        'glow-lg': '0 0 30px rgba(10, 132, 255, 0.4)',
        'glow-md': '0 0 20px rgba(10, 132, 255, 0.3)',
        'glow-sm': '0 0 10px rgba(10, 132, 255, 0.2)',
        'gold-glow-lg': '0 0 30px rgba(201, 161, 74, 0.4)',
        'gold-glow-md': '0 0 20px rgba(201, 161, 74, 0.3)',
        'gold-glow-sm': '0 0 10px rgba(201, 161, 74, 0.2)',
        'glass': '0 8px 32px rgba(10, 132, 255, 0.15)',
        'glass-gold': '0 8px 32px rgba(201, 161, 74, 0.15)',
        'ios-shadow-sm': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'ios-shadow-md': '0 4px 12px rgba(0, 0, 0, 0.12)',
        'ios-shadow-lg': '0 8px 24px rgba(0, 0, 0, 0.16)',
        'premium-sm': '0 4px 20px rgba(0, 0, 0, 0.3)',
        'premium-md': '0 8px 40px rgba(0, 0, 0, 0.4)',
        'premium-lg': '0 16px 60px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],

};
