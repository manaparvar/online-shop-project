"use client";

import styled from "styled-components";

type Titleprops = {
  text: string;
};

export default function TitleBody({ text }: Titleprops) {
  return <LogoText>{text}</LogoText>;
}

const LogoText = styled.h5`
  font-size: 20px;
  font-weight: bold;
  line-height: 18px;
  text-align: center;
`;
