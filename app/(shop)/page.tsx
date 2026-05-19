"use client";
import HomePage from "@/components/templates/homePage/homePage";

import slider1 from "@/public/slider1.png";
import slider2 from "@/public/slider2.png";
import slider3 from "@/public/slider3.png";

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
const products = [
  { id: 1, name: "Cotton Shoes", price: 120 },
  { id: 2, name: "Leather Shoes", price: 120 },
  { id: 3, name: "Paper Shoes", price: 120 },
  { id: 4, name: "Mesh Shoes", price: 120 },
  { id: 5, name: "Black Shoes", price: 120 },
  { id: 6, name: "Yellow Shoes", price: 120 },
  { id: 4, name: "Happy Shoes", price: 120 },
  { id: 5, name: "Crazy Shoes", price: 120 },
  { id: 6, name: "Orange Shoes", price: 120 },
];
const productOptions = {
  options: [
    { id: "1", color: "#e2e2e2", img: "/images/greyShoe.png" },
    { id: "2", color: "black", img: "/images/shoe.png" },
    { id: "3", color: "#1ab189", img: "/images/women.png" },
    { id: "4", color: "#ff05b4", img: "/images/men.png" },
  ],
  selectedId: "2",
};
const categoryOptions = {
  options: [
    { id: "1", title: "Men", img: "/images/men.png" },
    { id: "2", title: "Women", img: "/images/women.png" },
    { id: "3", title: "Kids", img: "/images/kids.png" },
  ],
};
export default function Home() {
  return (
    <HomePage
      dataSource={{ products, productOptions, slides, categoryOptions }}
    ></HomePage>
  );
}
