"use client";
import Widgets from "./components/components/footerWidgets";
import { footerData } from "./components/footerData";
import Logo from "../../molecules/logo/logo";
import SubList from "./components/footerSublist";

import { LinksWrapper, FooterWrapper, FooterFeatures } from "./footer.style";

export default function Footer() {
  const columns = footerData.columns ? footerData.columns.items : [];

  return (
    <FooterWrapper>
      <Logo />
      <FooterFeatures>
        {columns.length > 0 && (
          <LinksWrapper>
            {columns.map((item) => (
              <SubList key={item.label} item={item} />
            ))}
          </LinksWrapper>
        )}
        <Widgets />
      </FooterFeatures>
    </FooterWrapper>
  );
}
