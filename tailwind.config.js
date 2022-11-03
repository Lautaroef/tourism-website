module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        firstNav: "#1d1d21",
        secondNav: "#5666ad",
        titleColor: "#4b57a5",
        toggleTextColor: "#B6B3C4",
        toggleBgColor: "#34333b",
        toggleHoverBg: "#424149",
        toggleBorderBottom: "rgba(255,255,255,.06)",
        modalBg: "rgb(0, 55, 98)",
        modalBgWindow: "#333",
        lightGray: "#f5f5f5",
        textGray: "#777",
      },
      maxWidth: {
        "6xl": "1120px",
      },
      spacing: {
        modalWidth: "600px",
        modalHeight: "65vh",
        leftMargin: "20%",
        "15px": "15px",
      },
      fontSize: {
        "10px": "10px",
        tiny: "13px",
        "14px": "14px",
        "2vw": "2vw",
        "2.5vw": "2.5vw",
        "3vw": "3vw",
        "3.5vw": "3.5vw",
        "4.6vw": "4.6vw",
        "4vw": "4vw",
      },
      borderRadius: {
        "5px": "5px",
      },
    },
    screens: {
      xsm: "475px",
      sm: "560px",
      smMd: "670px",
      tablets: "780px",
      md: "900px",
      lg: "990px",
      xl: "1200px",
      "2xl": "1536px",
    },
    fontFamily: {
      Poppins: "Poppins, Raleway, Arial",
      Raleway: "Raleway, Poppins, Arial",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
