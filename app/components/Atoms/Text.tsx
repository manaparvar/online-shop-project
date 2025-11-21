"use client";

import styled from "styled-components";
import { theme } from "../../style/theme";
import { textVariants } from "./typography/variants";

// Clean type names
type Variant = keyof typeof textVariants;
type ColorKey = keyof typeof theme.colors;

// convert string weight → numeric weight
const weightMap = {
  light: 300,
  normal: 400,
  bold: 700,
} as const;

type TextProps = {
  variant?: Variant;
  color?: ColorKey;
  as?: React.ElementType;
};

export const Text = styled.p<TextProps>`
  font-size: ${({ variant }) => {
    const v = variant ?? "desktopBody";
    return textVariants[v].size;
  }};

  font-weight: ${({ variant }) => {
    const v = variant ?? "desktopBody";
    const weightKey = textVariants[v].weight; // "normal" | "bold" | ...
    return weightMap[weightKey];
  }};

  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.black};
`;
