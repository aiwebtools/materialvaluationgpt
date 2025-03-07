
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				
				// Custom colors
				dark: '#0E0E12',
				'dark-blue': '#121224',
				neon: {
					cyan: '#0AFFE9',
					magenta: '#FF2CDF',
					blue: '#2E77F5',
					yellow: '#FFCC00',
					green: '#23D18C',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'glow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.7' },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'pulse-slow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' },
				},
				'slide-up': {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
				'slide-down': {
					'0%': { transform: 'translateY(-20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
				'slide-left': {
					'0%': { transform: 'translateX(20px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' },
				},
				'slide-right': {
					'0%': { transform: 'translateX(-20px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' },
				},
				'line-scan': {
                    '0%': { transform: 'translateY(0%)', opacity: '0' },
                    '10%': { opacity: '1' },
                    '90%': { opacity: '1' },
                    '100%': { transform: 'translateY(100%)', opacity: '0' },
                },
                'grid-fade': {
                    '0%': { opacity: '0.3' },
                    '50%': { opacity: '0.8' },
                    '100%': { opacity: '0.3' },
                },
                'laser-scan': {
                    '0%': { transform: 'translateY(0)', opacity: '0' },
                    '5%': { opacity: '0.8' },
                    '95%': { opacity: '0.8' },
                    '100%': { transform: 'translateY(100vh)', opacity: '0' },
                },
                'rotate-slow': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
                'pulse-ring': {
                    '0%': { transform: 'scale(1)', opacity: '0.5' },
                    '100%': { transform: 'scale(1.5)', opacity: '0' },
                },
                'text-flicker': {
                    '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': { opacity: '1' },
                    '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': { opacity: '0.5' },
                },
				'scale-in': {
                    '0%': { transform: 'scale(0.9)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'glow': 'glow 2s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite',
				'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
				'slide-up': 'slide-up 0.6s ease-out',
				'slide-down': 'slide-down 0.6s ease-out',
				'slide-left': 'slide-left 0.6s ease-out',
				'slide-right': 'slide-right 0.6s ease-out',
                'line-scan': 'line-scan 4s linear infinite',
                'grid-fade': 'grid-fade 3s ease-in-out infinite',
                'laser-scan': 'laser-scan 6s cubic-bezier(0.4, 0, 0.2, 1) infinite',
                'rotate-slow': 'rotate-slow 15s linear infinite',
                'pulse-ring': 'pulse-ring 1.5s cubic-bezier(0.215, 0.61, 0.355, 1) infinite',
                'text-flicker': 'text-flicker 3s linear infinite',
				'scale-in': 'scale-in 0.5s ease-out',
			},
			backgroundImage: {
                'grid-pattern': 'linear-gradient(to right, #1a1a2e 1px, transparent 1px), linear-gradient(to bottom, #1a1a2e 1px, transparent 1px)',
                'glow-dot': 'radial-gradient(circle, rgba(0, 234, 255, 0.7) 0%, rgba(0, 234, 255, 0) 70%)',
                'conic-gradient': 'conic-gradient(from 180deg at 50% 50%, #2E77F5 0deg, #FF2CDF 180deg, #0AFFE9 360deg)',
                'hero-gradient': 'radial-gradient(circle at 50% 50%, rgba(46, 119, 245, 0.2) 0%, rgba(14, 14, 18, 0) 50%)',
                'card-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
            },
			boxShadow: {
                'neon-glow': '0 0 10px rgba(10, 255, 233, 0.5), 0 0 20px rgba(10, 255, 233, 0.3), 0 0 30px rgba(10, 255, 233, 0.1)',
                'neon-magenta': '0 0 10px rgba(255, 44, 223, 0.5), 0 0 20px rgba(255, 44, 223, 0.3), 0 0 30px rgba(255, 44, 223, 0.1)',
                'neon-blue': '0 0 10px rgba(46, 119, 245, 0.5), 0 0 20px rgba(46, 119, 245, 0.3), 0 0 30px rgba(46, 119, 245, 0.1)',
                'card': '0 4px 20px rgba(0, 0, 0, 0.25)',
                'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.36)',
            },
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				mono: ['JetBrains Mono', 'monospace'],
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
