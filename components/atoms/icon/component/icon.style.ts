import styled from "styled-components";
import Text from "@/components/atoms/text/text";
import { theme } from "@/styles/theme";
import { sizes } from "@/styles/sizes";
import { StyledIconProps } from "../icon.type";
import shadeLinearRgb from "@/utils/shadeLinearRgb";

export const IconWrapper = styled.div<Pick<StyledIconProps, "$color">>`
  align-items: center;
  display: flex;
  flex-direction: column;
  transition: all 0.5s ease;

  color: ${({ theme, $color }) =>
    $color &&
    shadeLinearRgb({
      color: theme.colors[$color],
      p: 0.3,
    })};

  &:hover {
    color: ${({ theme }) => theme.colors.grey[200]};
  }
`;
export const StyledIcon = styled.svg<StyledIconProps>`
  fill: ${({ $isFilled, $color }) => ($isFilled ? $color : "none")};
  height: ${sizes.sm};
  transition: all 0.5s ease;
  width: ${sizes.sm};

  @media (min-width: ${theme.breakpoints.md}) {
    height: ${sizes.sm};
    width: ${sizes.sm};
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    height: ${sizes.md};
    width: ${sizes.md};
  }
`;

export const Label = styled(Text)`
  display: none;

  @media (min-width: ${theme.breakpoints.lg}) {
    display: block;
    margin-top: 4px;
    transition: all 0.5s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.grey[200]};
    }
  }
`;
