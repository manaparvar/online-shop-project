export const theme = {
  colors: {
    brightGrey: "#F2F0EA",
    white: "#ffffff",
    mediumGrey: "#a4a4a4",
    black: "#010101",
    brightBlue: "#EFF3F4",
    yellow: "#EDCF5D",
    pink: "#C71D5B",
    green: "#10B981",
    orange: "#F59E0B",
    red: "#EF4444",
    blue: "#3B82F6",
    darkGrey: "#333333",
  },
} as const;

export type ThemeType = typeof theme;
