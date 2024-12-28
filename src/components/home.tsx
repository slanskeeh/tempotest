import React from "react";
import Header from "./layout/Header";
import HeroBanner from "./home/HeroBanner";
import QuickFilters from "./home/QuickFilters";
import TrendingProducts from "./products/TrendingProducts";

interface HomePageProps {
  onSearch?: (query: string) => void;
  onFilterSelect?: (filter: string) => void;
  onQuickView?: (productId: string) => void;
}

const HomePage = ({
  onSearch = (query: string) => console.log(`Search query: ${query}`),
  onFilterSelect = (filter: string) =>
    console.log(`Filter selected: ${filter}`),
  onQuickView = (productId: string) => console.log(`Quick view: ${productId}`),
}: HomePageProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main>
        <HeroBanner
          title="Создайте дом своей мечты"
          subtitle="Откройте для себя нашу коллекцию элегантной мебели, которая сочетает в себе комфорт и стиль"
          imageUrl="https://images.unsplash.com/photo-1618220179428-22790b461013"
          ctaText="Смотреть каталог"
          onCtaClick={() => onFilterSelect("all")}
        />

        <QuickFilters onFilterClick={onFilterSelect} />

        <TrendingProducts onQuickView={onQuickView} />
      </main>

      <footer className="bg-white border-t py-8 mt-12">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600">
            © 2024 Мебельный магазин. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
