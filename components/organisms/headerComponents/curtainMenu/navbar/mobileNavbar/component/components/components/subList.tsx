import { Text } from "@/components/atoms/text/text";
import NavLink from "@/components/atoms/link/link";
import { SublistWrapper, LinkFrame } from "./subList.style";

type props = {
  items: any[];
};

export default function SubList({ items }: props) {
  return (
    <SublistWrapper>
      {items.map((myItem) => (
        <li key={myItem.label}>
          <LinkFrame>
            <NavLink href={myItem.href}>
              <Text variant="caption">{myItem.label}</Text>
            </NavLink>
          </LinkFrame>
        </li>
      ))}
    </SublistWrapper>
  );
}
