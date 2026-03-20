import NavLink from "../../../atoms/link/link";
import { Text } from "../../../atoms/text/text";
import Sublinks from "./components/footerSublinks";

type props = {
  item: any;
};

export default function SubList({ item }: props) {
  return (
    <li>
      <Text color="black" variant="button">
        {item.label}
      </Text>
      <Sublinks items={item.items} />
    </li>
  );
}
