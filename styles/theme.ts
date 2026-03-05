export const theme = {
  colors: {
    grey: {
      50: "rgba(245, 243, 237, 0.5)",
      100: "rgb(242, 240, 234)",
      200: "rgba(229, 224, 224)",
      300: "rgb(164, 164, 164)",
      400: "rgba(51, 51, 51)",
      500: "rgba(40, 40, 40)",
    },
    black: "rgba(24, 24, 24, 1)",
    blue: "rgba(59, 130, 246, 1)",
    brightBlue: "rgba(239, 243, 244, 1)",
    green: "rgba(16, 185, 129, 1)",
    orange: "rgba(245, 158, 11, 1)",
    pink: "rgba(199, 29, 91, 1)",
    red: "rgba(239, 68, 68, 1)",
    white: "rgba(255, 255, 255, 1)",
    yellow: "rgba(237, 207, 93, 1)",
  },
  breakpoints: {
    mobile: "0px",
    tablet: "376px",
    desktop: "1024px",
  },
} as const;

export type ThemeType = typeof theme;
