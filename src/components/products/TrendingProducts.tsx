import React from "react";
import ProductCard from "./ProductCard";

interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
}

interface TrendingProductsProps {
  products?: Product[];
  onQuickView?: (productId: string) => void;
}

const defaultProducts: Product[] = [
  {
    id: "1",
    title: "Элегантный диван 'Москва'",
    price: 54999,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
  },
  {
    id: "2",
    title: "Кресло 'Петербург'",
    price: 29999,
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c",
  },
  {
    id: "3",
    title: "Журнальный столик 'Волга'",
    price: 15999,
    image: "https://images.unsplash.com/photo-1532372320978-9d483d8e1f45",
  },
  {
    id: "4",
    title: "Стул 'Нева'",
    price: 12999,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
  },
];

const TrendingProducts = ({
  products = defaultProducts,
  onQuickView = (productId: string) =>
    console.log(`Quick view for product ${productId}`),
}: TrendingProductsProps) => {
  return (
    <section className="w-full max-w-[1200px] mx-auto py-12 px-4 bg-gray-50">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Популярные товары</h2>
        <p className="text-gray-600">
          Откройте для себя наши самые популярные предметы мебели
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            onQuickView={() => onQuickView(product.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default TrendingProducts;
