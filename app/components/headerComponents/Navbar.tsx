import link from "next/link";
import styled from "styled-components";

export default function Navbar() {
  return (
    <LinksWrapper>
      <NavLinks href="/Women">
        <h3>Women</h3>
      </NavLinks>
      <NavLinks href="/Men">
        <h3>Men</h3>
      </NavLinks>
      <NavLinks href="/Kids">
        <h3>Kids</h3>
      </NavLinks>
      <NavLinks href="/Brands">
        <h3>Brands</h3>
      </NavLinks>
      <NavLinks href="/New">
        <h3>New</h3>
      </NavLinks>
      <NavLinks special href="/Sale">
        <h3>Sale</h3>
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
