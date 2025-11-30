import styled from "styled-components";
import { LineVariants } from "./variants";
import { theme } from "./../../../style/theme";
import { ReactElement } from "react";

type Variant = keyof typeof LineVariants;
type ColorKey = keyof typeof theme.colors;

type LineProps = {
  variant?: Variant;
  color?: ColorKey;
  as?: React.ElementType;
};

export const DividerLine = styled.hr<LineProps>`
  ${variant}
`;
