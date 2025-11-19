"use client";

import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import TitleH2 from "../Atoms/TitleH1";
// interface LogoProps {
//   context?: string;
//   isEven: boolean;
// }

export default function Logo() {
  return (
    <LogoWrapper href="/">
      <Image
        src="/MainLogo.png"
        alt="Website Logo"
        width={64}
        height={64}
        priority
      />
      <TitleH2 />
      <LogoText isEven={true}>Shopping</LogoText>
      <LogoText special isEven={false}>
        Website
      </LogoText>
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

const LogoText = styled.h1<{ special?: boolean }>`
  color: ${(props) => (props.special ? "#C71D5B" : "#010101")};
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  ${({ isEven }) =>
    isEven
      ? `
        background-color: #ffffff0;
      `
      : `
        background-color: #ffffff0;
        margin-left: 8px;
      `}
`;
// const LogoText2 = styled.span`
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
