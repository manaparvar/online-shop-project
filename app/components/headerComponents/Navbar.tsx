import link from "next/link";
import styled from "styled-components";
import { Text } from "../Atoms/Text";

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
      <NavLinks special href="/Sale">
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
const NavLinks = styled(link)<{ special?: boolean }>`
  color: ${(props) => (props.special ? "#C71D5B" : "#010101")};
  font-size: 20px;
  font-weight: bold;
  margin-right: 64px;
  &:hover {
    opacity: 0.7;
  }
`;
