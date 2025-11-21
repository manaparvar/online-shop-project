"use client";

import styled from "styled-components";
export default function Footer() {
  return (
    <FooterWrapper>
      <Logo />
      <div>
        {/* <Shop />
        <Company />
        <Support />
        <ShoppingGuide /> */}
      </div>
      <div>
        {/* <Contacts />
        <StayWithUs /> */}
      </div>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  height: 848px;
  background-color: #eff3f4;
`;
