"use client";
import styled from "styled-components";
import MobileHeader from "./mobileHeader";
import DesktopHeader from "./desktopHeader";

export default function Header() {
  return (
    <>
      <MobileWrapper>
        <MobileHeader />
      </MobileWrapper>

      <DesktopWrapper>
        <DesktopHeader />
      </DesktopWrapper>
    </>
  );
}
const MobileWrapper = styled.div`
  display: block;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const DesktopWrapper = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
`;
