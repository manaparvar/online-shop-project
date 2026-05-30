"use client";
import Carousel from "../../organisms//cardCarousel/cardCarousel";
import { useRouter } from "next/navigation";
import Card from "../../molecules/card/card";
import SliderShow from "../../organisms/slideshow/sliderShow";
import type { Slide } from "@/components/organisms/slideshow/sliderShow";
import type { Product } from "@/types/product";
import SectionBlock from "@/components/organisms/sectionBlock/sectionBlock";
import Row from "@/components/atoms/grid/row";
import Column from "@/components/atoms/grid/column";
import BenefitsStory from "@/components/organisms/benefitsStory/benefitsStory";

type HomePageProductOption = {
  id: string;
  title: string;
  img: string;
};
type HomePageDataSource = {
  products?: Product[];
  slides?: Slide[];
  categoryOptions: { options: HomePageProductOption[] };
};
const benefitStories = [
  {
    id: 1,
    title: "Free Shipping",
    image: "/images/benefitStories/delivery-truck.png",
  },
  {
    id: 2,
    title: "Secure Payment",
    image: "/images/benefitStories/credit-card.png",
  },
  {
    id: 3,
    title: "Best Quality",
    image: "/images/benefitStories/best-seller.png",
  },
  {
    id: 4,
    title: "Free Return",
    image: "/images/benefitStories/return.png",
  },
];
const HomePage = ({ dataSource }: { dataSource?: HomePageDataSource }) => {
  const router = useRouter();
  const { products, slides, categoryOptions } = dataSource || {};
  return (
    <main>
      <SliderShow slides={slides} />
      <BenefitsStory benefitStories={benefitStories} />
      <SectionBlock title="Main Categories">
        <Row>
          {(categoryOptions || { options: [] }).options.map(
            (item: HomePageProductOption) => (
              <Column lg={4} key={item.id}>
                <Card
                  variant="category"
                  image={item.img}
                  title={item.title}
                  onClick={() => console.log("redirect To category")}
                />
              </Column>
            ),
          )}
        </Row>
      </SectionBlock>

      <SectionBlock title="Special Offers">
        <Carousel
          seeAllHref="/products"
          mobileBasis="32%"
          tabletBasis="25%"
          desktopBasis="20%"
          wideDesktopBasis="10.8%"
          extraWideDesktopBasis="16.3%"
        >
          {products
            ?.filter((item) => item.special_offer)
            .map((product) => (
              <Card
                key={product.id}
                variant="product"
                image={product.imageUrl}
                title={product.title}
                subtitle="Made with best quality materials"
                price={product.price}
                oldPrice={product.originalPrice}
                discount={product.discount}
                buttonLabel="Add to Cart"
                onButtonClick={() => router.push(`/product/${product.id}`)}
                onSelectFavorite={(isFav) => console.log("Favorite:", isFav)}
                productOptions={product.colorOptions}
              />
            ))}
        </Carousel>
      </SectionBlock>
      <SectionBlock title="Best Sellers">
        <Carousel
          seeAllHref="/products"
          mobileBasis="32%"
          tabletBasis="25%"
          desktopBasis="20%"
          wideDesktopBasis="10.8%"
          extraWideDesktopBasis="16.3%"
        >
          {products?.map((product) => (
            <Card
              key={product.id}
              variant="product"
              image="/images/shoe.png"
              title={product.title}
              subtitle="Made with best quality materials"
              price={product.price}
              oldPrice={product.originalPrice}
              discount={product.discount}
              buttonLabel="Add to Cart"
              onButtonClick={() => router.push("/product/23")}
              onSelectFavorite={(isFav) => console.log("Favorite:", isFav)}
              productOptions={product.colorOptions}
            />
          ))}
        </Carousel>
      </SectionBlock>

      <Carousel
        seeAllHref="/products"
        mobileBasis="32%"
        tabletBasis="25%"
        desktopBasis="20%"
        wideDesktopBasis="10.8%"
        extraWideDesktopBasis="16.3%"
      >
        {products?.map((product) => (
          <Card
            key={product.id}
            variant="banner"
            image="/images/purse.png"
            title="Coat and Jacket"
            onClick={() => console.log("redirect To category")}
          />
        ))}
      </Carousel>
      <SectionBlock title="Popular Brands">
        <Carousel
          seeAllHref="/products"
          mobileBasis="32%"
          tabletBasis="25%"
          desktopBasis="20%"
          wideDesktopBasis="10.8%"
          extraWideDesktopBasis="16.3%"
        >
          {products?.map((product) => (
            <Card
              key={product.id}
              variant="banner"
              image="/images/purse.png"
              onClick={() => console.log("redirect To category")}
            />
          ))}
        </Carousel>
      </SectionBlock>
    </main>
  );
};

export default HomePage;
