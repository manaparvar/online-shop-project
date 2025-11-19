"use client";

import styled from "styled-components";

type Titleprops = {
  text: string;
};

export default function TitleH2({ text }: Titleprops) {
  return <LogoText>{text}</LogoText>;
}

const LogoText = styled.h2`
  font-size: 24px;
  font-weight: bold;
  line-height: 20px;
  text-align: center;
`;
