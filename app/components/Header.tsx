"use client";

import styled from "styled-components";
import Logo from "./molecules/logo";
import SearchBar from "./forms/searchBar/searchBar";
// import { Button } from "./Atoms/Button.tsx";
import Profile from "./molecules/profile";
import Navbar from "./organisms/navbar/navbar";
import Icon from "./headerComponents/icon";
import { icons } from "./headerComponents/iconData";

export default function Header() {
  const filteredIcons = icons.filter(
    (item) => item.icon === "shoppingBag" || item.icon === "heart"
  );
  return (
    <HeaderWrapper>
      <HeaderUpperLine>
        <Logo />
        <SearchBar />
        <RightSideWrapper>
          {filteredIcons.map((item, index) => (
            <Icon
              key={index}
              icon={item.icon}
              color="black"
              label={item.label}
              fontVariant={item.fontVariant}
            />
          ))}

          <Profile />
        </RightSideWrapper>
      </HeaderUpperLine>
      <HeaderDownerPart>
        <Navbar />
      </HeaderDownerPart>
      <Divider></Divider>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 80px;
  padding-right: 80px;
  position: fixed;
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
  justify-content: center;
  gap: 24px;
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
