import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        colors: {
        void: {
            950: '#0a0514',
            900: '#110b24',
            800: '#1c1335',
            700: '#2a1d4a',
        },
        gold: {
            400: '#c9a84c',
            500: '#b8923f',
        },
        neon: {
            purple: '#9b59b6',
            cyan: '#00e5ff',
        },
        },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
        boxShadow: {
        'glow': '0 0 40px rgba(185, 146, 63, 0.25)',
        'glow-lg': '0 0 80px rgba(185, 146, 63, 0.4)',
        'neon-purple': '0 0 30px rgba(155, 89, 182, 0.5)',
        'inner-glow': 'inset 0 0 20px rgba(185, 146, 63, 0.15)',
        },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
export default config