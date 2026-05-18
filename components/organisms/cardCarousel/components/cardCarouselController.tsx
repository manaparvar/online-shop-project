import SeeAll from "@/components/atoms/link/link";
import { CardControllerWrapper } from "./cardCarousel.styles";
import Buttons from "@/components/molecules/buttonGroup/buttonGroup";

const ProductCardController = ({
  canGoNext,
  canGoPrev,
  next,
  pages,
  prev,
  seeAllHref,
  showArrows,
}: any) => {
  const responsive = {
    sm: "md",
    md: "lg",
    lg: "xl",
  };

  const buttons = [
    {
      "aria-label": "Previous",
      disabled: !canGoPrev,
      startIcon: "chevronLeft",
    },
    {
      "aria-label": "Next",
      disabled: !canGoNext,
      startIcon: "chevronRight",
    },
  ];
  const handleController = (_: any, index: number) => {
    return index === 0 ? prev() : next();
  };
  return (
    <CardControllerWrapper>
      {seeAllHref && <SeeAll href={seeAllHref}>See all</SeeAll>}

      {showArrows && pages > 1 && (
        <Buttons
          responsive={responsive}
          buttons={buttons}
          color="black"
          hasGap
          size="sm"
          iconOnly={true}
          onClick={handleController}
          textColor="white"
        />
      )}
    </CardControllerWrapper>
  );
};

export default ProductCardController;
