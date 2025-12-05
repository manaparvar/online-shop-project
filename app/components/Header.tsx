"use client";

import styled from "styled-components";
import Logo from "./molecules/logo";
import SearchBar from "./forms/searchBar";
// import { Button } from "./Atoms/Button.tsx";
import Icon from "./headerComponents/icon";
import Profile from "./molecules/profile";
import Navbar from "./organisms/navbar/navbar";

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderUpperLine>
        <Logo />
        <SearchBar />
        <RightSideWrapper>
          <Icon label="Cart" icon="shoppingBag" size="md" color="darkGrey" />
          <Icon
            label="Favorite"
            icon="heart"
            size="md"
            color="darkGrey"
            fontVariant="button"
          />
          <Profile size="xxxlg" />
        </RightSideWrapper>
      </HeaderUpperLine>
      <HeaderDownerPart>
        <Navbar />
      </HeaderDownerPart>
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
  padding-top: 40px;
`;
const RightSideWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  gap: 40px;
`;
const HeaderDownerPart = styled.div`
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
