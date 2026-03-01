import { Text } from "@/app/components/Atoms/text/text";
import Icon from "@/app/components/molecules/icon/icon";
import NavLink from "@/app/components/Atoms/link/link";
import { SublistWrapper } from "./subList.style";

type props = {
  items: any[];
};

export default function SubList({ items }: props) {
  return (
    <SublistWrapper>
      {items.map((myItem) => (
        <li key={myItem.label}>
          <NavLink href={myItem.href}>
            <Text variant="caption" color="darkGrey">
              {myItem.label}
            </Text>
          </NavLink>
        </li>
      ))}
    </SublistWrapper>
  );
}
