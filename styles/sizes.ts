export const sizes = {
  xs: 8,
  sm: 16,
  md: 24,
  lg: 32,
  xlg: 40,
  xl: 48,
  "2xl": 64,
  "3xl": 96,
  "4xl": 128,
  "5xl": 192,
  "6xl": 256,
} as const;

export type SizeKey = keyof typeof sizes;
