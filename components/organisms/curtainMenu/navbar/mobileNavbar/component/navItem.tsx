import Icon from "@/components/atoms/icon/icon";
import SubList from "./subList";
import {
  SubMenu,
  ItemWrapper,
  DropdownButton,
  TagText,
  StyledNavLink,
} from "./navItem.style";
import { useDevice } from "@/components/hooks/useDevice";
import { useState } from "react";
import type { NavItem as NavItemType } from "./navItemTypes";

type props = {
  item: NavItemType;
};

export default function NavItem({ item }: props) {
  const device = useDevice();
  const [isActive, setIsActive] = useState<string | null>(null);
  const handleDropdownClick = () => {
    if (isActive === item.label) setIsActive(null);
    else setIsActive(item.label);
  };
  return (
    <ItemWrapper
      onMouseLeave={() => {
        if (device === "lg" || device === "xl") setIsActive(null);
      }}
    >
      {item.to ? (
        <StyledNavLink href={item.to}>
          <TagText
            tag="h4"
            textColor="primary"
            $isAttention={item.label === "Summer Sale"}
          >
            {item.label}
          </TagText>
        </StyledNavLink>
      ) : (
        <DropdownButton
          onClick={handleDropdownClick}
          onMouseEnter={() => {
            if (device === "lg" || device === "xl") setIsActive(item.label);
          }}
        >
          <TagText
            tag="h4"
            textColor="primary"
            $isAttention={item.label === "Summer Sale"}
          >
            {item.label}
          </TagText>
          <Icon icon="dropDown" />
        </DropdownButton>
      )}
      {isActive === item.label && (
        <SubMenu>{item.items && <SubList items={item.items} />}</SubMenu>
      )}
    </ItemWrapper>
  );
}
