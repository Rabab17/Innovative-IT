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
                // Light mode colors (default)
                border: '#4a4a4a',
                input: '#4a4a4a',
                ring: '#a00013',
                background: '#f0f0f0',
                // Text color for light mode (dark gray)
                foreground: '#232323', // Dark gray, almost black
                primary: {
                    DEFAULT: '#a00013',
                    foreground: '#ffffff',
                },
                secondary: {
                    DEFAULT: '#4a4a4a',
                    foreground: '#ffffff',
                },
                accent: {
                    DEFAULT: '#a00013',
                    foreground: '#ffffff',
                },
                destructive: {
                    DEFAULT: '#a00013',
                    foreground: '#ffffff',
                },
                muted: {
                    DEFAULT: '#f0f0f0',
                    foreground: '#4a4a4a',
                },
                popover: {
                    DEFAULT: '#f0f0f0',
                    foreground: '#232323',
                },
                card: {
                    DEFAULT: '#ffffff',
                    foreground: '#232323',
                },

                // Dark mode colors (prefixed with 'dark:')
                dark: {
                    border: '#7a7a7a',
                    input: '#7a7a7a',
                    ring: '#ff4c6c',
                    background: '#121212', // A darker background
                    // Text color for dark mode (white)
                    foreground: '#ffffff', // Pure white
                    primary: {
                        DEFAULT: '#ff4c6c',
                        foreground: '#ffffff',
                    },
                    secondary: {
                        DEFAULT: '#7a7a7a',
                        foreground: '#ffffff',
                    },
                    accent: {
                        DEFAULT: '#ff4c6c',
                        foreground: '#ffffff',
                    },
                    destructive: {
                        DEFAULT: '#ff4c6c',
                        foreground: '#ffffff',
                    },
                    muted: {
                        DEFAULT: '#232323',
                        foreground: '#f0f0f0',
                    },
                    popover: {
                        DEFAULT: '#1c1c1c',
                        foreground: '#f0f0f0',
                    },
                    card: {
                        DEFAULT: '#1c1c1c', // A dark card background
                        foreground: '#f0f0f0',
                    },
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
                "fade-in": {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" }
                },
                "slide-in-right": {
                    "0%": { transform: "translateX(100%)" },
                    "100%": { transform: "translateX(0)" }
                },
                "slide-in-left": {
                    "0%": { transform: "translateX(-100%)" },
                    "100%": { transform: "translateX(0)" }
                }
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "fade-in": "fade-in 0.6s ease-out",
                "slide-in-right": "slide-in-right 0.6s ease-out",
                "slide-in-left": "slide-in-left 0.6s ease-out"
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
                opensans: ['Open Sans', 'sans-serif'],
            },
        }
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;