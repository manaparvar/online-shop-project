import NavLink from "../../../atoms/link/link";
import { LinksWrapper } from "./footerSublinks.style";
import type { FooterSublink } from "./footerSublist";

type props = {
  items: FooterSublink[];
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
