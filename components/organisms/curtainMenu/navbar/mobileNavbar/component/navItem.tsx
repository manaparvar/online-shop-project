import { menuData } from "./data";
import Icon from "@/components/molecules/icon/icon";
import NavLink from "@/components/atoms/link/link";
import SubList from "./subList";
import { SubMenu, ItemWrapper, DropdownButton, TagText } from "./navItem.style";
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
        if (device === "desktop") setIsActive(null);
      }}
    >
      {item.to ? (
        <NavLink href={item.to}>
          <TagText
            variant="h3"
            color="black"
            $isAttention={item.label === "Summer Sale"}
          >
            {item.label}
          </TagText>
        </NavLink>
      ) : (
        <DropdownButton
          onClick={() => {
            isActive === item.label
              ? setIsActive(null)
              : setIsActive(item.label);
          }}
          onMouseEnter={() => {
            if (device === "desktop") setIsActive(item.label);
          }}
        >
          <TagText
            variant="h3"
            color="black"
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
