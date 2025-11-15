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
        width={40}
        height={40}
        priority
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
const LogoImage = styled(Image)`
  width: 10%;
`;
const LogoText = styled.span`
  text-align: center;
  font-size: small;
  font-weight: bold;
`;
