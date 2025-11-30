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
      {/* <Button color="green" variant="addToCart" /> */}
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  height: 124px;
  display: flex;
  margin-left: 80px;
  margin-right: 80px;
  border: 0.5 px black solid;
  flex-direction: column;
`;
const HeaderUpperLine = styled.div`
  height: 62px;
  width: 100%;
  display: flex;
  margin-top: 16px;
  align-items: center;
`;
const HeaderDownerLine = styled.div`
  height: 500px;
  display: flex;
  align-items: left;
  background-color: #b3d7f6;
`;
