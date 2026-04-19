import shadeLinearRgb from "@/utils/shadeLinearRgb";
import { css } from "styled-components";
import { ButtonProps } from "./buttonType";

const getActiveStyles = (props: ButtonProps) => {
  const {
    $color,
    $textColor,
    $outline,
    theme: { colors },
  } = props;

  const baseColor = $color ? colors[$color as keyof typeof colors] : undefined;
  const textColor = $textColor
    ? colors[$textColor as keyof typeof colors]
    : undefined;

  const activeBorder = baseColor
    ? shadeLinearRgb({ p: -0.7, color: baseColor })
    : undefined;

  const activeText = textColor
    ? shadeLinearRgb({ p: -0.4, color: textColor })
    : undefined;

  const isSameColor = $textColor === $color;

  return css`
    border-color: ${activeBorder};

    ${!$outline &&
    css`
      color: ${textColor};
      -webkit-box-shadow: inset 0px 2px 5px 0px rgba(0, 0, 0, 0.5);
      box-shadow: inset 0px 2px 5px 0px rgba(0, 0, 0, 0.5);
    `}

    svg {
      fill: ${isSameColor ? colors.white : activeText};
    }
  `;
};

export default getActiveStyles;
