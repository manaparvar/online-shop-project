"use client";
import HomePage from "@/components/templates/homePage/homePage";
import { useRouter } from "next/navigation";

const products = [
  { id: 1, name: "Cotton Shoes", price: 120 },
  { id: 2, name: "Leather Shoes", price: 120 },
  { id: 3, name: "Paper Shoes", price: 120 },
  { id: 4, name: "Mesh Shoes", price: 120 },
  { id: 5, name: "Black Shoes", price: 120 },
  { id: 6, name: "Yellow Shoes", price: 120 },
  { id: 4, name: "Happy Shoes", price: 120 },
  { id: 5, name: "Crazy Shoes", price: 120 },
  { id: 6, name: "Orange Shoes", price: 120 },
];
const productOptions = {
  options: [
    { id: "1", color: "#e2e2e2", img: "/images/greyShoe.png" },
    { id: "2", color: "black", img: "/images/shoe.png" },
    { id: "3", color: "#1ab189", img: "/images/women.png" },
    { id: "4", color: "#ff05b4", img: "/images/men.png" },
  ],
  selectedId: "2",
};
export default function Home() {
  const router = useRouter();

  return (
    <HomePage dataSouce={{ products, productOptions }}>
      {/* <Carousel
        title="Best Sellers"
        seeAllHref="/products"
        mobileBasis="32%"
        tabletBasis="25%"
        desktopBasis="20%"
        wideDesktopBasis="10.8%"
        extraWideDesktopBasis="16.3%"
      >
        {products.map((product) => (
          <Card
            variant="product"
            image="/images/shoe.png"
            title={product.name}
            subtitle="Made with best quality materials"
            price="$120"
            oldPrice="$160"
            discount="20%"
            buttonLabel="Add to Cart"
            onButtonClick={() => router.push("/product/23")}
            onSelectFavorite={(isFav) => console.log("Favorite:", isFav)}
            productOptions={productOptions}
          />
        ))}
      </Carousel> */}
    </HomePage>
  );
}
