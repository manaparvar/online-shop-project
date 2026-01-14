import link from "next/link";
import styled from "styled-components";

const NavLink = styled(link)`
  width: auto;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  &:hover {
    opacity: 0.5;
  }
`;

export default NavLink;
