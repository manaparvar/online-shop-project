import { Text } from "../../../../Atoms/text/text";
import NavLink from "../../../../Atoms/link/link";
import { LinksWrapper, Links } from "./footerSublinks.style";

type props = {
  items: any[];
};

export default function Sublinks({ items }: props) {
  return (
    <LinksWrapper>
      {items.map((innerItem) => (
        <Links key={innerItem.label}>
          <NavLink href={innerItem.to}>
            <Text variant="caption">{innerItem.label}</Text>
          </NavLink>
        </Links>
      ))}
    </LinksWrapper>
  );
}
