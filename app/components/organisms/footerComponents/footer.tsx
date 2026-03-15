"use client";
import { sizes } from "@/styles/sizes";

import { footerData } from "./components/footerData";
import styled from "styled-components";
import { Text } from "../../Atoms/text/text";
import Logo from "../../molecules/logo/logo";
import SubList from "./components/footerSublist";

import {
  LinksWrapper,
  FooterWrapper,
  ContactContainer,
  SocialLogoContainer,
  NewsletterContainer,
  WidgetsContainer,
  StyledInput,
} from "./footer.style";
import NavLink from "../../Atoms/link/link";
import Icon from "../../molecules/icon/icon";
import Input from "../../Atoms/input/input";
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
              <ContactContainer key={"social"}>
                <Text variant="button">{item.title}</Text>
                <Text variant="caption">{item.phoneNumber}</Text>
                <SocialLogoContainer>
                  {item.socialLinks?.map((socialItem) => (
                    <NavLink
                      key={socialItem.socialLogo}
                      href={socialItem.socialLogoUrl}
                    >
                      <Icon icon={socialItem.socialLogo} />
                    </NavLink>
                  ))}
                </SocialLogoContainer>
              </ContactContainer>
            ) : (
              item.type === "newsletter" && (
                <NewsletterContainer key={"newsletter"}>
                  <Text variant="button">{item.title}</Text>
                  <Text variant="caption">{item.description}</Text>
                  <StyledInput
                    type="email"
                    variant="caption"
                    placeholder="me@gmail.com"
                  />
                </NewsletterContainer>
              )
            ),
          )}
      </WidgetsContainer>
    </FooterWrapper>
  );
}
