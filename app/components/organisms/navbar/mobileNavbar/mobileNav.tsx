import { menuData } from "../data";

export default function MobileNavbar() {
  return (
    <nav>
      <ul>
        {menuData.map((item) => (
          <li key={item.label}>
            {item.label}
            <ul>
              {item.items && menuData.map((items) => <li>{items.label}</li>)}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}
