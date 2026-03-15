import styled from "styled-components";
import { Text } from "@/app/components/Atoms/text/text";

interface StyledIconProps {
  sizeMobile?: number;
  sizeTablet?: number;
  sizeDesktop?: number;
}

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.grey[300]};
`;
export const StyledIcon = styled.svg<StyledIconProps>`
  width: ${({ sizeMobile = 16 }) => sizeMobile}px;
  height: ${({ sizeMobile = 16 }) => sizeMobile}px;

  @media (min-width: 768px) {
    width: ${({ sizeTablet = 20 }) => sizeTablet}px;
    height: ${({ sizeTablet = 20 }) => sizeTablet}px;
  }

  @media (min-width: 1024px) {
    width: ${({ sizeDesktop = 24 }) => sizeDesktop}px;
    height: ${({ sizeDesktop = 24 }) => sizeDesktop}px;
    &:hover {
      opacity: 0.5;
    }
  }
`;

export const Label = styled(Text)`
  display: none;
  @media (min-width: 1024px) {
    display: block;
    margin-top: 4px;
    transition: all 1s ease;
    &:hover {
      opacity: 0.5;
    }
  }
`;
