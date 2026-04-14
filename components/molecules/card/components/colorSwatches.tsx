"use client";

import { useDevice } from "../../../hooks/useDevice";

import { ColorSwatchesProps } from "../card.types";
import { SwatchButton, SwatchesWrapper } from "../styles/colorSwatches.styles";
const ColorSwatches = ({
  options,
  selectedId,
  onSelect,
}: ColorSwatchesProps) => {
  const device = useDevice();
  const isDesktop = device === "desktop";

  return (
    <SwatchesWrapper>
      {options.map((option) => (
        <SwatchButton
          $active={selectedId === option.id}
          $color={option.color}
          aria-label={`Select color ${option.id}`}
          aria-pressed={selectedId === option.id}
          key={option.id}
          onClick={() => !isDesktop && onSelect?.(option.id)}
          onMouseEnter={() => isDesktop && onSelect?.(option.id)}
          type="button"
        />
      ))}
    </SwatchesWrapper>
  );
};

export default ColorSwatches;
