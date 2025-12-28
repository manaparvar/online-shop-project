import styled from "styled-components";
import { Text } from "@/app/components/Atoms/text/text";
import { sizes } from "@/styles/sizes";

export const IconWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
`;
export const StyledIcon = styled.svg`
  width: ${sizes.sm}px;

  @media (min-width: 376px) {
    width: 20px;
  }
  @media (min-width: 1024px) {
    width: ${sizes.lg}px;
  }
  stroke: ${({ theme }) => theme.colors.mediumGrey};
`;

export const Label = styled(Text)`
  margin-top: 4px;
  &:hover {
    opacity: 0.7;
  }
`;
