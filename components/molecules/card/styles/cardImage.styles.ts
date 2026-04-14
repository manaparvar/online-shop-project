import styled, { css } from "styled-components";
import NextImage from "next/image";
import { VariantProps } from "../card.types";
import { theme } from "@/styles/theme";

export const ImageWrapper = styled.div<VariantProps>`
  overflow: hidden;

  ${({ $variant }) =>
    $variant === "product" &&
    css`
      position: relative;
      width: 100%;
      min-height: 90px;
      margin-top: 10px;

      @media (min-width: ${theme.breakpoints.sm}) {
        width: 200px;
        min-height: 134px;
      }

      @media (min-width: ${theme.breakpoints.lg}) {
        min-height: 144px;
      }
    `}

  ${({ $variant }) =>
    $variant === "banner" &&
    css`
      position: relative;
      width: 50px;
      height: 50px;

      @media (min-width: ${theme.breakpoints.sm}) {
        width: 56px;
        height: 56px;
      }

      @media (min-width: ${theme.breakpoints.lg}) {
        height: 88px;
        width: 88px;
      }
    `}
`;

export const Image = styled(NextImage)<VariantProps>``;
