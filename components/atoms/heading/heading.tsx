/**
 * Atoms - Heading
 */

// Style
import styled, { css } from "styled-components";

// Style
import { theme } from "@/styles/theme";

// Types
import TransientProps from "@/types/transientProps.type";
import type { ReactNode } from "react";

type ColorKey = keyof typeof theme.colors;
type Tags = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface HeadingProps {
  align?: string;
  children?: ReactNode;
  className?: string;
  textColor?: ColorKey;
  noMargin?: boolean;
  noWrap?: boolean;
  textDecoration?: string;
  tag: Tags;
}

type PickHeadingProps = Pick<
  HeadingProps,
  "align" | "textColor" | "noMargin" | "noWrap" | "tag" | "textDecoration"
>;

export type HeadingStyleProps = TransientProps<PickHeadingProps>;

const Heading = ({
  align,
  children,
  className,
  textColor = "primary",
  noMargin,
  noWrap = false,
  tag = "h1",
  textDecoration,
}: HeadingProps) => {
  return (
    <StyledHeading
      $align={align}
      as={`${tag}` as "h1"}
      className={className}
      $textColor={textColor}
      $noMargin={noMargin}
      $noWrap={noWrap}
      $tag={tag}
      $textDecoration={textDecoration}
    >
      {children}
    </StyledHeading>
  );
};
const fontSizes = ({
  screen,
  $tag,
  HEADING,
}: {
  screen: string;
  $tag: Tags;
  HEADING: typeof theme.HEADING;
}) => {
  const headingStyle = HEADING[$tag as keyof typeof HEADING];
  const fontSize = headingStyle.fontSize;

  switch (screen) {
    case "sm":
      return css`
        font-size: ${fontSize.mobile};
      `;
    case "md":
      return css`
        font-size: ${fontSize.tablet};
      `;
    case "lg":
      return css`
        font-size: ${fontSize.desktop};
      `;
    default:
      return css`
        font-size: ${fontSize.mobile};
      `;
  }
};

const StyledHeading = styled.span<HeadingStyleProps>`
  color: ${({ theme, $textColor }) =>
    theme.colors[$textColor as keyof typeof theme.colors]};

  font-weight: normal;
  position: relative;
  text-align: ${({ $align }) => $align};

  ${({ $noMargin, $tag, theme: { HEADING }, $textDecoration = "none" }) => css`
    ${fontSizes({ screen: "sm", $tag, HEADING })}
    @media (min-width: ${theme.breakpoints.sm}) {
      ${fontSizes({ screen: "sm", $tag, HEADING })}
    }
    @media (min-width: ${theme.breakpoints.md}) {
      ${fontSizes({ screen: "md", $tag, HEADING })}
    }
    @media (min-width: ${theme.breakpoints.lg}) {
      ${fontSizes({ screen: "lg", $tag, HEADING })}
    }

    line-height: ${HEADING[$tag as keyof typeof HEADING]?.lineHeight};
    font-weight: ${HEADING[$tag as keyof typeof HEADING]?.fontWeight};
    margin: ${$noMargin ? 0 : "initial"};
    text-decoration: ${$textDecoration};
  `}

  ${({ $noWrap }) =>
    $noWrap
      ? css`
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        `
      : null}
`;

export default Heading;
