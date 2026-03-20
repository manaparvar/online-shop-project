"use client";

import { icons } from "../../molecules/icon/component/iconData";
import Icon from "../../molecules/icon/icon";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { SearchWrapper } from "./components/searchBar.style";
import { SearchInput } from "./components/searchBar.style";
import { SearchButton } from "./components/searchBar.style";

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
        {filteredIcons.map((item) => (
          <Icon icon={item.icon} key={item.label} />
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
