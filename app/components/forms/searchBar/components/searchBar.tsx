"use client";

import { icons } from "../../../headerComponents/iconData";
import Icon from "../../../headerComponents/icon";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { SearchWrapper } from "./searchBar.style";
import { SearchInput } from "./searchBar.style";
import { SearchButton } from "./searchBar.style";

const filteredIcons = icons.filter((item) => item.icon === "search");

export default function SearchBar() {
  const [getSearch, setGetSearch] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (!getSearch.trim()) return;
    router.push(`/search?q=${encodeURIComponent(getSearch)}`);
  };
  return (
    <SearchWrapper>
      <SearchButton onClick={handleSearch}>
        {filteredIcons.map((item, index) => (
          <Icon
            color="black"
            fontVariant={item.fontVariant}
            icon={item.icon}
            key={index}
          />
        ))}
      </SearchButton>
      <SearchInput
        value={getSearch}
        onChange={(e) => setGetSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch();
        }}
        type="search"
        placeholder="Search..."
      />
    </SearchWrapper>
  );
}
