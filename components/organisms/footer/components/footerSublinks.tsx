import Text from "../../../atoms/text/text";
import NavLink from "../../../atoms/link/link";
import { LinksWrapper } from "./footerSublinks.style";

type props = {
  items: any[];
};

export default function Sublinks({ items }: props) {
  return (
    <LinksWrapper>
      {items.map((innerItem) => (
        <li key={innerItem.label}>
          <NavLink href={innerItem.to}>{innerItem.label}</NavLink>
        </li>
      ))}
    </LinksWrapper>
  );
}
