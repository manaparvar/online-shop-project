"use client";

import styled from "styled-components";

type Titleprops = {
  text: string;
};

export default function TitleCaption({ text }: Titleprops) {
  return <LogoText>{text}</LogoText>;
}

const LogoText = styled.h5`
  font-size: 14px;
  font-weight: bold;
  line-height: 12px;
  text-align: center;
`;
