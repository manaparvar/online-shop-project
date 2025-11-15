import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

export default function Icons() {
  return (
    <IconsWrapper>
      <ShoppingCartIcon href="/Cart">
        <Image
          src="/shopping-bag.png"
          alt="Shoppping Cart"
          width={20}
          height={20}
        />
        <IconText>Cart</IconText>
      </ShoppingCartIcon>
      <ShoppingCartIcon href="/Favorite">
        <Image src="/heart.png" alt="Favorites" width={20} height={20} />
        <IconText>Favorites</IconText>
      </ShoppingCartIcon>
      <ShoppingCartIcon href="/Profile">
        <Image
          src="/profile.jpg"
          alt="User Profile"
          width={40}
          height={40}
          className="rounded-full mb-6 "
        />
      </ShoppingCartIcon>
    </IconsWrapper>
  );
}

const IconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-grow: 1;
  justify-content: center;
`;

const ShoppingCartIcon = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 24px;
`;

const IconText = styled.span`
  font-size: 12px;
  margin-top: 8px;
`;
