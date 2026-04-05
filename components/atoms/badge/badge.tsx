import styled, { css } from "styled-components";
import { theme } from "@/styles/theme";

const Badge = styled.span`
  position: absolute;
  top: 8px;
  left: 8px;
  z-index: 3;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  height: 16px;
  padding: 0 5px;
  border-radius: 2px;
  background: ${theme.colors.black};
  color: ${theme.colors.white};
  font-size: 9px;
  font-weight: 700;

  @media (min-width: ${theme.breakpoints.md}) {
    width: 32px;
    min-height: 24px;
    font-size: 12px;
    border-radius: 3px;
    top: 16px;
    left: 16px;
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    width: 48px;
    min-height: 32px;
    font-size: 14px;
    top: 10px;
  }
`;
export default Badge;
