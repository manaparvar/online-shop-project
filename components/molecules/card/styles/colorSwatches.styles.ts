import styled, { css } from "styled-components";
import { SwatchProps } from "../card.types";
import { theme } from "@/styles/theme";

export const SwatchesWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
  margin-top: 8px;
  margin-right: 8px;
  justify-content: flex-end;
`;

export const SwatchButton = styled.button<SwatchProps>`
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  padding: 0;
  cursor: pointer;
  background: ${({ $color }) => $color};
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.06);
  }

  ${({ $active }) =>
    $active &&
    css`
      box-shadow: 0 0 0 1px #11111157;
    `}

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.08);
    pointer-events: none;
  }
  @media (min-width: ${theme.breakpoints.desktop}) {
    width: 16px;
    min-height: 16px;
    top: 10px;
  }
  @media (min-width: ${theme.breakpoints.tablet}) {
    width: 12px;
    min-height: 12px;

    top: 5px;
    right: 5px;
  }
`;
