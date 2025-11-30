"use client";

import styled from "styled-components";
import Image from "next/image";

export default function SearchBar() {
  return (
    <SearchWrapper>
      <SearchIconWrapper>
        <Image src="/searchSymbol.png" alt="Search" width={16} height={16} />
      </SearchIconWrapper>
      <SearchBars type="search" placeholder="Search..." />
    </SearchWrapper>
  );
}

const SearchWrapper = styled.div`
  display: flex;
  flex-grow: 6;
  flex-direction: row;
  justify-content: center;
`;
const SearchBars = styled.input`
  height: 40px;
  width: 256px;
  background-color: #f2f0ea;
  padding-left: 8px;
  border: none;
  border-radius: 0 5px 5px 0;

  ::placeholder {
    color: #888;
    font-size: 14px;
  }
  &:focus {
    border: #e4e4e4 solid 1px;
    outline: none;
  }
`;
const SearchIconWrapper = styled.button`
  background-color: #f2f0ea;
  border-radius: 5px 0 0 5px;
  padding-left: 16px;
  padding-right: 16px;
  &:hover {
    border: #e4e4e4 solid 1px;
  }
`;
