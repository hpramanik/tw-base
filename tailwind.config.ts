import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/primereact/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F50A23', // Main primary color
          light: '#FF5969', // Lighter version for hover
          dark: '#C1091C', // Darker version for focus or active
        },
        background: {
          light: '#ffffff',
          dark: '#000000',
        },
        text: {
          light: '#000000',
          dark: '#ffffff',
        },
        border: {
          light: '#e0e0e0',
          dark: '#333333',
        },
        surface: {
          light: '#f9f9f9', // Card and container backgrounds for light theme
          dark: '#121212', // Card and container backgrounds for dark theme
        },
        error: '#E53935',
        success: '#43A047',
        warning: '#FFB300',
        info: '#1E88E5',
      },
      boxShadow: {
        custom: '0 4px 6px rgba(0, 0, 0, 0.1)', // A subtle shadow
      },
    },
  },
  darkMode: 'class',
  plugins: [],
} satisfies Config;
