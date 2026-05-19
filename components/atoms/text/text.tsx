"use client";

import styled, { css } from "styled-components";
import { textVariants } from "../../../styles/variants";
import TransientProps from "@/types/transientProps.type";
import { ReactNode } from "react";
import ColorKey from "@/types/colorKey.type";

type TextVariant = keyof typeof textVariants;

type TextProps = {
  children: ReactNode;
  className?: string;
  variant?: TextVariant;
  color?: ColorKey | string;
  nowrap?: boolean;
  as?: React.ElementType;
};
type TextStyledProps = TransientProps<Omit<TextProps, "children">>;

const Text = ({
  children,
  className,
  color,
  nowrap,
  variant,
  as = "p",
}: TextProps) => {
  return (
    <StyledText
      as={as}
      $color={color}
      $variant={variant}
      $nowrap={nowrap}
      className={className}
    >
      {children}
    </StyledText>
  );
};

const StyledText = styled.p<TextStyledProps>`
  ${({ $variant = "body", theme, $nowrap }) => {
    const styles = textVariants[$variant];
    console.log("styles :>> ", styles);

    return (
      styles &&
      css`
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
      `
    );
  }}
  color: ${({ $color, theme }) =>
    $color
      ? theme.colors[$color as keyof typeof theme.colors]
      : theme.colors.primary};
`;
export default Text;
