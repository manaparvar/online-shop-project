import link from "next/link";
import styled from "styled-components";

const NavLink = styled(link)`
  width: auto;
  &:hover {
    opacity: 0.5;
  }
`;

export default NavLink;
