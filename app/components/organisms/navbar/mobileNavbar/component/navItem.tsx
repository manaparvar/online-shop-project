import { menuData } from "./data";
import Icon from "@/app/components/molecules/icon/icon";
import NavLink from "@/app/components/Atoms/link/link";
import SubList from "./subList";
import {
  SubMenu,
  ItemWrapper,
  DropdownButton,
  TagText,
  StyledIcon,
} from "./navItem.style";
import { useDevice } from "@/app/components/Atoms/divider/useDevice";
import { useState } from "react";

type props = {
  item: any;
};

export default function NavItem({ item }: props) {
  const device = useDevice();
  const [isActive, setIsActive] = useState<string | null>(null);
  console.log("isActive :>> ", isActive);
  if (isActive === item.label) {
    console.log("item.label :>> ", item.label);
    console.log("item.items :>> ", item.items);
  }
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
            $isPink={item.label === "Summer Sale"}
          >
            {item.label}
          </TagText>
        </NavLink>
      ) : (
        <DropdownButton
          onClick={() => {
            item.label ? setIsActive(null) : setIsActive(item.label);
          }}
          onMouseEnter={() => {
            if (device === "desktop") setIsActive(item.label);
          }}
        >
          <TagText
            variant="h3"
            color="black"
            $isPink={item.label === "Summer Sale"}
          >
            {item.label}
          </TagText>
          <StyledIcon icon="dropDown" />
        </DropdownButton>
      )}
      {isActive === item.label && (
        <SubMenu>{item.items && <SubList items={item.items} />}</SubMenu>
      )}
    </ItemWrapper>
  );
}
