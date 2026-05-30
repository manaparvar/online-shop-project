"use client";
import HomePage from "@/components/templates/homePage/homePage";

import slider1 from "@/public/slider1.png";
import slider2 from "@/public/slider2.png";
import slider3 from "@/public/slider3.png";
import { loadAll } from "@/server/actions/product/product.action";
import type { Product } from "@/types/product";
import { useEffect, useState } from "react";

export const slides = [
  {
    title: {
      start: "Spring",
      end: "Collection",
      startColor: "primary",
      endColor: "background",
    },
    description: "Only smart casual outfits",
    color: "primary",
    buttonLabel: "Shop Now",
    textColor: "background",
    image: slider1,
    imageAlt: "Men autumn autfits",
  },
  {
    title: {
      start: "Spring",
      end: "Collection",
      startColor: "primary",
      endColor: "background",
    },
    description: "Only smart casual outfits",
    color: "primary",
    buttonLabel: "Shop Now",
    textColor: "background",
    image: slider2,
    imageAlt: "Men autumn autfits",
  },
  {
    title: {
      start: "Spring",
      end: "Collection",
      startColor: "primary",
      endColor: "background",
    },
    description: "Only smart casual outfits",
    color: "primary",
    buttonLabel: "Shop Now",
    textColor: "background",
    image: slider3,
    imageAlt: "Men autumn autfits",
  },
];

const categoryOptions = {
  options: [
    { id: "1", title: "Men", img: "/images/men.png" },
    { id: "2", title: "Women", img: "/images/women.png" },
    { id: "3", title: "Kids", img: "/images/kids.png" },
  ],
};
export default function Home() {
  const [productAll, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    loadAll().then((products) => {
      console.log("Fetched products:", products);
      setProducts(products);
    });
  }, []);
  return (
    <HomePage
      dataSource={{
        products: productAll,
        slides,
        categoryOptions,
      }}
    ></HomePage>
  );
}
