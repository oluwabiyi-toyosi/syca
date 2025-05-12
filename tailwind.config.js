 /** @type {import('tailwindcss').Config} */
 export default {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
            okikis: "red",
            second: "#14171A",
            accent: "#657786",
            text: "#14171A",
            border: "#E1E8ED",
            hover: "#AAB8C2",
            smColor: "blue",
            mdColor: "red",
            lgColor: "green",
            xlColor: "yellow",
            "2xlColor": "purple",
          },
          screens: {
            sm: "300px",
            md: "668px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
          },
      },
    },
    plugins: [],
  }