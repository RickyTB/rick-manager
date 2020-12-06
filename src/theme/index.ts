import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: mode("#f7f9f9", "#1e1e24")(props),
      },
    }),
  },
  colors: {
    primary: {
      "50": "#b8d0e0",
      "100": "#aac7da",
      "200": "#8eb5cd",
      "300": "#71a2c1",
      "400": "#5590b4",
      "500": "#457b9d",
      "600": "#386480",
      "700": "#2c4e63",
      "800": "#1f3847",
      "900": "#13212b",
    },
    accent: {
      "50": "#fee0d8",
      "100": "#fdd0c4",
      "200": "#fbb09d",
      "300": "#fa9075",
      "400": "#f9704e",
      "500": "#f75026",
      "600": "#ec3609",
      "700": "#c52d07",
      "800": "#9d2406",
      "900": "#761b04",
    },
  },
});

export default theme;
