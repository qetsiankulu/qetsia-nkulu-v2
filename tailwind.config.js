/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: { 
        inter: ['var(--font-inter)'],
        robotoMono: ['Roboto Mono', 'monospace']
      }, 
      colors: { 
        background: 'rgb(var(--background))', 
        foreground: 'rgb(var(--foreground))',
        muted: 'rgb(var(--muted))',
        accent: 'rgb(var(--accent))',
      },
      backgroundImage: { 
        'stardust-radial': 'radial-gradient(50% 50% at 50% 50%, rgba(253, 255, 80, 0.5) 0%, rgba(217, 217, 217, 0) 100%)'
      },
      boxShadow: { 
        'glass-inset': 'inset 0 17px 5px -9px rgba(254, 254,91, 0.05)',
        'glass-sm': '5px 5px 20px 0px rgba(254, 254,91, 0.3)'
      }, 
      screens: { 
        'xxs': '320px', // Extra extra small screens
        'xs': '425px',  // Extra small screens
    
      }, 
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 4.0s ease-out',
      },
    },
  },
  plugins: [],
};
