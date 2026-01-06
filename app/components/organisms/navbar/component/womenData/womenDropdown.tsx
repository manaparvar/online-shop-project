"use client";
import NavLink from "@/app/components/Atoms/link/link";
import { womenData } from "./../navData";
import { Text } from "@/app/components/Atoms/text/text";
import styled from "styled-components";
import { sizes } from "@/styles/sizes";

export default function WomenDropdown() {
  return (
    <WomenDDWrapper>
      <Title>Categories</Title>
      {womenData.map((item, index) => (
        <StyledNavLink key={index} href={item.href}>
          <Text variant="button" color="black">
            {item.label}
          </Text>
        </StyledNavLink>
      ))}
    </WomenDDWrapper>
  );
}
const WomenDDWrapper = styled.ul`
  color: ${({ theme }) => theme.colors.brightBlue};
  display: flex;
  flex-direction: column;
  gap: 16px;
  left: 0;
  padding: 16px;
  position: absolute;
  transition: ease-in-out 1;
  width: ${sizes["6xl"]}px;
  height: ${sizes["8xl"]}px;
  z-index: 3;
  margin-top: 8px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  border-radius: 0 0 5px 5px;
`;
const Title = styled.p`
  color: ${({ theme }) => theme.colors.mediumGrey};
  margin-bottom: 8px;
`;
const StyledNavLink = styled(NavLink)`
  margin-left: 16px;
`;
