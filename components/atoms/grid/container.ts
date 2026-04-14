"use client";
/**
 * Atoms - Grid - Container
 */

// Style
import styled, { CSSProperties, css } from "styled-components";

interface ContainerProps {
  className?: string;
  fluid?: boolean;
  style?: CSSProperties;
}

const Container = styled.div<Omit<ContainerProps, "children">>`
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  width: ${({ fluid }) => fluid && "100%"};

  ${({ fluid, theme }) =>
    !fluid &&
    css`
      padding-left: ${theme.gutterWidth / 2}px;
      padding-right: ${theme.gutterWidth / 2}px;
    `}

  ${({ fluid }) =>
    !fluid &&
    css`
      @media (min-width: ${({ theme }): string => theme.breakpoints.sm}) {
        max-width: ${({ theme }) => theme.breakpoints.sm};
      }

      @media (min-width: ${({ theme }): string => theme.breakpoints.md}) {
        max-width: ${({ theme }): string => theme.breakpoints.md};
      }

      @media (min-width: ${({ theme }): string => theme.breakpoints.lg}) {
        max-width: ${({ theme }): string => theme.breakpoints.lg};
      }

      @media (min-width: ${({ theme }): string => theme.breakpoints.xl}) {
        max-width: ${({ theme }): string => theme.breakpoints.xl};
      }
    `}
`;

export default Container;
