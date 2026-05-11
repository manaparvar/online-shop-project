import HEADING from "./heading";
import SPACING from "@/utils/spacing";
import BUTTON from "./button";
import { sizes } from "./sizes";
export const theme = {
  colors: {
    secondary: "rgb(17, 17, 17)",
    primary: "rgb(1, 1, 1)",
    info: "rgba(59, 130, 246, 1)",
    footerBackG: "rgba(239, 243, 244, 1)",
    succes: "rgba(16, 185, 129, 1)",
    warning: "rgb(245, 158, 11)",
    accent: "rgba(199, 29, 91, 1)",
    danger: "rgba(239, 68, 68, 1)",
    background: "rgba(255, 255, 255, 1)",
    yellow: "rgba(237, 207, 93, 1)",
    transparent: "transparent",
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
  sizes,
} as const;

export type ThemeType = typeof theme;
