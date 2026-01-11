"use client";

import { womenData } from "../../navData";
import { Text } from "@/app/components/Atoms/text/text";
import { WomenDDWrapper, StyledNavLink, Title } from "./womenDropdown.style";

export default function WomenDropdown() {
  return (
    <WomenDDWrapper>
      <Title>Categories</Title>
      {womenData.map((item, index) => (
        <StyledNavLink key={index} href={item.href}>
          <Text variant="button" color="black">
            {item.label}
          </Text>
        </StyledNavLink>
      ))}
    </WomenDDWrapper>
  );
}
