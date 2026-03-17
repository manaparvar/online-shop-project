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

export const Text = styled.span<TextProps>`
  ${({ variant = "body", theme }) => {
    const styles = textVariants[variant];
    return `
    
      font-size:${styles.fontSize.mobile}; 
      font-weight: ${styles.fontWeight};

    @media (min-width: ${theme.breakpoints.tablet}) {
      font-size: ${styles.fontSize.tablet};
      font-weight: ${styles.fontWeight};
    }
      @media (min-width: ${theme.breakpoints.desktop}){
      font-size: ${styles.fontSize.desktop};
      font-weight: ${styles.fontWeight};

      
    }
    `;
  }}
  color: ${({ theme }) => theme.colors.black};
`;
