"use client";

import styled from "styled-components";
import Logo from "./headerComponents/logo";
import SearchBar from "./headerComponents/searchBar";
import Icons from "./headerComponents/icons";
// import { Button } from "./Atoms/Button.tsx";
import Navbar from "./headerComponents/navbar";
export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderUpperLine>
        <Logo />
        <SearchBar />
        <Icons />
      </HeaderUpperLine>
      <HeaderDownerLine>
        <Navbar />
      </HeaderDownerLine>
      <Divider></Divider>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  padding-left: 80px;
  padding-right: 80px;
`;
const HeaderUpperLine = styled.div`
  align-items: center;
  display: flex;
  height: 104px;
`;
const HeaderDownerLine = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 56px;
`;
const Divider = styled.div`
  width: 1200px;
  height: 2px;
  border: none;
  margin-right: 80px;
  background-color: #f2f0ea;
`;
const HeaderDownerLine = styled.div`
  height: 500px;
  display: flex;
  align-items: left;
  background-color: #b3d7f6;
`;
