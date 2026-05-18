import Carousel from "../../organisms//cardCarousel/cardCarousel";
import { useRouter } from "next/navigation";
import Card from "../../molecules/card/card";
import SliderShow from "../../organisms/slideshow/sliderShow";
import MainCategories from "@/components/templates/homePage/components/mainCategories";
import type { Slide } from "@/components/organisms/slideshow/sliderShow";
import type { ColorOption } from "@/components/molecules/card/card.types";

type HomePageProduct = {
  id: string | number;
  name: string;
};

type HomePageDataSource = {
  productOptions?: { options: ColorOption[] };
  products?: HomePageProduct[];
  slides?: Slide[];
};

const HomePage = ({ dataSource }: { dataSource?: HomePageDataSource }) => {
  const router = useRouter();
  const { productOptions, products, slides } = dataSource || {};
  return (
    <main>
      <SliderShow slides={slides} />
      <MainCategories title="Main Categories" />

      <Carousel
        title="Best Sellers"
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
      <Carousel
        title="Best Sellers"
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
    </main>
  );
};

export default HomePage;
