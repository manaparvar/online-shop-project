import link from "next/link";
import styled from "styled-components";

const NavLink = styled(link)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: auto;
  &:hover {
    opacity: 0.5;
  }
`;

export default NavLink;
