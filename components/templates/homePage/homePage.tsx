import Carousel from "../../organisms//cardCarousel/cardCarousel";
import { useRouter } from "next/navigation";
import Card from "../../molecules/card/card";
import SliderShow from "../../organisms/slideshow/sliderShow";
import MainCategories from "@/components/templates/homePage/components/mainCategories";
import type { Slide } from "@/components/organisms/slideshow/sliderShow";
import type { ColorOption } from "@/components/molecules/card/card.types";
import SectionBlock from "@/components/organisms/sectionBlock/sectionBlock";
import Row from "@/components/atoms/grid/row";
import Column from "@/components/atoms/grid/column";

type HomePageProduct = {
  id: string | number;
  name: string;
};
type HomePageProductOption = {
  id: string;
  title: string;
  img: string;
};
type HomePageDataSource = {
  productOptions?: { options: ColorOption[] };
  products?: HomePageProduct[];
  slides?: Slide[];
  categoryOptions: { options: HomePageProductOption[] };
};

const HomePage = ({ dataSource }: { dataSource?: HomePageDataSource }) => {
  const router = useRouter();
  const { productOptions, products, slides, categoryOptions } =
    dataSource || {};
  return (
    <main>
      <SliderShow slides={slides} />
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
          {products?.map((product) => (
            <Card
              key={product.id}
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
