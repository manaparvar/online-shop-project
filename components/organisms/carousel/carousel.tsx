"use client";
import Card from "../../molecules/card/card";
import styled from "styled-components";
const productOptions = {
  options: [
    { id: "1", color: "#e2e2e2", img: "/images/greyShoe.png" },
    { id: "2", color: "black", img: "/images/shoe.png" },
    { id: "3", color: "#1ab189", img: "/images/women.png" },
    { id: "4", color: "#ff05b4", img: "/images/men.png" },
  ],
  selectedId: "2",
};
const Carousel = () => {
  return (
    <Wrapper>
      <Card
        variant="product"
        image="/images/shoe.png"
        title="Cotton Shoes"
        subtitle="Made with best quality materials"
        price="$120"
        oldPrice="$160"
        discount="20%"
        buttonLabel="Add to Cart"
        onButtonClick={() => console.log("Add to cart")}
        onSelectFavorite={(isFav) => console.log("Favorite:", isFav)}
        productOptions={productOptions}
      />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: row;
`;
export default Carousel;
