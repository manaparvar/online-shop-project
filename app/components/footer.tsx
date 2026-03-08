"use client";
import { footerData } from "./footerComponents/footerData";
import styled from "styled-components";
import { Text } from "./Atoms/text/text";
import Logo from "./molecules/logo/logo";

import SubList from "./organisms/footerSublist";
import { LinksWrapper, FooterWrapper } from "./organisms/footer.style";
export default function Footer() {
  return (
    <FooterWrapper>
      <Logo />
      <LinksWrapper>
        {footerData.map((item) => (
          <SubList key={item.label} item={item} />
        ))}
      </LinksWrapper>
      {/* <Contacts /> */}
      {/* <Newsletter /> */}
    </FooterWrapper>
  );
}
