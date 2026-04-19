export type CarouselProps = {
  children: React.ReactNode;
  className?: string;
  desktopBasis?: string;
  extraWideDesktopBasis?: string;
  gap?: string;
  mobileBasis?: string;
  seeAllHref?: string;
  showArrows?: boolean;
  showDots?: boolean;
  tabletBasis?: string;
  title?: string;
  wideDesktopBasis?: string;
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
