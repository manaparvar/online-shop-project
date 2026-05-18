"use client";
import { SublistWrapper, LinkFrame } from "./subList.style";
import Text from "@/components/atoms/text/text";
import NavLink from "@/components/atoms/link/link";
import type { NavSubItem } from "./navItemTypes";

type props = {
  items: NavSubItem[];
};

export default function SubList({ items }: props) {
  return (
    <SublistWrapper>
      {items.map((myItem) => (
        <LinkFrame key={myItem.label}>
          {myItem.href && (
            <NavLink href={myItem.href}>
              <Text as="span" variant="caption" className="text">
                {myItem.label}
              </Text>
            </NavLink>
          )}
        </LinkFrame>
      ))}
    </SublistWrapper>
  );
}
