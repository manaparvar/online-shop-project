import styled from "styled-components";
import Text from "@/components/atoms/text/text";
import { theme } from "@/styles/theme";
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
      color: theme.colors.secondary,
      p: 0.4,
    })};

  &:hover {
    color: ${({ theme }) =>
      shadeLinearRgb({
        color: theme.colors.secondary,
        p: 0.7,
      })};
  }
`;
export const StyledIcon = styled.svg<StyledIconProps>`
  fill: ${({ $isFilled, $color }) => ($isFilled ? $color : "none")};
  height: ${({ theme }) => theme.sizes.sm};
  transition: all 0.5s ease;
  width: ${({ theme }) => theme.sizes.sm};

  @media (min-width: ${theme.breakpoints.md}) {
    height: ${({ theme }) => theme.sizes.sm};
    width: ${({ theme }) => theme.sizes.sm};
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    height: ${({ theme }) => theme.sizes.md};
    width: ${({ theme }) => theme.sizes.md};
  }
`;

export const Label = styled(Text)`
  display: none;

  @media (min-width: ${theme.breakpoints.lg}) {
    display: block;
    margin-top: 4px;
    transition: all 0.5s ease;

    &:hover {
      color: ${({ theme }) =>
        shadeLinearRgb({
          color: theme.colors.secondary,
          p: 0.7,
        })};
    }
  }
`;
