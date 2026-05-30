"use client";
import HomePage from "@/components/templates/homePage/homePage";

import slider1 from "@/public/slider1.png";
import slider2 from "@/public/slider2.png";
import slider3 from "@/public/slider3.png";
import { loadAll } from "@/server/actions/product/product.action";
import { loadTopBrands } from "@/server/actions/brand/brand.action";
import { loadMainCategories } from "@/server/actions/category/category.action";
import type { Product } from "@/types/product";
import type { Brand } from "@/types/brand";
import type { Category } from "@/types/category";
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

export default function Home() {
  const [productAll, setProducts] = useState<Product[]>([]);
  const [brands, setBrands] = useState<Brand[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    loadAll().then((products) => {
      setProducts(products);
    });
    loadTopBrands(10).then((brands) => {
      setBrands(brands);
    });
    loadMainCategories().then((categories) => {
      setCategories(categories);
    });
  }, []);
  return (
    <HomePage
      dataSource={{
        products: productAll,
        brands,
        categories,
        slides,
      }}
    ></HomePage>
  );
}
