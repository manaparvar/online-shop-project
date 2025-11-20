"use client";
import { theme } from "../../style/theme";
import styled from "styled-components";

type TextProps = {
  size?: keyof typeof theme.fontSizes;
  weight?: keyof typeof theme.fontWeights;
  color?: keyof typeof theme.colors;
  as?: React.ElementType; // برای تغییر تگ HTML
};

export const Text = styled.p<TextProps>`
  font-size: ${({ theme, size }) =>
    size ? theme.fontSizes[size] : theme.fontSizes.base};

  font-weight: ${({ theme, weight }) =>
    weight ? theme.fontWeights[weight] : theme.fontWeights.normal};

  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.yellow};
`;
