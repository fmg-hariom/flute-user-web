import { Secular_One } from "next/font/google"
import type { Config } from "tailwindcss"
 

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1850px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sans: ['Poppins'],
        Secular_One: ['Secular One', 'sans-serif'],
          // Custom font families added from @font-face declarations
        charter: ['charterregular', 'sans-serif'],       // Regular font
        charterBold: ['charterbold', 'sans-serif'],       // Bold font
        charterItalic: ['charteritalic', 'sans-serif'],   // Italic font
        charterBoldItalic: ['charterbold_italic', 'sans-serif'], // Bold Italic font
      },
      maxWidth: {
        '1/2': '50%',
      },
      minWidth: {
        '1/2': '50%',
      },
    },
    screens: {
      'xsm': '360px',

      'sm': '576px',

      'md': '768px',

      'lg': '960px',

      'xlg': '1260px',

      'xl': '1440px',

      '2xl': '1536px',
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config