import link from "next/link";
import styled from "styled-components";
import { Text } from "../Atoms/Text";

export default function Navbar() {
  return (
    <LinksWrapper>
      <NavLinks href="/Women">
        <Text>Women</Text>
      </NavLinks>
      <NavLinks href="/Men">
        <Text>Men</Text>
      </NavLinks>
      <NavLinks href="/Kids">
        <Text>Kids</Text>
      </NavLinks>
      <NavLinks href="/Brands">
        <Text>Brands</Text>
      </NavLinks>
      <NavLinks href="/New">
        <Text>New</Text>
      </NavLinks>
      <NavLinks special href="/Sale">
        <Text>Sale</Text>
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
