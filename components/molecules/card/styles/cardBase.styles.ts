import styled, { css } from "styled-components";
import { WrapperProps } from "../card.types";
import { Title, Content } from "./cardContent.styles";
import { theme } from "@/styles/theme";

export const CardWrapper = styled.div<WrapperProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 8px;

  transition: all 0.5s ease;

  cursor: ${({ $clickable }) => ($clickable ? "pointer" : "default")};

  ${({ $variant }) =>
    $variant === "product" &&
    css`
      width: 136px;
      min-height: 192px;
      background: #f2f0ea;
      padding: 8px;
      @media (min-width: ${theme.breakpoints.sm}) {
        width: 200px;
        min-height: 320px;
      }
      @media (min-width: ${theme.breakpoints.lg}) {
        width: 216px;
        height: 344px;
      }
    `}

  ${({ $variant }) =>
    $variant === "category" &&
    css`
      width: 240px;
      height: 264px;

      @media (min-width: ${theme.breakpoints.sm}) {
        width: 200px;
        height: 216px;
      }
      @media (min-width: ${theme.breakpoints.lg}) {
        width: 296px;
        height: 336px;
      }

      align-items: center;
      justify-content: center;
      background: ${({ theme }) => theme.colors.white};
      border: 1px solid #ececec;

      @media (min-width: ${theme.breakpoints.lg}) {
        &:hover {
          transform: scale(1.05);
          box-shadow: 0px 11px 10px 0px rgba(0, 0, 0, 0.27);
          background-color: rgba(255, 255, 255, 0.75);
        }

        &:hover ${Title} {
          font-weight: 800;
        }
        &:hover ${Content} {
          background-color: rgba(255, 255, 255, 0.8);
          padding: 10px 0;
        }
        &:hover ${Overlay} {
          background-color: rgba(255, 255, 255, 0.5);
          padding: 10px 0;
        }
      }
    `}

  ${({ $variant }) =>
    $variant === "banner" &&
    css`
      align-items: center;
      display: flex;
      height: 100px;
      padding: 5px;
      width: 90px;

      @media (min-width: ${theme.breakpoints.sm}) {
        height: 120px;
        width: 100px;
      }
      @media (min-width: ${theme.breakpoints.lg}) {
        height: 180px;
        width: 116px;
      }
    `}
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.55) 0%,
    rgba(0, 0, 0, 0.08) 25%,
    rgba(0, 0, 0, 0) 50%
  );
  z-index: 1;
`;
