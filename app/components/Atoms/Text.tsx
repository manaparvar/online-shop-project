"use client";

import styled from "styled-components";
import { theme } from "../../../styles/theme";
import { textVariants } from "./typography/variants";

// Clean type names
type TextType = keyof typeof textVariants.mobile;
type ColorKey = keyof typeof theme.colors;

// convert string weight → numeric weight
const weightMap = {
  light: 300,
  normal: 400,
  bold: 700,
} as const;

type TextProps = {
  variant?: TextType;
  color?: ColorKey;
  as?: React.ElementType;
};

export const Text = styled.p<TextProps>`
  ${({ variant }) => {
    const v: TextType = variant ?? "body";
    return `
  font-size: ${textVariants.mobile[v].size};
  font-weight: ${weightMap[textVariants.mobile[v].weight]};
  

  @media (min-width: 768px) {
    font-size: ${textVariants.tablet[v].size};
    font-weight: ${weightMap[textVariants.tablet[v].weight]};
  }

  @media (min-width: 1024px) {
    font-size: ${textVariants.desktop[v].size};
    font-weight: ${weightMap[textVariants.desktop[v].weight]};
  }
    `;
  }}
  color: ${({ theme, color }) => (color ? theme.colors[color] : "black")};
`;
