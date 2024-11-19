import type { Config } from "tailwindcss";

import { ClientConfig } from "./clientConfig";

const primaryColor = ClientConfig.theme.colors.primary;
const secondaryColor = ClientConfig.theme.colors.secondary;

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: primaryColor,
        secondary: secondaryColor,
      }
    },
  },
  plugins: [],
} satisfies Config;
