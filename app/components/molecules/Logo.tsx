"use client";

import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import { Text } from "../Atoms/text/text";
import { sizes, SizeKey } from "@/styles/sizes";

type props = {
  size: SizeKey;
};

export default function Logo({ size }: props) {
  return (
    <LogoWrapper href="/">
      <Image
        src="/MainLogo.png"
        alt="Website Logo"
        width={sizes[size]}
        height={sizes[size]}
        priority
      />
      <Text variant="button">Shopping</Text>
      <Text variant="button" color="pink">
        Website
      </Text>
    </LogoWrapper>
  );
}

const LogoWrapper = styled(Link)`
  align-items: center;
  display: flex;
  height: 62px;
  &:hover {
    opacity: 0.85;
  }
`;

// const LogoText2 = styled.span`;
//   text-align: center;
//   font-size: 24px;
//   font-weight: bold;
//   color: #30aa3a;
// `;

// // [] {} "false" "0"
// // "" 0 null
// const a = null
// if(a) {
//     console.log('a is true')
// } else {
//     console.log('a is false')
// }
