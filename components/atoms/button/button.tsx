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

  @media (min-width: ${theme.breakpoints.sm}) {
    font-size: 1rem;
    font-weight: bold;
    width: 124px;
    height: 32px;
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    font-size: 1rem;
    width: 136px;
    height: 40px;
  }

  ${({ $iconButton, $isFavorite }) =>
    $iconButton &&
    css`
      align-items: center;
      background-color: transparent;
      border: 1px solid ${theme.colors.grey[300]};
      display: flex;
      justify-content: center;
      margin: 0;
      padding: 0;
      width: 24px;

      svg {
        fill: ${$isFavorite ? "red" : "none"};
        width: 1rem;
      }
      @media (min-width: ${theme.breakpoints.sm}) {
        width: 32px;
        height: 32px;
      }
      @media (min-width: ${theme.breakpoints.lg}) {
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
