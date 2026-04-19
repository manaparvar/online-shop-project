/**
 *  Spacing
 */

const SPACING = (...nums: number[]): string => {
  const amount = 4;

  return nums.reduce(
    (output, n) => `${output}${n * amount}${n > 0 ? "px" : ""} `,
    "",
  );
};

export default SPACING;
