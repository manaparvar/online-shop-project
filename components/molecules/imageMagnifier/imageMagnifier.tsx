/**
 * Source:‌https://dev.to/margishpatel/build-an-image-magnifier-component-in-reactjs-2hc5
 */
import { useState } from "react";
import styled from "styled-components";
import Image from "@/components/atoms/image/image";

type Props = {
  src: string;
  alt?: string;
  width: number;
  height: number;
  zoom?: number;
  lensSize?: number;
};

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const Lens = styled.div<{
  $x: number;
  $y: number;
  $size: number;
  $zoom: number;
  $imgW: number;
  $imgH: number;
  $src: string;
}>`
  position: absolute;
  pointer-events: none;

  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;

  top: ${({ $y, $size }) => $y - $size / 2}px;
  left: ${({ $x, $size }) => $x - $size / 2}px;

  border-radius: 50%;
  border: 1px solid #ccc;

  background-image: url(${({ $src }) => $src});
  background-repeat: no-repeat;

  background-size: ${({ $imgW, $imgH, $zoom }) =>
    `${$imgW * $zoom}px ${$imgH * $zoom}px`};

  background-position: ${({ $x, $y, $zoom, $size }) =>
    `${-$x * $zoom + $size / 2}px ${-$y * $zoom + $size / 2}px`};
`;

export default function ImageMagnifier({
  src,
  alt = "",
  width,
  height,
  zoom = 2,
  lensSize = 50,
}: Props) {
  const [show, setShow] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [imgSize, setImgSize] = useState({ w: 0, h: 0 });

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setImgSize({ w: rect.width, h: rect.height });
    setShow(true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPos({ x, y });
  };

  const handleMouseLeave = () => {
    setShow(false);
  };

  return (
    <Wrapper
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Image src={src} alt={alt} width={width} height={height} />

      {show && (
        <Lens
          $x={pos.x}
          $y={pos.y}
          $size={lensSize}
          $zoom={zoom}
          $imgW={imgSize.w}
          $imgH={imgSize.h}
          $src={src}
        />
      )}
    </Wrapper>
  );
}
