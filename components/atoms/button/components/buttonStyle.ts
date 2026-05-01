/**
 * atom - button - ButtonStyle
 */

// Styles
import styled, { css } from "styled-components";

// Utils
import shadeLinearRgb from "@/utils/shadeLinearRgb";
import themeBackground from "../components/themBackgroundColor";
import getSizes from "./getSizes";
import getHoverStyles from "./getHoverStyles";
import getActiveStyles from "./getActiveStyles";

// Types
import { ButtonStyledProps, ButtonColorTypes } from "./buttonType";

export const StyledButton = styled.button<ButtonStyledProps>`
  ${(props) => themeBackground(props)}
  &:hover {
    ${(props) => getHoverStyles(props)}
  }

  &:active {
    ${(props) => getActiveStyles(props)}
  }

  align-items: center;

  border: ${({ $color, $dashed, $outline, theme: { colors } }) => {
    if ($outline) {
      return `1px ${$dashed ? "dashed" : "solid"} ${colors[$color as keyof typeof colors]}`;
    } else {
      return "none";
    }
  }};

  align-items: center;
  border-radius: ${({ $rounded }) => ($rounded ? "0.25rem" : "0rem")};
  box-sizing: border-box;
  color: ${({ $textColor, theme }: ButtonColorTypes) =>
    $textColor && theme.colors[$textColor as keyof typeof theme.colors]};
  cursor: pointer;
  display: ${({ $block, $center }) =>
    $center || $block ? "flex" : "inline-flex"};

  gap: 10px;
  justify-content: center;
  line-height: 100%;
  margin: ${({ $center }) => ($center ? "auto" : 0)};
  outline: none;
  overflow: visible;
  position: relative;
  text-decoration: none;
  text-transform: none;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  width: ${({ $block }) => ($block ? "100%" : "initial")};

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${({ theme: { BUTTON }, $outline }: ButtonColorTypes) =>
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
          !$outline && shadeLinearRgb({ p: 0.3, color: BUTTON.disableColor })};
        color: ${({ theme: { BUTTON }, $outline }: ButtonColorTypes) =>
          !$outline && shadeLinearRgb({ p: -0.2, color: BUTTON.disableColor })};
      }
    `}

  ${() => getSizes()}

  transition: all 0.1s ease-in-out;

  ${({ $noPadding }) =>
    $noPadding &&
    css`
      padding: 0 0.5rem;
    `}

  /* If two buttons are next to each other */
  & + & {
    margin-top: ${({ $block }) => ($block ? "1rem" : "initial")};
  }

  &:focus-visible {
    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.white};
    border-style: dashed;
  }
`;
