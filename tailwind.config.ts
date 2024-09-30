
import type { Config } from "tailwindcss";


const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
			primary: {
				DEFAULT:  "#222222",
				hover: '#2f2f2f'
			},
			accent: {
				DEFAULT:  "#ed1d24",
				hover: '#d6001c'
			},

  			background: 'var(--background)',
  			foreground: 'var(--foreground)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		screens: {
			sm:'640px',
			md:'768px',
			lg:'960px',
			xl:'1440px',
		},
		fontFamily: {
			rajdhani: 'var(--font-rajdhani)'
		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
