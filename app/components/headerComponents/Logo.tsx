"use client";

import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

export default function Logo() {
  return (
    <LogoWrapper href="/">
      <LogoImage
        src="/ShoppingCart.jpg"
        alt="Website Logo"
        priority
        width={100}
        height={100}
      />
      <LogoText>Shopping Website</LogoText>
    </LogoWrapper>
  );
}

const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  height: 62px;
  padding: 4px;
  flex-grow: 2;
  &:hover {
    opacity: 0.85;
  }
`;
const LogoImage = styled(Image)``;
const LogoText = styled.span`
  text-align: center;
  font-size: small;
  font-weight: bold;
`;
