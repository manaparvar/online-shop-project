export const sizes = {
  xs: "8px",
  sm: "16px",
  md: "24px",
  lg: "32px",
  xlg: "40px",
  xl: "48px",
  "1.5xl": "56px",
  "2xl": "64px",
  "2.5xl": "72px",
  "2xlg": "80px",
  "3xl": "96px",
  "4xl": "128px",
  "4.5xl": "184px",
  "5xl": "192px",
  "6xl": "256px",
  "7xl": "336px",
  "8xl": "384px",
} as const;

export type SizeKey = keyof typeof sizes;
