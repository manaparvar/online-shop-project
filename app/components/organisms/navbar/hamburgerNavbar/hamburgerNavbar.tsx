"use client";

import styled from "styled-components";
import { theme } from "@/styles/theme";
import { sizes, SizeKey } from "@/styles/sizes";

type props = {
  color?: keyof typeof theme.colors;
  size: SizeKey;
};
export default function HamburgerNavbar() {
  return (
    <HamburgerButton>
      <HamburgerLine></HamburgerLine>
      <HamburgerLine></HamburgerLine>
      <HamburgerLine></HamburgerLine>
    </HamburgerButton>
  );
}

const HamburgerButton = styled.button<props>`
  height: ${({ size }) => (size ? sizes[size] : sizes.lg)};
  width: ${({ size }) => (size ? sizes[size] : sizes.lg)};
`;
const HamburgerLine = styled.span<props>`
  width: 24px;
  display: block;
  height: 3px;
  margin: 7px 0;
  background-color: ${({ color }) =>
    color ? theme.colors[color] : theme.colors.black};
  border-radius: 3px;
`;
