import { menuData } from "./data";
import { Text } from "@/app/components/Atoms/text/text";
import Icon from "@/app/components/molecules/icon/icon";
import NavLink from "@/app/components/Atoms/link/link";
import SubList from "./subList";
import { SubMenu, ItemWrapper, DropdownButton } from "./navItem.style";
import { useDevice } from "@/app/components/Atoms/divider/useDevice";
import { useState } from "react";

type props = {
  item: any;
};

export default function NavItem({ item }: props) {
  const isDesktop = useDevice();
  const { isActive, setIsActive } = useState<boolean>(true);

  // const openMenu = () => {
  //   setIsActive(!isActive);
  // };
  // const closeMenu = () => setIsActive(true);

  return (
    <ItemWrapper>
      {item.to ? (
        <NavLink href={item.to}>
          <Text variant={isDesktop ? "h3" : "caption"} color="black">
            {item.label}
          </Text>
        </NavLink>
      ) : (
        <DropdownButton onClick={() => setIsActive(false)}>
          <Text variant={isDesktop ? "h3" : "caption"} color="black">
            {item.label}
          </Text>
          <Icon icon="dropDown" color="mediumGrey" />
        </DropdownButton>
      )}
      <SubMenu isActive={!isActive}>
        {item.items && <SubList items={item.items} />}
      </SubMenu>
    </ItemWrapper>
  );
}
