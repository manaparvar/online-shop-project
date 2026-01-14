"use client";

import { brandsData } from "../../navData";
import { Text } from "@/app/components/Atoms/text/text";
import { BrandsDDWrapper, StyledNavLink, Title } from "./brandsDropdown.style";

export default function KidsDropdown() {
  return (
    <BrandsDDWrapper>
      <Title>Categories</Title>
      {brandsData.map((item, index) => (
        <StyledNavLink key={index} href={item.href}>
          <Text variant="caption" color="black">
            {item.label}
          </Text>
        </StyledNavLink>
      ))}
    </BrandsDDWrapper>
  );
}
