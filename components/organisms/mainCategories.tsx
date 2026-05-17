"use client";
import Card from "@/components/molecules/card/card";
import styled from "styled-components";
import Heading from "../atoms/heading/heading";

const productOptions = {
  options: [
    { id: "1", color: "#e2e2e2", img: "/images/greyShoe.png" },
    { id: "2", color: "black", img: "/images/shoe.png" },
    { id: "3", color: "#1ab189", img: "/images/women.png" },
    { id: "4", color: "#ff05b4", img: "/images/men.png" },
  ],
  selectedId: "2",
};
const categoryOptions = {
  options: [
    { id: "1", title: "Men", img: "/images/men.png" },
    { id: "2", title: "Women", img: "/images/women.png" },
    { id: "3", title: "Kids", img: "/images/kids.png" },
  ],
};
const MainCategories = () => {
  return (
    <Wrapper>
      <HeadingWrapper>
        <StyledHeading tag="h2" textColor="primary">
          Main Categories
        </StyledHeading>
      </HeadingWrapper>
      <CardsWrapper>
        {categoryOptions.options.map((item, index) => (
          <Card
            key={item.id}
            variant="category"
            image={item.img}
            title={item.title}
            onClick={() => console.log("redirect To category")}
          />
        ))}
      </CardsWrapper>
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
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    margin-top: 152px;
  }
`;
const HeadingWrapper = styled.div`
  width: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin: auto 0;
  }
`;
const StyledHeading = styled(Heading)`
  justify-self: center;
`;

export default MainCategories;
