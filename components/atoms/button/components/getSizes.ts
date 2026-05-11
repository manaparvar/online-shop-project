import { css } from "styled-components";

const getSizeStyles = ({
  sizeKey,
  sizes,
  $iconOnly,
  $paddingOverride,
}: any) => {
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
    ${({ $size = "sm", $responsive = {}, $iconOnly, theme }: any) => {
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

        ${$responsive["2xl"] &&
        css`
          @media (min-width: ${theme.breakpoints["2xl"]}) {
            ${getSizeStyles({ sizeKey: $responsive["2xl"], sizes, $iconOnly })}
          }
        `}
      `;
    }}
  `;
};

export default getSizes;
