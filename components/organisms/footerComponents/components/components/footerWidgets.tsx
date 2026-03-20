import {
  ContactContainer,
  SocialLogoContainer,
  NewsletterContainer,
  WidgetsContainer,
  StyledInput,
} from "./footerWidgets.style";
import NavLink from "@/components/Atoms/link/link";
import Icon from "@/components/molecules/icon/icon";
import { footerData } from "../footerData";
import { Text } from "@/components/Atoms/text/text";

export default function Widgets() {
  const widgets = footerData.widgets ? footerData.widgets.items : [];
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
  );
}
