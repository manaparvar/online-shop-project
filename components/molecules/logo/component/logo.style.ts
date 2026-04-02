import { sizes } from "@/styles/sizes";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { theme } from "@/styles/theme";

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
  @media (min-width: ${theme.breakpoints.tablet}) {
    width: ${sizes.xlg};
    height: ${sizes.xlg};
  }
  @media (min-width: ${theme.breakpoints.desktop}) {
    width: ${sizes.xl};
    height: ${sizes.xl};
  }
`;
export const TextWrapper = styled.div`
  /* gap: 8px; */
  display: flex;
`;
