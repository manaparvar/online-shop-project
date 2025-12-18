import NavLinks from "@/app/components/Atoms/link";
import SearchBar from "@/app/components/forms/searchBar/searchBar";
import styled from "styled-components";
import { theme } from "@/styles/theme";
import { Text } from "@/app/components/Atoms/text/text";
import { mobileNavLinks } from "../navData";
import Icon from "@/app/components/headerComponents/icon";
// import { sizes } from "@/styles/sizes";
type props = {
  isOpen: boolean;
  // size: keyof typeof sizes;
  onToggle: () => void;
};

export default function CurtainMenu({ isOpen, onToggle }: props) {
  return (
    <MenuWrapper isOpen={isOpen}>
      <IconWrapper onClick={onToggle}>
        <Icon size="sm" icon="close" label="Close" color="black" />
      </IconWrapper>
      <SearchBar />
      <NavbarWrapper>
        {mobileNavLinks.map((item, index) => (
          <NavLinks key={index} href={item.href}>
            <TagText color="black" variant="button">
              {item.label}
            </TagText>
          </NavLinks>
        ))}
      </NavbarWrapper>
    </MenuWrapper>
  );
}
const MenuWrapper = styled.div<{
  isOpen: boolean;
}>`
  position: fixed;
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0)" : "translateX(-100%)"};
  width: 216px;
  height: 344px;
  background-color: ${({ theme }) => theme.colors.white};
  transition: transform 0.3s ease;
  z-index: 1;
  top: 0;
  left: 0;
  padding: 32px 16px 16px 16px;
  box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.3);
  border-radius: 0 0 5px 0;
  flex-direction: column;
`;
const TagText = styled(Text)<{ color: keyof typeof theme.colors }>`
  color: ${({ color }) => color ?? theme.colors.black};
`;
const IconWrapper = styled.div`
  width: fit-content;
  align-self: flex-end;
  margin-right: 8px;
`;
const NavbarWrapper = styled.div``;
