import products from "../../public/data/products.json";
import { Product } from "../types/product";

const productList = products as Product[];

export function getProducts() {
  return productList;
}

export function getProductBySlug(slug: string) {
  return productList.find((product) => product.slug === slug);
}

export function getProductsByCategory(category: string) {
  return productList.filter(
    (product) => product.category === category
  );
}