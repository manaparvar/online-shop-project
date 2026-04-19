import Heading from "@/components/atoms/heading/heading";
import SeeAll from "@/components/atoms/link/link";
import Button from "@/components/atoms/button/button";
import Row from "@/components/atoms/grid/row";
import Column from "@/components/atoms/grid/column";
import { Header, HeaderRight } from "./productCarousel.styles";
const ProductCarouselController = ({
  title,
  seeAllHref,
  pages,
  showArrows,
  prev,
  next,
  canGoPrev,
  canGoNext,
  D,
}: any) => {
  return (
    <Header>
      <Heading tag="h2">{title}</Heading>

      <HeaderRight>
        {seeAllHref && <SeeAll href={seeAllHref}>See all</SeeAll>}

        {showArrows && pages > 1 && (
          <Row>
            <Column sm={6}>
              <Button
                iconOnly
                color="black"
                textColor="white"
                onClick={prev}
                disabled={!canGoPrev}
                aria-label="Previous"
                startIcon="chevronLeft"
              />
            </Column>
            <Column sm={6}>
              <Button
                iconOnly
                color="black"
                textColor="white"
                startIcon="chevronRight"
                onClick={next}
                disabled={!canGoNext}
                aria-label="Next"
              />
            </Column>
          </Row>
        )}
      </HeaderRight>
    </Header>
  );
};

export default ProductCarouselController;
