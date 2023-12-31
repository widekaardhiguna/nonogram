import type { Config } from "tailwindcss"
import colors from "tailwindcss/colors"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "layered-steps": "url('/layered-steps.svg')",
      },
      keyframes: {
        contentShow: {
          from: {
            opacity: "0",
            transform: "translate(-50%, -48%) scale(0.96)",
          },
          to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
        },
        zoomIn: {
          from: {
            transform: "scale(1)",
          },
          to: {
            transform: "scale(1.1)",
          },
        },
        tiltIn: {
          from: {
            transform: "scale(1) rotate(0deg)",
          },
          to: {
            transform: "scale(1.2) rotate(-2deg)",
          },
        },
        tiltOut: {
          from: {
            transform: "scale(1.2) rotate(-2deg)",
          },
          to: {
            transform: "scale(1) rotate(0deg)",
          },
        },
      },
      animation: {
        contentShow: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        zoomIn: "zoomIn 200ms forwards",
        tiltIn: "tiltIn 300ms forwards",
        tiltOut: "tiltOut 300ms forwards",
      },
    },
    colors: {
      ...colors,
      primary: colors.emerald,
      secondary: colors.neutral,
    },
  },
  plugins: [],
}
export default config
