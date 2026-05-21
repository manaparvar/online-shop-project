import HEADING from "./heading";
import SPACING from "@/utils/spacing";
import BUTTON from "./button";
import { sizes } from "./sizes";
import shadeLinearRgb from "@/utils/shadeLinearRgb";

const baseColors = {
  secondary: "rgb(17, 17, 17)",
  primary: "rgb(1, 1, 1)",
  info: "rgba(59, 130, 246, 1)",
  neutral: "rgb(250, 248, 240)",
  footerBackG: "rgba(239, 243, 244, 1)",
  success: "rgba(16, 185, 129, 1)",
  warning: "rgb(245, 158, 11)",
  accent: "rgba(199, 29, 91, 1)",
  danger: "rgba(239, 68, 68, 1)",
  favorite: "rgb(173, 0, 0)",
  background: "rgba(255, 255, 255, 1)",
  transparent: "transparent",
} as const;

export type BaseColorName = keyof typeof baseColors;

export type ColorShade =
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 950;

const SHADE_VALUES: readonly ColorShade[] = [
  50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950,
];

const shadeToP: Record<ColorShade, number> = {
  50: 0.5,
  100: 0.35,
  200: 0.2,
  300: 0.1,
  400: 0.05,
  500: 0,
  600: -0.05,
  700: -0.1,
  800: -0.2,
  900: -0.35,
  950: -0.5,
};

function generateColorShades(
  input: Record<string, string>,
): Record<string, string> {
  const result: Record<string, string> = {};
  for (const [name, color] of Object.entries(input)) {
    for (const shade of SHADE_VALUES) {
      result[`${name}-${shade}`] = shadeLinearRgb({
        p: shadeToP[shade],
        color,
      });
    }
  }
  return result;
}

const colorShades = generateColorShades(baseColors);

export const theme = {
  colors: {
    ...baseColors,
    ...colorShades,
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
