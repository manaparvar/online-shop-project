import HEADING from "./heading";
import SPACING from "@/utils/spacing";
import BUTTON from "./button";
export const theme = {
  colors: {
    grey: {
      50: "rgb(248, 247, 245)",
      100: "rgb(242, 240, 234)",
      200: "rgb(229, 224, 224)",
      300: "rgb(164, 164, 164)",
      400: "rgb(51, 51, 51)",
      500: "rgb(40, 40, 40)",
    },
    black: "rgba(24, 24, 24, 1)",
    blue: "rgba(59, 130, 246, 1)",
    brightBlue: "rgba(239, 243, 244, 1)",
    green: "rgba(16, 185, 129, 1)",
    orange: "rgb(245, 158, 11)",
    pink: "rgba(199, 29, 91, 1)",
    red: "rgba(239, 68, 68, 1)",
    white: "rgba(255, 255, 255, 1)",
    yellow: "rgba(237, 207, 93, 1)",
    transparent: "transparent",
    text: {
      primary: "rgb(1, 1, 1)",
      muted: "rgb(164, 164, 164)",
      disabled: "rgb(209, 209, 209)",
    },
  },
  breakpoints: {
    sm: "376px",
    md: "768px",
    lg: "1290px",
    xl: "1640px",
  },
  gutterWidth: 32,
  BUTTON,
  HEADING,
  SPACING,
} as const;

export type ThemeType = typeof theme;
