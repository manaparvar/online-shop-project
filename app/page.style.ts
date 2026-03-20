"use client";
import Footer from "../components/organisms/footerComponents/footer";

import styled from "styled-components";

export const PageWrapper = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  justify-items: stretch;
  align-items: stretch;
`;
export const Main = styled.div`
  height: 1000px;
  margin: 0px auto;
`;
export const StyledFooter = styled(Footer)``;
