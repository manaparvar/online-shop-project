import { menuData } from "./data";
import { Text } from "@/app/components/Atoms/text/text";
import Icon from "@/app/components/molecules/icon/icon";
import NavLink from "@/app/components/Atoms/link/link";
import SubList from "./subList";
import { SubMenu, ItemWrapper, DropdownButton } from "./navItem.style";
import { useDevice } from "@/app/components/Atoms/divider/useDevice";
import { useState } from "react";
import { textVariants } from "@/styles/variants";

type props = {
  item: any;
};

export default function NavItem({ item }: props) {
  const isDesktop = useDevice();
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <ItemWrapper>
      {item.to ? (
        <NavLink href={item.to}>
          <Text variant="h3" color="black">
            {item.label}
          </Text>
        </NavLink>
      ) : (
        <DropdownButton onClick={() => setIsActive(!isActive)}>
          <Text variant="h3" color="black">
            {item.label}
          </Text>
          <Icon icon="dropDown" color="mediumGrey" />
        </DropdownButton>
      )}
      {isActive && (
        <SubMenu>{item.items && <SubList items={item.items} />}</SubMenu>
      )}
    </ItemWrapper>
  );
}
