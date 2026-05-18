import Text from "../../../atoms/text/text";
import Sublinks from "./footerSublinks";

export type FooterSublink = {
  label: string;
  to: string;
};

export type FooterColumnItem = {
  label: string;
  titel?: string;
  items?: FooterSublink[];
};

type props = {
  item: FooterColumnItem;
};

export default function SubList({ item }: props) {
  return (
    <li>
      <Text color="primary" variant="button">
        {item.label}
      </Text>
      {item.items && <Sublinks items={item.items} />}
    </li>
  );
}
