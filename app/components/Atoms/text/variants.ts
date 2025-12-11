export const textVariants = {
  h1: {
    fontSize: {
      mobile: "24px",
      tablet: "28px",
      desktop: "32px",
    },
    fontWeight: 700,
  },
  h2: {
    fontSize: {
      mobile: "20px",
      tablet: "24px",
      desktop: "28px",
    },
    fontWeight: 700,
  },
  h3: {
    fontSize: {
      mobile: "20px",
      tablet: "20px",
      desktop: "18px",
    },
    fontWeight: 700,
  },
  body: {
    fontSize: {
      mobile: "14px",
      tablet: "16px",
      desktop: "16px",
    },
    fontWeight: 400,
  },
  caption: {
    fontSize: {
      mobile: "12px",
      tablet: "14px",
      desktop: "14px",
    },
    fontWeight: 300,
  },
  button: {
    fontSize: {
      mobile: "16px",
      tablet: "16px",
      desktop: "16px",
    },
    fontWeight: 500,
  },
} as const;
export type TextVariant = keyof typeof textVariants;
