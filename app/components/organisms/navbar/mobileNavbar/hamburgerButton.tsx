"use client";

import styled from "styled-components";
import { theme } from "@/styles/theme";
import { sizes, SizeKey } from "@/styles/sizes";
import { useState } from "react";

type props = {
  size: SizeKey;
};
export default function MyHamburgerButton({ size }: props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HamburgerButton
      size={size}
      $isOpen={isOpen}
      onClick={() => setIsOpen(!isOpen)}
    >
      <HamburgerUpperLine $isOpen={isOpen}></HamburgerUpperLine>
      <HamburgerMiddleLine $isOpen={isOpen}></HamburgerMiddleLine>
      <HamburgerDownerLine $isOpen={isOpen}></HamburgerDownerLine>
    </HamburgerButton>
  );
}

const HamburgerButton = styled.button<{ size: SizeKey; $isOpen: boolean }>`
  height: ${({ size }) => (size ? sizes[size] : sizes.lg)};
  width: ${({ size }) => (size ? sizes[size] : sizes.lg)};
`;
const HamburgerUpperLine = styled.span<{ $isOpen: boolean; color?: string }>`
  background-color: ${({ color }) => color ?? theme.colors.black};
  border-radius: 3px;
  display: block;
  height: 3px;
  margin: 5px 0;
  transform-origin: top left;
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(45deg)" : "rotate(0)")};
  transition: 0.4s;
  width: 24px;
`;
const HamburgerMiddleLine = styled.span<{ $isOpen: boolean; color?: string }>`
  background-color: ${({ color }) => color ?? theme.colors.black};
  opacity: ${({ $isOpen }) => ($isOpen ? "0" : "1")};
  border-radius: 3px;
  display: block;
  height: 3px;
  margin: 5px 0;
  width: 24px;
`;
const HamburgerDownerLine = styled.span<{ $isOpen: boolean; color?: string }>`
  background-color: ${({ color }) => color ?? theme.colors.black};
  border-radius: 3px;
  display: block;
  height: 3px;
  margin: 5px 0;
  transform-origin: bottom left;
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(-45deg)" : "rotate(0)")};
  transition: 0.4s;
  width: 24px;
`;
