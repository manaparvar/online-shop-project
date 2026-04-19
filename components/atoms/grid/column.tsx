/**
 * Atoms - Grid - Column
 */

// Style
import { ReactNode } from "react";
import styled, { css } from "styled-components";
import { theme } from "@/styles/theme";

export interface ColumnProps {
  align?: string;
  children: ReactNode;
  className?: string;
  flex?: boolean | string;
  justify?: string;
  md?: number;
  lg?: number;
  offset?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  sm?: number;
  xl?: number;
  style?: object;
}

const Column = ({
  align = "center",
  children,
  className,

  flex = false,
  justify = "center",
  offset = {},
  sm,
  md,
  lg,
  xl,
}: ColumnProps) => {
  sm = sm === undefined ? 0 : sm;
  md = md === undefined ? sm : md;
  lg = lg === undefined ? md : lg;
  xl = xl === undefined ? lg : xl;

  offset.sm = offset?.sm !== undefined ? offset.sm : 0;
  offset.md = offset?.md !== undefined ? offset.md : offset?.sm;
  offset.lg = offset?.lg !== undefined ? offset.lg : offset?.md;
  offset.xl = offset?.xl !== undefined ? offset.xl : offset?.lg;

  return (
    <StyledColumn
      align={align}
      className={className}
      flex={flex.toString()}
      justify={justify}
      offset={offset}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
    >
      {children}
    </StyledColumn>
  );
};
const getWidth = (size?: number) => (size ? `${(size / 12) * 100}%` : "100%");

const getOffset = (offset?: number) =>
  offset ? `${(offset / 12) * 100}%` : "0%";

const StyledColumn = styled.div<Omit<ColumnProps, "className">>`
  box-sizing: border-box;
  height: 100%;
  margin-left: unset;
  min-height: 1px;
  position: relative;
  width: 100%;

  ${({ flex }) => css`
    display: ${flex === "true" && "flex"};
  `}

  ${({ align, flex }) => css`
    align-items: ${flex && align};
  `}

  ${({ flex, justify }) => css`
    justify-content: ${flex && justify};
  `}

  /* SM Medium devices  */
@media (min-width: 0) {
    flex: 0 0 ${({ sm }) => getWidth(sm)};
    max-width: ${({ sm }) => getWidth(sm)};
    margin-left: ${({ offset }) => getOffset(offset?.sm)};
  }

  /* MD Medium devices  */
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex: 0 0 ${({ md }) => getWidth(md)};
    max-width: ${({ md }) => getWidth(md)};
    margin-left: ${({ offset }) => getOffset(offset?.md)};
  }

  /* LG Large devices */
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex: 0 0 ${({ lg }) => getWidth(lg)};
    max-width: ${({ lg }) => getWidth(lg)};
    margin-left: ${({ offset }) => getOffset(offset?.lg)};
  }

  /* XL Extra large devices */
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    flex: 0 0 ${({ xl }) => getWidth(xl)};
    max-width: ${({ xl }) => getWidth(xl)};
    margin-left: ${({ offset }) => getOffset(offset?.xl)};
  }
`;

export default Column;
