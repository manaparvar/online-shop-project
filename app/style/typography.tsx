"use client";
import { theme } from "../../app/style/theme";
import styled from "styled-components";

type TextProps = {
  size?: keyof typeof theme.fontSizes;
  weight?: keyof typeof theme.fontWeights;
  color?: keyof typeof theme.colors;
};

export const Text = styled.p<TextProps>`
  font-size: ${({ theme, size }) => theme.fontSizes[size || "base"]};
  font-weight: ${({ theme, weight }) => theme.fontWeights[weight || "normal"]};
  color: ${({ theme, color }) => theme.colors[color || "dark"]};
`;
