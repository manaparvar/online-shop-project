import shadeLinearRgb from "@/utils/shadeLinearRgb";
import { css } from "styled-components";
import { ButtonProps } from "./buttonType";
const getHoverStyles = (props: ButtonProps) => {
  const {
    $color,
    $noHover,
    $outline,
    $textColor,
    theme: { colors },
  } = props;

  if ($noHover) return "";

  const baseColor = $color ? colors[$color as keyof typeof colors] : undefined;
  const textColor = $textColor
    ? colors[$textColor as keyof typeof colors]
    : undefined;

  const hoverBg = baseColor
    ? shadeLinearRgb({ p: 0.3, color: baseColor })
    : undefined;

  const hoverBorder = baseColor
    ? shadeLinearRgb({ p: 0.5, color: baseColor })
    : undefined;

  const hoverText = textColor
    ? shadeLinearRgb({ p: -0.5, color: textColor })
    : undefined;

  const isSolid = !$outline;

  return css`
    ${isSolid &&
    css`
      background-color: ${hoverBg};
      filter: drop-shadow(0px 2px 0px rgba(0, 0, 0, 0.25));
    `}

    border-color: ${hoverBorder};

    color: ${isSolid ? textColor : hoverText};

    svg {
      color: ${isSolid ? textColor : textColor};
    }
  `;
};

export default getHoverStyles;
