import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        sage: '#e4e7d2',
        sage_dark: "#babdac",
        peach: '#efb26f',
        chocolate: '#9f4c0a',
        auburn: '#a7010d',
        scarlet: '#fe0000'
      },
    },
  },
  plugins: [],
} satisfies Config;
