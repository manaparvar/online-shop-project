"use client";

import styled from "styled-components";

type Titleprops = {
  text: string;
};

export default function TitleH1({ text }: Titleprops) {
  return <LogoText>{text}</LogoText>;
}

const LogoText = styled.h1`
  text-align: center;
  font-size: 32px;
  font-weight: bold;
`;
