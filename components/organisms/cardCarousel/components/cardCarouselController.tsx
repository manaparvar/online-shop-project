import SeeAll from "@/components/atoms/link/link";
import { CardControllerWrapper } from "./cardCarousel.styles";
import Buttons from "@/components/molecules/buttonGroup/buttonGroup";

type CardCarouselControllerProps = {
  canGoNext: boolean;
  canGoPrev: boolean;
  next: () => void;
  pages: number;
  prev: () => void;
  seeAllHref?: string;
  showArrows?: boolean;
  title?: string;
  justify?: string;
};

const ProductCardController = ({
  canGoNext,
  canGoPrev,
  next,
  pages,
  prev,
  seeAllHref,
  showArrows,
}: CardCarouselControllerProps) => {
  const responsive = {
    sm: "md",
    md: "lg",
    lg: "xl",
  } as const;

  const buttons = [
    {
      "aria-label": "Previous" as const,
      disabled: !canGoPrev,
      startIcon: "chevronLeft" as const,
    },
    {
      "aria-label": "Next" as const,
      disabled: !canGoNext,
      startIcon: "chevronRight" as const,
    },
  ];
  const handleController = (_: unknown, index: number) => {
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
