"use client";

import styled, { css } from "styled-components";
import { theme } from "../../../styles/theme";
import { textVariants } from "../../../styles/variants";
import TransientProps from "@/types/transientProps.type";
import { ReactNode } from "react";

type TextVariant = keyof typeof textVariants;

type TextProps = {
  children: ReactNode;
  variant?: TextVariant;
  color?: keyof typeof theme.colors;
  nowrap?: boolean;
  as?: React.ElementType;
};
type TextStyledProps = TransientProps<Omit<TextProps, "children">>;

const Text = ({ children, color, nowrap, variant, as = "p" }: TextProps) => {
  return (
    <StyledText as={as} $color={color} $variant={variant} $nowrap={nowrap}>
      {children}
    </StyledText>
  );
};

const StyledText = styled.p<TextStyledProps>`
  ${({ $variant = "body", theme, $nowrap }) => {
    const styles = textVariants[$variant];

    return css`
      font-size: ${styles.fontSize.mobile};
      font-weight: ${styles.fontWeight};
      white-space: ${$nowrap ? "nowrap" : "normal"};

      @media (min-width: ${theme.breakpoints.sm}) {
        font-size: ${styles.fontSize.tablet};
        font-weight: ${styles.fontWeight};
      }
      @media (min-width: ${theme.breakpoints.lg}) {
        font-size: ${styles.fontSize.desktop};
        font-weight: ${styles.fontWeight};
      }
    `;
  }}
  color: ${({ theme }) => theme.colors.black};
`;
export default Text;
