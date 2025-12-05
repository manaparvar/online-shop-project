"use client";

import styled from "styled-components";
import { theme } from "../../../../styles/theme";
import { textVariants } from "./variants";

// Clean type names
type TextType = keyof typeof textVariants;
type ColorKey = keyof typeof theme.colors;

// convert string weight → numeric weight
// const weightMap = {
//   light: 300,
//   normal: 400,
//   bold: 700,
// } as const;

type TextProps = {
  variant?: TextType;
  color?: ColorKey;
  as?: React.ElementType;
};

export const Text = styled.p<TextProps>`
  ${({ variant }) => {
    const v: TextType = variant ?? "body";
    return `
  font-size: ${textVariants[v].fontSize.mobile};
  font-weight: ${textVariants[v].fontWeight};
  
    `;
  }}
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.black};
`;
