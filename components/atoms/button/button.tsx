import styled, { css } from "styled-components";
import { theme } from "@/styles/theme";

const Button = styled.button<{
  $iconButton?: boolean;
  $isFavorite?: boolean;
}>`
  border: none;
  border-radius: 2px;
  background: ${theme.colors.black};
  color: ${theme.colors.white};
  font-size: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s ease;
  width: 80px;
  height: 24px;
  margin-right: 16px;

  @media (min-width: ${theme.breakpoints.tablet}) {
    font-size: 1rem;
    font-weight: bold;
    width: 124px;
    height: 32px;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    font-size: 1rem;
    width: 136px;
    height: 40px;
  }

  ${({ $iconButton, $isFavorite }) =>
    $iconButton &&
    css`
      background-color: transparent;
      width: 24px;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid ${theme.colors.grey[300]};
      margin: 0;

      svg {
        fill: ${$isFavorite ? "red" : "none"};
        width: 1rem;
      }
      @media (min-width: ${theme.breakpoints.tablet}) {
        width: 32px;
        height: 32px;
      }
      @media (min-width: ${theme.breakpoints.desktop}) {
        font-size: 1rem;
        width: 40px;
        height: 40px;
      }
    `}

  &:hover {
    opacity: 0.9;
  }
`;
export default Button;
