import styled from "styled-components";
import { Text } from "../Atoms/Text";
import NavLinks from "../Atoms/link";

export default function Navbar() {
  return (
    <LinksWrapper>
      <NavLinks href="/Women">
        <Text variant="desktopH3">Women</Text>
      </NavLinks>
      <NavLinks href="/Men">
        <Text variant="desktopH3">Men</Text>
      </NavLinks>
      <NavLinks href="/Kids">
        <Text variant="desktopH3">Kids</Text>
      </NavLinks>
      <NavLinks href="/Brands">
        <Text variant="desktopH3">Brands</Text>
      </NavLinks>
      <NavLinks href="/New">
        <Text variant="desktopH3">New</Text>
      </NavLinks>
      <NavLinks $special={true} href="/Sale">
        <Text variant="desktopH3" color="pink">
          Sale
        </Text>
      </NavLinks>
    </LinksWrapper>
  );
}
const LinksWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
