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

type props = {
  item: any;
};

export default function NavItem({ item }: props) {
  const device = useDevice();
  const [isActive, setIsActive] = useState<string | null>(null);

  return (
    <ItemWrapper
      onMouseLeave={() => {
        if (device === "lg" || device === "xl") setIsActive(null);
      }}
    >
      {item.to ? (
        <StyledNavLink href={item.to}>
          <TagText
            variant="h3"
            color="primary"
            $isAttention={item.label === "Summer Sale"}
          >
            {item.label}
          </TagText>
        </StyledNavLink>
      ) : (
        <DropdownButton
          onClick={() => {
            isActive === item.label
              ? setIsActive(null)
              : setIsActive(item.label);
          }}
          onMouseEnter={() => {
            if (device === "lg" || device === "xl") setIsActive(item.label);
          }}
        >
          <TagText
            variant="h3"
            color="primary"
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
