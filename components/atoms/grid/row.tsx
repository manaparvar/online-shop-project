/**
 * Atoms - Grid - Row
 */

// React
import { CSSProperties, ReactNode } from "react";

// Style
import styled, { css } from "styled-components";

// Types

export interface RowProps {
  align?: string;
  children: ReactNode;
  className?: string;
  justify?: string;
  gutter?: boolean | string;
  noWrap?: boolean | string;
  style?: CSSProperties;
}

const Row = ({
  align = "stretch",
  children,
  className,
  justify = "start",
  gutter = false,
  noWrap = false,
  style,
}: RowProps) => {
  return (
    <StyledRow
      align={align}
      className={className}
      justify={justify}
      gutter={gutter.toString()}
      noWrap={noWrap.toString()}
      style={style}
    >
      {children}
    </StyledRow>
  );
};

const StyledRow = styled.div<
  Pick<
    RowProps,
    "align" | "className" | "justify" | "gutter" | "noWrap" | "style"
  >
>`
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  flex-wrap: ${({ noWrap }): string => (noWrap === "true" ? "nowrap" : "wrap")};

  ${({ theme }) => css`
    margin-left: -${theme.gutterWidth / 2}px;
    margin-right: -${theme.gutterWidth / 2}px;
  `}

  ${({ gutter, theme }) =>
    gutter === "true" &&
    css`
      margin-left: -${theme.gutterWidth}px;
      margin-right: -${theme.gutterWidth}px;
    `}

  ${({ align }) => css`
    align-items: ${align};
  `}

  ${({ justify }) => css`
    justify-content: ${justify};
  `}
`;

export default Row;
