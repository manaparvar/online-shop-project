import styled from "styled-components";
import { Text } from "../Atoms/Text";
import NavLinks from "../Atoms/link";

export default function Navbar() {
  return (
    <LinksWrapper>
      <NavLinks href="/Women">
        <Text variant="h3">Women</Text>
      </NavLinks>
      <NavLinks href="/Men">
        <Text variant="h3">Men</Text>
      </NavLinks>
      <NavLinks href="/Kids">
        <Text variant="h3">Kids</Text>
      </NavLinks>
      <NavLinks href="/Brands">
        <Text variant="h3">Brands</Text>
      </NavLinks>
      <NavLinks href="/New">
        <Text variant="h3">New</Text>
      </NavLinks>
      <NavLinks href="/Sale">
        <Text variant="h3" color="pink">
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
