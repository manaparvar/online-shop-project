import Link from "next/link";
import styled from "styled-components";

type LinkProps = {
  className?: string;
};

const NavLink = styled(Link)<LinkProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: auto;
  transition: all 0.5s ease;
`;

export default NavLink;
