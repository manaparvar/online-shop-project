"use client";

import { kidsData } from "../../navData";
import { Text } from "@/app/components/Atoms/text/text";
import { KidsDDWrapper, StyledNavLink, Title } from "./kidsDropdown.style";

export default function KidsDropdown() {
  return (
    <KidsDDWrapper>
      <Title>Categories</Title>
      {kidsData.map((item, index) => (
        <StyledNavLink key={index} href={item.href}>
          <Text variant="caption" color="black">
            {item.label}
          </Text>
        </StyledNavLink>
      ))}
    </KidsDDWrapper>
  );
}
