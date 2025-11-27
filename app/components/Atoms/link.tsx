import link from "next/link";
import styled from "styled-components";

const NavLinks = styled(link)<{ $special?: boolean }>`
  color: ${(props) => (props.$special ? "#C71D5B" : "#010101")};
  font-size: 20px;
  font-weight: bold;
  margin-right: 64px;

  &:hover {
    opacity: 0.7;
  }
`;

export default NavLinks;
