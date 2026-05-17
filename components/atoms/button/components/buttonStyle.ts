/**
 * atom - button - ButtonStyle
 */

// Styles
import styled, { css } from "styled-components";

// Utils
import disableStyles from "./disableStyles";
import themeBackground from "../components/themBackgroundColor";
import getSizes from "./getSizes";
import getHoverStyles from "./getHoverStyles";
import getActiveStyles from "./getActiveStyles";

// Types
import { ButtonStyledProps, ButtonColorTypes } from "./buttonType";

export const StyledButton = styled.button<ButtonStyledProps>`
  ${(props) => themeBackground(props)}
  ${getSizes()}
  ${(props) => disableStyles(props)}
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
  margin: ${({ $center }) => ($center ? "0 auto" : 0)};
  outline: none;
  overflow: visible;
  position: relative;
  text-decoration: none;
  text-transform: none;
  transition: all 0.1s ease-in-out;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  width: ${({ $block }) => ($block ? "100%" : "initial")};

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
    border-color: ${({ theme }) => theme.colors.background};
    border-style: dashed;
  }
`;
