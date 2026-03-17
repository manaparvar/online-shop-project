import { Text } from "@/app/components/Atoms/text/text";
import NavLink from "@/app/components/Atoms/link/link";
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
