export type CarouselProps = {
  children: React.ReactNode;
  className?: string;
  mobileBasis?: string;
  tabletBasis?: string;
  desktopBasis?: string;
  wideDesktopBasis?: string;
  extraWideDesktopBasis?: string;
  gap?: string;
  seeAllHref?: string;
  showArrows?: boolean;
  showDots?: boolean;
  title?: string;
};

export type ArrowButtonProps = {
  $disabled?: boolean;
};

export type DotProps = {
  $active?: boolean;
};

export type ItemProps = {
  $desktopBasis: string;
  $extraWideDesktopBasis: string;
  $mobileBasis: string;
  $tabletBasis: string;
  $wideDesktopBasis: string;
};
