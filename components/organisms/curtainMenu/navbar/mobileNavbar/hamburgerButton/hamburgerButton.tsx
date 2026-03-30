"use client";

import {
  HamburgerWrapper,
  HamburgerUpperLine,
  HamburgerMiddleLine,
  HamburgerDownerLine,
} from "./hamburgerButton.style";

type props = {
  isOpen: boolean;
  onToggle: () => void;
};
export default function HamburgerButton({ isOpen, onToggle }: props) {
  return (
    <HamburgerWrapper $isOpen={isOpen} onClick={onToggle}>
      <HamburgerUpperLine $isOpen={isOpen}></HamburgerUpperLine>
      <HamburgerMiddleLine $isOpen={isOpen}></HamburgerMiddleLine>
      <HamburgerDownerLine $isOpen={isOpen}></HamburgerDownerLine>
    </HamburgerWrapper>
  );
}
