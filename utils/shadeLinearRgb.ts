/**
 * Utils - Colour - Shade Linear RGB
 */

// UI

interface shadeLinearRgbProps {
  p: number;
  color: any;
}

const shadeLinearRgb = ({ p, color = "" }: shadeLinearRgbProps): string => {
  const i = parseInt;
  const r = Math.round;
  const [a, b, c, d] = color.split(",");

  let P: boolean | number = p < 0;
  const t = P ? 0 : 255 * p;
  P = P ? 1 + p : 1 - p;

  return (
    "rgb" +
    (d ? "a(" : "(") +
    r(i(a[3] === "a" ? a.slice(5) : a.slice(4)) * P + t) +
    "," +
    r(i(b) * P + t) +
    "," +
    r(i(c) * P + t) +
    (d ? "," + d : ")")
  );
};

export default shadeLinearRgb;
