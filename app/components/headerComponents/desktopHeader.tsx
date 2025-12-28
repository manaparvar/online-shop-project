"use client";

import styled from "styled-components";
import Logo from "./molecules/logo/logo";
import SearchBar from "./forms/searchBar/searchBar";
// import { Button } from "./Atoms/Button.tsx";
import Profile from "./molecules/profile/profile";
import Navbar from "./organisms/navbar/navbar";
import Icon from "./molecules/icon/icon";
import { icons } from "./molecules/icon/component/iconData";
import DividerLine from "./Atoms/divider";

export default function DesktopHeader() {
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
              fontVariant="caption"
            />
          ))}

          <Profile />
        </RightSideWrapper>
      </HeaderUpperLine>
      <HeaderDownerPart>
        <Navbar />
      </HeaderDownerPart>
      <DividerWrapper>
        <DividerLine color="brightGrey" lineType="headerDivider" />
      </DividerWrapper>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 clamp(16px, 6vw, 80px);
`;
const HeaderUpperLine = styled.div`
  align-items: center;
  display: flex;
  height: 96px;
  justify-content: space-between;
`;
const RightSideWrapper = styled.div`
  align-items: end;
  display: flex;
  flex-direction: row;
  gap: 24px;
  justify-content: center;
`;
const HeaderDownerPart = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 40px;
`;
const DividerWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
// const Divider = styled(DividerLine)`
//   margin: 0 auto;
//   display: block;
// `;
