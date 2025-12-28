"use client";

import styled from "styled-components";
import { Text } from "../../Atoms/text/text";
import NavLink from "../../Atoms/link";
import { theme } from "../../../../styles/theme";
import { navLinks } from "./navData";
import { sizes } from "@/styles/sizes";

const TagText = styled(Text)<{ isPink: boolean }>`
  color: ${({ isPink }) => (isPink ? theme.colors.pink : theme.colors.black)};
`;
export default function Navbar() {
  return (
    <LinksWrapper>
      {navLinks.map((item, index) => (
        <MyNavLinks key={index} href={item.href}>
          <TagText variant="h3" isPink={item.label === "Sale"} color="black">
            {item.label}
          </TagText>
        </MyNavLinks>
      ))}
    </LinksWrapper>
  );
}
const LinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: ${sizes.xs}px;
  @media (min-width: 1024px) {
    gap: ${sizes.xl}px;
  }
`;
const MyNavLinks = styled(NavLink)`
  width: 100%;
  display: block;
`;
