export const sizes = {
  xs: 8,
  sm: 16,
  md: 20,
  lg: 24,
  xlg: 32,
  xxlg: 40,
  xxxlg: 48,
} as const;

export type SizeKey = keyof typeof sizes;
