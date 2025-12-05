"use client";

import styled from "styled-components";
import { Text } from "../../Atoms/text/text";
import NavLinks from "../../Atoms/link";
import { theme } from "../../../../styles/theme";
import { navLinks } from "./navData";

const TagText = styled(Text)<{ isPink: boolean }>`
  color: ${({ isPink }) => (isPink ? theme.colors.pink : theme.colors.black)};
`;
export default function Navbar() {
  return (
    <LinksWrapper>
      {navLinks.map((item, index) => (
        <NavLinks key={index} href={item.href}>
          <TagText variant="h3" isPink={item.label === "Sale"}>
            {item.label}
          </TagText>
        </NavLinks>
      ))}
    </LinksWrapper>
  );
}
const LinksWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
