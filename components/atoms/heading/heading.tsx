/**
 * Atoms - Heading
 */

// Style
import styled, { css, useTheme } from "styled-components";
import { theme } from "@/styles/theme";

// Types
import TransientProps from "@/types/transientProps.type";

type ColorKey = keyof typeof theme.colors;
type Tags = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface HeadingProps {
  align?: string;
  children?: any;
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
  textColor = "black",
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
const fontSizes = ({ screen, $tag }: any) => {
  const theme: any = useTheme();
  const fontSizes = theme.HEADING[$tag].fontSize;

  switch (screen) {
    case "sm":
      return css`
        font-size: ${fontSizes.mobile};
      `;
    case "md":
      return css`
        font-size: ${fontSizes.tablet};
      `;
    case "lg":
      return css`
        font-size: ${fontSizes.desktop};
      `;
    default:
      return css`
        font-size: ${fontSizes.mobile};
      `;
  }
};
const colorMaker = ({ theme, color }: any) => {
  const [c, shade] = color.split(".");
  return shade ? theme.colors[c][shade] : theme.colors[c];
};

const StyledHeading = styled.span<HeadingStyleProps>`
  color: ${({ theme, $textColor }) =>
    theme.colors[$textColor as keyof typeof theme.colors]};

  font-weight: normal;
  position: relative;
  text-align: ${({ $align }) => $align};

  ${({ $noMargin, $tag, theme: { HEADING }, $textDecoration = "none" }) => css`
    ${fontSizes({ screen: "sm", $tag })}
    @media (min-width: ${theme.breakpoints.sm}) {
      ${fontSizes({ screen: "sm", $tag })}
    }
    @media (min-width: ${theme.breakpoints.md}) {
      ${fontSizes({ screen: "md", $tag })}
    }
    @media (min-width: ${theme.breakpoints.lg}) {
      ${fontSizes({ screen: "lg", $tag })}
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
