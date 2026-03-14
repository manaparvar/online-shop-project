"use client";
import { footerData } from "./components/footerData";
import styled from "styled-components";
import { Text } from "../../Atoms/text/text";
import Logo from "../../molecules/logo/logo";

import SubList from "./components/footerSublist";
import {
  LinksWrapper,
  FooterWrapper,
  ContactContainer,
  LogoContainer,
  NewsletterContainer,
  WidgetsContainer,
} from "./footer.style";
import NavLink from "../../Atoms/link/link";
import Icon from "../../molecules/icon/icon";
export default function Footer() {
  const columns = footerData.columns ? footerData.columns.items : [];
  const widgets = footerData.widgets ? footerData.widgets.items : [];

  return (
    <FooterWrapper>
      <Logo />
      {columns.length > 0 && (
        <LinksWrapper>
          {columns.map((item) => (
            <SubList key={item.label} item={item} />
          ))}
        </LinksWrapper>
      )}
      <WidgetsContainer>
        {widgets.length > 0 &&
          widgets.map((item) =>
            item.type === "social" ? (
              <ContactContainer>
                <Text variant="button">{item.title}</Text>
                <Text variant="caption">{item.phoneNumber}</Text>
                <LogoContainer>
                  {item.socialLinks?.map((socialItem) => (
                    <NavLink href={socialItem.socialLogoUrl}>
                      <Icon icon={socialItem.socialLogo} />
                    </NavLink>
                  ))}
                </LogoContainer>
              </ContactContainer>
            ) : (
              item.type === "newsletter" && (
                <NewsletterContainer>
                  <Text variant="button">{item.title}</Text>
                  <Text variant="caption">{item.description}</Text>
                  <input type="email" />
                </NewsletterContainer>
              )
            ),
          )}
      </WidgetsContainer>
    </FooterWrapper>
  );
}
