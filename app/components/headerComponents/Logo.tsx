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
        width={144}
        height={144}
      />
      <LogoText>Shopping Website</LogoText>
    </LogoWrapper>
  );
}

const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
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
