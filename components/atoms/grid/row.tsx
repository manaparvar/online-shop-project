/**
 * Atoms - Grid - Row
 */

// React
import { CSSProperties, ReactNode } from "react";

// Style
import styled, { css } from "styled-components";

// Types

export interface RowProps {
  align?: CSSProperties["alignItems"];
  children: ReactNode;
  className?: string;
  justify?: CSSProperties["justifyContent"];
  gutter?: boolean;
  noWrap?: boolean;
  style?: CSSProperties;
}
type StyledRowProps = Omit<
  RowProps,
  "children" | "align" | "justify" | "gutter" | "noWrap"
> & {
  $align?: string;
  $gutter?: boolean;
  $justify?: string;
  $noWrap?: boolean;
};
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
      $align={align}
      $gutter={gutter}
      $justify={justify}
      $noWrap={noWrap}
      className={className}
      style={style}
    >
      {children}
    </StyledRow>
  );
};

const StyledRow = styled.div<StyledRowProps>`
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  flex-wrap: ${({ $noWrap }): string => ($noWrap ? "nowrap" : "wrap")};

  ${({ $align }) => css`
    align-items: ${$align};
  `}

  ${({ $justify }) => css`
    justify-content: ${$justify};
  `}
`;

export default Row;
