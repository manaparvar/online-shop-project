/**
 * Utils - Background
 */
import { ButtonColorTypes } from "./buttonType";
const themeBackground = ({
  $color,
  $outline,
  theme,
}: ButtonColorTypes): string => {
  let color = "transparent";

  if ($outline) {
    color = "transparent";
  } else if ($color) {
    color = theme.colors[$color as keyof typeof theme.colors];
  }

  return `background-color: ${color};`;
};

export default themeBackground;
