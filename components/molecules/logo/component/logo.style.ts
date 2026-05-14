import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export const LogoWrapper = styled(Link)`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 3px;
  position: relative;
  &:hover {
    opacity: 0.85;
  }
`;
export const LogoImage = styled(Image)`
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: ${({ theme }) => theme.sizes.xlg};
    height: ${({ theme }) => theme.sizes.xlg};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: ${({ theme }) => theme.sizes.xl};
    height: ${({ theme }) => theme.sizes.xl};
  }
`;
export const TextWrapper = styled.div`
  /* gap: 8px; */
  display: flex;
`;
