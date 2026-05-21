"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import {
  SearchForm,
  SearchInput,
  SearchButton,
} from "./components/searchBar.style";

type SearchFormData = {
  search: string;
};

export default function SearchBar() {
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm<SearchFormData>();

  const onSubmit = (data: SearchFormData) => {
    const query = data.search.trim();
    if (!query) return;
    router.push(`/search?q=${encodeURIComponent(query)}`);
    reset();
  };

  return (
    <SearchForm onSubmit={handleSubmit(onSubmit)}>
      <SearchButton
        color="transparent"
        iconOnly
        noHover
        rounded={false}
        startIcon="search"
        startIconProps={{ color: "secondary-400" }}
        type="submit"
      />
      <SearchInput
        type="search"
        placeholder="Search..."
        {...register("search")}
      />
    </SearchForm>
  );
}
