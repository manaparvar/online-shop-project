"use client";

import styled from "styled-components";
import { theme } from "../../../../styles/theme";
import { textVariants } from "../../../../styles/variants";

type TextVariant = keyof typeof textVariants;

type TextProps = {
  variant?: TextVariant;
  color?: keyof typeof theme.colors;
  as?: React.ElementType;
};

export const Text = styled.p<TextProps>`
  ${({ variant }) => {
    const v: TextVariant = variant ?? "body";
    return `
    
      font-size: ${textVariants[v].fontSize.mobile};
      font-weight: ${textVariants[v].fontWeight};

    @media (min-width: 376px) {
      font-size: ${textVariants[v].fontSize.tablet};
      font-weight: ${textVariants[v].fontWeight};
    }
      @media (min-width: 1024px){
      font-size: ${textVariants[v].fontSize.desktop};
      
    }
    `;
  }}
  color: ${({ color }) => (color ? theme.colors[color] : theme.colors.black)};
`;
