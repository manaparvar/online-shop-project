"use client";

import styled from "styled-components";
import Logo from "./headerComponents/Logo";
import SearchBar from "./headerComponents/searchBar";
import Icons from "./headerComponents/icons";
export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderUpperLine>
        <Logo />
        <SearchBar />
        <Icons />
      </HeaderUpperLine>
      <div>{/* <Navbar /> */}</div>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  height: 124px;
  display: flex;
  margin-left: 80px;
  margin-right: 80px;
  border: 0.5 px black solid;
`;
const HeaderUpperLine = styled.div`
  height: 62px;
  width: 100%;
  display: flex;
  margin-top: 16px;
  align-items: center;
`;
