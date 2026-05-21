"use client";

import { FieldValues } from "react-hook-form";
import {
  ContactContainer,
  SocialLogoContainer,
  NewsletterContainer,
  WidgetsContainer,
  NewsletterFormContainer,
} from "./footerWidgets.style";
import NavLink from "@/components/atoms/link/link";
import Icon from "@/components/atoms/icon/icon";
import { footerData } from "./footerData";
import Text from "@/components/atoms/text/text";
import Button from "@/components/atoms/button/button";
import strapiFetch from "@/utils/strapiFetch";
import { StyledInput } from "./footerWidgets.style";

export default function Widgets() {
  const widgets = footerData.widgets ? footerData.widgets.items : [];

  const handleNewsletterSubmit = (data: FieldValues) => {
    const email = data.email?.trim();
    if (!email) return;
    strapiFetch("/newsletter", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: { "Content-Type": "application/json" },
    }).catch(() => {});
  };

  return (
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
                <NewsletterFormContainer
                  onSubmit={handleNewsletterSubmit}
                  disableEnter
                  resetAfterSubmit
                >
                  {({ register }) => (
                    <>
                      <StyledInput
                        type="email"
                        placeholder="me@gmail.com"
                        {...register("email")}
                      />
                      <Button
                        type="submit"
                        color="primary"
                        rounded={false}
                        textColor="background"
                      >
                        Subscribe
                      </Button>
                    </>
                  )}
                </NewsletterFormContainer>
              </NewsletterContainer>
            )
          ),
        )}
    </WidgetsContainer>
  );
}

