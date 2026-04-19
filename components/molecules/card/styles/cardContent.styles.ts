import styled, { css } from "styled-components";
import { VariantProps } from "../card.types";
import { theme } from "@/styles/theme";
import Heading from "@/components/atoms/heading/heading";

export const Content = styled.div<VariantProps>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  transition: all 0.2s ease;
  padding: 0px 8px;
  margin-top: 0px;
  ${({ $variant }) =>
    $variant === "banner" &&
    css`
      font-size: 12px;
      font-weight: 200;
    `}

  ${({ $variant }) =>
    $variant === "product" &&
    css`
      font-size: 10px;
    `}
    
  ${({ $variant }) =>
    $variant === "category" &&
    css`
      z-index: 2;
      align-items: center;
      text-align: center;
      width: 100%;
      background-color: rgba(255, 255, 255, 0.5);
      margin-top: 60px;

      @media (min-width: ${theme.breakpoints.sm}) {
        margin-top: 50px;
      }
      @media (min-width: ${theme.breakpoints.lg}) {
        margin-top: 168px;
      }
    `}
`;

export const Title = styled(Heading)<VariantProps>`
  margin: 0;
  transition: all 0.5s ease;

  ${({ $variant }) =>
    $variant === "product" &&
    css`
      font-size: 12px;
      font-weight: 200;
      font-family: var(--font-rubik), sans-serif;

      @media (min-width: ${theme.breakpoints.sm}) {
        font-size: 1rem;
        font-weight: bold;
      }

      @media (min-width: ${theme.breakpoints.lg}) {
        font-size: 1rem;
      }
    `}

  ${({ $variant }) =>
    $variant === "category" &&
    css`
      font-size: 2rem;
      font-weight: 200;
      font-family: var(--font-rubik), sans-serif;

      @media (min-width: ${theme.breakpoints.lg}) {
        font-size: 4rem;
      }
    `}
      ${({ $variant }) =>
    $variant === "banner" &&
    css`
      font-size: 12px;
      font-weight: 200;
      font-family: var(--font-rubik), sans-serif;
      white-space: nowrap;
      margin-top: 8px;

      @media (min-width: ${theme.breakpoints.lg}) {
        font-size: 16px;
      }
    `}
`;

export const Subtitle = styled.p<VariantProps>`
  margin: 0;
  color: ${({ $variant }) => ($variant === "banner" ? "#f3f3f3" : "#666")};
  font-size: 10px;

  ${({ $variant }) =>
    $variant === "product" &&
    css`
      font-weight: 200;
      font-family: var(--font-rubik), sans-serif;

      @media (min-width: ${theme.breakpoints.sm}) {
        font-size: 12px;
      }

      @media (min-width: ${theme.breakpoints.lg}) {
        font-size: 1rem;
      }
    `}
`;
