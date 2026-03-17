import styled from "styled-components";
import { Text } from "@/app/components/Atoms/text/text";
import { theme } from "@/styles/theme";
import { sizes } from "@/styles/sizes";
import { textVariants } from "@/styles/variants";
export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.grey[300]};
  transition: all 0.5s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.grey[200]};
  }
`;
export const StyledIcon = styled.svg`
  width: ${sizes.sm};
  height: ${sizes.sm};
  transition: all 0.5s ease;

  @media (min-width: ${theme.breakpoints.tablet}) {
    width: ${sizes.md};
    height: ${sizes.md};
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    width: ${sizes.md};
    height: $${sizes.md};
  }
`;

export const Label = styled(Text)`
  display: none;
  @media (min-width: ${theme.breakpoints.desktop}) {
    display: block;
    margin-top: 4px;
    transition: all 0.5s ease;
    &:hover {
      color: ${({ theme }) => theme.colors.grey[200]};
    }
  }
`;
