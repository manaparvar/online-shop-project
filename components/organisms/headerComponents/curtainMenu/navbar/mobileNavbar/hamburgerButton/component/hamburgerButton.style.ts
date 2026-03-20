import styled from "styled-components";
import { sizes } from "@/styles/sizes";

export const HamburgerWrapper = styled.button<{
  $isOpen: boolean;
}>`
  height: ${sizes.lg};
  width: ${sizes.lg};
  z-index: 20;
`;
export const HamburgerUpperLine = styled.span<{
  $isOpen: boolean;
}>`
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 3px;
  display: block;
  height: 3px;
  margin: 5px 0;
  transform-origin: top left;
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(45deg)" : "rotate(0)")};
  transition: 0.4s;
  width: ${sizes.md};
`;
export const HamburgerMiddleLine = styled.span<{
  $isOpen: boolean;
}>`
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 3px;
  display: block;
  height: 3px;
  margin: 5px 0;
  opacity: ${({ $isOpen }) => ($isOpen ? "0" : "1")};
  width: ${sizes.md};
`;
export const HamburgerDownerLine = styled.span<{
  $isOpen: boolean;
}>`
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 3px;
  display: block;
  height: 3px;
  margin: 5px 0;
  transform-origin: bottom left;
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(-45deg)" : "rotate(0)")};
  transition: 0.4s;
  width: ${sizes.md};
`;
