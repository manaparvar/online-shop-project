import Text from "../../../atoms/text/text";
import Sublinks from "./footerSublinks";

type props = {
  item: any;
};

export default function SubList({ item }: props) {
  return (
    <li>
      <Text color="primary" variant="button">
        {item.label}
      </Text>
      <Sublinks items={item.items} />
    </li>
  );
}
