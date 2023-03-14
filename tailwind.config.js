module.exports = {
  plugins: [
    require('@headlessui/tailwindcss')
  ],
  theme: {
    extend: {
      screens:{
        '3xl': '1850px' ,
        'm-xl' : {'max' : '1800px'}
      },
      colors: {
        primary: {
          orginal: "#015699",
          b2: "#001A2E",
          b3: "#012B4D",
          b4: "#013C6B",
          w2: "#4D88B7",
          w3: "#80AACC",
          w4: "#B2CCE0",
          w5: "#E5EEF5",
          w6: "#F2F6FA",
        },
        gray: {
          b1: "#191919",
          b2: "#333333",
          b3: "#4C4C4C",
          b4: "#7F7F7F",
          b5: "#999999",
          b6: "#B2B2B2",
          b7: "#E5E5E5",
          b8: "#F2F2F2",
          b9: "#FAFAFA",
        },
        error: {
          b1: "#990101",
          b2: "#AD3434",
          b3: "#C26767",
          b4: "#D69999",
          b5: "#EBCCCC",
        },
        success: {
          b1: "#019907",
          b2: "#34AD39",
          b3: "#67C26A",
          b4: "#99D69C",
          b5: "#CCEBCD",
        },
      },
    },
  },
};
