import Link from "next/link";
import styled from "styled-components";

const NavLink = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: auto;
  transition: all 0.5s ease;
  &:hover {
    opacity: 0.3;
  }
`;

export default NavLink;
