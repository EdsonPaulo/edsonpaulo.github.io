import { extendTheme, withDefaultVariant } from "@chakra-ui/react";

import COLORS from "./colors";
import FONTS from "./fonts";

const CustomTheme = extendTheme(
  {
    colors: {
      accent: COLORS.accent,
      light: COLORS.light,
      dark: {
        900: COLORS.dark[900],
        850: COLORS.dark[850],
        800: COLORS.dark[800],
        700: COLORS.dark[700],
        600: COLORS.dark[600],
        500: COLORS.dark[500],
      },
    },
    fonts: {
      heading: FONTS.Itim,
      body: FONTS.Itim,
    },
    styles: {
      global: {
        body: {
          bg: COLORS.dark[800],
          color: COLORS.light,
          fontSize: "16pt",
        },
        a: {
          _hover: {
            color: COLORS.accent,
            textDecoration: "none",
          },
        },
      },
    },
  },
  withDefaultVariant({
    variant: "ghost",
    components: ["IconButton", "Button"],
  })
);
export default CustomTheme;
