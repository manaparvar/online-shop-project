"use client";

import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import { Text } from "../Atoms/text/text";
import { sizes, SizeKey } from "@/styles/sizes";

type props = {
  size: SizeKey;
};

export default function Logo() {
  return (
    <LogoWrapper href="/">
      <LogoImage
        src="/MainLogo.png"
        alt="Website Logo"
        width={sizes["2xl"]}
        height={sizes["2xl"]}
      />
      <TextWrapper>
        <Text variant="button">Shopping</Text>
        <Text variant="button" color="pink">
          Website
        </Text>
      </TextWrapper>
    </LogoWrapper>
  );
}

const LogoWrapper = styled(Link)`
  align-items: center;
  position: relative;
  display: flex;
  &:hover {
    opacity: 0.85;
  }
`;
const LogoImage = styled(Image)`
  @media (max-width: 375px) {
    width: ${sizes.lg}px;
    height: ${sizes.lg}px;
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
const TextWrapper = styled.div`
  /* display: none;
  @media (min-width: 376px) {
    display: block;
  } */
`;
