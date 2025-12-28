import { sizes } from "@/styles/sizes";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export const LogoWrapper = styled(Link)`
  align-items: center;
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 3px;
  &:hover {
    opacity: 0.85;
  }
`;
export const LogoImage = styled(Image)`
  @media (max-width: 375px) {
    width: ${sizes.md}px;
    height: ${sizes.md}px;
  }
  @media (min-width: 376px) {
    width: ${sizes.xlg}px;
    height: ${sizes.xlg}px;
  }
  @media (min-width: 1024px) {
    width: ${sizes["2xl"]}px;
    height: ${sizes["2xl"]}px;
  }
`;
export const TextWrapper = styled.div`
  /* gap: 8px; */
`;
