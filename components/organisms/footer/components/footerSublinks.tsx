import Text from "../../../atoms/text/text";
import NavLink from "../../../atoms/link/link";
import { LinksWrapper, StyledNavLink } from "./footerSublinks.style";

type props = {
  items: any[];
};

export default function Sublinks({ items }: props) {
  return (
    <LinksWrapper>
      {items.map((innerItem) => (
        <li key={innerItem.label}>
          <StyledNavLink href={innerItem.to}>
            <Text variant="caption">{innerItem.label}</Text>
          </StyledNavLink>
        </li>
      ))}
    </LinksWrapper>
  );
}
