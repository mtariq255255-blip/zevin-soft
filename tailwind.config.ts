import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        zevin: {
          background: "#F7F9FC",
          alternate: "#EEF3F8",
          featureBlue: "#E7F0FC",
          aiBackground: "#F1ECFA",
          card: "#FFFFFF",
          heading: "#0F1B2D",
          text: "#425166",
          muted: "#66758A",
          primary: "#2463D4",
          primaryHover: "#174EA6",
          lightBlue: "#DCEAFF",
          purple: "#7048C8",
          border: "#DCE3EC",
          dark: "#0F1B2D",
          footer: "#08111F",
          darkSecondary: "#B8C4D3",
        },
      },
      maxWidth: {
        zevin: "1240px",
      },
      boxShadow: {
        "zevin-soft": "0 15px 40px rgba(15, 27, 45, 0.10)",
      },
    },
  },
  plugins: [],
};

export default config;