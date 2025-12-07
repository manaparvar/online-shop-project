"use client";

import styled from "styled-components";
import { theme } from "../../../../styles/theme";
import { TextVariant, textVariants } from "./variants";

type ColorKey = keyof typeof theme.colors;

type TextProps = {
  variant?: TextVariant;
  color?: ColorKey;
  as?: React.ElementType;
};

export const Text = styled.p<TextProps>`
  ${({ variant }) => {
    const v: TextVariant = variant ?? "body";
    return `
  font-size: ${textVariants[v].fontSize.mobile};
  font-weight: ${textVariants[v].fontWeight};
  
    `;
  }}
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.black};
`;
