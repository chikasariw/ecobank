import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			'eb-primary-ygreen': {
					'100': 'var(--eb-primary-ygreen-100)',
					'200': 'var(--eb-primary-ygreen-200)',
					'300': 'var(--eb-primary-ygreen-300)',
					'400': 'var(--eb-primary-ygreen-400)',
					'500': 'var(--eb-primary-ygreen-500)',
					'600': 'var(--eb-primary-ygreen-600)',
					'700': 'var(--eb-primary-ygreen-700)',
					'800': 'var(--eb-primary-ygreen-800)',
					'900': 'var(--eb-primary-ygreen-900)',
					DEFAULT: 'var(--eb-primary-ygreen-500)',
					foreground: 'var(--eb-primary-ygreen-100)',
					container: 'var(--eb-primary-ygreen-200)',
					'container-foreground': 'var(--eb-primary-ygreen-700)'
			},

			'eb-primary-yellow': {
					'100': 'var(--eb-primary-yellow-100)',
					'200': 'var(--eb-primary-yellow-200)',
					'300': 'var(--eb-primary-yellow-300)',
					'400': 'var(--eb-primary-yellow-400)',
					'500': 'var(--eb-primary-yellow-500)',
					'600': 'var(--eb-primary-yellow-600)',
					'700': 'var(--eb-primary-yellow-700)',
					'800': 'var(--eb-primary-yellow-800)',
					'900': 'var(--eb-primary-yellow-900)',
					DEFAULT: 'var(--eb-primary-yellow-500)',
					foreground: 'var(--eb-primary-yellow-100)',
					container: 'var(--eb-primary-yellow-200)',
					'container-foreground': 'var(--eb-primary-yellow-700)'
			},

			'eb-primary-green': {
					'100': 'var(--eb-primary-green-100)',
					'200': 'var(--eb-primary-green-200)',
					'300': 'var(--eb-primary-green-300)',
					'400': 'var(--eb-primary-green-400)',
					'500': 'var(--eb-primary-green-500)',
					'600': 'var(--eb-primary-green-600)',
					'700': 'var(--eb-primary-green-700)',
					'800': 'var(--eb-primary-green-800)',
					'900': 'var(--eb-primary-green-900)',
					DEFAULT: 'var(--eb-primary-green-800)',
					foreground: 'var(--eb-primary-green-100)',
					container: 'var(--eb-primary-green-200)',
					'container-foreground': 'var(--eb-primary-green-700)'
			},

			'eb-primary-tosca': {
					'100': 'var(--eb-primary-tosca-100)',
					'200': 'var(--eb-primary-tosca-200)',
					'300': 'var(--eb-primary-tosca-300)',
					'400': 'var(--eb-primary-tosca-400)',
					'500': 'var(--eb-primary-tosca-500)',
					'600': 'var(--eb-primary-tosca-600)',
					'700': 'var(--eb-primary-tosca-700)',
					'800': 'var(--eb-primary-tosca-800)',
					'900': 'var(--eb-primary-tosca-900)',
					DEFAULT: 'var(--eb-primary-tosca-800)',
					foreground: 'var(--eb-primary-tosca-100)',
					container: 'var(--eb-primary-tosca-200)',
					'container-foreground': 'var(--eb-primary-tosca-700)'
			},

			'eb-primary-gray': {
					'100': 'var(--eb-primary-gray-100)',
					'200': 'var(--eb-primary-gray-200)',
					'300': 'var(--eb-primary-gray-300)',
					'400': 'var(--eb-primary-gray-400)',
					'500': 'var(--eb-primary-gray-500)',
					'600': 'var(--eb-primary-gray-600)',
					'700': 'var(--eb-primary-gray-700)',
					'800': 'var(--eb-primary-gray-800)',
					'900': 'var(--eb-primary-gray-900)',
					DEFAULT: 'var(--eb-primary-gray-800)',
					foreground: 'var(--eb-primary-gray-100)',
					container: 'var(--eb-primary-gray-200)',
					'container-foreground': 'var(--eb-primary-gray-700)'
			},

			background: 'hsl(var(--background))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		fontFamily: {
  			manrope: [
  				'Manrope',
  				'sans-serif'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
