import styled from "styled-components";
import Heading from "@/components/atoms/heading/heading";
import NavLink from "@/components/atoms/link/link";

export const ItemWrapper = styled.li`
  gap: ${({ theme }) => theme.sizes.sm};
`;

export const DropdownButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: $${({ theme }) => theme.breakpoints.lg}) {
    justify-content: left;
  }
`;

export const SubMenu = styled.ul`
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    position: absolute;
  }
`;
export const TagText = styled(Heading)<{ $isAttention: boolean }>`
  color: ${({ $isAttention, theme }) =>
    $isAttention ? theme.colors.accent : theme.colors.primary};
`;
export const StyledNavLink = styled(NavLink)`
  &:hover {
    opacity: 0.5;
  }
`;
