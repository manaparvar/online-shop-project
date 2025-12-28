"use client";

import {
  HamburgerButton,
  HamburgerUpperLine,
  HamburgerMiddleLine,
  HamburgerDownerLine,
} from "./component/hamburgerButton.style";
import { SizeKey } from "@/styles/sizes";

type props = {
  size: SizeKey;
  isOpen: boolean;
  onToggle: () => void;
};
export default function MyHamburgerButton({ isOpen, onToggle, size }: props) {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <HamburgerButton size={size} $isOpen={isOpen} onClick={onToggle}>
      <HamburgerUpperLine $isOpen={isOpen}></HamburgerUpperLine>
      <HamburgerMiddleLine $isOpen={isOpen}></HamburgerMiddleLine>
      <HamburgerDownerLine $isOpen={isOpen}></HamburgerDownerLine>
    </HamburgerButton>
  );
}
