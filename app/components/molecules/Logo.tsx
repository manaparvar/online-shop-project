"use client";

import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import { Text } from "../Atoms/text/text";

export default function Logo() {
  return (
    <LogoWrapper href="/">
      <LogoImage
        src="/MainLogo.png"
        alt="Website Logo"
        width={64}
        height={64}
        priority
      />
      <Text>Shopping</Text>
      <Text color="pink">Website</Text>
    </LogoWrapper>
  );
}

const LogoWrapper = styled(Link)`
  align-items: center;
  display: flex;
  flex-grow: 1;
  height: 62px;
  &:hover {
    opacity: 0.85;
  }
`;
const LogoImage = styled(Image)`
  width: 10%;
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
