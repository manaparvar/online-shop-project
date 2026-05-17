import shadeLinearRgb from "@/utils/shadeLinearRgb";
import { css } from "styled-components";
import { ButtonType, ButtonColorTypes } from "./buttonType";

const disableStyles = (props: ButtonType) => {
  const { disabled } = props;
  return css`
    ${() =>
      disabled &&
      css`
        background-color: ${({
          theme: { BUTTON },
          $outline,
        }: ButtonColorTypes) =>
          !$outline && shadeLinearRgb({ p: 0.3, color: BUTTON.disableColor })};
        cursor: not-allowed;
        pointer-events: none;
        color: ${({ theme: { BUTTON }, $outline }: ButtonColorTypes) =>
          !$outline && shadeLinearRgb({ p: -0.2, color: BUTTON.disableColor })};
        &:hover,
        &:active {
          background-color: ${({
            theme: { BUTTON },
            $outline,
          }: ButtonColorTypes) =>
            !$outline &&
            shadeLinearRgb({ p: 0.3, color: BUTTON.disableColor })};
          color: ${({ theme: { BUTTON }, $outline }: ButtonColorTypes) =>
            !$outline &&
            shadeLinearRgb({ p: -0.2, color: BUTTON.disableColor })};
        }
      `}
  `;
};

export default disableStyles;
