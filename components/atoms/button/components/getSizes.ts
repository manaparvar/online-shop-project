import { css } from "styled-components";

type ButtonSizeEntry = {
  height: string;
  fontSize: string;
  padding: string;
};

const getSizeStyles = ({
  sizeKey,
  sizes,
  $iconOnly,
}: {
  sizeKey: string;
  sizes: Record<string, ButtonSizeEntry>;
  $iconOnly?: boolean;
}) => {
  const base = sizes[sizeKey];
  if (!base) return "";

  return css`
    height: ${base.height};
    font-size: ${base.fontSize};

    ${$iconOnly
      ? css`
          width: ${base.height};
          padding: 0;
        `
      : css`
          padding: ${base.padding};
        `}
  `;
};

const getSizes = () => {
  return css`
    ${(props) => {
      const p = props as Record<string, unknown>;
      const $size = (p.$size as string) || "sm";
      const $responsive = (p.$responsive as Record<string, string>) || {};
      const $iconOnly = p.$iconOnly as boolean | undefined;
      const theme = p.theme as {
        BUTTON: { sizes: Record<string, ButtonSizeEntry> };
        breakpoints: Record<string, string>;
      };
      const sizes = theme.BUTTON.sizes;

      return css`
        ${getSizeStyles({ sizeKey: $size, sizes, $iconOnly })}

        ${$responsive.sm &&
        css`
          @media (min-width: ${theme.breakpoints.sm}) {
            ${getSizeStyles({ sizeKey: $responsive.sm, sizes, $iconOnly })}
          }
        `}

        ${$responsive.md &&
        css`
          @media (min-width: ${theme.breakpoints.md}) {
            ${getSizeStyles({ sizeKey: $responsive.md, sizes, $iconOnly })}
          }
        `}

        ${$responsive.lg &&
        css`
          @media (min-width: ${theme.breakpoints.lg}) {
            ${getSizeStyles({ sizeKey: $responsive.lg, sizes, $iconOnly })}
          }
        `}

        ${$responsive.xl &&
        css`
          @media (min-width: ${theme.breakpoints.xl}) {
            ${getSizeStyles({ sizeKey: $responsive.xl, sizes, $iconOnly })}
          }
        `}
      `;
    }}
  `;
};

export default getSizes;
