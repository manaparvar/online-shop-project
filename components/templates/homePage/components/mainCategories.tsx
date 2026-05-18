"use client";
import Card from "@/components/molecules/card/card";
import styled from "styled-components";
import Heading from "../../../atoms/heading/heading";

type MainCategoriesProps = {
  title: string;
};
const MainCategories = ({ title }: MainCategoriesProps) => {
  return (
    <Wrapper>
      <CardsWrapper></CardsWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    margin-top: 152px;
  }
`;

export default MainCategories;
