"use client";

import styled from "styled-components";

type Titleprops = {
  text: string;
};

export default function TitleH4({ text }: Titleprops) {
  return <LogoText>{text}</LogoText>;
}

const LogoText = styled.h4`
  font-size: 16px;
  font-weight: bold;
  line-height: 14px;
  text-align: center;
`;
