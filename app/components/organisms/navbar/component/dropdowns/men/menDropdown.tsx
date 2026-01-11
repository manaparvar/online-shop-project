"use client";

import { menData } from "../../navData";
import { Text } from "@/app/components/Atoms/text/text";
import { MenDDWrapper, StyledNavLink, Title } from "./menDropdown.style";

export default function MenDropdown() {
  return (
    <MenDDWrapper>
      <Title>Categories</Title>
      {menData.map((item, index) => (
        <StyledNavLink key={index} href={item.href}>
          <Text variant="button" color="black">
            {item.label}
          </Text>
        </StyledNavLink>
      ))}
    </MenDDWrapper>
  );
}
