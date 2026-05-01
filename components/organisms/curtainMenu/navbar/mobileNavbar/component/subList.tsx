import Text from "@/components/atoms/text/text";
import NavLink from "@/components/atoms/link/link";
import { SublistWrapper, LinkFrame } from "./subList.style";

type props = {
  items: any[];
};

export default function SubList({ items }: props) {
  return (
    <SublistWrapper>
      {items.map((myItem) => (
        <LinkFrame key={myItem.label}>
          <NavLink href={myItem.href}>
            <Text variant="caption">{myItem.label}</Text>
          </NavLink>
        </LinkFrame>
      ))}
    </SublistWrapper>
  );
}
