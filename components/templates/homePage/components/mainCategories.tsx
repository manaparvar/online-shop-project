"use client";
import Card from "@/components/molecules/card/card";
import styled from "styled-components";
import Heading from "../../../atoms/heading/heading";

const categoryOptions = {
  options: [
    { id: "1", title: "Men", img: "/images/men.png" },
    { id: "2", title: "Women", img: "/images/women.png" },
    { id: "3", title: "Kids", img: "/images/kids.png" },
  ],
};
type MainCategoriesProps = {
  title: string;
};
const MainCategories = ({ title }: MainCategoriesProps) => {
  return (
    <Wrapper>
      <HeadingWrapper>
        <StyledHeading tag="h2" textColor="primary">
          {title}
        </StyledHeading>
      </HeadingWrapper>
      <CardsWrapper>
        {categoryOptions.options.map((item) => (
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
  align-items: center;

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
  padding: ${({ theme }) => theme.SPACING(2.5, 3)};
`;

export default MainCategories;
